"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { defaultSiteConfig, normalizeSiteConfig, type SiteConfig } from "../lib/site-config";
import { localizeSiteConfig, type Locale, ui } from "../lib/i18n";
import LanguageToggle from "./LanguageToggle";
import "./detay.css";
import "./cv-overrides.css";

type PageKind = "about" | "projects" | "analysis" | "skills" | "contact" | "education" | "certificates";

const copy: Record<PageKind, { text: (site: SiteConfig, locale: Locale) => string }> = {
  about: { text: site => site.aboutText },
  projects: { text: (_, locale) => ui[locale].projectIntro },
  analysis: { text: site => site.analysisText },
  skills: { text: site => site.skillsText },
  contact: { text: site => site.contactText },
  education: { text: (_, locale) => ui[locale].educationIntro },
  certificates: { text: (_, locale) => ui[locale].certificatesIntro },
};

export default function DetaySayfasi({ kind, initialSite, initialLocale = "en" }: { kind: PageKind; initialSite?: SiteConfig; initialLocale?: Locale }) {
  const [site, setSite] = useState<SiteConfig>(initialSite || defaultSiteConfig);
  const [locale, setLocale] = useState<Locale>(initialLocale);
  useEffect(() => { fetch("/api/site").then(response => response.ok ? response.json() : null).then(data => data && setSite(normalizeSiteConfig(data))).catch(() => undefined); }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const display = localizeSiteConfig(site, locale);
  const labels = ui[locale];
  const current = { ...copy[kind], ...display.detailHeadings[kind] };
  return <main className="detail-page" style={{ "--detail-accent": display.accent, "--detail-bg": display.background, "--detail-text": display.textColor, "--detail-muted": display.mutedColor, "--detail-nav-gap": `${display.layout.headerGap}px`, "--site-font": display.typography.bodyFont, "--heading-font": display.typography.headingFont, "--heading-weight": display.typography.headingWeight, "--heading-style": display.typography.headingStyle, "--detail-title-color": display.typography.detailTitleColor, "--detail-title-size": `${display.typography.detailTitleSize}px`, "--nav-text-color": display.typography.navColor, "--nav-font-size": `${display.typography.navSize}px`, "--body-font-size": `${display.typography.bodySize}px` } as CSSProperties}>
    <header className="detail-header"><Link href="/" className="detail-wordmark" style={{ transform: `translate(${display.layout.headerBrandX}px, ${display.layout.headerBrandY}px)` }}>{display.name}</Link><nav aria-label={labels.mainNavigation} style={{ transform: `translate(${display.layout.headerNavX}px, ${display.layout.headerNavY}px)` }}>{display.navItems.map(item => <Link key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>)}</nav><LanguageToggle className="detail-language" locale={locale} onChange={setLocale} /></header>
    <div className="detail-content">
    <section className="detail-hero"><p>{current.kicker}</p><h1>{current.title}</h1><div className="detail-rule" /><p className="detail-lead">{current.text(display, locale)}</p></section>
    {kind === "about" && <section className="detail-card about-card"><h2>{display.detailCardHeadings.about}</h2><p>{labels.aboutBody}</p><div className="detail-stats"><div><b>{labels.curious}</b><span>{labels.openToLearning}</span></div><div><b>{labels.organized}</b><span>{labels.plannedProgress}</span></div><div><b>{labels.analytical}</b><span>{labels.dataDrivenThinking}</span></div></div></section>}
    {kind === "projects" && <section className="detail-grid">{display.projects.map(project => <article className="detail-card project-detail" key={project.title}><div className={`project-shot ${project.shot}`} /><h2>{project.title}</h2><p>{project.text}</p><div className="detail-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="detail-actions"><a href={project.detailUrl}>{labels.learnMore} →</a><a href={project.liveUrl}>{labels.liveSite} ↗</a></div></article>)}</section>}
    {kind === "analysis" && <section className="detail-card"><h2>{display.detailCardHeadings.analysis}</h2><div className="method-list">{display.methods.map(method => <p key={method}>✓ <span>{method}</span></p>)}</div></section>}
    {kind === "skills" && <section className="detail-card"><h2>{display.detailCardHeadings.skills}</h2><div className="skill-list">{display.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>}
    {kind === "contact" && <section className="detail-card contact-detail"><h2>{display.detailCardHeadings.contact}</h2><a href={`mailto:${display.email}`}>{display.email}</a><a href={`tel:${display.phone.replace(/\s/g, "")}`}>{display.phone}</a><p>{display.city}</p></section>}
    {kind === "education" && <section className="detail-grid">{[...display.education.map(item => ({ ...item, type: labels.education })), ...display.experience.map(item => ({ ...item, type: labels.experience }))].map(item => <article className="detail-card resume-detail" key={`${item.type}-${item.title}`}><p className="detail-kicker">{item.type}</p><h2>{item.title}</h2><strong>{item.organization}</strong><p>{item.period}{item.location ? ` · ${item.location}` : ""}</p><p>{item.description}</p><div className="detail-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{item.attachmentUrl && <div className="detail-actions"><a href={item.attachmentUrl} target="_blank" rel="noreferrer">{item.attachmentName || labels.viewDocument} ↗</a></div>}</article>)}</section>}
    {kind === "certificates" && <section className="detail-grid">{display.certificates.map(certificate => <article className="detail-card resume-detail" key={certificate.title}><p className="detail-kicker">{labels.certificate}</p><h2>{certificate.title}</h2><strong>{certificate.issuer}</strong>{certificate.date && <p>{certificate.date}</p>}{certificate.credentialUrl && <div className="detail-actions"><a href={certificate.credentialUrl} target="_blank" rel="noreferrer">{certificate.attachmentName || labels.viewDocument} ↗</a></div>}</article>)}</section>}
    <footer className="detail-footer"><a href="/">{labels.returnHome}</a></footer>
    </div>
  </main>;
}
