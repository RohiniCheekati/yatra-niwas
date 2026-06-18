"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";
import LanguageToggle from "./LanguageToggle";

// The menu links: each jumps to a section lower on the page (the #id).
const links = [
  { id: "about", label: site.nav.about },
  { id: "rooms", label: site.nav.rooms },
  { id: "annadanam", label: site.nav.annadanam },
  { id: "services", label: site.nav.services },
  { id: "packages", label: site.nav.packages },
  { id: "kashi", label: site.nav.kashi },
  { id: "contact", label: site.nav.contact },
];

export default function Header() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false); // mobile menu open/closed

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo + name */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Sri Uma Maheswara Yatra Niwas logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full ring-1 ring-gold/40"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-maroon sm:text-lg">
              {site.brand.name[lang]}
            </span>
            <span className="block text-[11px] text-ink/60">{site.brand.sub[lang]}</span>
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-ink/80 transition-colors hover:text-saffron">
              {l.label[lang]}
            </a>
          ))}
        </nav>

        {/* Right side: language + book button */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#book"
            className="hidden rounded-full bg-saffron px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-maroon sm:inline-block"
          >
            {site.nav.book[lang]}
          </a>
          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-maroon lg:hidden"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="border-t border-gold/30 bg-cream px-4 py-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-ink/80 hover:text-saffron"
            >
              {l.label[lang]}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 block rounded-full bg-saffron px-4 py-2 text-center font-medium text-white"
          >
            {site.nav.book[lang]}
          </a>
        </nav>
      )}
    </header>
  );
}
