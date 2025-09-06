export const metadata = {
  title: "Order Whisker Smart Collar - Fun Experience | Whisker",
  description: "Experience our fun, personalized ordering process for the Whisker Smart Collar. Perfect for your pet!",
};

export default function CollarFunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use root layout header/footer to avoid double headers.
  return children;
}
