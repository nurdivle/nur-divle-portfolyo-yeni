"use client";

import type { Locale } from "../lib/i18n";

export default function LanguageToggle({ locale, onChange, className = "" }: { locale: Locale; onChange: (locale: Locale) => void; className?: string }) {
  const select = (next: Locale) => {
    document.cookie = `portfolio_locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    onChange(next);
  };
  return <div className={`language-toggle ${className}`} aria-label="Language selector">
    <button type="button" className={locale === "en" ? "active" : ""} onClick={() => select("en")} aria-pressed={locale === "en"}>EN</button>
    <span>/</span>
    <button type="button" className={locale === "tr" ? "active" : ""} onClick={() => select("tr")} aria-pressed={locale === "tr"}>TR</button>
  </div>;
}
