import assert from "node:assert/strict";
import test from "node:test";
import { canDeleteMessage } from "../src/lib/adminGate.ts";
import { submitContact } from "../src/lib/contactClient.ts";
import { loadMessages, removeMessage } from "../src/lib/messagesClient.ts";
import {
  MESSAGES_KEY,
  createMemoryStorage,
  readMessages,
} from "../src/lib/messagesStore.ts";

const sample = [
  {
    id: "sample-1",
    name: "Sample sender",
    email: "sample@example.com",
    phone: "9999999999",
    message: "Placeholder message for the inbox.",
  },
];

test("seeds the mock inbox once and keeps later edits", async () => {
  const storage = createMemoryStorage();
  const first = await loadMessages({ apiUrl: "", storage, sample });
  assert.equal(first.length, 1);

  await removeMessage({ apiUrl: "", storage, id: "sample-1", adminKey: "" });
  const second = await loadMessages({ apiUrl: "", storage, sample });
  assert.deepEqual(second, []);
});

test("contact mock submissions are listed and are not replaced by samples", async () => {
  const storage = createMemoryStorage();
  const result = await submitContact({
    apiUrl: "",
    storage,
    payload: {
      name: "Ada Lovelace",
      email: "ada@example.com",
      phone: "9876543210",
      message: "Could we talk about an API?",
    },
    createId: () => "msg-1",
  });
  assert.equal(result.mock, true);

  const messages = await loadMessages({ apiUrl: "", storage, sample });
  assert.equal(messages.length, 1);
  assert.equal(messages[0].name, "Ada Lovelace");
});

test("message API errors surface and deletes require a key", async () => {
  const storage = createMemoryStorage();
  await assert.rejects(
    () =>
      loadMessages({
        apiUrl: "https://example.test/messages",
        storage,
        sample,
        fetchImpl: async () => ({ ok: false, status: 503, json: async () => ({}) }),
      }),
    /503/
  );

  await assert.rejects(
    () =>
      removeMessage({
        apiUrl: "https://example.test/messages",
        storage,
        id: "abc",
        adminKey: "   ",
        fetchImpl: async () => {
          throw new Error("should not be called");
        },
      }),
    (error) => error.code === "unauthorized"
  );
});

test("an authorized API delete sends the bearer key and does not trust a 403", async () => {
  let captured;
  await removeMessage({
    apiUrl: "https://example.test/messages/",
    storage: createMemoryStorage(),
    id: "abc",
    adminKey: "secret-key",
    fetchImpl: async (url, options) => {
      captured = { url, options };
      return { ok: true, status: 204 };
    },
  });
  assert.equal(captured.url, "https://example.test/messages/abc");
  assert.equal(captured.options.method, "DELETE");
  assert.equal(captured.options.headers.Authorization, "Bearer secret-key");

  await assert.rejects(
    () =>
      removeMessage({
        apiUrl: "https://example.test/messages",
        storage: createMemoryStorage(),
        id: "abc",
        adminKey: "nope",
        fetchImpl: async () => ({ ok: false, status: 403 }),
      }),
    (error) => error.code === "unauthorized"
  );
});

test("contact API posts JSON and reports failure", async () => {
  let body;
  const ok = await submitContact({
    apiUrl: "https://example.test/contact",
    storage: createMemoryStorage(),
    payload: {
      name: "Ada",
      email: "ada@example.com",
      phone: "9876543210",
      message: "Hello from the form.",
    },
    fetchImpl: async (_url, options) => {
      body = options.body;
      return { ok: true, status: 200 };
    },
  });
  assert.equal(ok.mock, false);
  assert.equal(JSON.parse(body).email, "ada@example.com");

  await assert.rejects(
    () =>
      submitContact({
        apiUrl: "https://example.test/contact",
        storage: createMemoryStorage(),
        payload: {
          name: "Ada",
          email: "ada@example.com",
          phone: "9876543210",
          message: "Hello from the form.",
        },
        fetchImpl: async () => ({ ok: false, status: 500 }),
      }),
    /500/
  );
});

test("corrupt local message data is an error", () => {
  const storage = createMemoryStorage({ [MESSAGES_KEY]: "{not json" });
  assert.throws(() => readMessages(storage), /could not be read/);
});

test("local deletes are allowed and API deletes are not, until a key is present", () => {
  assert.equal(canDeleteMessage({ apiUrl: "", adminKey: "" }).allowed, true);
  assert.equal(
    canDeleteMessage({ apiUrl: "https://example.test", adminKey: "" }).allowed,
    false
  );
  assert.equal(
    canDeleteMessage({ apiUrl: "https://example.test", adminKey: "k" }).scope,
    "api"
  );
});
