"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import SectionHeading from "./SectionHeading";

// Guest reviews — features the real feedback video from pilgrims.
// Click-to-play (with sound) so it doesn't load until a visitor wants it.
export default function Reviews() {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(false);
  const t = site.reviews;

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

      <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-gold/40">
        {playing ? (
          <video controls autoPlay playsInline className="h-auto w-full">
            <source src={t.video} type="video/mp4" />
          </video>
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative block aspect-[9/16] w-full"
            aria-label={t.cta[lang]}
          >
            <Image src="/images/visiting.jpeg" alt="" fill className="object-cover opacity-90" />
            <span className="absolute inset-0 bg-maroon-dark/35 transition-colors group-hover:bg-maroon-dark/20" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-saffron/90 text-white shadow-lg transition-transform group-hover:scale-110">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-sm text-cream">
              ▶ {t.cta[lang]}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
