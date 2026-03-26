# Pranjal Manhgaye Portfolio

Freelance backend portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Live Demo

- Website: [https://port-folio-one-dusky.vercel.app/](https://port-folio-one-dusky.vercel.app/)

## Highlights

- Freelance-focused structure: services, proof of work, skills, delivery process, and contact flow
- Theme system with a click-toggle British light mode and heritage dark mode
- Reusable component-first architecture under `src/components`
- Content-driven sections using typed data files under `src/data`

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- FormSubmit for contact form delivery

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/`: app shell, routing, global styles
- `src/components/`: UI sections and reusable components
- `src/data/`: profile, services, projects, skills, process, contact content
- `public/`: static assets (including profile image)

## Customization Guide

- Profile details and hero content: `src/data/profile.ts`
- Services section: `src/data/services.ts`
- Projects section: `src/data/projects.ts`
- Skills section: `src/data/skills.ts`
- Delivery process section: `src/data/process.ts`
- Contact details: `src/data/contact.ts`
- Theme and design tokens: `src/app/globals.css`

## Environment Variables

Create `.env.local` from `.env.example` and set:

- `NEXT_PUBLIC_CONTACT_EMAIL`: inbox for portfolio inquiries

The contact form posts through [FormSubmit](https://formsubmit.co), so no custom backend is required.

## Notes

- Fonts are loaded via `next/font` in `src/app/layout.tsx`.
- For CI/build environments, internet access may be needed on first font fetch.
