"use client";

import { useLang } from "@/lib/LanguageProvider";
import { site, business } from "@/lib/content";
import SectionHeading from "./SectionHeading";

// Contact section: address, phone, WhatsApp, Instagram + a live Google Map.
export default function Contact() {
  const { lang } = useLang();
  const t = site.contact;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Details */}
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-saffron">{t.addressLabel[lang]}</h3>
            <p className="mt-1 leading-relaxed text-ink/80">{business.addressLine}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-saffron">{t.phoneLabel[lang]}</h3>
            <a href={`tel:${business.phoneDial}`} className="mt-1 block text-lg text-maroon hover:underline">
              {business.phoneDisplay}
            </a>
            <a href={`tel:${business.phoneDial2}`} className="block text-lg text-maroon hover:underline">
              {business.phoneDisplay2}
            </a>
          </div>

          <p className="text-sm text-ink/60">{t.hours[lang]}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            >
              💬 {t.whatsappLabel[lang]}
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-2.5 font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            >
              📷 {t.instagramLabel[lang]}
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl ring-1 ring-gold/40">
          <iframe
            src={mapSrc}
            title="Map to Sri Uma Maheswara Yatra Niwas"
            className="h-80 w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
