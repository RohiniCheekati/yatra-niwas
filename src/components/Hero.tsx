"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site, business } from "@/lib/content";

// The big welcome screen.
// CENTRE = the logo + business name + a spiritual caption to attract pilgrims.
// BACKGROUND = a Kashi / Ganga ghats video (boats on the holy river).
export default function Hero() {
  const { lang } = useLang();
  const t = site.hero;

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Background video: Ganga boats & ghats (muted + loops so it autoplays) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/kashi/ghat-sunset.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/boats.mp4" type="video/mp4" />
      </video>

      {/* Dark warm overlay so the white text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/75 via-maroon-dark/60 to-maroon-dark/85" />

      {/* Centred content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center text-cream">
        <p className="mb-6 inline-block rounded-full border border-gold-light/50 px-4 py-1 text-sm tracking-wide text-gold-light">
          {t.eyebrow[lang]}
        </p>

        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Sri Uma Maheswara Yatra Niwas logo"
          width={120}
          height={120}
          priority
          className="animate-floaty mb-6 h-24 w-24 rounded-full ring-2 ring-gold-light/70 shadow-2xl sm:h-28 sm:w-28"
        />

        {/* THE NAME — centre of the home page */}
        <h1 className="font-display text-4xl font-semibold leading-tight drop-shadow-md sm:text-5xl md:text-6xl">
          {site.brand.name[lang]}
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold-light sm:text-base">
          {site.brand.sub[lang]}
        </p>

        {/* Spiritual caption to attract people */}
        <p className="divider-mark mx-auto mt-6 max-w-2xl font-display text-xl italic text-cream/95 sm:text-2xl">
          “{t.caption[lang]}”
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="w-full rounded-full bg-saffron px-8 py-3 font-medium text-white shadow-lg transition-colors hover:bg-saffron-light sm:w-auto"
          >
            {t.ctaPrimary[lang]}
          </a>
          <a
            href={`tel:${business.phoneDial}`}
            className="w-full rounded-full border border-cream/60 px-8 py-3 font-medium text-cream transition-colors hover:bg-cream hover:text-maroon sm:w-auto"
          >
            📞 {t.ctaSecondary[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
