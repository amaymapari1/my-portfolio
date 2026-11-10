import { FormEvent, useState } from "react";
import Loader from "../components/Shared/Loader";
import { useToast } from "../components/Shared/Toast";
import { config, usesMockContact } from "../config";
import { profile } from "../data/profile";
import { submitContact } from "../lib/contactClient";
import { validateContact } from "../lib/validateContact";
import { cx } from "../styles/cx";
import {
  btnBlock,
  btnSolid,
  contact,
  contactGrid,
  contactLabel,
  contactLink,
  contactValue,
  errorText,
  field,
  fieldArea,
  fieldInvalid,
  formGrid,
  formStack,
  formTop,
  headingMain,
  label,
  lead,
  note,
  panel,
  statusError,
  statusOk,
} from "../styles/styles.css";
import type { ContactErrors, ContactInput } from "../types";

const empty: ContactInput = { name: "", email: "", phone: "", message: "" };
const noErrors: ContactErrors = { name: "", email: "", phone: "", message: "" };

function formatPhone(value: string) {
  const match = value.match(/^(\+\d+)\s*(\d{5})(\d{5})$/);
  return match ? `${match[1]} ${match[2]} ${match[3]}` : value;
}

const methods = [
  { label: "Mail Me", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone Me", value: profile.phone, href: profile.phoneHref },
  { label: "Meet Me", value: profile.location, href: profile.locationUrl },
];

export default function Contact() {
  const push = useToast();
  const [form, setForm] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>(noErrors);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ tone: "success" | "error"; message: string } | null>(null);

  const update = (fieldName: keyof ContactInput, value: string) => {
    setForm((current) => ({ ...current, [fieldName]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = validateContact(form);
    setErrors(result.errors);
    if (!result.isValid) {
      setStatus({ tone: "error", message: "Check the highlighted fields and try again." });
      return;
    }

    setLoading(true);
    setStatus(null);
    try {
      const response = await submitContact({
        apiUrl: config.contactApiUrl,
        storage: window.localStorage,
        payload: form,
        delayMs: usesMockContact ? 450 : 0,
      });
      setForm(empty);
      const message = response.mock
        ? "Saved in this browser. No email was sent. Set VITE_CONTACT_API_URL to deliver messages."
        : "Message sent.";
      setStatus({ tone: "success", message });
      push("success", response.mock ? "Message saved in this browser." : "Message sent.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({ tone: "error", message });
      push("error", message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader label="Sending your message" />;

  return (
    <section className={cx(panel, contact)}>
      <h1 className={headingMain}>Let's Talk</h1>
      <p className={lead}>While I am good with smoke signals, there are simpler ways to get in touch.</p>
      <ul className={contactGrid}>
        {methods.map((method) => (
          <li key={method.label}>
            {method.href.startsWith("tel:") ? (
              <button type="button" className={contactLink} onClick={() => window.location.assign(method.href)}>
                <span className={contactLabel}>{method.label}</span>
                <span className={contactValue}>{formatPhone(method.value)}</span>
              </button>
            ) : (
              <a
                href={method.href}
                className={contactLink}
                {...(method.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className={contactLabel}>{method.label}</span>
                <span className={contactValue}>{method.value}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className={note}>
        {usesMockContact
          ? "Mock mode is on. A valid form is stored in this browser and is not sent to a server."
          : "This form posts to the contact API in your configuration."}
      </p>
      <form className={formTop} onSubmit={handleSubmit} noValidate>
        <div className={formGrid}>
          <div className={formStack}>
            <Field id="name" label="Name" value={form.name} error={errors.name} placeholder="Your name" onChange={(value) => update("name", value)} />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              placeholder="you@example.com"
              onChange={(value) => update("email", value)}
              autoComplete="email"
            />
            <Field
              id="phone"
              label="Mobile Number"
              type="tel"
              value={form.phone}
              error={errors.phone}
              placeholder="9876543210"
              onChange={(value) => update("phone", value)}
              autoComplete="tel"
            />
          </div>
          <div className={formStack}>
            <label htmlFor="message" className={label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={form.message}
              placeholder="What would you like to talk about?"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cx(field, fieldArea, errors.message && fieldInvalid)}
              onChange={(event) => update("message", event.target.value)}
            />
            {errors.message ? (
              <p id="message-error" className={errorText}>
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>
        {status ? (
          <p role={status.tone === "error" ? "alert" : "status"} className={status.tone === "error" ? statusError : statusOk}>
            {status.message}
          </p>
        ) : null}
        <button className={cx(btnSolid, btnBlock)} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

function Field({
  id,
  label: labelText,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {labelText}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(field, error && fieldInvalid)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className={errorText}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
