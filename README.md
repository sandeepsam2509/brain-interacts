# Brain Interacts

The Brain Interacts marketing site, rebuilt in Next.js (App Router, TypeScript, Tailwind CSS v4) from the original Framer project.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

- `src/app/` holds the routes. The URLs match the Framer site so existing links keep working.
- `src/lib/site.ts` holds the site map and navigation.
- `src/components/` holds shared UI (header, footer).
- `src/app/globals.css` holds the design tokens (colours, type scale) carried over from Framer.
