# Quanta Services

Chicago-based AI consulting site for Quanta Services, built with Next.js App Router.

## Local Development

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Configuration

The contact form submits to a server-side Next.js route and never renders the destination inbox in the UI.

Create or update local environment variables with:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_TO_EMAIL=your-private-inbox@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM="Quanta Services <no-reply@example.com>"
```

If SMTP credentials are missing, the form UI still renders but submissions will fail with a safe generic error.

## Key Routes

- `/`
- `/services`
- `/case-studies`
- `/about`
- `/contact`
