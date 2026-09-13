import { revalidateTag } from "next/cache";
import { normalizeSiteConfig } from "../../../lib/site-config";
import { getPublishedSiteConfig, SITE_CONFIG_CACHE_TAG } from "../../../lib/published-site-config";

const ADMIN_EMAIL = "nurdivle72@gmail.com";

function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url: url.replace(/\/$/, ""), key } : null;
}

export async function GET() {
  return Response.json(await getPublishedSiteConfig());
}

export async function PUT(request: Request) {
  const supabase = supabaseConfig();
  if (!supabase) return Response.json({ error: "Yönetim hizmeti henüz bağlanmadı." }, { status: 503 });
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return Response.json({ error: "Giriş yapmanız gerekiyor." }, { status: 401 });
  const userResponse = await fetch(`${supabase.url}/auth/v1/user`, { headers: { apikey: supabase.key, Authorization: authorization } });
  const user = userResponse.ok ? await userResponse.json() as { email?: string } : null;
  if (user?.email?.toLowerCase() !== ADMIN_EMAIL) return Response.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 });
  const raw = await request.text();
  if (raw.length > 3_500_000) return Response.json({ error: "Kaydedilecek içerik çok büyük. Dosyaları küçültün veya bağlantı ekleyin." }, { status: 413 });
  try {
    const config = normalizeSiteConfig(JSON.parse(raw));
    const saveResponse = await fetch(`${supabase.url}/rest/v1/site_settings?on_conflict=key`, {
      method: "POST",
      headers: { apikey: supabase.key, Authorization: authorization, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify([{ key: "portfolio", value: config, updated_at: new Date().toISOString() }]),
    });
    if (!saveResponse.ok) throw new Error("Ayarlar yazılamadı");
    revalidateTag(SITE_CONFIG_CACHE_TAG, { expire: 0 });
    return Response.json(config);
  } catch {
    return Response.json({ error: "Ayarlar kaydedilemedi." }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";
