import type { KeyValueStorage, PortfolioMessage } from "../types";

export const MESSAGES_KEY = "portfolio-messages";
export const MESSAGES_READY_KEY = "portfolio-messages-ready";

export function createMemoryStorage(initial: Record<string, string> = {}): KeyValueStorage {
  const data = { ...initial };
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = String(value);
    },
    removeItem(key) {
      delete data[key];
    },
  };
}

export function readMessages(storage: KeyValueStorage): PortfolioMessage[] {
  const raw = storage.getItem(MESSAGES_KEY);
  if (!raw) return [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Saved messages could not be read.");
  }
  if (!Array.isArray(parsed)) {
    throw new Error("Saved messages could not be read.");
  }
  return parsed as PortfolioMessage[];
}

export function writeMessages(storage: KeyValueStorage, messages: PortfolioMessage[]) {
  storage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  storage.setItem(MESSAGES_READY_KEY, "1");
  return messages;
}

export function addMessage(storage: KeyValueStorage, message: PortfolioMessage) {
  const next = [message, ...readMessages(storage)];
  return writeMessages(storage, next);
}

export function deleteLocalMessage(storage: KeyValueStorage, id: string) {
  const next = readMessages(storage).filter((message) => message.id !== id);
  return writeMessages(storage, next);
}

export function ensureSampleMessages(storage: KeyValueStorage, sample: PortfolioMessage[]) {
  if (storage.getItem(MESSAGES_READY_KEY) === "1") {
    return readMessages(storage);
  }
  return writeMessages(storage, sample);
}
