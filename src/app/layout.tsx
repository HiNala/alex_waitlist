import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/site";
import FooterVisibility from "@/components/FooterVisibility";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif", 
  weight: ["600", "700"] 
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "Whisker — Personalized care for one-of-a-kind pets",
  description: SITE.description,
  openGraph: {
    title: "Whisker",
    description: SITE.description,
    url: SITE.domain,
    siteName: "Whisker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whisker",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: [
    { rel: "icon", url: "/logo/Whisker_button_logo.svg" },
    { rel: "apple-touch-icon", url: "/logo/Whisker_button_logo.svg" }
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-warmgray-600 antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-2 rounded">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <FooterVisibility />
        <CookieBanner />
      </body>
    </html>
  );
}