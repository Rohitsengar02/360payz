"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Send, 
  Zap, 
  UserCheck, 
  Headphones, 
  Bell, 
  FileSpreadsheet, 
  Check, 
  ArrowRight,
  Sparkles,
  DollarSign
} from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import CardTilt from "@/components/UI/CardTilt";
import ChatBotDemo from "@/components/ChatBotDemo";
import DashboardDemo from "@/components/DashboardDemo";
import FlowVisualizer from "@/components/FlowVisualizer";

import AppCarousel from "@/components/AppCarousel";
import Logo from "@/components/Logo";
import { Accordion } from "@/components/UI/Accordion";
import Footer from "@/components/Footer";

const FAQ_ITEMS = [
 
  {
    question: "How long does it take for the vendor to receive the funds?",
    answer: "360payZ offers three settlement options, allowing you to choose how quickly the vendor receives the funds:\n\n• Instant Settlement – Funds are transferred instantly after successful payment processing.\n\n• Same-Day Settlement – Funds are credited to the vendor's account on the same day (up to 11:00 PM).\n\n• Next-Day Settlement – Funds are credited by 6:00 PM on the next business day.\n\nThe settlement speed depends on the option selected during the transaction. Both you and your vendor will receive real-time notifications once the payout is successfully processed."
  },
  {
    question: "What credit cards are supported?",
    answer: "We support major credit cards issued by leading banks in India, including Visa, Mastercard, RuPay, American Express, and Diners Club cards, subject to issuing bank and payment partner eligibility.\n\nSupported card availability may vary depending on the issuing bank, transaction type, and applicable payment partner policies. Eligible cards may also continue earning reward points, cashback, or other benefits offered by the card issuer."
  },
  {
    question: "Are there any charges or fees for the transfer?",
    answer: "Our processing fee depends on the settlement option selected:\n\n• Instant Settlement: 2.6% + GST\n• Same-Day Settlement (up to 11:00 PM): 2.2% + GST\n• Next-Day Settlement (by 6:00 PM): 2.0% + GST\n\nThe applicable fee is displayed transparently before payment confirmation. There are no setup fees, annual charges, or subscription costs."
  },
  {
    question: "What is the 360payZ Fraud Detection system?",
    answer: "360payZ is our proprietary security engine. It runs active fraud scans including device fingerprinting, IP location monitoring, transaction velocity checking, and cardholder matching with beneficiary names to prevent unauthorized or high-risk transactions."
  },
  {
    question: "How do I claim my cashback?",
    answer: "Continue enjoying eligible rewards, cashback, and benefits offered by your credit card issuer. Additional promotional cashback offers may be available from time to time, subject to applicable terms and conditions."
  }
];





export default function LandingPage() {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" });
  const [feedIndex, setFeedIndex] = useState(0);


  
  // Live Feed Data
  const LIVE_FEEDS = [
    { name: "Sample Transaction", amount: "Illustration Only", time: "Demo", status: "Verified" },
    { name: "Sample Transaction", amount: "Illustration Only", time: "Demo", status: "Secured" },
    { name: "Sample Transaction", amount: "Illustration Only", time: "Demo", status: "Verified" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % LIVE_FEEDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setWaitlistSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen text-neutral-900 bg-white">
      <GridBg />

      {/* SECTION 1: PREMIUM ANNOUNCEMENT BAR */}
      <div className="w-full bg-neutral-900 text-white py-3 px-4 text-center overflow-hidden">
        <div className="inline-flex flex-wrap justify-center items-center gap-2 text-xs md:text-sm">
          <span className="bg-primary/20 text-primary text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Launching Soon
          </span>
          <span className="text-white/80 font-medium">Early Access Open for Verified Users.</span>
          <a href="https://360payz.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline font-bold inline-flex items-center gap-0.5 ml-1">
            Join Waitlist <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* SECTION 3: HERO SECTION */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-12 pb-24 md:pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="mb-2">
              <Logo withSlogan={true} className="scale-[0.85] sm:scale-100 origin-left" />
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
              <span className="text-sm font-bold text-neutral-700 tracking-wide">B2B Payments</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Transfer Funds <br />
              From <span className="text-primary">Credit Cards</span> <br />
              To <span className="text-primary">Vendor / Supplier</span> <br />
              <span className="text-primary">Bank Account</span> <br />
              In Minutes
            </h1>

            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg">
              Secure, compliant, and available 24/7. Settle vendor invoices, rent, and utility bills. Built for businesses and verified users across India.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl max-w-lg shadow-sm">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Problem Statement</p>
              <p className="text-base font-semibold text-neutral-900">
                Your vendor doesn't accept Credit Cards? <br className="hidden sm:block" />
                <span className="text-primary font-bold">We are here to help you out!</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold bg-primary text-white hover:bg-black hover:shadow-xl transition-all duration-300"
              >
                Join Waitlist
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>

            </div>

            {/* Badges under buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
              {[
                { label: "Trusted Platform", val: "★★★★★" },
                { label: "256-bit SSL", val: "Encryption" },
                { label: "RBI Alignment", val: "Compliant Partners" },
                { label: "KYC Verified", val: "Instantly" }
              ].map((b, i) => (
                <div key={i} className="text-left">
                  <p className="text-xs font-bold text-neutral-950">{b.val}</p>
                  <p className="text-[10px] text-neutral-500">{b.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex flex-col justify-center items-center min-h-[450px] w-full">
            {/* Background Glow Orb */}
            <div className="absolute w-[350px] h-[350px] bg-primary/10 rounded-full filter blur-3xl -z-10" />

            {/* Inner responsive container to anchor absolute cards on mobile/desktop without overflow */}
            <div className="relative w-[310px] sm:w-[360px] lg:w-full h-[480px] flex justify-center items-center">
              {/* Main Phone Mockup */}
              <div className="relative w-[240px] h-[480px] bg-neutral-950 border-[5px] border-neutral-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col z-20">
                <div className="h-6 w-20 bg-black rounded-b-xl mx-auto flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 z-30">
                  <div className="w-8 h-1 bg-neutral-800 rounded-full mb-0.5" />
                </div>
                <div className="p-4 pt-8 flex-1 bg-neutral-950 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[9px] text-white/40 mb-3">
                      <span>360payZ</span>
                      <span>9:41 AM</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <span className="text-[9px] text-white/50 block">Rewards Earned</span>
                      <span className="text-lg font-extrabold text-secondary flex items-center gap-0.5">
                        <Zap className="h-3.5 w-3.5 fill-secondary/20" />
                        ₹8,450.00
                      </span>
                    </div>

                    {/* Virtual Credit Card inside Phone */}
                    <div className="mt-6 bg-gradient-to-tr from-primary to-violet-600 rounded-xl p-4 shadow-xl border border-white/15 text-white flex flex-col justify-between h-[120px]">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold tracking-wider">BUSINESS PLATINUM</span>
                        <span className="text-sm">💳</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-[8px] text-white/60 block font-mono tracking-wider">CARD NUMBER</span>
                        <span className="text-xs font-mono tracking-widest mt-0.5 block">•••• •••• 9820</span>
                      </div>
                      <div className="flex justify-between items-center text-[9px] text-white/80 mt-auto pt-2">
                        <span className="uppercase">Aman Sen</span>
                        <span>08/29</span>
                      </div>
                    </div>
                  </div>
                  {/* Simulated Chart */}
                  <div className="h-16 flex items-end gap-1.5 mb-4 bg-white/[0.01] p-1 rounded-xl border border-white/5">
                    {[20, 40, 30, 60, 45, 80, 55, 90].map((v, i) => (
                      <div key={i} className="flex-1 bg-secondary/10 rounded-t-sm h-full relative">
                        <div style={{ height: `${v}%` }} className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-sm" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Floating Credit Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="flex absolute -right-2 top-[320px] w-[130px] h-[85px] sm:right-0 sm:top-[300px] sm:w-[150px] sm:h-[95px] lg:-right-12 xl:-right-6 lg:top-10 z-30 flex-col justify-between bg-gradient-to-tr from-primary to-violet-600 rounded-2xl p-3 sm:p-4 shadow-xl border border-white/15 text-white lg:w-[200px] lg:h-[120px]"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[8px] sm:text-[10px] font-bold">BUSINESS PLATINUM</span>
                  <span className="text-[10px] sm:text-xs">💳</span>
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] text-white/55 block font-mono leading-none">CARD NUMBER</span>
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider">•••• •••• 9820</span>
                </div>
                <div className="flex justify-between items-center text-[7px] sm:text-[9px] text-white/70">
                  <span>AMAN SEN</span>
                  <span>08/29</span>
                </div>
              </motion.div>

              {/* Static Coming Soon Buttons */}
              <div className="hidden lg:flex absolute -right-12 xl:-right-6 top-[220px] z-30 flex-col gap-4 items-end">
                <div className="flex items-center gap-2 bg-neutral-950/90 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-white/10 shadow-xl cursor-not-allowed w-[150px]">
                  <Smartphone className="h-4 w-4 text-white/70 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-[7px] text-white/50 block uppercase tracking-wide leading-none mb-0.5">Coming soon to</span>
                    <span className="text-[11px] font-bold block leading-none">App Store</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-neutral-950/90 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-white/10 shadow-xl cursor-not-allowed w-[150px]">
                  <Smartphone className="h-4 w-4 text-white/70 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-[7px] text-white/50 block uppercase tracking-wide leading-none mb-0.5">Coming soon to</span>
                    <span className="text-[11px] font-bold block leading-none">Google Play</span>
                  </div>
                </div>
              </div>

              {/* Transfer Success Card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="flex absolute -left-2 bottom-6 w-[130px] sm:left-0 sm:bottom-10 sm:w-[150px] lg:-left-6 lg:bottom-16 lg:w-[180px] bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-3 z-30 items-center gap-2 sm:gap-3 shadow-2xl text-white"
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] text-white/40 block leading-none">Sample Transaction</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white">Illustration Only</span>
                </div>
              </motion.div>

              {/* Live Transaction Feed */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                className="block absolute -left-4 top-[170px] w-[130px] sm:left-0 sm:top-[150px] sm:w-[150px] lg:left-0 lg:top-4 lg:w-[180px] bg-black/85 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-3 z-30 shadow-2xl text-white"
              >
                <span className="text-[7px] sm:text-[8px] uppercase font-bold text-secondary tracking-widest block mb-1.5">Demo Activity Preview</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={feedIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[8px] sm:text-[10px] font-semibold text-white truncate">{LIVE_FEEDS[feedIndex].name}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[8px] sm:text-[9px] font-bold text-secondary">{LIVE_FEEDS[feedIndex].amount}</span>
                      <span className="text-[7px] sm:text-[8px] bg-green-500/20 text-green-400 px-1 rounded">{LIVE_FEEDS[feedIndex].status}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

            </div>

            {/* Mobile Coming Soon Buttons */}
            <div className="flex lg:hidden flex-row gap-3 mt-12 z-30">
              <div className="flex items-center gap-2 bg-neutral-950/90 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-white/10 shadow-xl cursor-not-allowed w-[140px]">
                <Smartphone className="h-4 w-4 text-white/70 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-[6px] text-white/50 block uppercase tracking-wide leading-none mb-0.5">Coming soon to</span>
                  <span className="text-[10px] font-bold block leading-none">App Store</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-neutral-950/90 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-white/10 shadow-xl cursor-not-allowed w-[140px]">
                <Smartphone className="h-4 w-4 text-white/70 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-[6px] text-white/50 block uppercase tracking-wide leading-none mb-0.5">Coming soon to</span>
                  <span className="text-[10px] font-bold block leading-none">Google Play</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION B: TRUSTED BY COMPANIES */}
      <section className="relative z-10 py-16 w-full px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-sm uppercase font-extrabold text-neutral-950 tracking-widest">Serving Payments Across Sectors</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[
            { name: "Retail Vendors", color: "text-rose-500" }, 
            { name: "Distributors", color: "text-blue-500" }, 
            { name: "Wholesalers", color: "text-emerald-500" }, 
            { name: "SMEs", color: "text-violet-500" }, 
            { name: "Enterprise Businesses", color: "text-orange-500" }
          ].map((item, idx) => (
            <div key={idx} className={`text-lg md:text-xl font-extrabold tracking-wide ${item.color} opacity-90 hover:opacity-100 transition-all duration-300 cursor-default hover:scale-105 drop-shadow-sm`}>
              {item.name}
            </div>
          ))}
        </div>
      </section>



      {/* SECTION 4: COMPANIES / TRUST SECTION */}
      <section className="relative z-10 py-16 bg-neutral-900 text-white overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-16 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Built for Secure Vendor Payments</h2>
          <p className="text-xs text-white/50 mt-2">Certified security compliance and bank-grade protocols</p>
        </div>
        
        {/* Infinite horizontal marquee */}
        <div className="flex w-[200%] gap-6 animate-marquee-loop [animation-duration:25s] lg:[animation-duration:55s] text-white text-xs font-semibold whitespace-nowrap hover:[animation-play-state:paused]">
          {[
            "SSL Protected", "PAN Verification", "Aadhaar Verification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Verification", "Aadhaar Verification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Verification", "Aadhaar Verification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Verification", "Aadhaar Verification", "Fraud Detection", "24/7 Availability", "Instant Transfers"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
              <Check className="h-4 w-4 text-secondary" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section id="how-it-works" className="relative z-10 py-14 w-full px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold text-primary tracking-widest">Simple Workflow</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950">How it works</h2>
          <p className="text-sm text-neutral-500">Follow our simple onboarding process to start secure vendor payments in just a few minutes.</p>
        </div>

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

      {/* SECTION 5.5: SUPPORT SLIDERS */}
      <section className="relative z-10 py-12 bg-neutral-900 text-white overflow-hidden">
        <div className="w-full flex flex-col gap-6">
          {/* Row 1: Right to Left */}
          <div className="flex w-max gap-6 animate-marquee-loop whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(6)].flatMap(() => [
              "24/7 Dedicated Support",
              "24/7 Platform Availability",
              "Real-Time Payment Tracking",
              "Business Payment Automation"
            ]).map((text, idx) => (
              <div key={`row1-${idx}`} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                <Check className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-white">{text}</span>
              </div>
            ))}
          </div>
          
          {/* Row 2: Left to Right */}
          <div className="flex w-max gap-6 animate-marquee-loop-reverse whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(6)].flatMap(() => [
              "Real-Time Payment Tracking",
              "Business Payment Automation",
              "24/7 Dedicated Support",
              "24/7 Platform Availability"
            ]).map((text, idx) => (
              <div key={`row2-${idx}`} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                <Check className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE PLATFORM DEMO */}
      <section className="relative z-10 py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-primary tracking-widest">Interactive Portal</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 mt-2">Test Drive the Platform</h2>
            <p className="text-sm text-neutral-500 mt-2">Simulate real-time transactions and watch the 360payZ verification flow.</p>
          </div>
          <DashboardDemo />
        </div>
      </section>

      {/* SECTION 6: AI CHATBOT 
      <section className="relative z-10 py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <ChatBotDemo />
        </div>
      </section>
      */}

      {/* SECTION 7: FEATURE SUITE */}
      <section className="relative z-10 py-14 w-full px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold text-primary tracking-widest">Feature Suite</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950">Engineered for Modern Commerce</h2>
          <p className="text-sm text-neutral-500">Everything you need to handle corporate and personal utility payouts securely.</p>
        </div>

        <div className="overflow-hidden relative w-full pb-6">
          <div className="flex w-max gap-4 animate-marquee-loop hover:[animation-play-state:paused] px-2">
            {[
              { icon: Smartphone, title: "Mobile OTP Security", desc: "Two-factor authentication protects every transaction." },
              { icon: UserCheck, title: "InstaKYC Engine", desc: "Automated Aadhaar/PAN validation takes under a minute." },
              { icon: Send, title: "Instant Vendor Payouts", desc: "Direct-to-bank settlements within 2-5 minutes using multiple settlement options." },
              { icon: Zap, title: "Card Rewards", desc: "Continue enjoying eligible card rewards." },
              { icon: Bell, title: "Smart Alerts", desc: "Instant WhatsApp notifications and dedicated help & support for every settlement status." },
              { icon: FileSpreadsheet, title: "Transaction Reports", desc: "Download automated statements for auditing and taxation." },
              // Duplicate set for seamless looping
              { icon: Smartphone, title: "Mobile OTP Security", desc: "Two-factor authentication protects every transaction." },
              { icon: UserCheck, title: "InstaKYC Engine", desc: "Automated Aadhaar/PAN validation takes under a minute." },
              { icon: Send, title: "Instant Vendor Payouts", desc: "Direct-to-bank settlements within 2-5 minutes using multiple settlement options." },
              { icon: Zap, title: "Card Rewards", desc: "Continue enjoying eligible card rewards." },
              { icon: Bell, title: "Smart Alerts", desc: "Instant WhatsApp notifications and dedicated help & support for every settlement status." },
              { icon: FileSpreadsheet, title: "Transaction Reports", desc: "Download automated statements for auditing and taxation." }
            ].map((feat, idx) => (
              <div key={idx} className="w-[280px] sm:w-[320px] shrink-0 h-full">
              <CardTilt className="h-full">
                <div className="bg-white border border-neutral-200 p-6 rounded-xl h-full min-h-[180px] flex flex-col justify-between hover:border-primary transition-all shadow-sm">
                  <div>
                    <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                      <feat.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-950 mb-2">{feat.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </CardTilt>
            </div>
          ))}
          </div>
        </div>
      </section>




      {/* SECTION 10: PAYMENT FLOW VISUALIZATION */}
      <section className="relative z-10 py-20 bg-neutral-55 border-y border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-primary tracking-widest">Transaction Pipeline</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 mt-1">Settle Securely Step-by-Step</h2>
            <p className="text-sm text-neutral-500 mt-2">See how funds travel safely from your card to your vendor's bank account.</p>
          </div>
          <FlowVisualizer />
        </div>
      </section>

      {/* SECTION 11: LIVE APP SHOWCASE */}
      <section className="relative z-10 py-24 w-full px-6 md:px-12 lg:px-16">
        <AppCarousel />
      </section>







      {/* SECTION 16: FAQ ACCORDION */}
      <section id="faq" className="relative z-10 py-24 w-full px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold text-primary tracking-widest">FAQ</span>
          <h2 className="text-3xl font-extrabold text-neutral-950 mt-1">Frequently Asked Questions</h2>
        </div>
        <Accordion items={FAQ_ITEMS} />
      </section>

      {/* SECTION D: APP DOWNLOAD SECTION */}
      <section className="relative z-10 py-20 bg-white border-t border-neutral-200 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-secondary/5 blur-[80px]" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Mobile App Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 h-auto rounded-[32px] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-neutral-800">
                <Image
                  src="/mobile_app_mockup.png"
                  alt="360payZ Mobile App Interface"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Info Content */}
            <div className="space-y-7 text-left">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold text-primary tracking-widest">Get The App</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Experience <br />
                  <span className="text-primary">360payZ</span> Mobile
                </h2>

              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2">
                {["Instant Payouts", "Biometric Login", "Rewards", "24/7 Support"].map((f) => (
                  <span key={f} className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/80">
                    ✓ {f}
                  </span>
                ))}
              </div>

              {/* Coming Soon Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 bg-neutral-200 text-neutral-400 px-5 py-3 rounded-xl cursor-not-allowed">
                  <Smartphone className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-[8px] text-neutral-500 block uppercase tracking-wide">Coming soon to</span>
                    <span className="text-sm font-bold block leading-none">App Store</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-neutral-200 text-neutral-400 px-5 py-3 rounded-xl cursor-not-allowed">
                  <Smartphone className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-[8px] text-neutral-500 block uppercase tracking-wide">Coming soon to</span>
                    <span className="text-sm font-bold block leading-none">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 17: CONTACT CTA */}
      <section className="relative z-10 py-24 bg-neutral-50 text-center border-t border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900">Ready to Start Secure Vendor Payments?</h2>
          <p className="text-sm text-neutral-500 max-w-lg mx-auto">
            Take advantage of interest-free credit card periods, reward points, and lightning-fast settlements today.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="https://360payz.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold text-xs px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              Join Waitlist
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 18: FOOTER */}
      <Footer />
    </div>
  );
}
