import { addMessage } from "./messagesStore";
import type { ContactInput, FetchLike, KeyValueStorage } from "../types";

type SubmitArgs = {
  apiUrl: string;
  storage: KeyValueStorage;
  payload: ContactInput;
  fetchImpl?: FetchLike;
  delayMs?: number;
  createId?: () => string;
};

export async function submitContact({
  apiUrl,
  storage,
  payload,
  fetchImpl = globalThis.fetch as FetchLike,
  delayMs = 0,
  createId = () => globalThis.crypto?.randomUUID?.() || `local-${Date.now()}`,
}: SubmitArgs) {
  const entry = {
    id: createId(),
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    message: payload.message.trim(),
  };

  if (apiUrl) {
    const response = await fetchImpl(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        message: entry.message,
      }),
    });
    if (!response.ok) {
      throw new Error(`Unable to send message (${response.status})`);
    }
    return { mock: false };
  }

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  addMessage(storage, entry);
  return { mock: true };
}
