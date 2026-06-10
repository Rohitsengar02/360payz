"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <Navbar />
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16 text-center mb-16 space-y-4 relative">
        {/* Back Button */}
        <div className="absolute top-0 left-6 md:left-12 lg:left-16 -mt-16 z-20">
          <Link href="/" className="flex items-center w-max gap-2 text-sm font-bold text-neutral-700 hover:text-primary bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">Simple Workflow</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">How it works</h1>
        <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
          Follow our simple onboarding process to start secure vendor payments in just a few minutes.
        </p>
      </div>

      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 max-w-7xl mx-auto">
        {/* Full-width Colorful Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch w-full">
            {[
              { step: "01", title: "Registration", desc: "Create your account using your mobile number and email address.", bg: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200", iconBg: "bg-blue-100 text-blue-700", text: "text-blue-950", bgNum: "text-blue-500/10 group-hover:text-blue-500/20" },
              { step: "02", title: "Complete KYC", desc: "Verify your identity securely using Aadhaar and PAN details.", bg: "bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200", iconBg: "bg-purple-100 text-purple-700", text: "text-purple-950", bgNum: "text-purple-500/10 group-hover:text-purple-500/20" },
              { step: "03", title: "Add Credit Card", desc: "Link your credit card through our secure verification process.", bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200", iconBg: "bg-emerald-100 text-emerald-700", text: "text-emerald-950", bgNum: "text-emerald-500/10 group-hover:text-emerald-500/20" },
              { step: "04", title: "Vendor Payment", desc: "Transfer funds securely to vendor bank accounts and track transactions in real time.", bg: "bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200", iconBg: "bg-amber-100 text-amber-700", text: "text-amber-950", bgNum: "text-amber-500/10 group-hover:text-amber-500/20" },
            ].map((s, idx) => (
              <div key={idx} className={`${s.bg} border p-6 lg:p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-center h-full min-h-[200px]`}>
                <span className={`absolute top-4 right-4 text-4xl lg:text-5xl font-black transition-colors ${s.bgNum}`}>{s.step}</span>
                <h4 className={`text-sm lg:text-base font-bold mb-2 ${s.text}`}>{s.title}</h4>
                <p className="text-xs lg:text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
