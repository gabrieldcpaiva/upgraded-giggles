# The UGC Syndicate

Six unhinged agents for making raw, scroll-stopping UGC ads — and getting paid for the work without getting walked over. Two squads of three. Camp stays, lies don't.

**Everything is one file: [`index.html`](index.html).** All CSS and JS inline. No fonts, images, APIs, accounts, or network calls. Open it straight from disk, or serve it.

```sh
npm install
npm run dev     # http://localhost:5173 (binds 0.0.0.0)
npm run build   # dist/index.html, still a single self-contained file
```

You do not need Node at all. Double-clicking `index.html` is the whole install.

## What's inside

- **Six cards, two squads.** Circular gold-rim crests, squad badges, taglines, dark velvet-and-gold secret-society styling, hover spotlight, scroll reveals.
- **Steal Soul.** Copies that agent's full `soul` + `skill` prompt to the clipboard, with a manual-copy fallback for browsers that block it. Toast: *"Soul stolen! Paste into GrokBot, Claude, ChatGPT or whatever you use."*
- **Dossiers.** Full soul text rendered as markdown, the quick-start prompt, copy buttons, Escape to close.
- **Search and squad filters**, `/` to focus search.
- **Steal the whole vault.** All six souls and quick-starts in one copy.
- **Crest Forge.** Six ready-to-use avatar prompts (Part 3), each copyable.
- **The Skool Drop.** The launch post, copy-ready.
- **Cringe-o-Meter.** A local, deterministic scan for Alaska's banned words. No model, no upload.
- **Seventh seat.** Knock three times for the Loyalty Rider — guardrails to paste under any stolen soul.
- **Hidden roast mode.** Type `cringe`. It still roasts the work, never the person.
- Zero API calls, zero analytics. `localStorage` holds only the sound toggle and the unlocked-seat flag.

## Source of truth

The `AGENTS` array at the top of the `<script>` in `index.html` is canonical: id, name, file name, squad, role, tagline, emoji, `avatar`, `soul`, `skill`. Souls and skills are verbatim canon — do not soften them. Set an agent's `avatar` to an image path or data URI and the emoji crest is replaced automatically; leave it empty and the crest draws itself.

There are intentionally no per-agent Markdown mirrors: the app's copy buttons are the extraction path.

## Honesty notes

Prompts are not magic and this build makes no income promises. Check every product claim before shipping, fill `[PLACEHOLDERS]` with true things, and label AI-generated content where the platform asks. Pop-culture-inspired personas are parody and are not endorsed by the artists referenced. There is no live model in this build and nothing here pretends to have one.
