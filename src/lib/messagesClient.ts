import { canDeleteMessage } from "./adminGate";
import { deleteLocalMessage, ensureSampleMessages } from "./messagesStore";
import type { FetchLike, KeyValueStorage, PortfolioMessage } from "../types";

type RawMessage = Partial<PortfolioMessage> & { _id?: string | number };

function coded(message: string, code: string) {
  const error = new Error(message) as Error & { code?: string };
  error.code = code;
  return error;
}

export function normalizeMessage(message: RawMessage): PortfolioMessage {
  const id = message?.id ?? message?._id;
  if (id === undefined || id === null || String(id).trim() === "") {
    throw new Error("A message is missing an id.");
  }
  return {
    id: String(id),
    name: String(message.name || "Unknown"),
    email: String(message.email || ""),
    phone: String(message.phone || ""),
    message: String(message.message || ""),
  };
}

function listFromPayload(data: unknown) {
  if (Array.isArray(data)) return data as RawMessage[];
  if (data && typeof data === "object" && Array.isArray((data as { messages?: unknown }).messages)) {
    return (data as { messages: RawMessage[] }).messages;
  }
  throw new Error("Unexpected messages response.");
}

export async function loadMessages({
  apiUrl,
  storage,
  sample,
  fetchImpl = globalThis.fetch as FetchLike,
  delayMs = 0,
}: {
  apiUrl: string;
  storage: KeyValueStorage;
  sample: PortfolioMessage[];
  fetchImpl?: FetchLike;
  delayMs?: number;
}) {
  if (apiUrl) {
    const response = await fetchImpl(apiUrl, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Unable to load messages (${response.status})`);
    }
    if (!response.json) throw new Error("Unexpected messages response.");
    const data = await response.json();
    return listFromPayload(data).map(normalizeMessage);
  }

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return ensureSampleMessages(storage, sample).map(normalizeMessage);
}

export async function removeMessage({
  apiUrl,
  storage,
  id,
  adminKey,
  fetchImpl = globalThis.fetch as FetchLike,
}: {
  apiUrl: string;
  storage: KeyValueStorage;
  id: string;
  adminKey: string;
  fetchImpl?: FetchLike;
}) {
  const gate = canDeleteMessage({ apiUrl, adminKey });
  if (!gate.allowed) {
    throw coded("Enter an admin key before deleting messages from the API.", "unauthorized");
  }

  if (apiUrl) {
    const base = apiUrl.replace(/\/$/, "");
    const response = await fetchImpl(`${base}/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${adminKey.trim()}`,
        Accept: "application/json",
      },
    });
    if (response.status === 401 || response.status === 403) {
      throw coded("The server refused to delete this message.", "unauthorized");
    }
    if (!response.ok) {
      throw new Error(`Delete failed (${response.status})`);
    }
    return;
  }

  deleteLocalMessage(storage, id);
}
