"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import SectionHeading from "./SectionHeading";

// "Glimpses of holy Kashi": short autoplay videos + a grid of Kashi photos.
export default function KashiGallery() {
  const { lang } = useLang();
  const t = site.kashi;

  return (
    <section id="kashi" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

      {/* Short looping videos (your own clips) */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {t.videos.map((v, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-gold/30">
            <video autoPlay muted loop playsInline preload="metadata" className="aspect-[4/3] w-full object-cover">
              <source src={v.src} type={v.src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
            </video>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-dark/80 to-transparent p-3">
              <span className="text-sm font-medium text-cream">{v.label[lang]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo grid (more glimpses of Kashi) */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {t.photos.map((p, i) => (
          <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gold/30">
            <Image
              src={p.src}
              alt={p.label[lang]}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-dark/85 to-transparent p-3">
              <span className="text-sm font-medium text-cream">{p.label[lang]}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-ink/45">{t.photosNote[lang]}</p>
    </section>
  );
}
