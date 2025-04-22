import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Whisker - Join the Waitlist",
  description: "Your pet's personal health advisor, powered by AI. Join our waitlist to get early access.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
        <Script
          async
          data-uid="0f72656b6b"
          src="https://whiskerai.kit.com/0f72656b6b/index.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
