"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function WhyChooseUsPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      {/* Header Banner */}
      <div className="w-full px-6 md:px-12 lg:px-16 text-center mb-16 space-y-4 relative">
        {/* Back Button */}
        <div className="absolute top-0 left-6 md:left-12 lg:left-16 -mt-6 md:-mt-8 z-20">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-primary bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">Our Edge</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Why Choose 360payZ?</h1>
      </div>

      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              icon: "💳",
              title: "Use Your Credit Card for Business Payments",
              desc: "Pay vendors, suppliers, and business expenses directly using your credit card, even when card payments are not accepted."
            },
            {
              icon: "💰",
              title: "Preserve Your Cash Flow",
              desc: "Keep cash in your bank account while meeting payment obligations on time. Improve working capital and manage business finances more effectively."
            },
            {
              icon: "⚡",
              title: "Fast & Hassle-Free Transfers",
              desc: "Transfer funds to vendor bank accounts quickly through a simple and secure process."
            },
            {
              icon: "🎁",
              title: "Earn Credit Card Rewards",
              desc: "Continue earning eligible rewards, points, and other card benefits on valid transactions."
            },
            {
              icon: "🔒",
              title: "Secure & Verified Platform",
              desc: "Every transaction is protected with secure payment technology and mandatory KYC verification."
            },
            {
              icon: "📈",
              title: "Improve Business Flexibility",
              desc: "Handle urgent payments, manage seasonal cash flow needs, and keep operations running smoothly without financial stress."
            },
            {
              icon: "🏦",
              title: "Pay Any Vendor Bank Account",
              desc: "Make payments directly to vendor bank accounts across India without requiring the vendor to accept credit cards."
            },
            {
              icon: "📱",
              title: "Simple Digital Experience",
              desc: "Complete registration, KYC, card addition, and vendor payments through one easy-to-use platform."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-3xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold text-primary tracking-widest block mb-2">Comparison</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">The 360payZ Advantage</h2>
        </div>

        <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 text-center border-b border-neutral-200 bg-neutral-50">
            <div className="p-4 md:p-6 flex items-center justify-center">
              <h3 className="font-bold text-neutral-600 text-sm md:text-base">Traditional Bank Transfer</h3>
            </div>
            <div className="p-4 md:p-6 border-l border-neutral-200 bg-primary/5 text-primary flex items-center justify-center">
              <h3 className="font-extrabold text-lg md:text-xl">360payZ</h3>
            </div>
          </div>

          <div className="divide-y divide-neutral-200">
            {[
              { trad: "Uses bank balance", payz: "Uses credit card" },
              { trad: "No rewards", payz: "Earn rewards" },
              { trad: "Cash flow impact", payz: "Better cash flow" },
              { trad: "Limited flexibility", payz: "More flexibility" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 text-center text-xs md:text-sm">
                <div className="p-4 md:p-6 text-neutral-500 flex items-center justify-center">
                  {row.trad}
                </div>
                <div className="p-4 md:p-6 border-l border-neutral-200 font-bold text-neutral-900 bg-primary/[0.02] flex items-center justify-center">
                  {row.payz}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
