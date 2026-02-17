import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Support — Whisker" };

export default function Support() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto max-w-4xl py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-6 leading-tight">
            Support & Contact
          </h1>
          <p className="text-xl text-warmgray-600 leading-relaxed">
            We're here to help. For questions, feedback, or data requests, use the contacts below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cocoa-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">General</div>
                  <a href={`mailto:${SITE.contactEmail}`} className="text-cocoa-500 hover:text-cocoa-700">{SITE.contactEmail}</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cocoa-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">Support</div>
                  <a href={`mailto:${SITE.supportEmail}`} className="text-cocoa-500 hover:text-cocoa-700">{SITE.supportEmail}</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cocoa-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <div className="font-medium text-charcoal-900">Privacy</div>
                  <a href={`mailto:${SITE.privacyEmail}`} className="text-cocoa-500 hover:text-cocoa-700">{SITE.privacyEmail}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">Company Information</h2>
            <div className="space-y-4 text-warmgray-600">
              <div>
                <div className="font-medium text-charcoal-900">Legal Entity</div>
                <div>{SITE.company}</div>
              </div>
              <div>
                <div className="font-medium text-charcoal-900">Mailing Address</div>
                <div>{SITE.address}</div>
              </div>
              <div>
                <div className="font-medium text-charcoal-900">Response Time</div>
                <div>We reply within 2 business days</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">Quick FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Is Whisker a substitute for a vet?</h3>
              <p className="text-warmgray-600">No. Whisker provides educational guidance only. For emergencies, contact a licensed veterinarian immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">How do I request data deletion?</h3>
              <p className="text-warmgray-600">
                Email <a href={`mailto:${SITE.privacyEmail}`} className="text-cocoa-500 underline">{SITE.privacyEmail}</a> with 
                "Data Deletion Request" in the subject line. We'll process your request within 30 days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Need more help?</h3>
              <p className="text-warmgray-600">
                Visit our main <a href="/#faq" className="text-cocoa-500 underline">FAQ section</a> or 
                read our <Link href="/privacy" className="text-cocoa-500 underline">Privacy Policy</Link> for detailed information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
