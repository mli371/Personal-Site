# Mingyang Li Personal Site

Next.js personal homepage for backend, AI platform, and enterprise RAG roles.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

`npm run check` runs lint, typecheck, and production build in sequence.

## Content Updates

Main site content is stored in `data/profile.ts`. Update that file for profile copy, skills, education, research experience, projects, navigation, and contact links.

The live resume PDF is `public/cv.pdf`. Replace that file when the resume changes; the site keeps the public URL stable at `/cv.pdf`.

## Deployment

The site is intended for Vercel at `https://mingyangli.dev`. Set `NEXT_PUBLIC_SITE_URL=https://mingyangli.dev` in Vercel so canonical and social preview metadata resolve correctly.
It also drives `/robots.txt` and `/sitemap.xml`.

Required Node version: `>=20.9.0`.
