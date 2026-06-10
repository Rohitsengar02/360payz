"use client";

import React from "react";
import Link from "next/link";
import { Shield, ShieldCheck, Lock, Radio, Key, Fingerprint, Eye, ClipboardCheck, ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: "256-bit SSL & TLS 1.3",
    desc: "All network traffic is encrypted using AES-256 standards, ensuring no information is leaked or intercepted during transit."
  },
  {
    icon: Fingerprint,
    title: "Device Binding",
    desc: "We bind your user session to your specific mobile IMEI and browser fingerprint, preventing unauthorized account takeovers."
  },
  {
    icon: Radio,
    title: "IP Address Monitoring",
    desc: "Our systems continuously log and analyze access IPs to flag anomalous geolocations and intercept suspicious activity."
  },
  {
    icon: ShieldCheck,
    title: "360payZ Fraud Engine",
    desc: "An AI-powered module that screens transactions in real-time, matching transaction sizes, patterns, and historical risks."
  },
  {
    icon: Key,
    title: "Card Data Hashing",
    desc: "Card details are never saved on our servers. Card payments are processed through PCI-DSS certified payment partners."
  },
  {
    icon: ClipboardCheck,
    title: "PAN-KYC Name Matching",
    desc: "Transactions require the cardholder name to match the Aadhaar/PAN name on file to prevent proxy card usage."
  },
  {
    icon: Eye,
    title: "Session Control",
    desc: "Automatic session termination after 5 minutes of inactivity combined with real-time browser session verification."
  },
  {
    icon: Shield,
    title: "RBI & Escrow Compliance",
    desc: "Funds are routed through regulated partner bank Escrow accounts, operating in alignment with applicable RBI guidelines for merchant settlements."
  }
];

export default function SecurityPage() {
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
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">SECURITY CENTER</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Bank-Grade Payout Security</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Secured by 360payZ and designed to operate in alignment with applicable RBI guidelines. We prioritize the protection of your finances and identity above all.
        </p>
      </div>

      {/* Security Pillars Grid */}
      <div className="w-full px-6 md:px-12 lg:px-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_PILLARS.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm"
            >
              <div>
                <div className="p-3 bg-primary/10 text-primary rounded-2xl w-fit mb-4">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Architecture Visual Section */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl" />
          
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Under the Hood: 360payZ</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              When a transaction is made on 360payZ, our verification engine runs multiple risk checks. If any parameters fall outside normal ranges, the transaction is immediately locked for multi-factor manual verification.
            </p>

            <div className="space-y-4">
              {[
                { title: "Risk Scoring", text: "Calculates an instant risk probability using geolocation, card type, and transaction velocity." },
                { title: "Tokenized Vaults", desc: "No cardholder details are kept raw. We use industry-standard tokenization protocols." },
                { title: "Penny-Drop Verification", desc: "Before completing the payment, we deposit a mock penny in the Vendor / Supplier Bank Account to verify ownership." }
              ].map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i+1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">{s.title}</h4>
                    <p className="text-xs text-neutral-500">{s.text || s.desc}</p>
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
