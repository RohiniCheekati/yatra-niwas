"use client"; // this file runs in the browser (it needs clicks + memory)

/*
  The language "brain" of the site.
  - It stores the current language ("en" or "te").
  - It remembers your choice even after refresh (localStorage).
  - Any section can ask "which language are we in?" using the
    useLang() hook below.
*/

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "./content";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // On first load, read the saved choice from the browser's memory.
  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "te") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l); // remember it
    document.documentElement.lang = l; // tell the browser / Google the page language
  };

  const toggle = () => setLang(lang === "en" ? "te" : "en");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

// Any component calls `const { lang } = useLang()` to know the language.
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
