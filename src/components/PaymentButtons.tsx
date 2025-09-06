"use client";

import { useEffect, useMemo, useState } from "react";
import { loadStripe, Stripe, PaymentRequest } from "@stripe/stripe-js";
import { PAYMENTS } from "@/lib/payments.config";

type PaymentButtonsProps = {
  label?: string;
};

export default function PaymentButtons({ label = "Buy with" }: PaymentButtonsProps) {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    async function init() {
      if (!PAYMENTS.stripe.publishableKey) return;
      const stripeJs = await loadStripe(PAYMENTS.stripe.publishableKey);
      setStripe(stripeJs);
    }
    init();
  }, []);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: PAYMENTS.stripe.currency,
      total: {
        label: PAYMENTS.product.name,
        amount: PAYMENTS.stripe.unitAmount,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestShipping: false,
    });

    pr.canMakePayment().then(result => {
      if (result) {
        setPaymentRequest(pr);
        setCanMakePayment(true);
      }
    });
  }, [stripe]);

  if (!canMakePayment || !paymentRequest) {
    return null; // Hidden if Apple/Google Pay not available
  }

  // Use the built-in browser sheet for Apple Pay / Google Pay
  const handleClick = async () => {
    try {
      const result = await paymentRequest.show();
      await paymentRequest.abort();
      console.log("PaymentRequest result:", result);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border border-sand-200 rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:border-cocoa-300 transition-colors"
    >
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm">Apple Pay / Google Pay</span>
    </button>
  );
}


