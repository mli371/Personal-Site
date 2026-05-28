# Vercel Deployment Guide

## Prerequisites

- Node.js `>=20.9.0`
- npm
- GitHub repository connected to Vercel

## Local Verification

Run the full local gate before deploying:

```bash
npm install
npm run check
```

This runs ESLint, TypeScript, and a production Next.js build.

## Vercel Settings

- Framework Preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: keep the default
- Node.js Version: use a current Node 20 or Node 22 LTS runtime

## Environment Variables

Set this in Vercel once the production URL or custom domain is known:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is used for canonical metadata and social preview URLs. If it is not set, local builds fall back to `http://localhost:3000`.

## Resume Updates

The public resume URL is stable:

```text
/cv.pdf
```

To update the resume, replace `public/cv.pdf` with the latest PDF and run:

```bash
npm run check
```

## Post-Deploy Checks

- Open the production URL and verify the first screen, navigation, projects, contact links, and CV section.
- Confirm `/cv.pdf` loads the latest resume.
- Confirm `/opengraph-image` loads a 1200x630 preview image.
- Confirm `/robots.txt` and `/sitemap.xml` load with the production domain.
- Share the URL in a link preview tool or messaging app to verify title, description, and preview image.
