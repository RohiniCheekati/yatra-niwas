"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";

// The free-food (Annadanam) section — text on one side, food photo on the other.
export default function Annadanam() {
  const { lang } = useLang();
  const t = site.annadanam;

  return (
    <section id="annadanam" className="bg-maroon-dark py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        {/* Photo */}
        <div className="relative h-72 overflow-hidden rounded-2xl ring-1 ring-gold/40 md:h-96">
          <Image src="/images/food.jpeg" alt="Free Annadanam meals" fill className="object-cover" />
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-medium tracking-wide text-gold-light">{t.eyebrow[lang]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{t.title[lang]}</h2>
          <p className="mt-4 leading-relaxed text-cream/85">{t.body[lang]}</p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {t.points.map((p, i) => (
              <li key={i} className="rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm">
                ✓ {p[lang]}
              </li>
            ))}
          </ul>

          {/* What's served: Lunch & Night */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {t.meals.map((m, i) => (
              <div key={i} className="rounded-xl border border-gold/30 bg-white/5 p-4">
                <div className="text-2xl">{m.icon}</div>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold-light">{m.time[lang]}</p>
                <p className="font-display text-lg font-semibold">{m.item[lang]}</p>
              </div>
            ))}
          </div>

          {/* Sponsorship callout */}
          <p className="mt-5 rounded-xl border border-gold/40 bg-saffron/15 p-4 text-sm text-cream/90">
            🎁 {t.sponsorship[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}
