"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Smartphone, 
  Mail, 
  UserCheck, 
  Send, 
  Zap, 
  Bot, 
  Bell, 
  FileSpreadsheet, 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  UserPlus,
  CheckCircle2,
  XCircle
} from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

const FEATURE_LIST = [
  {
    icon: UserCheck,
    title: "InstaKYC Onboarding",
    detail: "No manual verification delays. Our automated system integrates directly with Digilocker and NSDL to approve your Aadhaar and PAN credentials in seconds.",
    badge: "60s Approval"
  },
  {
    icon: Send,
    title: "Direct Vendor Settlements",
    detail: "Avoid wire delays. Transfer credit card balances directly into any Indian business bank account using different settlement options.",
    badge: "Bank Transfer"
  },
  {
    icon: Zap,
    title: "Card Rewards Integration",
    detail: "Earn eligible rewards on vendor payments.",
    badge: "Rewards"
  },
  {
    icon: Bell,
    title: "Real-time Push Alerts",
    detail: "Stay informed on every stage of your transfer. Receive WhatsApp notifications and dedicated help & support the second funds leave your card.",
    badge: "Push Notifications"
  },
  {
    icon: FileSpreadsheet,
    title: "Tax & Audit Reporting",
    detail: "Easily export PDF/CSV statements. Our reports contain full transaction details, GST breakdowns, and vendor registration numbers, ready for tax filing.",
    badge: "Excel/CSV/PDF"
  }
];

const WHY_CHOOSE_US = [
  {
    title: "💳 Use Your Credit Card for Business Payments",
    desc: "Pay vendors, suppliers, and business expenses directly using your credit card, even when card payments are not accepted."
  },
  {
    title: "💰 Preserve Your Cash Flow",
    desc: "Keep cash in your bank account while meeting payment obligations on time. Improve working capital and manage business finances more effectively."
  },
  {
    title: "⚡ Fast & Hassle-Free Transfers",
    desc: "Transfer funds to vendor bank accounts quickly through a simple and secure process."
  },
  {
    title: "🎁 Earn Credit Card Rewards",
    desc: "Continue earning reward points, cashback, and other card benefits on eligible transactions."
  },
  {
    title: "🔒 Secure & Verified Platform",
    desc: "Every transaction is protected with secure payment technology and mandatory KYC verification."
  },
  {
    title: "📈 Improve Business Flexibility",
    desc: "Handle urgent payments, manage seasonal cash flow needs, and keep operations running smoothly without financial stress."
  },
  {
    title: "🏦 Pay Any Vendor Bank Account",
    desc: "Make payments directly to vendor bank accounts across India without requiring the vendor to accept credit cards."
  },
  {
    title: "📱 Simple Digital Experience",
    desc: "Complete registration, KYC, card addition, and vendor payments through one easy-to-use platform."
  }
];

const COMPARISON = [
  { traditional: "Uses bank balance", payz: "Uses credit card" },
  { traditional: "No rewards", payz: "Earn rewards" },
  { traditional: "Cash flow impact", payz: "Better cash flow" },
  { traditional: "Limited flexibility", payz: "More flexibility" },
];

export default function FeaturesPage() {
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
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">PRODUCT FEATURES</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Full-Suite Vendor Payout Features</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Explore the features engineered to make credit card vendor payments fast, secure, and compliant.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 space-y-24">
        {/* Feature Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURE_LIST.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm"
            >
              <div className="absolute top-4 right-4 text-[10px] font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {feat.badge}
              </div>
              <div className="h-12 w-12 rounded-2xl bg-secondary/20 border border-secondary/30 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <feat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{feat.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{feat.detail}</p>
            </div>
          ))}
        </div>

        {/* Why Choose 360PayZ Section */}
        <div className="space-y-12 pt-8 border-t border-neutral-200">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold text-primary tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Why Choose 360PayZ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">{item.title.split(" ")[0]}</span>
                  <span>{item.title.substring(item.title.indexOf(" ") + 1)}</span>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="space-y-12 pt-8 border-t border-neutral-200">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">The 360PayZ Advantage</h2>
            <p className="text-sm text-neutral-500 max-w-lg mx-auto">
              This makes your value proposition obvious.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-neutral-50 border-b border-neutral-200 p-6 text-sm md:text-base">
              <div className="font-bold text-neutral-500">Traditional Bank Transfer</div>
              <div className="font-extrabold text-primary flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                360PayZ
              </div>
            </div>
            <div className="divide-y divide-neutral-100">
              {COMPARISON.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-6 hover:bg-neutral-50/50 transition-colors">
                  <div className="flex items-center gap-3 text-neutral-600">
                    <XCircle className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span className="text-sm font-medium">{row.traditional}</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-900 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">{row.payz}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
