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

- `src/app/` holds the routes. The URLs match the Framer site so existing links keep working; old article slugs redirect in `next.config.ts`.
- `src/content/` holds page copy as typed data. Most pages are a hero plus a list of sections, rendered by `src/components/Sections.tsx`.
- `src/lib/site.ts` holds contact details, the site map and navigation.
- `src/lib/forms.ts` defines the enquiry forms, shared by the form component and `src/app/api/enquiry`.
- `src/app/globals.css` holds the design tokens (colours, type scale) carried over from Framer.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for SEO tags and the sitemap. Defaults to `https://braininteracts.com`. |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com), used to email form submissions. |
| `ENQUIRY_TO` | Inbox that receives form submissions. |
| `ENQUIRY_FROM` | Sender, e.g. `Brain Interacts <website@braininteracts.com>` (domain must be verified in Resend). |

Without `RESEND_API_KEY` and `ENQUIRY_TO`, forms return an error in production so submissions are never silently lost.

## Deploy

Works on Vercel (zero config) or Render as a Node Web Service:

- Build command: `npm install && npm run build`
- Start command: `npm start`

## Before cancelling Framer

Product screenshots in `src/content/images.ts` are still loaded from Framer's CDN. Download them into `public/images/` and update the paths first.
