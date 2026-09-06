import assert from 'node:assert/strict';
import { test } from 'node:test';
import nodemailer from 'nodemailer';
import { validateContactPayload, sendContactEmail } from '../server/contact.ts';

const data = { interest: 'Book a consultation', name: 'Local test', company: 'Example', email: 'test@example.com', phone: '', message: 'A local-only contract test with sufficient detail.', website: '' };

test('contact validation preserves required fields and real submission shape', () => {
  assert.ok(validateContactPayload({}).fieldErrors);
  assert.deepEqual(validateContactPayload(data), { data, fieldErrors: undefined });
  assert.ok(validateContactPayload({ ...data, email: 'invalid' }).fieldErrors.email);
});

test('missing SMTP settings fail explicitly without attempting delivery', async () => {
  await assert.rejects(sendContactEmail(data, {}), /delivery is not configured/);
});

test('SMTP relay retains recipient, reply address and delivery acknowledgement', async () => {
  const original = nodemailer.createTransport;
  let options;
  let message;
  nodemailer.createTransport = config => {
    options = config;
    return { sendMail: async payload => { message = payload; } };
  };
  try {
    await sendContactEmail(data, { SMTP_HOST: 'smtp.example.com', SMTP_USER: 'test-user', SMTP_PASS: 'local-test-value', CONTACT_TO_EMAIL: 'recipient@example.com' });
    assert.equal(options.connectionTimeout, 12000);
    assert.equal(options.port, 587);
    assert.equal(message.to, 'recipient@example.com');
    assert.equal(message.replyTo, 'Local test <test@example.com>');
    assert.ok(message.text.includes(data.message));
  } finally { nodemailer.createTransport = original; }
});
