import { SITE } from "@/lib/site";

export const metadata = { title: "Privacy Policy — Whisker" };

export default function Privacy() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto max-w-4xl py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-warmgray-600 leading-relaxed">
            Last updated: February 2026
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-black/5 prose prose-neutral max-w-none">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 2026</p>

      <p>
        {SITE.name} ("we", "us", "our") respects your privacy. This policy explains what we collect, why, and how you can control your information.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li><b>Account & Contact:</b> name, email.</li>
        <li><b>Pet Profile:</b> species, breed, age, preferences, notes.</li>
        <li><b>App Interactions:</b> usage events, device/browser info, approximate location (from IP), cookies.</li>
        <li><b>Support:</b> details you include in messages to us.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>Provide, improve, and personalize guidance and app features.</li>
        <li>Send transactional messages and respond to support requests.</li>
        <li>Maintain safety, debug issues, and prevent abuse.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>Sharing</h2>
      <p>We do not sell your personal information. We may share with service providers (e.g., hosting, analytics, email) under contracts that limit their use to providing services for us. If required by law or to protect rights, we may disclose information.</p>

      <h2>Analytics, Cookies & Tracking</h2>
      <p>We may use privacy-respecting analytics and limited cookies to understand usage and improve the app. You can manage consent via the cookie banner and your browser settings.</p>

      <h2>Data Retention</h2>
      <p>We keep personal data only as long as necessary for the purposes above, then delete or anonymize it.</p>

      <h2>Security</h2>
      <p>We use reasonable safeguards appropriate to the type of data we process. No method of transmission or storage is 100% secure.</p>

      <h2>Your Rights & Choices</h2>
      <ul>
        <li>Access, correct, or delete your information.</li>
        <li>Opt out of non-essential analytics/cookies.</li>
        <li>Unsubscribe from non-transactional emails.</li>
      </ul>

      <h2>Children</h2>
      <p>{SITE.name} is not directed to children under 13. If you believe a child provided data, contact us and we will delete it.</p>

      <h2>Contact & Data Requests</h2>
      <p>
        Email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> or <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> with "Privacy Request" in the subject. We respond within 2 business days.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy. We will post the new date above and, if material, notify you.</p>
        </div>
      </div>
    </div>
  );
}
