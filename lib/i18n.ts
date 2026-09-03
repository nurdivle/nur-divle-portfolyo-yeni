import type { SiteConfig } from "./site-config";

export type Locale = "en" | "tr";

export const ui = {
  en: {
    mainNavigation: "Main navigation", viewResume: "View my resume", contactMe: "Contact me", developingAreas: "Areas I am developing", educationDetails: "Education details", viewSkills: "View all skills", viewCertificates: "View certificates", education: "Education", experience: "Experience", certificate: "Certificate", viewDocument: "View document", learnMore: "Learn more", liveSite: "Live site", returnHome: "← Return to home", projectIntro: "In every project, I balance user experience, measurable results, and a sustainable technical structure.", educationIntro: "My education and experience are collected here.", certificatesIntro: "Explore my certificates and my commitment to continuous learning.", aboutBody: "I focus on building a strong foundation while learning, examining questions carefully, and reinforcing knowledge through practice.", curious: "Curious", openToLearning: "Open to learning", organized: "Organized", plannedProgress: "Planned progress", analytical: "Analytical", dataDrivenThinking: "Data-driven thinking",
  },
  tr: {
    mainNavigation: "Ana menü", viewResume: "Özgeçmişimi Gör", contactMe: "Benimle İletişime Geç", developingAreas: "Geliştirdiğim Alanlar", educationDetails: "Eğitim detayları", viewSkills: "Tüm yetkinlikler", viewCertificates: "Sertifikaları incele", education: "Eğitim", experience: "Deneyim", certificate: "Sertifika", viewDocument: "Belgeyi görüntüle", learnMore: "Detaylı bilgi", liveSite: "Canlı site", returnHome: "← Ana sayfaya dön", projectIntro: "Her projede kullanıcı deneyimi, ölçülebilir sonuçlar ve sürdürülebilir teknik yapı arasında denge kuruyorum.", educationIntro: "Eğitim ve deneyim bilgilerim burada yer alıyor.", certificatesIntro: "Sertifikalarımı ve sürekli öğrenmeye verdiğim önemi burada bulabilirsin.", aboutBody: "Öğrenirken sağlam bir temel kurmaya, soruları dikkatle incelemeye ve bilgiyi uygulamayla pekiştirmeye odaklanıyorum.", curious: "Meraklı", openToLearning: "Öğrenmeye açık", organized: "Düzenli", plannedProgress: "Planlı ilerleme", analytical: "Analitik", dataDrivenThinking: "Veriyle düşünme",
  },
} as const;

export function localizeSiteConfig(site: SiteConfig, locale: Locale): SiteConfig {
  const localized = (value: string, pair?: { tr?: string; en?: string }) => {
    const manual = pair?.[locale]?.trim();
    return manual || pair?.tr?.trim() || value;
  };
  const tr = site.translations;
  return {
    ...site,
    name: localized(site.name, tr.name), greeting: localized(site.greeting, tr.greeting), tagline: localized(site.tagline, tr.tagline), bio: localized(site.bio, tr.bio), city: localized(site.city, tr.city), aboutText: localized(site.aboutText, tr.aboutText), analysisText: localized(site.analysisText, tr.analysisText), skillsText: localized(site.skillsText, tr.skillsText), contactText: localized(site.contactText, tr.contactText),
    navItems: site.navItems.map((item, index) => ({ ...item, label: tr.navItems?.[index]?.[locale]?.trim() || tr.navItems?.[index]?.tr?.trim() || item.label })),
    customPages: site.customPages.map((page, index) => ({ ...page, title: localized(page.title, tr.customPages?.[index]?.title), content: localized(page.content, tr.customPages?.[index]?.content) })),
    skills: site.skills.map((item, index) => localized(item, tr.skills?.[index])), methods: site.methods.map((item, index) => localized(item, tr.methods?.[index])),
    projects: site.projects.map((project, index) => ({ ...project, title: localized(project.title, tr.projects?.[index]?.title), text: localized(project.text, tr.projects?.[index]?.text), tags: project.tags.map((tag, tagIndex) => localized(tag, tr.projects?.[index]?.tags?.[tagIndex])) })),
    education: site.education.map((entry, index) => ({ ...entry, title: localized(entry.title, tr.education?.[index]?.title), organization: localized(entry.organization, tr.education?.[index]?.organization), period: localized(entry.period, tr.education?.[index]?.period), location: entry.location ? localized(entry.location, tr.education?.[index]?.location) : "", description: localized(entry.description, tr.education?.[index]?.description), tags: entry.tags.map((tag, tagIndex) => localized(tag, tr.education?.[index]?.tags?.[tagIndex])) })),
    experience: site.experience.map((entry, index) => ({ ...entry, title: localized(entry.title, tr.experience?.[index]?.title), organization: localized(entry.organization, tr.experience?.[index]?.organization), period: localized(entry.period, tr.experience?.[index]?.period), location: entry.location ? localized(entry.location, tr.experience?.[index]?.location) : "", description: localized(entry.description, tr.experience?.[index]?.description), tags: entry.tags.map((tag, tagIndex) => localized(tag, tr.experience?.[index]?.tags?.[tagIndex])) })),
    certificates: site.certificates.map((certificate, index) => ({ ...certificate, title: localized(certificate.title, tr.certificates?.[index]?.title), issuer: localized(certificate.issuer, tr.certificates?.[index]?.issuer), date: localized(certificate.date, tr.certificates?.[index]?.date) })),
    homeHeadings: { resume: localized(site.homeHeadings.resume, tr.homeHeadings?.resume), skills: localized(site.homeHeadings.skills, tr.homeHeadings?.skills), methods: localized(site.homeHeadings.methods, tr.homeHeadings?.methods) },
    detailHeadings: Object.fromEntries(Object.entries(site.detailHeadings).map(([key, heading]) => [key, { kicker: localized(heading.kicker, tr.detailHeadings?.[key as keyof typeof tr.detailHeadings]?.kicker), title: localized(heading.title, tr.detailHeadings?.[key as keyof typeof tr.detailHeadings]?.title) }])) as SiteConfig["detailHeadings"],
    detailCardHeadings: { about: localized(site.detailCardHeadings.about, tr.detailCardHeadings?.about), analysis: localized(site.detailCardHeadings.analysis, tr.detailCardHeadings?.analysis), skills: localized(site.detailCardHeadings.skills, tr.detailCardHeadings?.skills), contact: localized(site.detailCardHeadings.contact, tr.detailCardHeadings?.contact) },
  };
}
