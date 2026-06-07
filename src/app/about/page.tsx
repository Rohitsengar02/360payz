"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Calendar, Award, ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">ABOUT US</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Redefining Business Liquidity</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          We are built to empower business owners by converting their credit limits into instant, compliant working capital for vendors.
        </p>
      </div>

      {/* Content Layout */}
      <div className="w-full px-6 md:px-12 lg:px-16 space-y-20">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Story</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Founded in 2026, 360payZ was created to address a critical cash flow gap faced by millions of Indian startups and micro-enterprises. While companies had credit cards, paying vendors, wholesalers, and utility providers who only accepted direct bank transfers remained a challenge.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We designed a secure, 24/7 transaction bridge that utilizes credit card limits and directly credits the recipient's bank account instantly, while maintaining full RBI compliance and offering flat cashbacks.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl relative overflow-hidden text-center shadow-sm">
              <span className="text-6xl block mb-4">💡</span>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Did You Know?</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Small business owners save an average of 45 days in working capital cycles by routing payments through credit lines.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="h-10 w-10 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Mission</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To democratize cash-flow management for small business owners in India by providing a fast, compliant, and rewarding credit-to-bank settlement platform.
            </p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="h-10 w-10 bg-secondary/20 text-emerald-700 rounded-2xl flex items-center justify-center">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Vision</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To build India's largest and most trusted business credit ecosystem, bringing liquidity, flexibility, and financial transparency to every entrepreneur.
            </p>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Strategic Roadmap</h2>
            <p className="text-sm text-neutral-500">Tracking our growth and upcoming feature milestones</p>
          </div>

          <div className="relative border-l border-neutral-200 ml-4 md:ml-8 space-y-12 py-4">
            {[
              { q: "Q1 2026", title: "Platform Launch", desc: "Release of Web portal and instant automated Aadhaar and PAN verification APIs." },
              { q: "Q3 2026", title: "Mobile Apps (iOS & Android)", desc: "Launching high-fidelity native apps on App Store and Play Store with biometric login." },
              { q: "Q3 2026", title: "Automated Tax Filings", desc: "Integrate direct GST, TDS, and advance tax payments using card limits." },
              { q: "Q4 2026", title: "International Vendor Payouts", desc: "Support multi-currency global supplier settlements using local Indian credit cards." }
            ].map((node, i) => (
              <div key={i} className="relative pl-8 md:pl-12 group">
                {/* Node dot */}
                <div className="absolute -left-[9px] top-1 h-4.5 w-4.5 rounded-full border-4 border-white bg-primary group-hover:bg-secondary transition-colors shadow-sm" />
                <span className="text-xs font-bold text-primary block">{node.q}</span>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">{node.title}</h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xl">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory & Compliance Information */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-neutral-200 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="h-16 w-16 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
            <Award className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              RBI Compliant Operations
              <span className="bg-primary/10 text-primary text-[9px] font-extrabold px-2 py-0.5 rounded-full">Built to RBI PA Guidelines</span>
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              360payZ strictly adheres to all regulations set by the Reserve Bank of India for payment aggregators and credit card intermediaries. We employ advanced Escrow accounts with verified banks to ensure your funds are handled securely and disbursed correctly to your vendors.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
