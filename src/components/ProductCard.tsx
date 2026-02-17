"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  deposit: number;
  href: string;
  badge?: string;
}

export default function ProductCard({
  imageSrc,
  title,
  description,
  price,
  deposit,
  href,
  badge,
}: ProductCardProps) {
  const isFree = price === 0;
  const isFreeApp = isFree && deposit === 0;
  const ctaText = isFreeApp ? "Learn More →" : `Reserve — $${deposit} Deposit`;

  return (
    <motion.div
      className="group relative bg-white rounded-lg border border-sand-200 overflow-hidden shadow-card flex flex-col h-full"
      whileHover={{
        y: -4,
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10 bg-cocoa-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {badge}
        </div>
      )}

      <div className="relative h-56 w-full bg-cream-50 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-sans text-2xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-base font-normal text-[#6B6B6B] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-baseline gap-2 mb-6">
          <span className="font-sans text-2xl font-semibold text-[#1A1A1A]">
            {isFree ? "Free" : `$${price}`}
          </span>
          {!isFree && (
            <span className="text-sm text-[#6B6B6B]">retail</span>
          )}
        </div>

        <Link
          href={href}
          className="block w-full text-center bg-cocoa-700 hover:bg-cocoa-500 text-white font-semibold py-3 px-6 rounded-btn transition-all duration-200 hover:shadow-lg"
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
}
