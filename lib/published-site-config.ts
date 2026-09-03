import { defaultSiteConfig, normalizeSiteConfig, type SiteConfig } from "./site-config";

export async function getPublishedSiteConfig(): Promise<SiteConfig> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return defaultSiteConfig;
  try {
    const response = await fetch(`${url}/rest/v1/site_settings?key=eq.portfolio&select=value`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    if (!response.ok) return defaultSiteConfig;
    const rows = await response.json() as Array<{ value?: unknown }>;
    return rows[0]?.value ? normalizeSiteConfig(rows[0].value) : defaultSiteConfig;
  } catch {
    return defaultSiteConfig;
  }
}
