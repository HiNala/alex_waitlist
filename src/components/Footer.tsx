import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand-200 bg-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo/Whisker_button_logo.svg" alt="Whisker" width={64} height={64} />
              <div className="font-serif text-2xl text-charcoal-900">Whisker</div>
            </div>
            <p className="text-warmgray-600 leading-relaxed max-w-md">
              {SITE.description}
            </p>
          </div>

          <div>
            <div className="font-semibold text-charcoal-900 mb-4">Product</div>
            <ul className="space-y-3 text-warmgray-600">
              <li><a href="#features" className="hover:text-cocoa-700 transition-colors">Features</a></li>
              <li><a href="#device" className="hover:text-cocoa-700 transition-colors">Device</a></li>
              <li><a href="#preview" className="hover:text-cocoa-700 transition-colors">App Preview</a></li>
              <li><a href="#faq" className="hover:text-cocoa-700 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-charcoal-900 mb-4">Company</div>
            <ul className="space-y-3 text-warmgray-600">
              <li><Link href="/support" className="hover:text-cocoa-700 transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-cocoa-700 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-cocoa-700 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sand-200 mt-12 pt-8 text-center text-sm text-warmgray-600">
          © {new Date().getFullYear()} {SITE.company}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
