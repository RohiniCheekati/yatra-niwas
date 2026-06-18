"use client";

import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// "Services & experiences" — animated icon cards (boat ride, aarti, guide…).
export default function Services() {
  const { lang } = useLang();
  const t = site.services;

  return (
    <section id="services" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
        <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full rounded-2xl border border-gold/30 bg-white/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl ring-1 ring-gold/30">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-maroon">{s.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.desc[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
