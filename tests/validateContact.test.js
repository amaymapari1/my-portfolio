import assert from "node:assert/strict";
import test from "node:test";
import { validateContact } from "../src/lib/validateContact.ts";

const valid = {
  name: "Amay",
  email: "amaymapari@gmail.com",
  phone: "+919657917502",
  message: "Hello there, I would like to talk.",
};

test("accepts a complete contact payload", () => {
  const result = validateContact(valid);
  assert.equal(result.isValid, true);
});

test("requires every contact field", () => {
  const result = validateContact({ name: " ", email: "", phone: "", message: "" });
  assert.equal(result.isValid, false);
  assert.match(result.errors.name, /required/i);
  assert.match(result.errors.email, /required/i);
  assert.match(result.errors.phone, /required/i);
  assert.match(result.errors.message, /required/i);
});

test("rejects short and malformed values", () => {
  const result = validateContact({
    name: "A",
    email: "not-an-email",
    phone: "123",
    message: "too short",
  });
  assert.equal(result.isValid, false);
  assert.match(result.errors.name, /2 characters/);
  assert.match(result.errors.email, /valid email/i);
  assert.match(result.errors.phone, /mobile/i);
  assert.match(result.errors.message, /10 characters/);
});
