import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nur Divle — Statistics & Data Analysis",
  description: "Nur Divle's portfolio for statistics, data analysis, and software development.",
  openGraph: {
    title: "Nur Divle — Statistics & Data Analysis",
    description: "Portfolio for statistics, data analysis, and software development.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
