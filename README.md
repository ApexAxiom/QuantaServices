# Quanta AI

A cinematic, responsive Quanta AI website built with Next.js App Router.

## Development

Run `npm run dev` and open http://localhost:3000. The contact endpoint runs in Cloudflare Pages Functions, not the Next.js development server.
Run `npm run build` and `npm run lint` for production validation.

## Design

The quantum laboratory artwork is a visual metaphor for applied AI.
The homepage uses real HTML text and links over a locally hosted WebP image.
Gentle camera drift, core illumination, particles, and scientific diagrams use CSS animation.
The hero includes a pause control. All motion respects prefers-reduced-motion.

## Routes

- / — vision, lab, and areas of focus
- /services — technology and capabilities
- /about — philosophy
- /research — sourced technical perspective and interactive interference model
- /contact — consultation form
- /case-studies — redirects to /#lab; unsupported legacy results are no longer displayed

## Contact configuration

Cloudflare Pages hosts the static export; functions/api/contact.ts provides the SMTP contact endpoint. Configure NEXT_PUBLIC_SITE_URL,
CONTACT_TO_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, and
SMTP_FROM through environment variables. Never commit credentials.

The form reports failed delivery honestly when SMTP is unavailable. Local visual
validation exercises invalid input without sending an email.
