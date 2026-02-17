import { SITE } from "@/lib/site";

export const metadata = { title: "Terms of Service — Whisker" };

export default function Terms() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto max-w-4xl py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-warmgray-600 leading-relaxed">
            Last updated: February 2026
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-black/5 prose prose-neutral max-w-none">
      <h1>Terms of Service</h1>
      <p>Welcome to {SITE.name}. By using our website or app you agree to these Terms.</p>

      <h2>Use of the Service</h2>
      <p>You may use the Service only for lawful purposes and in accordance with these Terms.</p>

      <h2>Accounts</h2>
      <p>You are responsible for your account credentials and for all activity under your account.</p>

      <h2>Content & Intellectual Property</h2>
      <p>The Service, including text, graphics, logos, and software, is owned by {SITE.company} and protected by law. You may not copy, modify, or distribute without permission.</p>

      <h2>Health Disclaimer</h2>
      <p>{SITE.name} provides general educational information about pet care. It is not a substitute for professional veterinary advice, diagnosis, or treatment. For emergencies, contact a licensed veterinarian immediately.</p>

      <h2>Payments & Subscriptions</h2>
      <p>If offered, paid plans will be described at checkout. Taxes may apply. You may cancel future renewals at any time as described in your plan.</p>

      <h2>Prohibited Activities</h2>
      <ul>
        <li>Reverse engineering, scraping, or automated access beyond documented APIs;</li>
        <li>Uploading unlawful, harmful, or infringing content;</li>
        <li>Interfering with security or availability of the Service.</li>
      </ul>

      <h2>Disclaimers & Limitation of Liability</h2>
      <p>The Service is provided "as is" without warranties of any kind. To the maximum extent permitted by law, {SITE.company} is not liable for indirect, incidental, or consequential damages.</p>

      <h2>Termination</h2>
      <p>We may suspend or terminate access for violations of these Terms.</p>

      <h2>Governing Law & Dispute Resolution</h2>
      <p>These Terms are governed by the laws of the state/jurisdiction of our principal place of business. Venue and exclusive jurisdiction lie in those courts. You agree to resolve disputes individually.</p>

      <h2>Contact</h2>
      <p>Questions? Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
        </div>
      </div>
    </div>
  );
}
