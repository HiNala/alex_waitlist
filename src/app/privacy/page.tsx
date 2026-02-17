import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy — Whisker",
  description: "Whisker privacy policy — how we collect, use, and protect your data.",
};

export default function Privacy() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto max-w-3xl px-4 section-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] mb-4 leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#6B6B6B]">Last updated: February 16, 2026</p>
        </div>

        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-card border border-sand-200 prose max-w-none">
          <p>{SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what we collect, why, and how you can control your information.</p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Account &amp; Contact:</strong> name, email address.</li>
            <li><strong>Pet Profile:</strong> species, breed, age, preferences.</li>
            <li><strong>Payment Information:</strong> processed securely by Stripe — we never store card details.</li>
            <li><strong>App Interactions:</strong> usage events, device info, approximate location, cookies.</li>
            <li><strong>Collar &amp; Bowl Data:</strong> GPS location, biometric readings, activity data, feeding data.</li>
            <li><strong>Support:</strong> details you include in messages to us.</li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>Provide, improve, and personalize the Whisker experience.</li>
            <li>Process pre-sale deposits and future payments.</li>
            <li>Send transactional messages and respond to support requests.</li>
            <li>Maintain safety, debug issues, and prevent abuse.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>Sharing</h2>
          <p>We do not sell your personal information. We may share with service providers under contracts that limit their use to providing services for us.</p>

          <h2>Analytics, Cookies &amp; Tracking</h2>
          <p>We may use privacy-respecting analytics and limited cookies. You can manage consent via the cookie banner and browser settings.</p>

          <h2>Data Retention</h2>
          <p>We keep personal data only as long as necessary, then delete or anonymize it.</p>

          <h2>Security</h2>
          <p>All payment data is handled by Stripe with PCI DSS compliance. We use reasonable safeguards appropriate to the data we process.</p>

          <h2>Your Rights</h2>
          <ul>
            <li>Access, correct, or delete your information.</li>
            <li>Opt out of non-essential analytics/cookies.</li>
            <li>Unsubscribe from non-transactional emails.</li>
            <li>Request a refund of your pre-sale deposit within 30 days.</li>
          </ul>

          <h2>Children</h2>
          <p>{SITE.name} is not directed to children under 13.</p>

          <h2>Contact</h2>
          <p>Email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> with &ldquo;Privacy Request&rdquo; in the subject. We respond within 2 business days.</p>

          <h2>Changes</h2>
          <p>We may update this policy. We will post the new date above and, if material, notify you.</p>
        </div>
      </div>
    </div>
  );
}
