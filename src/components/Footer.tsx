import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#2C1810] text-white/80">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo/Whisker_button_logo.svg" alt="Whisker" width={48} height={48} />
              <div className="font-serif text-2xl text-white">Whisker</div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md text-sm">
              Smart pet technology for the pets you love most.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/products/dog-collar" className="hover:text-white transition-colors">Dog</Link></li>
              <li><Link href="/products/cat-collar" className="hover:text-white transition-colors">Cat</Link></li>
              <li><Link href="/app" className="hover:text-white transition-colors">App</Link></li>
              <li><Link href="/pre-order" className="hover:text-white transition-colors">Pre-Order</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pre-order" className="hover:text-white transition-colors">Reserve now</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.</span>
          <span>Pre-sale deposits are $100 of $350 total.</span>
        </div>
      </div>
    </footer>
  );
}
