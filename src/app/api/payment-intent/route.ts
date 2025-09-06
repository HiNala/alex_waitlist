import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PAYMENTS } from '@/lib/payments.config';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: '2025-08-27.basil' }) : null;

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const {
      quantity = 1,
      color = 'Charcoal Black',
      size = undefined,
      metadata = {},
    } = body || {};

    const safeQuantity = Math.max(1, Math.min(10, Number(quantity) || 1));
    const amount = PAYMENTS.stripe.unitAmount * safeQuantity;

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: PAYMENTS.stripe.currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        color,
        size: size || '',
        quantity: String(safeQuantity),
        unit_amount: String(PAYMENTS.stripe.unitAmount),
        ...metadata,
      },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (error: any) {
    console.error('Create PaymentIntent error:', error);
    return NextResponse.json({ error: error.message || 'PaymentIntent error' }, { status: 500 });
  }
}


