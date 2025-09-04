import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand-200/50 bg-transparent relative">
      <div className="container mx-auto px-4 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 lg:gap-14">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/logo/Whisker_button_logo.svg" alt="Whisker" width={64} height={64} />
              <div className="font-serif text-3xl text-charcoal-900">Whisker</div>
            </div>
            <p className="text-sm text-charcoal-700 leading-relaxed mb-4 max-w-xl">
            {SITE.description}
          </p>
            <p className="text-xs text-warmgray-600 leading-relaxed">
            Medical disclaimer: Whisker provides general educational information and is not a substitute for professional veterinary advice, diagnosis, or treatment. For emergencies, contact a licensed veterinarian immediately.
          </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-charcoal-900 mb-4 tracking-wide">Product</div>
            <ul className="space-y-3 text-charcoal-700">
              <li><a href="#features" className="hover:text-cocoa-500 transition-colors">Features</a></li>
              <li><a href="#device" className="hover:text-cocoa-500 transition-colors">Smart Collar</a></li>
              <li><a href="#preview" className="hover:text-cocoa-500 transition-colors">App Preview</a></li>
              <li><a href="#faq" className="hover:text-cocoa-500 transition-colors">FAQ</a></li>
            </ul>

            <div className="mt-8">
              <div className="text-sm font-semibold text-charcoal-900 mb-4 tracking-wide">Company</div>
              <ul className="space-y-3 text-charcoal-700">
                <li><Link href="/support" className="hover:text-cocoa-500 transition-colors">Support</Link></li>
                <li><Link href="/privacy" className="hover:text-cocoa-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-cocoa-500 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-charcoal-900 mb-4 tracking-wide">Download App</div>
            <div className="space-y-4">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={160} height={48} className="h-10 sm:h-11 w-auto" />
              </a>
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <Image src="/images/google-play-badge.svg" alt="Get it on Google Play" width={160} height={48} className="h-10 sm:h-11 w-auto" />
              </a>
              <div className="text-xs text-warmgray-600 mt-2">Coming soon</div>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-6 border-t border-sand-200/50">
              <div className="text-sm font-semibold text-charcoal-900 mb-3 tracking-wide">Contact</div>
              <div className="text-xs text-charcoal-700 space-y-2">
                <div>Email: <a href={`mailto:${SITE.contactEmail}`} className="hover:text-cocoa-500">{SITE.contactEmail}</a></div>
                <div>Support: <a href={`mailto:${SITE.supportEmail}`} className="hover:text-cocoa-500">{SITE.supportEmail}</a></div>
                <div className="text-warmgray-600">Response: 2 business days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-sand-200/50 py-6 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-sm text-charcoal-700">
            © {new Date().getFullYear()} {SITE.company}. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
