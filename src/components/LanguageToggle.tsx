"use client";

import { useLang } from "@/lib/LanguageProvider";

// The తెలుగు / EN switch. Clicking sets the language for the whole site.
export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const pill = (active: boolean) =>
    `rounded-full px-3 py-1 text-sm transition-colors ${
      active ? "bg-saffron text-white" : "text-ink/70 hover:text-ink"
    }`;

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-gold/50 bg-cream/80 p-0.5">
      <button onClick={() => setLang("en")} className={pill(lang === "en")} aria-pressed={lang === "en"}>
        EN
      </button>
      <button onClick={() => setLang("te")} className={pill(lang === "te")} aria-pressed={lang === "te"}>
        తెలుగు
      </button>
    </div>
  );
}
