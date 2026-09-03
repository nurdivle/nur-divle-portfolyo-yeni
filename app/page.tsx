import HomeClient from "./HomeClient";
import { getPublishedSiteConfig } from "../lib/published-site-config";
import { getServerLocale } from "../lib/server-locale";

export const dynamic = "force-dynamic";

export default async function Home() {
  return <HomeClient initialSite={await getPublishedSiteConfig()} initialLocale={await getServerLocale()} />;
}
