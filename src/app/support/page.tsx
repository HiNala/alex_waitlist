import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Support — Whisker",
  description: "Get help with Whisker products, pre-orders, and account questions.",
};

export default function Support() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <section className="bg-charcoal-900 text-white py-14 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
            Support &amp; Contact
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            Fast, human support for pre-orders, refunds, setup questions, and product guidance.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <a href={`mailto:${SITE.supportEmail}`} className="bg-white border border-sand-200 rounded-xl p-4 text-center hover:border-cocoa-300 transition-colors">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">Support</div>
            <div className="text-sm font-medium text-charcoal-900">{SITE.supportEmail}</div>
          </a>
          <a href={`mailto:${SITE.contactEmail}`} className="bg-white border border-sand-200 rounded-xl p-4 text-center hover:border-cocoa-300 transition-colors">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">General</div>
            <div className="text-sm font-medium text-charcoal-900">{SITE.contactEmail}</div>
          </a>
          <a href={`mailto:${SITE.privacyEmail}`} className="bg-white border border-sand-200 rounded-xl p-4 text-center hover:border-cocoa-300 transition-colors">
            <div className="text-xs uppercase tracking-wider text-warmgray-500 mb-1">Privacy</div>
            <div className="text-sm font-medium text-charcoal-900">{SITE.privacyEmail}</div>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-sand-200/30">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cocoa-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">General Inquiries</div>
                  <a href={`mailto:${SITE.contactEmail}`} className="text-cocoa-500 hover:text-cocoa-700 transition-colors">{SITE.contactEmail}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cocoa-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">Product Support</div>
                  <a href={`mailto:${SITE.supportEmail}`} className="text-cocoa-500 hover:text-cocoa-700 transition-colors">{SITE.supportEmail}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cocoa-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">Privacy &amp; Data</div>
                  <a href={`mailto:${SITE.privacyEmail}`} className="text-cocoa-500 hover:text-cocoa-700 transition-colors">{SITE.privacyEmail}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-sand-200/30">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">Company</h2>
            <div className="space-y-5 text-warmgray-600">
              <div>
                <div className="font-medium text-charcoal-900">Legal Entity</div>
                <div>{SITE.company}</div>
              </div>
              <div>
                <div className="font-medium text-charcoal-900">Response Time</div>
                <div>We reply within 2 business days</div>
              </div>
              <div>
                <div className="font-medium text-charcoal-900">Pre-Sale Questions</div>
                <div className="text-sm leading-relaxed">
                  For questions about your deposit, shipping timeline, or refund requests, email{" "}
                  <a href={`mailto:${SITE.supportEmail}`} className="text-cocoa-500 hover:text-cocoa-700 transition-colors">{SITE.supportEmail}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-sand-200/30">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "How does the pre-sale deposit work?",
                a: "You pay a $100 refundable deposit to reserve your unit. The remaining $250 is charged when your product is ready to ship (estimated 3–6 months). You can request a full refund any time before shipment.",
              },
              {
                q: "Is Whisker a substitute for a vet?",
                a: "No. Whisker provides health insights and educational guidance only. For emergencies, contact a licensed veterinarian immediately.",
              },
              {
                q: "How do I request a refund?",
                a: `Email ${SITE.supportEmail} with 'Refund Request' in the subject line. Refunds are processed within 5–10 business days.`,
              },
              {
                q: "Need more help?",
                a: "Visit our blog for product guides, privacy policy for data details, and terms for billing and deposit rules.",
              },
            ].map((item) => (
              <details key={item.q} className="group border border-sand-200 rounded-lg px-4 py-3 bg-cream-50/40">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-charcoal-900 text-sm">{item.q}</h3>
                  <span className="text-cocoa-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-warmgray-600 text-sm leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-sm text-warmgray-600">
            Need policy details? See{" "}
            <Link href="/privacy" className="text-cocoa-500 underline">Privacy</Link>{" "}
            and{" "}
            <Link href="/terms" className="text-cocoa-500 underline">Terms</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
