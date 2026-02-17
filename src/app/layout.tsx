import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import FooterVisibility from "@/components/FooterVisibility";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Whisker — Smart Pet Collars & AI-Powered Pet Care",
    template: "%s | Whisker",
  },
  description: SITE.description,
  openGraph: {
    title: "Whisker — Understand Your Pet Like Never Before",
    description: SITE.description,
    url: SITE.domain,
    siteName: "Whisker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whisker — Smart Pet Collars & AI-Powered Pet Care",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: [
    { rel: "icon", url: "/logo/Whisker_button_logo.svg" },
    { rel: "apple-touch-icon", url: "/logo/Whisker_button_logo.svg" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Whisker",
              url: SITE.domain,
              logo: `${SITE.domain}/logo/Whisker_button_logo.svg`,
              description: SITE.description,
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE.contactEmail,
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-[#1A1A1A] antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-4 py-2 rounded-btn text-cocoa-700 font-medium shadow-lg z-[60] focus-ring"
        >
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
