import { cookies } from "next/headers";
import type { Locale } from "./i18n";

export async function getServerLocale(): Promise<Locale> {
  return (await cookies()).get("portfolio_locale")?.value === "tr" ? "tr" : "en";
}
