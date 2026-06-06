"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function PricingPage() {

  const tiers = [
    {
      name: "Starter",
      rate: "2%",
      desc: "For small businesses & freelance professionals",
      features: [
        "Up to ₹2,00,000 monthly volume",
        "Instant IMPS settlements",
        "Standard KYC onboarding",
        "Cashback on all transactions",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      rate: "1.8%",
      desc: "For growing SMEs & mid-market firms",
      features: [
        "Up to ₹15,00,000 monthly volume",
        "Instant priority settlements",
        "Dedicated Account Executive",
        "Cashback on all transactions",
        "WhatsApp & phone support",
        "Custom API integrations",
      ],
      popular: true,
    },
  ];

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
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">TRANSPARENT PRICING</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Simple, Volume-Based Plans</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          No hidden fees, setup costs, or annual charges. Pay only for the payouts you process.
        </p>
      </div>

      {/* Pricing Tiers Grid */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {tiers.map((t, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 relative overflow-hidden border flex flex-col justify-between h-full shadow-sm ${t.popular
                ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/5"
                : "border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all"
              }`}
          >
            {t.popular && (
              <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">{t.name}</h3>
                <p className="text-xs text-neutral-500 mt-1">{t.desc}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-neutral-900">{t.rate}</span>
                {t.rate !== "Custom" && <span className="text-xs text-neutral-500">/ txn fee</span>}
              </div>

              <div className="border-t border-neutral-200 pt-6 space-y-3">
                {t.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <Check className={`h-4.5 w-4.5 flex-shrink-0 mt-0.5 ${t.popular ? "text-primary" : "text-emerald-600"}`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>





      <Footer />
    </div>
  );
}
