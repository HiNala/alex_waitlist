import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whisker - Join the Waitlist",
  description: "Your pet's personal health advisor, powered by AI. Join our waitlist to get early access.",
  icons: {
    icon: [
      { url: '/logo/icon.svg', type: 'image/svg+xml' },
      { url: '/logo/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logo/icon.png',
    shortcut: '/logo/icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/kit-overrides.css" />
        <link rel="icon" type="image/svg+xml" href="/logo/icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo/icon.png" />
        <link rel="apple-touch-icon" href="/logo/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
