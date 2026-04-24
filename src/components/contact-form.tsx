"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormRequest, ContactResponse } from "@/lib/contact-types";

type StatusState =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const initialForm: ContactFormRequest = {
  interest: "Book a consultation",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

const requestTimeoutMs = 15000;

export function ContactForm() {
  const [form, setForm] = useState<ContactFormRequest>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormRequest, string>>
  >({});
  const [status, setStatus] = useState<StatusState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setFieldErrors((current) => {
      if (!current[name as keyof ContactFormRequest]) {
        return current;
      }

      const next = { ...current };
      delete next[name as keyof ContactFormRequest];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), requestTimeoutMs);

    void (async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          signal: controller.signal,
        });

        const payload = (await response.json()) as ContactResponse;

        if (!response.ok || !payload.success) {
          setFieldErrors(payload.fieldErrors || {});
          setStatus({
            type: "error",
            message:
              payload.message ||
              "Your request could not be submitted right now. Please try again.",
          });
          return;
        }

        setFieldErrors({});
        setForm(initialForm);
        setStatus({
          type: "success",
          message: payload.message,
        });
      } catch {
        setStatus({
          type: "error",
          message:
            "Your request could not be delivered right now. Please try again shortly.",
        });
      } finally {
        window.clearTimeout(timeout);
        setIsSubmitting(false);
      }
    })();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field-full">
          <label className="form-label" htmlFor="interest">
            Request Type
          </label>
          <select
            id="interest"
            name="interest"
            className="form-input"
            value={form.interest}
            onChange={handleChange}
          >
            <option>Book a consultation</option>
            <option>Discuss a workflow problem</option>
            <option>Ask a project question</option>
          </select>
          {fieldErrors.interest ? (
            <span className="field-error">{fieldErrors.interest}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
          />
          {fieldErrors.name ? (
            <span className="field-error">{fieldErrors.name}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="form-input"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            autoComplete="organization"
          />
          {fieldErrors.company ? (
            <span className="field-error">{fieldErrors.company}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
          />
          {fieldErrors.email ? (
            <span className="field-error">{fieldErrors.email}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="phone">
            Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
            placeholder="Best callback number"
            autoComplete="tel"
          />
        </div>

        <div className="form-field-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="form-field-full" id="brief">
          <label className="form-label" htmlFor="message">
            What should we help you evaluate?
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={form.message}
            onChange={handleChange}
            placeholder="Share the workflow, backlog, reporting issue, or decision bottleneck you want to improve."
          />
          {fieldErrors.message ? (
            <span className="field-error">{fieldErrors.message}</span>
          ) : null}
        </div>
      </div>

      <div className="form-footer">
        <p className="form-note">
          A short brief is enough. Quanta reviews each inquiry before the first
          consultation.
        </p>
        <button type="submit" className="button button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Consultation"}
        </button>
      </div>

      {status ? (
        <div className={`form-status ${status.type}`}>{status.message}</div>
      ) : null}
    </form>
  );
}
