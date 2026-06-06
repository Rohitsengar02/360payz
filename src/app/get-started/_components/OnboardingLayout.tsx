"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, X, LifeBuoy, Clock } from "lucide-react";
import Logo from "@/components/Logo";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  rightPanel: React.ReactNode;
  currentStep: number;
  hideBack?: boolean;
}

const steps = [
  { label: "Account Setup", percent: 25 },
  { label: "Verification", percent: 50 },
  { label: "KYC", percent: 75 },
  { label: "Review", percent: 90 },
  { label: "Payment Setup", percent: 95 },
  { label: "Completed", percent: 100 },
];

export default function OnboardingLayout({ children, rightPanel, currentStep, hideBack = false }: OnboardingLayoutProps) {
  const router = useRouter();
  const stepInfo = steps[currentStep - 1] || steps[0];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      
      {/* Left Panel: Form Area */}
      <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col relative overflow-y-auto max-h-screen custom-scrollbar">
        
        {/* Thin Progress Bar at absolute top */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-neutral-100 z-50">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${stepInfo.percent}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-primary"
          />
        </div>

        {/* Header */}
        <header className="px-8 lg:px-16 py-8 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-40">
          <Logo withSlogan={false} className="scale-90 origin-left" />
          <div className="flex items-center gap-6 text-sm font-semibold">
            <Link href="/" className="text-neutral-500 hover:text-primary transition-colors flex items-center gap-2 hidden sm:flex">
              <Clock className="w-4 h-4" /> Save & Later
            </Link>
            <Link href="/contact" target="_blank" className="text-neutral-500 hover:text-primary transition-colors flex items-center gap-2 hidden sm:flex">
              <LifeBuoy className="w-4 h-4" /> Support
            </Link>
            <Link href="/" className="text-neutral-500 hover:text-neutral-800 transition-colors flex items-center gap-2 pl-6 border-l border-neutral-200">
              Exit <X className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-8 lg:px-16 py-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto pb-12"
          >
            {/* Context Badge & Back Button */}
            <div className="mb-6 flex flex-col items-start gap-4">
              {!hideBack && (
                <button 
                  onClick={() => router.back()} 
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2 tracking-wide uppercase">
                Step {currentStep} of 6 <span className="w-1 h-1 bg-primary rounded-full"></span> {stepInfo.label}
              </div>
            </div>

            {children}
          </motion.div>
        </div>
      </div>

      {/* Right Panel: Light Premium Illustration/Benefits */}
      <div className="hidden md:flex w-[45%] lg:w-[40%] bg-neutral-50 border-l border-neutral-100 relative items-center justify-center p-12 sticky top-0 h-screen overflow-hidden">
        {/* Abstract Glowing Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {rightPanel}
          </motion.div>
        </div>

        {/* Security Trust Badges Fixed at Bottom */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-8 px-8 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 256-bit SSL</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> KYC Protected</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> AML Monitored</span>
        </div>
      </div>

    </div>
  );
}
