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
  UserPlus 
} from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

const FEATURE_LIST = [
  {
    icon: Smartphone,
    title: "Mobile OTP Security",
    detail: "Every transaction is initiated with an encrypted 2FA challenge via SMS. Our system binds to your SIM card to protect you against interception and spoofing.",
    badge: "2FA"
  },

  {
    icon: UserCheck,
    title: "InstaKYC Onboarding",
    detail: "No manual verification delays. Our automated system integrates directly with Digilocker and NSDL to approve your Aadhaar and PAN credentials in seconds.",
    badge: "60s Approval"
  },
  {
    icon: Send,
    title: "Direct Vendor Settlements",
    detail: "Avoid wire delays. Transfer credit card balances directly into any Indian business bank account using IMPS, RTGS, and NEFT payment routing networks.",
    badge: "IMPS/NEFT"
  },
  {
    icon: Zap,
    title: "Cashback Wallet Integration",
    detail: "Earn a cashback on every single vendor payout. Reinvest the accrued cashback to offset transaction fees or withdraw directly to your bank account.",
    badge: "Cashback"
  },

  {
    icon: Bell,
    title: "Real-time Push Alerts",
    detail: "Stay informed on every stage of your transfer. Receive WhatsApp and SMS notifications the second funds leave your card and arrive in the vendor's account.",
    badge: "Push Notifications"
  },
  {
    icon: FileSpreadsheet,
    title: "Tax & Audit Reporting",
    detail: "Easily export PDF/CSV statements. Our reports contain full transaction details, GST breakdowns, and vendor registration numbers, ready for tax filing.",
    badge: "Excel/CSV/PDF"
  }
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

      {/* Feature Details Grid */}
      <div className="w-full px-6 md:px-12 lg:px-16 space-y-16">
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

        {/* Feature Stats / Deep Dive */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900">Transaction Safety Measures</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Every payout processed by 360payZ goes through multi-layered safety gates designed to protect funds and identities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">End-to-End Encryption</h4>
                  <p className="text-[11px] text-neutral-500">All payment details are tokenized and processed over secure SSL connections.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Automatic Retry Protocol</h4>
                  <p className="text-[11px] text-neutral-500">If an IMPS transaction fails, the funds are instantly rolled back to your card limit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserPlus className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Beneficiary Penny Drop Check</h4>
                  <p className="text-[11px] text-neutral-500">We instantly deposit ₹1 in the vendor's account to verify their name before sending your funds.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-neutral-200 rounded-2xl p-6 bg-white/70 space-y-4 relative shadow-inner">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 pb-3 border-b border-neutral-200">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Compliance Framework
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>PCI-DSS Compliance:</span>
                  <span className="text-neutral-900 font-semibold">Certified v4.0</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Data Residency:</span>
                  <span className="text-neutral-900 font-semibold">Hosted within India</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Risk Detection:</span>
                  <span className="text-neutral-900 font-semibold">AI Real-time Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
