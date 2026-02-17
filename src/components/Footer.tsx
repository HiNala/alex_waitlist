import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 text-white/80">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo/Whisker_button_logo.svg" alt="Whisker" width={40} height={40} className="brightness-0 invert opacity-90" />
              <span className="font-serif text-xl text-white font-bold">Whisker</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Smart pet technology for the pets you love most.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              {["Instagram", "X", "TikTok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-xs text-white/60 font-medium"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="font-semibold text-white text-sm mb-4 tracking-wide">Products</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/products/dog-collar" className="hover:text-white transition-colors">Dog Collar</Link></li>
              <li><Link href="/products/cat-collar" className="hover:text-white transition-colors">Cat Collar + Bowl</Link></li>
              <li><Link href="/app" className="hover:text-white transition-colors">Whisker App</Link></li>
              <li><Link href="/pre-order" className="hover:text-white transition-colors">Pre-Order</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-semibold text-white text-sm mb-4 tracking-wide">Resources</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white text-sm mb-4 tracking-wide">Company</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div>&copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.</div>
            <div className="text-center sm:text-right leading-relaxed max-w-sm">
              Pre-sale deposits are $100 of $350 total. Remaining balance charged at shipment.
              Deposits are fully refundable before shipping.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
