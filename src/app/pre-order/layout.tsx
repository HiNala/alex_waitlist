import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pre-Order Whisker Smart Collar | Whisker",
  description: "Pre-order your Whisker Smart Collar with GPS tracking, health monitoring, and AI insights for your pet.",
};

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
