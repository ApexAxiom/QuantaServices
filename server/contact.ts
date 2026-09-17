import nodemailer from "nodemailer";
import type { ContactFormRequest } from "../src/lib/contact-types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const smtpTimeoutMs = 12000;
const allowedInterests = new Set([
  "General inquiry",
  "Domain purchase inquiry",
  "Partnership or collaboration",
  "Research inquiry",
]);

function toTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function validateContactPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return {
      fieldErrors: {
        message: "Please include a message.",
      },
    };
  }

  const record = payload as Record<string, unknown>;
  const data: ContactFormRequest = {
    interest: toTrimmedString(record.interest) || "General inquiry",
    name: toTrimmedString(record.name),
    company: toTrimmedString(record.company),
    email: toTrimmedString(record.email),
    phone: toTrimmedString(record.phone),
    message: toTrimmedString(record.message),
    website: toTrimmedString(record.website),
  };

  const fieldErrors: Partial<Record<keyof ContactFormRequest, string>> = {};

  if (!allowedInterests.has(data.interest)) {
    fieldErrors.interest = "Please choose a request type.";
  }

  if (!data.name) {
    fieldErrors.name = "Please enter your name.";
  }

  if (!data.email) {
    fieldErrors.email = "Please enter an email address.";
  } else if (!emailPattern.test(data.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!data.message) {
    fieldErrors.message = "Please include your message.";
  }

  return {
    data,
    fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
  };
}

export async function sendContactEmail(data: ContactFormRequest, env: Record<string, string | undefined>) {
  const host = env.SMTP_HOST;
  const port = Number(env.SMTP_PORT || "587");
  const secure = env.SMTP_SECURE === "true";
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;
  const to = env.CONTACT_TO_EMAIL?.trim();
  const from = env.SMTP_FROM || user;

  if (!host || !user || !pass || !to || !from) {
    throw new Error("Contact email delivery is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout: smtpTimeoutMs,
    greetingTimeout: smtpTimeoutMs,
    socketTimeout: smtpTimeoutMs,
    auth: {
      user,
      pass,
    },
  });

  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Quanta Services inquiry</h2>
      <p><strong>Request type:</strong> ${escapeHtml(data.interest)}</p>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${
        data.phone
          ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>`
          : ""
      }
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const textMessage = [
    "New Quanta Services inquiry",
    "",
    `Request type: ${data.interest}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : undefined,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    to,
    from,
    replyTo: `${data.name} <${data.email}>`,
    subject: `[QuantaServices.ai] ${data.interest} from ${data.company || data.name}`,
    text: textMessage,
    html: htmlMessage,
  });
}
