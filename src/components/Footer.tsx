"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageProvider";
import { site } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-maroon-dark text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <Image
          src="/images/logo.png"
          alt="Sri Uma Maheswara Yatra Niwas logo"
          width={72}
          height={72}
          className="mx-auto h-18 w-18 rounded-full ring-1 ring-gold/40"
        />
        <h3 className="mt-4 font-display text-2xl font-semibold">{site.brand.name[lang]}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-cream/75">{site.footer.tagline[lang]}</p>
        <p className="mt-5 text-lg text-gold-light">{site.footer.blessing[lang]}</p>

        <div className="mt-8 border-t border-gold/20 pt-5 text-xs text-cream/60">
          © {year} {site.brand.name[lang]}. {site.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
}
