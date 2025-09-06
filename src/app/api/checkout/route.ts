import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PAYMENTS } from '@/lib/payments.config';

// Expect STRIPE_SECRET_KEY in env (set in your hosting provider)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const {
      productName = PAYMENTS.product.name,
      color = 'Charcoal Black',
      size = undefined,
      quantity = 1,
      success_url = `${req.nextUrl.origin}/pre-order?status=success`,
      cancel_url = `${req.nextUrl.origin}/pre-order?status=cancelled`,
      metadata = {},
    } = body || {};

    // Enforce server-side pricing to prevent tampering
    const unitAmount = PAYMENTS.stripe.unitAmount;
    const safeQuantity = Math.max(1, Math.min(10, Number(quantity) || 1));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'us_bank_account', 'link'],
      allow_promotion_codes: true,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ', 'IE', 'DE', 'FR', 'ES', 'IT'] },
      submit_type: 'pay',
      line_items: [
        {
          quantity: safeQuantity,
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name: productName,
              description: [color, size].filter(Boolean).join(' · '),
            },
          },
        },
      ],
      success_url,
      cancel_url,
      metadata: {
        color,
        size: size || '',
        unit_amount: String(unitAmount),
        quantity: String(safeQuantity),
        ...metadata,
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message || 'Checkout error' }, { status: 500 });
  }
}


