import type { ContactErrors, ContactInput } from "../types";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export function validateContact(input: Partial<ContactInput> | null | undefined) {
  const name = String(input?.name ?? "");
  const email = String(input?.email ?? "");
  const phone = String(input?.phone ?? "");
  const message = String(input?.message ?? "");

  const errors: ContactErrors = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  if (name.trim() === "") {
    errors.name = "Name is required.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (email.trim() === "") {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (phone.trim() === "") {
    errors.phone = "Mobile number is required.";
  } else if (!phonePattern.test(phone.trim())) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (message.trim() === "") {
    errors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return {
    isValid: Object.values(errors).every((value) => value === ""),
    errors,
  };
}
