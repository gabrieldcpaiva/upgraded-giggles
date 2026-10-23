# The UGC Syndicate
A loud, useful, zero-API prompt gallery for six UGC specialists.

## Run
```sh
npm install
npm run dev
```
Vite binds to `0.0.0.0`. `npm run build` creates the production bundle.

## What's inside
- Six original inline vector crests; no remote image dependencies.
- Search, squad filters, local favorites, keyboard search (`/`).
- Dossiers with soul + procedure + shared guardrails.
- Agent-specific brief builder. Copy the resulting mission into your own model.
- Markdown downloads and mobile layouts. Dialogs support Escape and keyboard focus containment.
- No model integration, authentication, analytics, external page fetching or server-side brief storage.

## Source of truth
Edit `src/data.js`. It is the canonical content source. `npm run build` automatically exports portable Markdown mirrors to `public/agents/`; do not edit those mirrors directly. The app and downloads use the same source. No Google Sheet or Apps Script deployment is configured.

Favorites live in browser localStorage (agent IDs only). Brief fields live only in memory for the current tab. Google Fonts is an optional external stylesheet; system font fallbacks work offline. Nothing here is an autonomous Hermes agent.

Pop-culture-inspired personas are not endorsed by the named artists. Review names/likenesses before public distribution. Verify product claims and platform-specific rules before using outputs as advertising.
