import { PRODUCTS } from "@/lib/payments.config";
import DogCollarClient from "./DogCollarClient";

const product = PRODUCTS.dogCollar;

export const metadata = {
  title: `${product.shortName} — Whisker`,
  description: product.description,
};

export default function DogCollarPage() {
  return <DogCollarClient />;
}
