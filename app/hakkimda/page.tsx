import DetaySayfasi from "../DetaySayfasi";
import { getPublishedSiteConfig } from "../../lib/published-site-config";
import { getServerLocale } from "../../lib/server-locale";
export const dynamic = "force-dynamic";
export default async function Hakkimda() { return <DetaySayfasi kind="about" initialSite={await getPublishedSiteConfig()} initialLocale={await getServerLocale()} />; }
