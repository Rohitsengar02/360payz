"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-950 text-white border-t border-white/5 pt-20 pb-10">
      <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-6 gap-8 pb-12">
        {/* Brand Col */}
        <div className="col-span-2 space-y-4">
          <Logo isDark={true} className="inline-block scale-75 origin-left" />
          <p className="text-xs text-white/55 leading-relaxed max-w-xs">
            Empowering Indian businesses and professionals to pay vendors instantly using their existing credit line. Highly secure and built to RBI guidelines.
          </p>
          <div className="flex gap-4 pt-2">
            {[
              { name: "Instagram", url: "https://www.instagram.com/360payz?igsh=MWNndzJ2azFlenh0eA%3D%3D&utm_source=qr" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/aman-tomar-6b843b411?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
              { name: "Facebook", url: "https://www.facebook.com/share/17Zn3nAuWZ/?mibextid=wwXIfr" },
              { name: "YouTube", url: "https://youtube.com/@360payz?si=_uoNC0upw4abbphg" }
            ].map((soc) => (
              <a key={soc.name} href={soc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-primary transition-colors">
                {soc.name}
              </a>
            ))}
          </div>
        </div>

        {/* Sitemaps */}
        <div>
          <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Product</h5>
          <ul className="space-y-2 text-xs text-white/50">
            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/security" className="hover:text-primary transition-colors">Security Suite</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">Workflow</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Company</h5>
          <ul className="space-y-2 text-xs text-white/50">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Resources</h5>
          <ul className="space-y-2 text-xs text-white/50">
            <li><Link href="/#blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/features" className="hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link href="/#faq" className="hover:text-primary transition-colors">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Legal</h5>
          <ul className="space-y-2 text-xs text-white/50">
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
            <li><Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            <li><Link href="/aml" className="hover:text-primary transition-colors">AML Policy</Link></li>
            <li><Link href="/kyc" className="hover:text-primary transition-colors">KYC Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 pt-8 border-t border-white/5 text-center md:text-left md:flex justify-between items-center text-[10px] text-white/30 space-y-4 md:space-y-0">
        <span>&copy; {new Date().getFullYear()} 360payZ. All rights reserved. Registered trademark of 360payZ Technologies.</span>
        <span>Made for businesses and startups in India. Fully compliant with RBI guidelines.</span>
      </div>
    </footer>
  );
}
