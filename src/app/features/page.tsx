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
    title: "Cashback Wallet Integration",
    detail: "Earn cashback on vendor payments.",
    badge: "Cashback"
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



      </div>
      <Footer />
    </div>
  );
}
