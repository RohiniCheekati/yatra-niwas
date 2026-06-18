"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageProvider";
import { site, business } from "@/lib/content";
import SectionHeading from "./SectionHeading";

/*
  BOOKING ENQUIRY FORM.
  How it works (simple + free, no server needed):
   1. The guest fills name, phone, dates, etc.
   2. On submit we build a neat message and open WhatsApp with it
      already typed in — the guest just presses "send".
   3. The enquiry arrives in YOUR WhatsApp, and you reply to confirm.

  Later, if you want enquiries by email instead, we can switch this
  to a real form service — just ask.
*/
export default function BookingForm() {
  const { lang } = useLang();
  const t = site.booking;
  // Today's date in YYYY-MM-DD — used to block past dates in the date picker.
  const today = new Date().toISOString().split("T")[0];

  // One piece of state per field.
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "1",
    roomType: t.roomOptions[0].en,
    message: "",
  });
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Basic validation: name, phone and check-in are required.
    if (!form.name.trim() || !form.phone.trim() || !form.checkin) {
      setError(t.required[lang]);
      return;
    }
    setError("");

    // Build the WhatsApp message (English labels so it's easy for you to read).
    const text = [
      "🙏 New booking enquiry (from website)",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Check-in: ${form.checkin}`,
      `Check-out: ${form.checkout || "-"}`,
      `Guests: ${form.guests}`,
      `Room: ${form.roomType}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  // Shared styling for the input boxes.
  const input =
    "w-full rounded-lg border border-gold/40 bg-white/80 px-4 py-2.5 text-ink outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30";
  const label = "mb-1 block text-sm font-medium text-ink/80";

  return (
    <section id="book" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
        <p className="mx-auto -mt-6 mb-5 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

        {/* Availability notice + same-day call — so guests know a room isn't guaranteed */}
        <div className="mx-auto mb-8 max-w-xl rounded-xl border border-gold/40 bg-saffron/10 p-4 text-center text-sm text-ink/80">
          <p>ℹ️ {t.availabilityNote[lang]}</p>
          <p className="mt-2">
            {t.sameDay[lang]}{" "}
            <a href={`tel:${business.phoneDial}`} className="font-semibold text-maroon underline">
              📞 {t.callNow[lang]} ({business.phoneDisplay})
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gold/30 bg-white/60 p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div className="sm:col-span-2">
              <label className={label} htmlFor="name">{t.fields.name[lang]} *</label>
              <input id="name" className={input} value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>

            {/* Phone */}
            <div>
              <label className={label} htmlFor="phone">{t.fields.phone[lang]} *</label>
              <input id="phone" type="tel" className={input} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>

            {/* Guests */}
            <div>
              <label className={label} htmlFor="guests">{t.fields.guests[lang]}</label>
              <input id="guests" type="number" min={1} className={input} value={form.guests} onChange={(e) => update("guests", e.target.value)} />
            </div>

            {/* Check-in */}
            <div>
              <label className={label} htmlFor="checkin">{t.fields.checkin[lang]} *</label>
              <input id="checkin" type="date" min={today} className={input} value={form.checkin} onChange={(e) => update("checkin", e.target.value)} />
            </div>

            {/* Check-out */}
            <div>
              <label className={label} htmlFor="checkout">{t.fields.checkout[lang]}</label>
              <input id="checkout" type="date" min={form.checkin || today} className={input} value={form.checkout} onChange={(e) => update("checkout", e.target.value)} />
            </div>

            {/* Room type */}
            <div className="sm:col-span-2">
              <label className={label} htmlFor="roomType">{t.fields.roomType[lang]}</label>
              <select id="roomType" className={input} value={form.roomType} onChange={(e) => update("roomType", e.target.value)}>
                {t.roomOptions.map((opt, i) => (
                  // value stays English so your WhatsApp message is consistent
                  <option key={i} value={opt.en}>{opt[lang]}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className={label} htmlFor="message">{t.fields.message[lang]}</label>
              <textarea id="message" rows={3} className={input} value={form.message} onChange={(e) => update("message", e.target.value)} />
            </div>
          </div>

          {error && <p className="mt-4 text-sm text-maroon">⚠ {error}</p>}

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2z" />
            </svg>
            {t.submit[lang]}
          </button>
        </form>
      </div>
    </section>
  );
}
