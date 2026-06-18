"use client";

import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import SectionHeading from "./SectionHeading";

// The "Why stay with us" cards.
export default function Features() {
  const { lang } = useLang();
  const t = site.features;

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={site.brand.sub[lang]} title={t.title[lang]} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gold/30 bg-white/60 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream-dark text-2xl">
              {item.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-maroon">{item.title[lang]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.desc[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
