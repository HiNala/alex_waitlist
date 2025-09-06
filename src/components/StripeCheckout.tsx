"use client";

import { useState } from "react";

interface CheckoutData {
  productName: string;
  color: string;
  size?: string;
  quantity: number;
  price: number;
  success_url?: string;
  cancel_url?: string;
  metadata?: Record<string, string | number | boolean>;
  customerInfo?: {
    petName?: string;
    petBreed?: string;
  };
}

interface StripeCheckoutProps {
  data: CheckoutData;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
  children: React.ReactNode;
}

export default function StripeCheckout({ 
  data, 
  onSuccess, 
  onError, 
  className = "",
  children 
}: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Checkout failed');

      if (json?.url) {
        window.location.href = json.url as string;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error("Checkout error:", error);
      onError?.("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          <span>Processing...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
