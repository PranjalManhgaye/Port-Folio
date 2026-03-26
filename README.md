# Portfolio (Pranjal Manhgaye)

Freelance/client-first portfolio built with **Next.js** + **Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Profile copy & hero photo**: `src/data/profile.ts` — set `profileImageSrc` to a path under `public/` (e.g. `/profile.png`). Replace `public/profile.png` with your own image.
- **Services**: `src/data/services.ts`
- **Projects**: `src/data/projects.ts`
- **Skills**: `src/data/skills.ts`
- **Contact email**: set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` (see `.env.example`). The form uses [FormSubmit](https://formsubmit.co) to deliver messages to your inbox without a backend.

## Build

```bash
npm run build
npm start
```

## Notes

- **Typography**: display/body fonts load via `next/font` (Google) in `src/app/layout.tsx`. CI needs network for the first font fetch during build, or use cached fonts.
