"use client";

import { useState } from "react";

interface CheckoutData {
  productName: string;
  color: string;
  size?: string;
  quantity: number;
  price: number;
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
      // TODO: Replace with actual Stripe integration
      console.log("Stripe checkout initiated:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes - replace with actual Stripe checkout
      const confirmed = confirm(`Confirm pre-order:\n\n${data.productName}\nColor: ${data.color}\n${data.size ? `Size: ${data.size}\n` : ''}Quantity: ${data.quantity}\nTotal: $${data.price}\n\nProceed to Stripe checkout?`);
      
      if (confirmed) {
        // Here you would typically redirect to Stripe or handle the payment
        alert("🎉 Pre-order successful! You'll receive a confirmation email shortly.");
        onSuccess?.();
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
