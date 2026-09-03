import DetaySayfasi from "../DetaySayfasi";
import { getPublishedSiteConfig } from "../../lib/published-site-config";
import { getServerLocale } from "../../lib/server-locale";

export const dynamic = "force-dynamic";
export default async function EgitimPage() { return <DetaySayfasi kind="education" initialSite={await getPublishedSiteConfig()} initialLocale={await getServerLocale()} />; }
