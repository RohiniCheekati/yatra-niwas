# 🪔 Sri Uma Maheswara Yatra Niwas — Premium Website (Next.js)

This is your **premium** website, built with Next.js + Tailwind CSS.
You also have a simpler version in the `../website/` folder — use that one to
*learn the basics*, and this one to *launch professionally*.

---

## 1. What is Next.js? (in one line)

The simple site is hand-written HTML files. **Next.js** is a professional
framework that splits the page into small reusable "components", optimises
images/SEO automatically, and is what real companies (Netflix, Nike) use.

You don't write whole pages — you write small **blocks** and stack them.

---

## 2. How to OPEN / PREVIEW this site

You need to run two short commands **once per session** (inside this folder):

```bash
cd yatra-nivas      # go into the project folder
npm run dev         # start the live preview
```

Then open **http://localhost:3000** in Chrome. Edit any file → save →
the browser updates instantly. Press `Ctrl + C` in the terminal to stop.

> First time only, if `node_modules` is missing, run `npm install` first.

---

## 3. The folder structure (what each part is)

```
yatra-nivas/
├── public/                  ← your photos & videos (the browser reads these)
│   ├── images/  (logo, rooms, food…)
│   └── videos/  (ghats, boats, boatt…)
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← fonts + SEO (Google info) + page wrapper
│   │   ├── page.tsx         ← the homepage = a LIST of sections
│   │   └── globals.css      ← the brand COLOURS + fonts
│   ├── components/          ← each SECTION is its own file:
│   │   ├── Header.tsx       ← top bar (logo, menu, EN/తెలుగు, Book)
│   │   ├── Hero.tsx         ← big welcome with the Ganga video
│   │   ├── Features.tsx     ← the 4 "why stay with us" cards
│   │   ├── Annadanam.tsx    ← free food section
│   │   ├── Rooms.tsx        ← room photos
│   │   ├── Highlight.tsx    ← the big "boatt" video (tap to play)
│   │   ├── KashiGallery.tsx ← grid of Kashi videos
│   │   ├── Contact.tsx      ← address, phone, WhatsApp, map
│   │   └── Footer.tsx       ← bottom bar
│   └── lib/
│       ├── content.ts       ← ⭐ ALL TEXT (English + Telugu) lives here
│       └── LanguageProvider.tsx ← the EN/తెలుగు switch logic
```

**The golden rule:** to change *words*, edit `src/lib/content.ts`.
To change *colours*, edit `src/app/globals.css`. You rarely touch anything else.

---

## 4. The bilingual system (English + Telugu)

Open `src/lib/content.ts`. Every line is written twice:

```ts
title: { en: "A peaceful home for pilgrims", te: "యాత్రికులకు ప్రశాంత నివాసం" },
```

- `en:` = English   ·   `te:` = Telugu
- The EN / తెలుగు button at the top swaps the whole site instantly and
  remembers your choice.

To fix Telugu wording: find the line, edit the text after `te:`. Done.

---

## 5. ⚠️ THINGS YOU MUST REPLACE (important!)

Open `src/lib/content.ts`, find the word **REPLACE**, and put your real details:

| Field | Put your… |
|-------|-----------|
| `phoneDisplay` / `phoneDial` | real phone number |
| `whatsapp` | WhatsApp number (country code, no +, no spaces) |
| `instagram` | exact Instagram link |
| `email` | email address |

The address is already filled from your logo — just double-check the spelling.

---

## 6. How to put it ONLINE (free) — when ready

The easiest professional host for Next.js is **Vercel** (made by the same team):

1. Make a free account at https://vercel.com
2. Install the helper once: `npm install -g vercel`
3. Inside this folder run: `vercel` and follow the prompts. You get a live link.
4. Later, connect a custom name like `umamaheswarayatraniwas.com` (~₹800/year).

---

## 7. To-do (next steps, in order)

- [ ] Put your real phone / WhatsApp / Instagram in `content.ts`
- [ ] Check all Telugu text reads naturally
- [ ] Compress `boatt.mp4` (it's 88 MB — too heavy). Free tool: https://handbrake.fr
- [ ] Fix the sideways "ghats" video (rotation) — also done in HandBrake
- [ ] Add more room / temple photos into `public/images/`
- [ ] Publish on Vercel and share the link
- [ ] Later: a real booking form, prices page, reviews, Google Business listing

When you're ready for any of these, just ask. 🙏 Har Har Mahadev.
