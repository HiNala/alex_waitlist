"use client";
import { useState } from "react";
import StripeCheckout from "./StripeCheckout";
import DepositBadge from "./DepositBadge";
import { cn } from "@/lib/utils";

interface PreOrderSectionProps {
  productName: string;
  productSlug: string;
  deposit: number;
  retailPrice: number;
  colors: Array<{ id: string; name: string; tailwind: string }>;
  sizes?: Array<{ id: string; name: string; range: string; forBreeds?: string }>;
}

export default function PreOrderSection({
  productName,
  productSlug,
  deposit,
  retailPrice,
  colors,
  sizes,
}: PreOrderSectionProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.id || "");
  const [selectedSize, setSelectedSize] = useState(sizes?.[1]?.id || sizes?.[0]?.id || "");
  const [quantity, setQuantity] = useState(1);

  const selectedColorName = colors.find((c) => c.id === selectedColor)?.name || colors[0]?.name;
  const selectedSizeName = sizes?.find((s) => s.id === selectedSize)?.name;
  const totalDeposit = deposit * quantity;

  const checkoutData = {
    productName: `${productName} — Pre-Order Deposit`,
    color: selectedColorName,
    size: selectedSizeName,
    quantity,
    price: totalDeposit,
    metadata: {
      productSlug,
      deposit: "true",
      remainingBalance: String((retailPrice - deposit) * quantity),
    },
  };

  return (
    <div id="pre-order" className="scroll-mt-24">
      <div className="bg-white rounded-lg border border-sand-200 p-8 shadow-card">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h3 className="font-serif text-3xl text-[#1A1A1A] font-bold mb-3">Reserve yours</h3>
            <DepositBadge deposit={deposit} retailPrice={retailPrice} />
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <label className="font-semibold text-xs text-[#1A1A1A] uppercase tracking-widest">Color</label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-btn border-2 transition-all focus-ring",
                    selectedColor === color.id
                      ? "border-cocoa-700 bg-cocoa-50"
                      : "border-[#E5E5E5] hover:border-cocoa-300"
                  )}
                >
                  <div className={cn("w-8 h-8 rounded-full shadow-sm", color.tailwind)} />
                  <span className="text-xs font-medium text-[#1A1A1A]">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          {sizes && (
            <div className="space-y-3">
              <label className="font-semibold text-xs text-[#1A1A1A] uppercase tracking-widest">Size</label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={cn(
                      "p-3 rounded-btn border-2 text-center transition-all focus-ring",
                      selectedSize === size.id
                        ? "border-cocoa-700 bg-cocoa-50"
                        : "border-[#E5E5E5] hover:border-cocoa-300"
                    )}
                  >
                    <div className="font-semibold text-sm text-[#1A1A1A]">{size.name}</div>
                    <div className="text-xs text-[#9CA3AF]">{size.range}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-3">
            <label className="font-semibold text-xs text-[#1A1A1A] uppercase tracking-widest">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-btn border border-[#E5E5E5] hover:border-cocoa-700 flex items-center justify-center transition-colors focus-ring"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
              </button>
              <span className="text-xl font-semibold text-[#1A1A1A] min-w-[2rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className="w-10 h-10 rounded-btn border border-[#E5E5E5] hover:border-cocoa-700 flex items-center justify-center transition-colors focus-ring"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </button>
            </div>
          </div>

          {/* Checkout */}
          <div className="space-y-4 pt-2">
            <StripeCheckout
              data={checkoutData}
              className="w-full btn-primary text-base"
            >
              Reserve Now — ${totalDeposit} Deposit
            </StripeCheckout>

            <div className="text-xs text-[#9CA3AF] text-center space-y-1 leading-relaxed">
              <p>Secure payment via Stripe. Your ${deposit} deposit is fully refundable before shipment.</p>
              <p>Remaining ${(retailPrice - deposit) * quantity} charged when ready to ship.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
