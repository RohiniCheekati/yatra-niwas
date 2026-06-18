"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Room photos with names, PRICE, and a "book" button.
export default function Rooms() {
  const { lang } = useLang();
  const t = site.rooms;

  return (
    <section id="rooms" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} />
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-ink/75">{t.body[lang]}</p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {t.items.map((room, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="overflow-hidden rounded-2xl border border-gold/30 bg-white/60 shadow-sm">
              <div className="relative h-64">
                <Image src={room.image} alt={room.name[lang]} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                {/* Price badge */}
                <span className="absolute right-3 top-3 rounded-full bg-saffron px-3 py-1.5 text-sm font-semibold text-white shadow">
                  {room.price[lang]}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-maroon">{room.name[lang]}</h3>
                  <p className="text-sm text-ink/70">{room.desc[lang]}</p>
                </div>
                <a
                  href="#book"
                  className="shrink-0 rounded-full bg-saffron px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-maroon"
                >
                  {site.nav.book[lang]}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
