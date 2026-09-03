import { notFound } from "next/navigation";
import DetaySayfasi from "../DetaySayfasi";
import OzelSayfa from "../OzelSayfa";
import { isProjectMenu } from "../../lib/site-config";
import { getPublishedSiteConfig } from "../../lib/published-site-config";
import { getServerLocale } from "../../lib/server-locale";

export const dynamic = "force-dynamic";

export default async function DynamicMenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = await getPublishedSiteConfig();
  const menuItem = site.navItems.find(item => item.href === `/${slug}`);
  if (!menuItem) notFound();
  const locale = await getServerLocale();
  if (isProjectMenu(menuItem)) return <DetaySayfasi kind="projects" initialSite={site} initialLocale={locale} />;
  const customPage = site.customPages.find(page => page.slug === slug);
  if (!customPage) notFound();
  return <OzelSayfa slug={slug} initialSite={site} initialLocale={locale} />;
}
