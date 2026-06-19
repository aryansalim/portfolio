# Aryan Salim — Portfolio (Next.js)

Bilingual (English / Kurdish, with RTL) personal site for Aryan Salim — sociologist, researcher, educator. Rebuilt from the original single-file HTML into **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — it redirects to `/en`. Kurdish is at `/ku`.

## Build

```bash
npm run build
npm start
```

## Routes

| Path | Page |
| --- | --- |
| `/en`, `/ku` | Home (hero, about, research, award, CV, contact) |
| `/en/research` | List of papers |
| `/en/research/zer` | Full paper: *The Struggle and Resistance of the Kurdish Nation…* |

The language toggle in the header swaps the locale while keeping the current path.

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx          html lang/dir, fonts, header/footer
      page.tsx            home
      research/
        page.tsx          paper list
        [slug]/page.tsx   full paper reader
    globals.css           Tailwind + component classes
  components/             Hero, About, WorkList, AwardSection, CV, Contact, …
  data/
    content.ts            all bilingual copy + contact constants (STATIC)
    papers.ts             paper registry
    zer-blocks.ts         full text of the Zer paper, as structured blocks
  lib/i18n.ts             locales, dir(), helpers
  middleware.ts           redirects `/` → `/en`
public/images/            seal.jpg, ceremony.jpg, poster.jpg
```

## How to…

- **Add another paper:** add an object to `papers` in `src/data/papers.ts` (give it a `slug`, titles, abstract, sources, and a `blocks` array). A card appears on the home + research pages automatically, and `/{locale}/research/{slug}` is generated.
- **Add a portrait to About:** drop the image in `public/images/` and set `STATIC.portrait` in `src/data/content.ts`.
- **Add the CV PDF:** place `Aryan_CV_June_2026.pdf` in `public/` (the "Download CV" button links to `/Aryan_CV_June_2026.pdf`).
- **Edit copy:** everything is in `src/data/content.ts` (English in `en`, Kurdish in `ku`).

## Deploy

Works out of the box on **Vercel** (zero config) or any Node host via `npm run build && npm start`.
