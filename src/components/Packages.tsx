"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site, business } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// "Yatras beyond Kashi" — animated destination photo cards. Tapping a card
// opens WhatsApp with that package pre-filled.
export default function Packages() {
  const { lang } = useLang();
  const t = site.packages;

  const waLink = (route: string) =>
    `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`🙏 Package enquiry: ${route}`)}`;

  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <a
              href={waLink(p.route.en)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full overflow-hidden rounded-2xl border border-gold/30 bg-white/60 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.route[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/75 to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 font-display text-lg font-semibold text-cream drop-shadow">
                  {p.route[lang]}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <span className="text-sm text-ink/70">{p.note[lang]}</span>
                <span className="shrink-0 rounded-full bg-saffron px-3 py-1.5 text-xs font-medium text-white transition-colors group-hover:bg-maroon">
                  {t.cta[lang]}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
