export type Project = {
  title: string;
  text: string;
  tags: string[];
  shot: "samarya" | "emlak" | "data";
  liveUrl: string;
  detailUrl: string;
};

export type NavItem = { label: string; href: string; autoPage?: boolean };
export type CustomPage = {
  slug: string;
  title: string;
  content: string;
  titleX: number;
  titleY: number;
  contentX: number;
  contentY: number;
  contentWidth: number;
  textAlign: "left" | "center" | "right";
};
export type ResumeEntry = {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
  attachmentUrl?: string;
  attachmentName?: string;
};
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  attachmentName?: string;
};
export type DetailPageKey = "about" | "projects" | "analysis" | "skills" | "contact" | "education" | "certificates";
export type DetailHeading = { kicker: string; title: string };
export type LanguagePair = { tr?: string; en?: string };
export type TranslatedProject = { title?: LanguagePair; text?: LanguagePair; tags?: LanguagePair[] };
export type TranslatedResumeEntry = { title?: LanguagePair; organization?: LanguagePair; period?: LanguagePair; location?: LanguagePair; description?: LanguagePair; tags?: LanguagePair[] };
export type TranslatedCertificate = { title?: LanguagePair; issuer?: LanguagePair; date?: LanguagePair };
export type SiteTranslations = {
  name?: LanguagePair; greeting?: LanguagePair; tagline?: LanguagePair; bio?: LanguagePair; city?: LanguagePair;
  aboutText?: LanguagePair; analysisText?: LanguagePair; skillsText?: LanguagePair; contactText?: LanguagePair;
  navItems?: LanguagePair[]; skills?: LanguagePair[]; methods?: LanguagePair[];
  projects?: TranslatedProject[]; education?: TranslatedResumeEntry[]; experience?: TranslatedResumeEntry[]; certificates?: TranslatedCertificate[];
  homeHeadings?: { resume?: LanguagePair; skills?: LanguagePair; methods?: LanguagePair };
  detailHeadings?: Partial<Record<DetailPageKey, { kicker?: LanguagePair; title?: LanguagePair }>>;
  detailCardHeadings?: { about?: LanguagePair; analysis?: LanguagePair; skills?: LanguagePair; contact?: LanguagePair };
  customPages?: Array<{ title?: LanguagePair; content?: LanguagePair }>;
};
export type TypographySettings = {
  bodyFont: string;
  headingFont: string;
  headingWeight: number;
  headingStyle: "normal" | "italic";
  heroTitleColor: string;
  heroTitleSize: number;
  sectionTitleColor: string;
  sectionTitleSize: number;
  detailTitleColor: string;
  detailTitleSize: number;
  navColor: string;
  navSize: number;
  bodySize: number;
};
export type LayoutSettings = {
  headerGap: number;
  headerAlign: "flex-start" | "center" | "space-between";
  headerNavX: number;
  headerNavY: number;
  headerBrandX: number;
  headerBrandY: number;
  heroCopyX: number;
  heroCopyY: number;
  heroPortraitX: number;
  heroPortraitY: number;
  projectsX: number;
  projectsY: number;
  featuresX: number;
  featuresY: number;
  contactX: number;
  contactY: number;
  sectionOrder: Array<"hero" | "projects" | "features" | "contact">;
};

export type SiteConfig = {
  name: string;
  greeting: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  city: string;
  accent: string;
  background: string;
  textColor: string;
  mutedColor: string;
  heroImage: string;
  navItems: NavItem[];
  customPages: CustomPage[];
  aboutText: string;
  analysisText: string;
  skillsText: string;
  contactText: string;
  layout: LayoutSettings;
  github: string;
  linkedin: string;
  instagram: string;
  cvUrl: string;
  skills: string[];
  methods: string[];
  projects: Project[];
  education: ResumeEntry[];
  experience: ResumeEntry[];
  certificates: Certificate[];
  homeHeadings: { resume: string; skills: string; methods: string };
  detailHeadings: Record<DetailPageKey, DetailHeading>;
  detailCardHeadings: { about: string; analysis: string; skills: string; contact: string };
  typography: TypographySettings;
  translations: SiteTranslations;
};

export const defaultSiteConfig: SiteConfig = {
  name: "Nur Divle",
  greeting: "Merhaba, ben",
  tagline: "İstatistik Öğrencisi • Stajyer",
  bio: "Ege Üniversitesi İstatistik öğrencisiyim. İstatistik, veri analizi ve Python alanlarında kendimi geliştiriyor; öğrenmeye ve uygulamaya odaklanıyorum.",
  email: "1nurdivle@gmail.com",
  phone: "+90 555 123 45 67",
  city: "İzmir, Türkiye",
  accent: "#e7dec7",
  background: "#070708",
  textColor: "#fffdf7",
  mutedColor: "#c9c1b2",
  heroImage: "/hero-portrait.png",
  navItems: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "Eğitim", href: "/egitim" },
    { label: "Sertifikalar", href: "/sertifikalar" },
    { label: "Yetenekler", href: "/yetenekler" },
    { label: "İletişim", href: "/iletisim" },
  ],
  customPages: [],
  aboutText: "İstatistik eğitimi alırken veri analizi, Python ve SQL alanlarında uygulama yaparak kendimi geliştiriyorum. Öğrenmeye açık, düzenli ve meraklı bir çalışma yaklaşımını benimsiyorum.",
  analysisText: "İstatistik eğitimi kapsamında veri analizi, SQL ve finansal analiz konularında temelimi güçlendiriyorum.",
  skillsText: "İstatistik, Python ve SQL başta olmak üzere veriyle çalışmaya yönelik yetkinliklerimi geliştirmeye devam ediyorum.",
  contactText: "Staj, iş birliği veya bir fikir hakkında konuşmak için bana doğrudan ulaşabilirsin.",
  layout: { headerGap: 26, headerAlign: "space-between", headerNavX: 0, headerNavY: 0, headerBrandX: 0, headerBrandY: 0, heroCopyX: 0, heroCopyY: 0, heroPortraitX: 0, heroPortraitY: 0, projectsX: 0, projectsY: 0, featuresX: 0, featuresY: 0, contactX: 0, contactY: 0, sectionOrder: ["hero", "projects", "features", "contact"] },
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/nur-divle-707685263/",
  instagram: "https://www.instagram.com",
  cvUrl: "/nur-divle-cv.html",
  skills: ["Finansal Analizler", "Satış", "Bankacılık", "Veri Bilimi", "Python", "Proje Yönetimi", "Sorun Çözme", "Matematik", "İstatistiksel Veri Analizi", "SQL", "İstatistik", "Microsoft Excel", "Microsoft Powerpoint", "İş Analizi"],
  methods: ["Veri Analizi", "İstatistiksel Düşünme", "Python ile Programlama", "SQL", "Finansal Analiz"],
  projects: [],
  education: [
    { title: "İstatistik", organization: "Ege Üniversitesi", period: "Eylül 2023 – Haziran 2027", location: "İzmir, Türkiye", description: "Lisans eğitimi", tags: ["İstatistik"] },
  ],
  experience: [
    { title: "İstatistik Öğrencisi", organization: "Ege Üniversitesi", period: "Eylül 2023 – Devam ediyor", location: "İzmir, Türkiye", description: "İstatistik alanındaki eğitimime devam ediyorum.", tags: ["İstatistik", "SQL"] },
  ],
  certificates: [
    { title: "Python Programlama 401", issuer: "Turkcell Geleceği Yazanlar", date: "Ara 2024", credentialUrl: "" },
    { title: "Python Programlama 301", issuer: "Turkcell Geleceği Yazanlar", date: "Ara 2024", credentialUrl: "" },
    { title: "Python Programlama 201", issuer: "Turkcell Geleceği Yazanlar", date: "Ara 2024", credentialUrl: "" },
    { title: "Python Programlama 101", issuer: "Turkcell Geleceği Yazanlar", date: "Ara 2024", credentialUrl: "" },
    { title: "Veri Bilimi İçin İstatistik 101", issuer: "Turkcell Geleceği Yazanlar", date: "Şub 2025", credentialUrl: "" },
    { title: "Veri Bilimi ve Yapay Zekaya Giriş", issuer: "Turkcell Geleceği Yazanlar", date: "Ara 2024", credentialUrl: "" },
    { title: "Proje Yönetimi", issuer: "BTK Akademi", date: "Tem 2024", credentialUrl: "" },
    { title: "ERP Eğitimi", issuer: "GİLTAS A.Ş.", date: "Mar 2024", credentialUrl: "" },
  ],
  homeHeadings: { resume: "Özgeçmiş Özeti", skills: "Yetkinlikler", methods: "Gelişim Alanları" },
  detailHeadings: {
    about: { kicker: "Hakkımda", title: "İstatistikle öğreniyor, veriyle gelişiyorum." },
    projects: { kicker: "Projeler", title: "Ürettiğim dijital deneyimler." },
    analysis: { kicker: "İstatistik & Veri Analizi", title: "Veriyi karar için anlamlı hâle getiriyorum." },
    skills: { kicker: "Yetenekler", title: "Analizden yayına uzanan teknik set." },
    contact: { kicker: "İletişim", title: "Birlikte bir şeyler geliştirelim." },
    education: { kicker: "Eğitim & Deneyim", title: "Akademik yolculuğum." },
    certificates: { kicker: "Sertifikalar", title: "Tamamladığım eğitimler." },
  },
  detailCardHeadings: { about: "Çalışma yaklaşımım", analysis: "Çalışma alanları", skills: "Kullandığım teknolojiler", contact: "İletişime geç" },
  typography: { bodyFont: "Arial, Helvetica, sans-serif", headingFont: "Arial, Helvetica, sans-serif", headingWeight: 650, headingStyle: "normal", heroTitleColor: "#fffdf7", heroTitleSize: 82, sectionTitleColor: "#fffdf7", sectionTitleSize: 22, detailTitleColor: "#fffdf7", detailTitleSize: 78, navColor: "#d5d2d9", navSize: 14, bodySize: 15 },
  translations: {},
};

const builtInPaths = new Set(["/", "/hakkimda", "/projeler", "/istatistik-veri-analizi", "/yetenekler", "/iletisim", "/egitim", "/sertifikalar"]);

export function toMenuPath(value: string) {
  const slug = value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug ? `/${slug}` : "/yeni-menu";
}

export function isProjectMenu(item: Pick<NavItem, "label" | "href">) {
  return /proje|project/i.test(`${item.label} ${item.href}`);
}

export function normalizeSiteConfig(value: unknown): SiteConfig {
  if (!value || typeof value !== "object") return defaultSiteConfig;
  const candidate = value as Partial<SiteConfig>;
  const hasDemoProjects = Array.isArray(candidate.projects) && candidate.projects.some(project => /Samarya|Emlak Platformu|DataMach/i.test(project?.title || ""));
  const needsResumeMigration = hasDemoProjects || !Array.isArray(candidate.education);
  const profile = needsResumeMigration ? { ...candidate, tagline: defaultSiteConfig.tagline, bio: defaultSiteConfig.bio, navItems: defaultSiteConfig.navItems, aboutText: defaultSiteConfig.aboutText, analysisText: defaultSiteConfig.analysisText, skillsText: defaultSiteConfig.skillsText, contactText: defaultSiteConfig.contactText, skills: defaultSiteConfig.skills, methods: defaultSiteConfig.methods, projects: [], education: defaultSiteConfig.education, experience: defaultSiteConfig.experience, certificates: defaultSiteConfig.certificates } : candidate;
  const safeAttachment = (value: unknown) => typeof value === "string" && (value.startsWith("data:") ? value.length <= 1_500_000 : value.length <= 1_000) ? value : "";
  const resumeEntries = (entries: unknown, fallback: ResumeEntry[]) => Array.isArray(entries) ? entries.filter((item): item is ResumeEntry => Boolean(item && typeof item.title === "string" && typeof item.organization === "string" && typeof item.period === "string")).slice(0, 12).map(item => ({ title: item.title.slice(0, 160), organization: item.organization.slice(0, 160), period: item.period.slice(0, 100), location: typeof item.location === "string" ? item.location.slice(0, 160) : "", description: typeof item.description === "string" ? item.description.slice(0, 1_000) : "", tags: Array.isArray(item.tags) ? item.tags.filter((tag): tag is string => typeof tag === "string").slice(0, 12) : [], attachmentUrl: safeAttachment(item.attachmentUrl), attachmentName: typeof item.attachmentName === "string" ? item.attachmentName.slice(0, 160) : "" })) : fallback;
  const certificates = (entries: unknown) => {
    const saved = Array.isArray(entries) ? entries.filter((item): item is Certificate => Boolean(item && typeof item.title === "string" && typeof item.issuer === "string")).slice(0, 20).map(item => ({ title: item.title.slice(0, 160), issuer: item.issuer.slice(0, 160), date: typeof item.date === "string" ? item.date.slice(0, 100) : "", credentialUrl: safeAttachment(item.credentialUrl), attachmentName: typeof item.attachmentName === "string" ? item.attachmentName.slice(0, 160) : "" })) : [];
    return [...saved, ...defaultSiteConfig.certificates.filter(item => !saved.some(current => current.title === item.title))].slice(0, 20);
  };
  const safeColor = (value: unknown, fallback: string) => typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
  const pair = (value: unknown, limit = 4_000): LanguagePair | undefined => {
    if (!value || typeof value !== "object") return undefined;
    const candidate = value as LanguagePair;
    const tr = typeof candidate.tr === "string" ? candidate.tr.slice(0, limit) : undefined;
    const en = typeof candidate.en === "string" ? candidate.en.slice(0, limit) : undefined;
    return tr !== undefined || en !== undefined ? { tr, en } : undefined;
  };
  const pairList = (value: unknown, limit = 30, textLimit = 4_000) => Array.isArray(value) ? value.slice(0, limit).map(item => pair(item, textLimit) || {}) : [];
  const detailHeadings = Object.fromEntries((Object.keys(defaultSiteConfig.detailHeadings) as DetailPageKey[]).map(key => {
    const saved = profile.detailHeadings?.[key]; const fallback = defaultSiteConfig.detailHeadings[key];
    return [key, { kicker: typeof saved?.kicker === "string" ? saved.kicker.slice(0, 100) : fallback.kicker, title: typeof saved?.title === "string" ? saved.title.slice(0, 220) : fallback.title }];
  })) as Record<DetailPageKey, DetailHeading>;
  const navItems = Array.isArray(profile.navItems) ? profile.navItems.filter((item): item is NavItem => Boolean(item && typeof item.label === "string" && typeof item.href === "string" && item.label.trim() && item.href.trim())).slice(0, 12).map(item => {
    const label = item.label.trim();
    const requestedPath = item.href.trim();
    const href = requestedPath.toLowerCase() === "/anasayfa" ? "/" : (requestedPath.startsWith("/") && /^\/[a-z0-9-]+$/i.test(requestedPath) ? requestedPath.toLowerCase() : toMenuPath(requestedPath.replace(/^\//, "") || label));
    return { label, href, autoPage: item.autoPage === true };
  }) : defaultSiteConfig.navItems;
  const savedCustomPages = Array.isArray(profile.customPages) ? profile.customPages : [];
  const customPages: CustomPage[] = navItems
    .filter(item => !builtInPaths.has(item.href) && !isProjectMenu(item))
    .map(item => {
      const slug = item.href.slice(1);
      const saved = savedCustomPages.find(page => page && typeof page.slug === "string" && toMenuPath(page.slug) === item.href);
      return {
        slug,
        title: typeof saved?.title === "string" && saved.title.trim() ? saved.title.slice(0, 160) : item.label,
        content: typeof saved?.content === "string" ? saved.content.slice(0, 4_000) : "Bu sayfanın içeriğini yönetim panelinden güncelleyebilirsin.",
        titleX: typeof saved?.titleX === "number" ? Math.max(-240, Math.min(240, saved.titleX)) : 0,
        titleY: typeof saved?.titleY === "number" ? Math.max(-160, Math.min(160, saved.titleY)) : 0,
        contentX: typeof saved?.contentX === "number" ? Math.max(-240, Math.min(240, saved.contentX)) : 0,
        contentY: typeof saved?.contentY === "number" ? Math.max(-160, Math.min(160, saved.contentY)) : 0,
        contentWidth: typeof saved?.contentWidth === "number" ? Math.max(320, Math.min(1100, saved.contentWidth)) : 760,
        textAlign: saved?.textAlign === "center" || saved?.textAlign === "right" ? saved.textAlign : "left",
      };
    });
  return {
    ...defaultSiteConfig,
    ...profile,
    name: typeof profile.name === "string" && profile.name.trim() ? profile.name.trim().slice(0, 80) : defaultSiteConfig.name,
    skills: Array.isArray(profile.skills) ? profile.skills.filter((item): item is string => typeof item === "string").slice(0, 30) : defaultSiteConfig.skills,
    methods: Array.isArray(profile.methods) ? profile.methods.filter((item): item is string => typeof item === "string").slice(0, 30) : defaultSiteConfig.methods,
    heroImage: typeof profile.heroImage === "string" && profile.heroImage.length <= 800_000 ? profile.heroImage : defaultSiteConfig.heroImage,
    navItems,
    customPages,
    aboutText: typeof profile.aboutText === "string" ? profile.aboutText.slice(0, 4_000) : defaultSiteConfig.aboutText,
    analysisText: typeof profile.analysisText === "string" ? profile.analysisText.slice(0, 4_000) : defaultSiteConfig.analysisText,
    skillsText: typeof profile.skillsText === "string" ? profile.skillsText.slice(0, 4_000) : defaultSiteConfig.skillsText,
    contactText: typeof profile.contactText === "string" ? profile.contactText.slice(0, 4_000) : defaultSiteConfig.contactText,
    layout: {
      ...defaultSiteConfig.layout,
      ...(profile.layout && typeof profile.layout === "object" ? profile.layout : {}),
      headerGap: typeof profile.layout?.headerGap === "number" ? Math.max(0, Math.min(80, profile.layout.headerGap)) : defaultSiteConfig.layout.headerGap,
      headerNavX: typeof profile.layout?.headerNavX === "number" ? Math.max(-240, Math.min(240, profile.layout.headerNavX)) : 0,
      headerNavY: typeof profile.layout?.headerNavY === "number" ? Math.max(-80, Math.min(80, profile.layout.headerNavY)) : 0,
      headerBrandX: typeof profile.layout?.headerBrandX === "number" ? Math.max(-240, Math.min(240, profile.layout.headerBrandX)) : 0,
      headerBrandY: typeof profile.layout?.headerBrandY === "number" ? Math.max(-80, Math.min(80, profile.layout.headerBrandY)) : 0,
      heroCopyX: typeof profile.layout?.heroCopyX === "number" ? Math.max(-180, Math.min(180, profile.layout.heroCopyX)) : 0,
      heroCopyY: typeof profile.layout?.heroCopyY === "number" ? Math.max(-180, Math.min(180, profile.layout.heroCopyY)) : 0,
      heroPortraitX: typeof profile.layout?.heroPortraitX === "number" ? Math.max(-180, Math.min(180, profile.layout.heroPortraitX)) : 0,
      heroPortraitY: typeof profile.layout?.heroPortraitY === "number" ? Math.max(-180, Math.min(180, profile.layout.heroPortraitY)) : 0,
      projectsX: typeof profile.layout?.projectsX === "number" ? Math.max(-180, Math.min(180, profile.layout.projectsX)) : 0,
      projectsY: typeof profile.layout?.projectsY === "number" ? Math.max(-180, Math.min(180, profile.layout.projectsY)) : 0,
      featuresX: typeof profile.layout?.featuresX === "number" ? Math.max(-180, Math.min(180, profile.layout.featuresX)) : 0,
      featuresY: typeof profile.layout?.featuresY === "number" ? Math.max(-180, Math.min(180, profile.layout.featuresY)) : 0,
      contactX: typeof profile.layout?.contactX === "number" ? Math.max(-180, Math.min(180, profile.layout.contactX)) : 0,
      contactY: typeof profile.layout?.contactY === "number" ? Math.max(-180, Math.min(180, profile.layout.contactY)) : 0,
      headerAlign: profile.layout?.headerAlign === "flex-start" || profile.layout?.headerAlign === "center" || profile.layout?.headerAlign === "space-between" ? profile.layout.headerAlign : defaultSiteConfig.layout.headerAlign,
      sectionOrder: Array.isArray(profile.layout?.sectionOrder) && profile.layout.sectionOrder.length === 4 && profile.layout.sectionOrder.every(item => item === "hero" || item === "projects" || item === "features" || item === "contact") ? profile.layout.sectionOrder : defaultSiteConfig.layout.sectionOrder,
    },
    projects: Array.isArray(profile.projects) ? profile.projects.filter((item): item is Project => Boolean(item && typeof item.title === "string" && typeof item.text === "string")).slice(0, 12).map(item => ({ title: item.title.slice(0, 160), text: item.text.slice(0, 1_000), tags: Array.isArray(item.tags) ? item.tags.filter((tag): tag is string => typeof tag === "string").slice(0, 12) : [], shot: item.shot === "samarya" || item.shot === "emlak" || item.shot === "data" ? item.shot : "data", liveUrl: typeof item.liveUrl === "string" ? item.liveUrl.slice(0, 1_000) : "", detailUrl: typeof item.detailUrl === "string" ? item.detailUrl.slice(0, 1_000) : "" })) : defaultSiteConfig.projects,
    education: resumeEntries(profile.education, defaultSiteConfig.education),
    experience: resumeEntries(profile.experience, defaultSiteConfig.experience),
    certificates: certificates(profile.certificates),
    homeHeadings: {
      resume: typeof profile.homeHeadings?.resume === "string" ? profile.homeHeadings.resume.slice(0, 120) : defaultSiteConfig.homeHeadings.resume,
      skills: typeof profile.homeHeadings?.skills === "string" ? profile.homeHeadings.skills.slice(0, 120) : defaultSiteConfig.homeHeadings.skills,
      methods: typeof profile.homeHeadings?.methods === "string" ? profile.homeHeadings.methods.slice(0, 120) : defaultSiteConfig.homeHeadings.methods,
    },
    detailHeadings,
    detailCardHeadings: {
      about: typeof profile.detailCardHeadings?.about === "string" ? profile.detailCardHeadings.about.slice(0, 120) : defaultSiteConfig.detailCardHeadings.about,
      analysis: typeof profile.detailCardHeadings?.analysis === "string" ? profile.detailCardHeadings.analysis.slice(0, 120) : defaultSiteConfig.detailCardHeadings.analysis,
      skills: typeof profile.detailCardHeadings?.skills === "string" ? profile.detailCardHeadings.skills.slice(0, 120) : defaultSiteConfig.detailCardHeadings.skills,
      contact: typeof profile.detailCardHeadings?.contact === "string" ? profile.detailCardHeadings.contact.slice(0, 120) : defaultSiteConfig.detailCardHeadings.contact,
    },
    translations: {
      name: pair(profile.translations?.name, 80), greeting: pair(profile.translations?.greeting, 160), tagline: pair(profile.translations?.tagline, 240), bio: pair(profile.translations?.bio), city: pair(profile.translations?.city, 160),
      aboutText: pair(profile.translations?.aboutText), analysisText: pair(profile.translations?.analysisText), skillsText: pair(profile.translations?.skillsText), contactText: pair(profile.translations?.contactText),
      navItems: pairList(profile.translations?.navItems, 12, 120), skills: pairList(profile.translations?.skills, 30, 160), methods: pairList(profile.translations?.methods, 30, 160),
      projects: Array.isArray(profile.translations?.projects) ? profile.translations.projects.slice(0, 12).map(item => ({ title: pair(item?.title, 160), text: pair(item?.text, 1_000), tags: pairList(item?.tags, 12, 120) })) : [],
      education: Array.isArray(profile.translations?.education) ? profile.translations.education.slice(0, 12).map(item => ({ title: pair(item?.title, 160), organization: pair(item?.organization, 160), period: pair(item?.period, 100), location: pair(item?.location, 160), description: pair(item?.description, 1_000), tags: pairList(item?.tags, 12, 120) })) : [],
      experience: Array.isArray(profile.translations?.experience) ? profile.translations.experience.slice(0, 12).map(item => ({ title: pair(item?.title, 160), organization: pair(item?.organization, 160), period: pair(item?.period, 100), location: pair(item?.location, 160), description: pair(item?.description, 1_000), tags: pairList(item?.tags, 12, 120) })) : [],
      certificates: Array.isArray(profile.translations?.certificates) ? profile.translations.certificates.slice(0, 20).map(item => ({ title: pair(item?.title, 160), issuer: pair(item?.issuer, 160), date: pair(item?.date, 100) })) : [],
      homeHeadings: { resume: pair(profile.translations?.homeHeadings?.resume, 120), skills: pair(profile.translations?.homeHeadings?.skills, 120), methods: pair(profile.translations?.homeHeadings?.methods, 120) },
      detailHeadings: Object.fromEntries((Object.keys(defaultSiteConfig.detailHeadings) as DetailPageKey[]).map(key => [key, { kicker: pair(profile.translations?.detailHeadings?.[key]?.kicker, 100), title: pair(profile.translations?.detailHeadings?.[key]?.title, 220) }])),
      detailCardHeadings: { about: pair(profile.translations?.detailCardHeadings?.about, 120), analysis: pair(profile.translations?.detailCardHeadings?.analysis, 120), skills: pair(profile.translations?.detailCardHeadings?.skills, 120), contact: pair(profile.translations?.detailCardHeadings?.contact, 120) },
      customPages: Array.isArray(profile.translations?.customPages) ? profile.translations.customPages.slice(0, 12).map(item => ({ title: pair(item?.title, 160), content: pair(item?.content, 4_000) })) : [],
    },
    typography: {
      ...defaultSiteConfig.typography,
      ...(profile.typography && typeof profile.typography === "object" ? profile.typography : {}),
      bodyFont: typeof profile.typography?.bodyFont === "string" ? profile.typography.bodyFont.slice(0, 100) : defaultSiteConfig.typography.bodyFont,
      headingFont: typeof profile.typography?.headingFont === "string" ? profile.typography.headingFont.slice(0, 100) : defaultSiteConfig.typography.headingFont,
      headingWeight: typeof profile.typography?.headingWeight === "number" ? Math.max(300, Math.min(900, profile.typography.headingWeight)) : defaultSiteConfig.typography.headingWeight,
      headingStyle: profile.typography?.headingStyle === "italic" ? "italic" : "normal",
      heroTitleColor: safeColor(profile.typography?.heroTitleColor, defaultSiteConfig.typography.heroTitleColor),
      heroTitleSize: typeof profile.typography?.heroTitleSize === "number" ? Math.max(38, Math.min(128, profile.typography.heroTitleSize)) : defaultSiteConfig.typography.heroTitleSize,
      sectionTitleColor: safeColor(profile.typography?.sectionTitleColor, defaultSiteConfig.typography.sectionTitleColor),
      sectionTitleSize: typeof profile.typography?.sectionTitleSize === "number" ? Math.max(16, Math.min(52, profile.typography.sectionTitleSize)) : defaultSiteConfig.typography.sectionTitleSize,
      detailTitleColor: safeColor(profile.typography?.detailTitleColor, defaultSiteConfig.typography.detailTitleColor),
      detailTitleSize: typeof profile.typography?.detailTitleSize === "number" ? Math.max(34, Math.min(110, profile.typography.detailTitleSize)) : defaultSiteConfig.typography.detailTitleSize,
      navColor: safeColor(profile.typography?.navColor, defaultSiteConfig.typography.navColor),
      navSize: typeof profile.typography?.navSize === "number" ? Math.max(11, Math.min(24, profile.typography.navSize)) : defaultSiteConfig.typography.navSize,
      bodySize: typeof profile.typography?.bodySize === "number" ? Math.max(12, Math.min(24, profile.typography.bodySize)) : defaultSiteConfig.typography.bodySize,
    },
  };
}
