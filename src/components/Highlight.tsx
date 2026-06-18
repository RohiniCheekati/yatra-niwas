"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";

// The featured "boatt" video. It is large (88 MB), so we DON'T load it
// until the visitor taps Play. Until then we show a still image + play button.
export default function Highlight() {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(false);
  const t = site.highlight;

  return (
    <section className="relative overflow-hidden bg-cream-dark py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="divider-mark text-sm font-medium tracking-wide text-saffron">{t.eyebrow[lang]}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-maroon sm:text-4xl">{t.title[lang]}</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/75">{t.body[lang]}</p>

        <div className="mt-8 overflow-hidden rounded-2xl shadow-xl ring-1 ring-gold/40">
          {playing ? (
            <video controls autoPlay playsInline className="aspect-video w-full bg-black">
              <source src="/videos/boatt.mp4" type="video/mp4" />
            </video>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative block aspect-video w-full"
              aria-label={t.cta[lang]}
            >
              <Image src="/images/siva.jpeg" alt="" fill className="object-cover" />
              <span className="absolute inset-0 bg-maroon-dark/40 transition-colors group-hover:bg-maroon-dark/25" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-saffron/90 text-white shadow-lg transition-transform group-hover:scale-110">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1 text-sm text-cream">
                ▶ {t.cta[lang]}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
