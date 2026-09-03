import type { SiteConfig } from "./site-config";

export type Locale = "en" | "tr";

const english: Record<string, string> = {
  "Merhaba, ben": "Hello, I'm",
  "İstatistik Öğrencisi • Stajyer": "Statistics Student • Intern",
  "Ege Üniversitesi İstatistik öğrencisiyim. İstatistik, veri analizi ve Python alanlarında kendimi geliştiriyor; öğrenmeye ve uygulamaya odaklanıyorum.": "I am a Statistics student at Ege University. I am developing my skills in statistics, data analysis, and Python, with a focus on learning and practical application.",
  "İzmir, Türkiye": "Izmir, Turkey",
  "İstatistik eğitimi alırken veri analizi, Python ve SQL alanlarında uygulama yaparak kendimi geliştiriyorum. Öğrenmeye açık, düzenli ve meraklı bir çalışma yaklaşımını benimsiyorum.": "While studying statistics, I develop my skills in data analysis, Python, and SQL through practical work. I bring an open-minded, organized, and curious approach to learning.",
  "İstatistik eğitimi kapsamında veri analizi, SQL ve finansal analiz konularında temelimi güçlendiriyorum.": "Through my statistics education, I am strengthening my foundation in data analysis, SQL, and financial analysis.",
  "İstatistik, Python ve SQL başta olmak üzere veriyle çalışmaya yönelik yetkinliklerimi geliştirmeye devam ediyorum.": "I continue to develop my data-focused skills, especially in statistics, Python, and SQL.",
  "Staj, iş birliği veya bir fikir hakkında konuşmak için bana doğrudan ulaşabilirsin.": "Feel free to contact me to discuss an internship, collaboration, or an idea.",
  "Özgeçmiş Özeti": "Resume Overview",
  "Yetkinlikler": "Skills",
  "Gelişim Alanları": "Areas of Growth",
  "Hakkımda": "About Me",
  "İstatistikle öğreniyor, veriyle gelişiyorum.": "Learning through statistics, growing through data.",
  "Projeler": "Projects",
  "Ürettiğim dijital deneyimler.": "Digital experiences I create.",
  "İstatistik & Veri Analizi": "Statistics & Data Analysis",
  "Veriyi karar için anlamlı hâle getiriyorum.": "Turning data into meaningful decisions.",
  "Yetenekler": "Skills",
  "Analizden yayına uzanan teknik set.": "A technical toolkit from analysis to delivery.",
  "İletişim": "Contact",
  "Birlikte bir şeyler geliştirelim.": "Let's build something together.",
  "Eğitim & Deneyim": "Education & Experience",
  "Akademik yolculuğum.": "My academic journey.",
  "Eğitim": "Education",
  "Sertifikalar": "Certificates",
  "Tamamladığım eğitimler.": "Training I have completed.",
  "Çalışma yaklaşımım": "My approach to work",
  "Çalışma alanları": "Focus areas",
  "Kullandığım teknolojiler": "Technologies I use",
  "İletişime geç": "Get in touch",
  "Ana Sayfa": "Home",
  "İstatistik": "Statistics",
  "Finansal Analiz": "Financial Analysis",
  "Satış": "Sales",
  "Bankacılık": "Banking",
  "Veri Bilimi": "Data Science",
  "Proje Yönetimi": "Project Management",
  "Sorun Çözme": "Problem Solving",
  "Matematik": "Mathematics",
  "İstatistiksel Veri Analizi": "Statistical Data Analysis",
  "İş Analizi": "Business Analysis",
  "İstatistiksel Düşünme": "Statistical Thinking",
  "Python ile Programlama": "Python Programming",
  "Ege Üniversitesi": "Ege University",
  "Lisans eğitimi": "Undergraduate education",
  "İstatistik alanındaki eğitimime devam ediyorum.": "Continuing my education in statistics.",
  "İstatistik Öğrencisi": "Statistics Student",
  "Python Programlama 101": "Python Programming 101",
  "Python Programlama 201": "Python Programming 201",
  "Python Programlama 301": "Python Programming 301",
  "Python Programlama 401": "Python Programming 401",
  "Veri Bilimi İçin İstatistik 101": "Statistics for Data Science 101",
  "Veri Bilimi ve Yapay Zekaya Giriş": "Introduction to Data Science and Artificial Intelligence",
  "ERP Eğitimi": "ERP Training",
  "Turkcell Geleceği Yazanlar": "Turkcell Future Writers",
  "BTK Akademi": "BTK Academy",
};

const navigation: Record<string, { en: string; tr: string }> = {
  "/": { en: "Home", tr: "Ana Sayfa" },
  "/hakkimda": { en: "About Me", tr: "Hakkımda" },
  "/projeler": { en: "Projects", tr: "Projeler" },
  "/istatistik-veri-analizi": { en: "Data Analysis", tr: "İstatistik & Veri Analizi" },
  "/yetenekler": { en: "Skills", tr: "Yetenekler" },
  "/iletisim": { en: "Contact", tr: "İletişim" },
  "/egitim": { en: "Education", tr: "Eğitim" },
  "/sertifikalar": { en: "Certificates", tr: "Sertifikalar" },
};

export const ui = {
  en: {
    mainNavigation: "Main navigation", viewResume: "View my resume", contactMe: "Contact me", developingAreas: "Areas I am developing", educationDetails: "Education details", viewSkills: "View all skills", viewCertificates: "View certificates", education: "Education", experience: "Experience", certificate: "Certificate", viewDocument: "View document", learnMore: "Learn more", liveSite: "Live site", returnHome: "← Return to home", projectIntro: "In every project, I balance user experience, measurable results, and a sustainable technical structure.", educationIntro: "My education and experience are collected here.", certificatesIntro: "Explore my certificates and my commitment to continuous learning.", aboutBody: "I focus on building a strong foundation while learning, examining questions carefully, and reinforcing knowledge through practice.", curious: "Curious", openToLearning: "Open to learning", organized: "Organized", plannedProgress: "Planned progress", analytical: "Analytical", dataDrivenThinking: "Data-driven thinking",
  },
  tr: {
    mainNavigation: "Ana menü", viewResume: "Özgeçmişimi Gör", contactMe: "Benimle İletişime Geç", developingAreas: "Geliştirdiğim Alanlar", educationDetails: "Eğitim detayları", viewSkills: "Tüm yetkinlikler", viewCertificates: "Sertifikaları incele", education: "Eğitim", experience: "Deneyim", certificate: "Sertifika", viewDocument: "Belgeyi görüntüle", learnMore: "Detaylı bilgi", liveSite: "Canlı site", returnHome: "← Ana sayfaya dön", projectIntro: "Her projede kullanıcı deneyimi, ölçülebilir sonuçlar ve sürdürülebilir teknik yapı arasında denge kuruyorum.", educationIntro: "Eğitim ve deneyim bilgilerim burada yer alıyor.", certificatesIntro: "Sertifikalarımı ve sürekli öğrenmeye verdiğim önemi burada bulabilirsin.", aboutBody: "Öğrenirken sağlam bir temel kurmaya, soruları dikkatle incelemeye ve bilgiyi uygulamayla pekiştirmeye odaklanıyorum.", curious: "Meraklı", openToLearning: "Öğrenmeye açık", organized: "Düzenli", plannedProgress: "Planlı ilerleme", analytical: "Analitik", dataDrivenThinking: "Veriyle düşünme",
  },
} as const;

const dateWords: Record<string, string> = { "Eylül": "September", "Haziran": "June", "Devam ediyor": "Present", "Ara": "Dec", "Şub": "Feb", "Tem": "Jul", "Ağustos": "August" };

export function translateText(value: string, locale: Locale) {
  if (locale === "tr") return value;
  const trimmed = value.trim();
  return english[trimmed] || value.replace(/Eylül|Haziran|Devam ediyor|Ara|Şub|Tem|Ağustos/g, word => dateWords[word] || word);
}

export function localizeSiteConfig(site: SiteConfig, locale: Locale): SiteConfig {
  const localized = (value: string, pair?: { tr?: string; en?: string }) => {
    const manual = pair?.[locale]?.trim();
    return manual || translateText(value, locale);
  };
  const t = (value: string) => translateText(value, locale);
  const tr = site.translations;
  return {
    ...site,
    name: localized(site.name, tr.name), greeting: localized(site.greeting, tr.greeting), tagline: localized(site.tagline, tr.tagline), bio: localized(site.bio, tr.bio), city: localized(site.city, tr.city), aboutText: localized(site.aboutText, tr.aboutText), analysisText: localized(site.analysisText, tr.analysisText), skillsText: localized(site.skillsText, tr.skillsText), contactText: localized(site.contactText, tr.contactText),
    navItems: site.navItems.map((item, index) => ({ ...item, label: tr.navItems?.[index]?.[locale]?.trim() || (locale === "en" ? navigation[item.href]?.en || t(item.label) : item.label) })),
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
