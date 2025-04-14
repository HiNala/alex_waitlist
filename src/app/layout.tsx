import "./globals.css";
import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
