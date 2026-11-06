# Muna Abd El-Raziq — academic website

Built with Astro and Tailwind CSS.

## Run it on your computer
1. Install Node.js 20 or newer from nodejs.org.
2. In this folder, run `npm install`, then `npm run dev`.
3. Open http://localhost:4321 in your browser. Changes appear as you save.

## Add a new publication
Open `src/data/publications.json`, copy one entry (from `{` to `},`), paste it at the top, and change the details:

    {
      "year": 2027,
      "status": "published",
      "title": "Your paper title",
      "authors": "Abd El-Raziq, M., Coauthor, A., & Coauthor, B.",
      "venue": "Journal name, volume(issue), pages",
      "doi": "10.xxxx/xxxxx",
      "openAccess": false,
      "topics": ["Morphosyntax"],
      "summary": "One or two plain-language sentences."
    },

- `status` can be "published", "under review", or "in preparation".
- Leave `doi` or `summary` as "" if you don't have them yet.
- Your name is bolded automatically.
- Every entry except the last needs a comma after its closing `}`.

Talks live in `src/data/talks.json`; your email and links in `src/data/site.json`.

## Where things are
- Pages: `src/pages/` (one file per page)
- Header and menu: `src/components/Header.astro`
- Colors and fonts: `src/styles/global.css`
- Your domain: the `site` line in `astro.config.mjs`

## Publishing
Once the GitHub repository is connected to Netlify, every change you push publishes automatically (settings are in `netlify.toml`). The contact form uses Netlify Forms; messages appear in your Netlify dashboard under Forms.
