This is a [Next.js](https://nextjs.org) project for a mobile-first fitness tracking app.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the public home page by modifying `app/(public)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Architecture (Foundation)

- Route groups:
  - `app/(public)` for public routes like home and sign-in.
  - `app/(app)` for authenticated app areas (`onboarding`, `workouts`, `templates`, `diet`, `profile`).
- Shared foundation libraries:
  - `lib/errors` for typed app errors and user-safe messages.
  - `lib/constants` for routes and domain constants.
  - `lib/validation` for reusable server-side validation helpers.
  - `lib/env.ts` for required environment key checks.

## Environment Setup

1. Copy `.env.example` to `.env.local`.
2. Fill required values for database and auth keys.
3. Restart the dev server after updates.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
