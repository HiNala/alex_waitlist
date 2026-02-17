import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProductBySlug, PAYMENTS } from '@/lib/payments.config';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured. Set STRIPE_SECRET_KEY in your environment.' }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const {
      productName = PAYMENTS.product.name,
      color = 'Midnight Black',
      size = undefined,
      quantity = 1,
      success_url = `${req.nextUrl.origin}/collar-funnel/success`,
      cancel_url = `${req.nextUrl.origin}/collar-funnel/cancelled`,
      metadata = {},
    } = body || {};

    const productSlug = metadata?.productSlug;
    const product = productSlug ? getProductBySlug(productSlug) : null;

    // Use deposit amount — $100 (10000 cents) per unit
    const unitAmount = product ? product.depositCents : PAYMENTS.stripe.unitAmount;
    const safeQuantity = Math.max(1, Math.min(5, Number(quantity) || 1));

    const displayName = product
      ? `${product.name} — Pre-Sale Deposit`
      : productName;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'link'],
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ', 'IE', 'DE', 'FR', 'ES', 'IT'],
      },
      submit_type: 'pay',
      line_items: [
        {
          quantity: safeQuantity,
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name: displayName,
              description: [
                color,
                size,
                `$100 deposit of $350 retail`,
                `Remaining $250 charged at shipment`,
              ].filter(Boolean).join(' · '),
            },
          },
        },
      ],
      success_url,
      cancel_url,
      metadata: {
        productSlug: productSlug || '',
        deposit: 'true',
        depositAmount: String(unitAmount),
        remainingBalance: product ? String(product.depositCents * 2.5) : '25000',
        color,
        size: size || '',
        quantity: String(safeQuantity),
        ...metadata,
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Checkout error';
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
