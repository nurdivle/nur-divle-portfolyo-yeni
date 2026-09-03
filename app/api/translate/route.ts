const MAX_TEXT_LENGTH = 4_000;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { text?: unknown; target?: unknown };
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const target = body.target === "tr" || body.target === "en" ? body.target : null;
    if (!text || !target) return Response.json({ error: "Çevrilecek metin ve dil gerekli." }, { status: 400 });
    if (text.length > MAX_TEXT_LENGTH) return Response.json({ error: "Metin en fazla 4.000 karakter olabilir." }, { status: 413 });
    const url = new URL("https://translate.googleapis.com/translate_a/single");
    url.searchParams.set("client", "gtx");
    url.searchParams.set("sl", "auto");
    url.searchParams.set("tl", target);
    url.searchParams.set("dt", "t");
    url.searchParams.set("q", text);
    const response = await fetch(url, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(10_000) });
    if (!response.ok) throw new Error("Çeviri hizmeti yanıt vermedi.");
    const payload = await response.json() as Array<Array<[string]>>;
    const translation = Array.isArray(payload?.[0]) ? payload[0].map(part => part?.[0] || "").join("").trim() : "";
    if (!translation) throw new Error("Çeviri oluşturulamadı.");
    return Response.json({ translation });
  } catch {
    return Response.json({ error: "Çeviri şu anda kullanılamıyor; metin değiştirilmedi." }, { status: 502 });
  }
}

export const dynamic = "force-dynamic";
