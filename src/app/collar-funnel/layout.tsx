import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Order Whisker Smart Collar - Fun Experience | Whisker",
  description: "Experience our fun, personalized ordering process for the Whisker Smart Collar. Perfect for your pet!",
};

export default function CollarFunnelLayout({
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
