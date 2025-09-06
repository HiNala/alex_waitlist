"use client";

import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function FooterVisibility() {
  const pathname = usePathname();
  if (pathname === "/collar-funnel") {
    return null;
  }
  return <Footer />;
}


