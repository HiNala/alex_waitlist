import { PRODUCTS } from "@/lib/payments.config";
import CatCollarClient from "./CatCollarClient";

const product = PRODUCTS.catBundle;

export const metadata = {
  title: `${product.shortName} — Whisker`,
  description: product.description,
};

export default function CatCollarPage() {
  return <CatCollarClient />;
}
