import DetaySayfasi from "../DetaySayfasi";
import { getPublishedSiteConfig } from "../../lib/published-site-config";
import { getServerLocale } from "../../lib/server-locale";

export const dynamic = "force-dynamic";

export default async function MyProjectsPage() {
  const site = await getPublishedSiteConfig();
  const locale = await getServerLocale();

  return <DetaySayfasi kind="projects" initialSite={site} initialLocale={locale} />;
}
