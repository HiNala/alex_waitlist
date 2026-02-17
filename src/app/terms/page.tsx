import { SITE } from "@/lib/site";

export const metadata = {
  title: "Terms of Service — Whisker",
  description: "Whisker terms of service including pre-sale deposit terms.",
};

export default function Terms() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto max-w-3xl px-4 section-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] mb-4 leading-tight tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-[#6B6B6B]">Last updated: February 16, 2026</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-sand-200 rounded-lg p-4 text-center">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">Deposit</div>
            <div className="text-sm font-semibold text-[#1A1A1A]">${SITE.presale.depositAmount} refundable</div>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-4 text-center">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">Remaining balance</div>
            <div className="text-sm font-semibold text-[#1A1A1A]">${SITE.presale.remainingBalance} at shipment</div>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-4 text-center">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">Lead time</div>
            <div className="text-sm font-semibold text-[#1A1A1A]">{SITE.presale.leadTime}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-card border border-sand-200 prose max-w-none">
          <p>Welcome to {SITE.name}. By using our website or app you agree to these Terms.</p>

          <h2>Use of the Service</h2>
          <p>You may use the Service only for lawful purposes and in accordance with these Terms.</p>

          <h2>Accounts</h2>
          <p>You are responsible for your account credentials and all activity under your account.</p>

          <h2>Content &amp; Intellectual Property</h2>
          <p>The Service, including text, graphics, logos, and software, is owned by {SITE.company} and protected by law.</p>

          <h2>Health Disclaimer</h2>
          <p>{SITE.name} provides general educational information about pet care. It is not a substitute for professional veterinary advice. For emergencies, contact a licensed veterinarian immediately.</p>

          <h2>Pre-Sale Deposit Terms</h2>
          <ul>
            <li><strong>Deposit:</strong> A ${SITE.presale.depositAmount} refundable deposit is collected at pre-order to reserve your unit.</li>
            <li><strong>Retail Price:</strong> Full price is ${SITE.presale.retailPrice}. The remaining ${SITE.presale.remainingBalance} is charged when ready to ship.</li>
            <li><strong>Lead Time:</strong> Estimated {SITE.presale.leadTime}. Subject to change.</li>
            <li><strong>Availability:</strong> Limited to {SITE.presale.unitsPerProduct} units per product ({SITE.presale.totalUnits} total).</li>
            <li><strong>Refunds:</strong> Full refund available any time before shipment. Email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> with &ldquo;Refund Request&rdquo;. Processed in 5–10 business days.</li>
            <li><strong>Cancellation:</strong> If we cannot fulfill your order, you receive a full refund.</li>
          </ul>

          <h2>Payments</h2>
          <p>All payments processed by Stripe. Taxes may apply based on location.</p>

          <h2>Prohibited Activities</h2>
          <ul>
            <li>Reverse engineering, scraping, or automated access;</li>
            <li>Uploading unlawful or harmful content;</li>
            <li>Interfering with security or availability.</li>
          </ul>

          <h2>Disclaimers &amp; Liability</h2>
          <p>The Service is provided &ldquo;as is&rdquo; without warranties. To the maximum extent permitted by law, {SITE.company} is not liable for indirect or consequential damages.</p>

          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws of our principal place of business.</p>

          <h2>Contact</h2>
          <p>Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
        </div>
      </div>
    </div>
  );
}
