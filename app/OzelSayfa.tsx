"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { defaultSiteConfig, normalizeSiteConfig, type SiteConfig } from "../lib/site-config";
import { localizeSiteConfig, type Locale, ui } from "../lib/i18n";
import LanguageToggle from "./LanguageToggle";
import "./detay.css";

export default function OzelSayfa({ slug, initialSite, initialLocale = "tr" }: { slug: string; initialSite?: SiteConfig; initialLocale?: Locale }) {
  const [site, setSite] = useState<SiteConfig>(initialSite || defaultSiteConfig);
  const [locale, setLocale] = useState<Locale>(initialLocale);
  useEffect(() => { fetch("/api/site").then(response => response.ok ? response.json() : null).then(data => data && setSite(normalizeSiteConfig(data))).catch(() => undefined); }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const display = localizeSiteConfig(site, locale);
  const page = display.customPages.find(item => item.slug === slug);
  const labels = ui[locale];
  if (!page) return null;
  return <main className="detail-page" style={{ "--detail-accent": display.accent, "--detail-bg": display.background, "--detail-text": display.textColor, "--detail-muted": display.mutedColor, "--detail-nav-gap": `${display.layout.headerGap}px`, "--site-font": display.typography.bodyFont, "--heading-font": display.typography.headingFont, "--heading-weight": display.typography.headingWeight, "--heading-style": display.typography.headingStyle, "--detail-title-color": display.typography.detailTitleColor, "--detail-title-size": `${display.typography.detailTitleSize}px`, "--nav-text-color": display.typography.navColor, "--nav-font-size": `${display.typography.navSize}px`, "--body-font-size": `${display.typography.bodySize}px` } as CSSProperties}>
    <header className="detail-header"><Link href="/" className="detail-wordmark" style={{ transform: `translate(${display.layout.headerBrandX}px, ${display.layout.headerBrandY}px)` }}>{display.name}</Link><nav aria-label={labels.mainNavigation} style={{ transform: `translate(${display.layout.headerNavX}px, ${display.layout.headerNavY}px)` }}>{display.navItems.map(item => <Link key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>)}</nav><LanguageToggle className="detail-language" locale={locale} onChange={setLocale} /></header>
    <div className="detail-content"><section className="detail-hero"><p>{locale === "tr" ? "Sayfa" : "Page"}</p><h1>{page.title}</h1><div className="detail-rule" /><p className="detail-lead">{page.content}</p></section><section className="detail-card"><p>{page.content}</p></section><footer className="detail-footer"><Link href="/">{labels.returnHome}</Link></footer></div>
  </main>;
}
