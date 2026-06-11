"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const STEPS = [
  {
    step: "01",
    title: "Registration",
    bullets: [
      "Open the 360payZ app or website.",
      "Enter your mobile number.",
      "Receive a verification OTP on your registered WhatsApp number.",
      "Enter the OTP and verify your mobile number.",
      "Your account registration is successfully completed."
    ],
    bg: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200",
    text: "text-blue-950",
    bgNum: "text-blue-500/10 group-hover:text-blue-500/20"
  },
  {
    step: "02",
    title: "PAN Verification",
    bullets: [
      "Enter your PAN number.",
      "Verify your PAN details through our secure verification process.",
      "Confirm your identity information.",
      "Upon successful verification, proceed to the next step."
    ],
    bg: "bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200",
    text: "text-purple-950",
    bgNum: "text-purple-500/10 group-hover:text-purple-500/20"
  },
  {
    step: "03",
    title: "Aadhaar Verification",
    bullets: [
      "Choose Aadhaar OTP Verification or DigiLocker Verification.",
      "Enter your Aadhaar number or sign in to DigiLocker.",
      "Complete the verification process and provide the required consent.",
      "Your identity details are securely verified.",
      "Your KYC process is successfully completed."
    ],
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200",
    text: "text-emerald-950",
    bgNum: "text-emerald-500/10 group-hover:text-emerald-500/20"
  },
  {
    step: "04",
    title: "Dashboard Access",
    bullets: [
      "Access your personalized 360payZ dashboard.",
      "View your account status and verification details.",
      "Complete your profile setup if required.",
      "Proceed to payment setup and account configuration."
    ],
    bg: "bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200",
    text: "text-amber-950",
    bgNum: "text-amber-500/10 group-hover:text-amber-500/20"
  },
  {
    step: "05",
    title: "Add Credit Card",
    bullets: [
      "Enter your credit card details securely.",
      "Complete card verification and authentication.",
      "Successfully link your credit card to your account.",
      "Your credit card is now ready for transactions."
    ],
    bg: "bg-gradient-to-br from-rose-50 to-rose-100/50 border-rose-200",
    text: "text-rose-950",
    bgNum: "text-rose-500/10 group-hover:text-rose-500/20"
  },
  {
    step: "06",
    title: "Add Beneficiary",
    bullets: [
      "Enter the beneficiary's bank account details.",
      "Provide the beneficiary name, account number, and IFSC code.",
      "Verify the beneficiary information before proceeding.",
      "Save the beneficiary for future payments."
    ],
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-cyan-200",
    text: "text-cyan-950",
    bgNum: "text-cyan-500/10 group-hover:text-cyan-500/20"
  },
  {
    step: "07",
    title: "Make Payment",
    bullets: [
      "Select the beneficiary account.",
      "Enter the payment amount.",
      "Review all transaction details carefully.",
      "Confirm and authorize the payment using your credit card.",
      "The transaction is securely processed."
    ],
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200",
    text: "text-indigo-950",
    bgNum: "text-indigo-500/10 group-hover:text-indigo-500/20"
  },
  {
    step: "08",
    title: "Funds Transfer",
    bullets: [
      "Funds are transferred to the beneficiary's bank account.",
      "Receive instant transaction confirmation.",
      "Track payment status in real time through your dashboard.",
      "Access complete transaction history whenever needed."
    ],
    bg: "bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200",
    text: "text-orange-950",
    bgNum: "text-orange-500/10 group-hover:text-orange-500/20"
  }
];

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
          Follow our 8-step onboarding and transfer process to start secure vendor payments.
        </p>
      </div>

      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 max-w-7xl mx-auto">
        {/* 2-Column Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {STEPS.map((s, idx) => (
            <div key={idx} className={`${s.bg} border p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all shadow-sm flex flex-col sm:flex-row sm:items-start gap-6 w-full h-full`}>
              {/* Step Number */}
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-white/60 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm">
                <span className={`text-3xl font-black ${s.text}`}>{s.step}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h4 className={`text-xl font-extrabold mb-4 ${s.text}`}>{s.title}</h4>
                <ul className="text-sm text-neutral-700 leading-relaxed space-y-3 list-disc pl-5">
                  {s.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
