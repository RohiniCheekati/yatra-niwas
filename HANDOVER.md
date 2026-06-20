# 🪔 Sri Uma Maheswara Yatra Niwas — Website Handover & Guide

**Last updated:** 20 June 2026
**Purpose of this document:** so anyone can understand, run, and update this website even when Rohini is not available.

---

## 1. What this website is

A bilingual (**Telugu + English**) website for **Sri Uma Maheswara Yatra Niwas** — a pilgrim guest house and **Nitya Annadana Satram** (free daily meals) in **Varanasi (Kashi)**. It lets pilgrims see rooms, prices, services, tour packages, photos/videos of Kashi, guest reviews, and send a booking enquiry over WhatsApp.

- **Live website:** https://sriumamaheswarayatraniwas.com
- **Backup address (also works):** https://yatra-niwas.vercel.app
- **Instagram:** https://www.instagram.com/sriumamaheswarayatraniwas
- **Phone / WhatsApp (primary):** +91 87269 99777
- **Phone (secondary):** +91 96965 01938
- **Email:** umamaheswarayatraniwas@gmail.com
- **Address:** D.No. 28/176, Pandey Haveli, Bengali Tola, Near Bholagiri Ashram, Varanasi – 221001, Uttar Pradesh

---

## 2. How it was created (the simple story)

The website was built with the help of an **AI assistant (Claude)** using modern, professional tools:

| Thing | What it is | Where it lives |
|-------|-----------|----------------|
| **The code** | Built with **Next.js + Tailwind CSS** (industry-standard web tools) | On this computer + on GitHub |
| **GitHub** | Stores all the code safely online (like Google Drive for code) | github.com/RohiniCheekati/yatra-niwas |
| **Vercel** | Hosts the website (keeps it online 24/7, free) | vercel.com — project "yatra-niwas" |
| **Hostinger** | Where the domain name was bought | hostinger.com |

**How updates work:** when the code changes on GitHub, **Vercel automatically rebuilds and publishes** the live site within ~1 minute. No manual uploading.

---

## 3. The accounts & logins (the "keys")

> ⚠️ Keep these safe. Each one controls a different part of the website.

| Account | What it controls | Username / email |
|---------|------------------|------------------|
| **GitHub** | The website code | RohiniCheekati |
| **Vercel** | Hosting (the live site) | logged in with GitHub |
| **Hostinger** | The domain name | account "Uma Maheswar" · cheekatirohinisree@gmail.com |
| **Instagram** | Social page | sriumamaheswarayatraniwas |
| **Gmail** | Domain verification + notices | cheekatirohinisree@gmail.com |

**Important dates:**
- Domain **expires 20 June 2027** (auto-renewal is ON — keep a card on file at Hostinger).
- The domain owner email must stay **verified** (Hostinger sends a verification link to the Gmail above).

---

## 4. Where the project files are on this computer

```
C:\Users\chroh\OneDrive\Desktop\ROHINI\rohini_files\kashi pics\yatra-nivas
```

Inside it, the parts you might touch:

```
yatra-nivas/
├── public/
│   ├── images/      ← all photos (logo, rooms, food, Kashi, packages…)
│   └── videos/      ← all videos (ghats, aarti, reviews…)
└── src/
    ├── lib/
    │   └── content.ts   ← ⭐ ALL the website TEXT (English + Telugu) + phone/WhatsApp/Instagram
    ├── app/
    │   └── globals.css   ← ⭐ the colours of the website
    └── components/        ← each section of the page is one file here
```

---

## 5. How to CHANGE things on the website

**The golden rule:** almost everything you'll want to change is in **one file**: `src/lib/content.ts`.

### ✏️ To change words / prices / Telugu text
1. Open `src/lib/content.ts`.
2. Every line is written twice — `en:` (English) and `te:` (Telugu). Edit the text inside the quotes.
   Example — change the room price:
   ```
   price: { en: "₹2000 / 3 persons", te: "₹2000 / 3 వ్యక్తులు" },
   ```
3. Save the file → publish (see section 6).

### 📞 To change phone / WhatsApp / Instagram
In `src/lib/content.ts`, near the top, find the `business` block and edit:
```
phoneDisplay / phoneDial / whatsapp / instagram
```
(WhatsApp number format: country code, no `+`, no spaces — e.g. `918726999777`.)

### 🖼️ To add or replace a photo
1. Put the new image file in `public/images/`.
2. In `content.ts`, point to it, e.g. `image: "/images/myphoto.jpeg"`.

### 🎬 To add or replace a video
Put it in `public/videos/` and reference it the same way. Keep videos small (under ~10 MB) so the site stays fast.

### 🎨 To change colours
Edit `src/app/globals.css` (the `@theme` block at the top — saffron, maroon, gold, cream).

> 💡 **Easiest option of all:** open the AI assistant (Claude) in this project folder and just say in plain words what you want changed — it can do it and publish it for you.

---

## 6. How to PREVIEW and PUBLISH a change

### Preview on your own computer first
Open a terminal **inside the `yatra-nivas` folder** and run:
```
npm install      (only needed the first time)
npm run dev
```
Then open **http://localhost:3000** in Chrome. Edit a file → save → the page updates. Press `Ctrl + C` to stop.

### Publish it live (so the world sees it)
After you're happy, run these three commands inside the `yatra-nivas` folder:
```
git add -A
git commit -m "describe what you changed"
git push
```
Vercel automatically rebuilds and updates **sriumamaheswarayatraniwas.com** within ~1 minute.

*(Or, simplest: ask the AI assistant to publish — it runs these for you.)*

---

## 7. What's on the website (sections, top to bottom)

1. **Header** — logo, menu, EN / తెలుగు language switch, "Book a Stay".
2. **Hero** — name, spiritual caption, Ganga video background.
3. **Why stay with us** — 4 feature cards.
4. **Annadanam** — free food: Lunch = Andhra Meals, Night = Tiffin, + birthday/anniversary sponsorship.
5. **Rooms** — AC Room ₹2000 / 3 persons, Non-AC Room ₹350 / person.
6. **Services** — boat ride (64 ghats), Ganga Aarti, holy bath at Manikarnika, Telugu & Hindi guide, vehicle services, Annadanam sponsorship.
7. **Packages** — Ayodhya, Prayagraj, Naimisaranyam, Gaya & Bodh Gaya, Vaidyanath Dham, Nepal.
8. **Reviews** — real guest feedback video.
9. **Kashi gallery** — videos + photos of holy Kashi.
10. **Booking form** — sends an enquiry to WhatsApp (87269 99777).
11. **Contact** — address, both phones, WhatsApp, Instagram, Google Map.
12. **Footer** — "Har Har Mahadev".

---

## 8. How booking works

It is an **enquiry**, not an instant confirmed booking (the site clearly says this and that rooms are subject to availability). A guest fills the form → it opens **WhatsApp to 87269 99777** with their details pre-filled → the owner replies to confirm. For same-day stays, guests are asked to **call directly**.

---

## 9. If something looks broken / who to ask

1. First, check the live site in Chrome (`sriumamaheswarayatraniwas.com`). If only your computer shows a problem, it may be your internet.
2. Re-open the **AI assistant (Claude)** in the `yatra-nivas` folder and describe the problem — it can usually fix and re-publish.
3. For anything account-related (domain expiring, payments), log into **Hostinger** (domain) or **Vercel** (hosting).
4. If needed, any web developer who knows **Next.js** can take over — the code is standard and well-commented.

---

## 10. Helpful next steps (optional)

- **Google Search Console** (search.google.com/search-console) — submit the site so it appears on Google. Sitemap is already at `/sitemap.xml`.
- **Google Business Profile** (google.com/business) — puts the guest house on Google Maps for "rooms near Kashi Vishwanath".
- Post the **reel** on Instagram to attract Telugu pilgrims.

🙏 **Har Har Mahadev.**
