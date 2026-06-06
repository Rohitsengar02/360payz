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
import DashboardDemo from "@/components/DashboardDemo";
import FlowVisualizer from "@/components/FlowVisualizer";
import ChatBotDemo from "@/components/ChatBotDemo";
import AppCarousel from "@/components/AppCarousel";
import Logo from "@/components/Logo";
import { Accordion } from "@/components/UI/Accordion";
import Footer from "@/components/Footer";

const FAQ_ITEMS = [
  {
    question: "Is it legal to transfer money from credit card to vendor bank accounts in India?",
    answer: "Yes, it is entirely legal and compliant. 360payZ complies with all Reserve Bank of India (RBI) directives, including PSS Act regulations. We facilitate transactions for genuine business expenses (vendor payments, supplier invoices, rent, utility bills). We conduct mandatory KYC and PAN verification to prevent cash cash-outs and money laundering."
  },
  {
    question: "How long does it take for the vendor to receive the funds?",
    answer: "Most transactions are settled instantly. For normal working hours, transfers are processed via IMPS/NEFT/RTGS rails within 2 to 5 minutes. You and your vendor will receive real-time notifications once the payout is credited."
  },
  {
    question: "What credit cards are supported?",
    answer: "We support all major credit cards issued in India, including Visa, Mastercard, RuPay, and Diners Club. Some card types may also earn you reward points from your card issuer in addition to our cashback."
  },
  {
    question: "Are there any charges or fees for the transfer?",
    answer: "We charge a nominal transaction processing fee starting from 1.2% up to 1.8% based on your transacted volume and card type. There are no hidden setup fees, annual charges, or subscription costs."
  },
  {
    question: "What is the 360 PayZ Fraud Detection system?",
    answer: "360 PayZ is our proprietary security engine. It runs active fraud scans including device fingerprinting, IP location monitoring, transaction velocity checking, and cardholder matching with beneficiary names to prevent unauthorized or high-risk transactions."
  },
  {
    question: "How do I claim my cashback?",
    answer: "Cashback is credited automatically to your 360payZ Wallet immediately after a successful transaction. You can use the balance to pay for future transfer fees or transfer it directly to your bank account once it reaches the minimum threshold of ₹100."
  }
];

const BLOG_ARTICLES = [
  {
    tag: "Security",
    title: "Understanding PCI-DSS Compliance in Modern Digital Payouts",
    desc: "How tokenization and encryption secure your card credentials during credit card-to-bank settlements.",
    author: "Rohan Sen",
    date: "May 28, 2026",
    readTime: "5 min read",
    imgLetter: "R"
  },
  {
    tag: "Compliance",
    title: "RBI Guidelines on Digital Lending and Card Payments",
    desc: "A comprehensive guide to staying compliant while using credit instruments for business payments.",
    author: "Neha Sharma",
    date: "May 20, 2026",
    readTime: "8 min read",
    imgLetter: "N"
  },
  {
    tag: "Strategy",
    title: "Optimizing Working Capital with Credit Card Payouts",
    desc: "How smart businesses leverage 45-day interest-free card cycles to bridge vendor payment gaps.",
    author: "Amit Patel",
    date: "May 12, 2026",
    readTime: "6 min read",
    imgLetter: "A"
  }
];



export default function LandingPage() {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" });
  const [feedIndex, setFeedIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  
  // Live Feed Data
  const LIVE_FEEDS = [
    { name: "Aman S. paid Om Logi.", amount: "₹45,000", time: "Just now", status: "Verified" },
    { name: "Karan P. paid R.K. Steel", amount: "₹1,25,000", time: "1m ago", status: "Secured" },
    { name: "Priya M. paid TechCorp", amount: "₹85,000", time: "3m ago", status: "Verified" },
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Transfer Funds <br />
              From <span className="text-primary">Credit Cards</span> <br />
              To <span className="text-primary">Vendor Accounts</span> <br />
              In Minutes
            </h1>

            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg">
              Secure, compliant, and available 24/7. Settle vendor invoices, rent, and utility bills. Built for businesses and verified users across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold bg-primary text-white hover:bg-black hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>

            </div>

            {/* Badges under buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
              {[
                { label: "Trusted Platform", val: "★★★★★" },
                { label: "256-bit SSL", val: "Encryption" },
                { label: "RBI Compliance", val: "Regulated" },
                { label: "KYC Verified", val: "Instantly" }
              ].map((b, i) => (
                <div key={i} className="text-left">
                  <p className="text-xs font-bold text-neutral-950">{b.val}</p>
                  <p className="text-[10px] text-neutral-500">{b.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[450px] w-full">
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
                      <span>360payZ Pro</span>
                      <span>9:41 AM</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <span className="text-[9px] text-white/50 block">Cashback Earned</span>
                      <span className="text-lg font-extrabold text-secondary flex items-center gap-0.5">
                        <Zap className="h-3.5 w-3.5 fill-secondary/20" />
                        ₹8,450.00
                      </span>
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
                className="absolute right-2 top-10 w-[150px] h-[95px] sm:right-4 sm:w-[180px] sm:h-[110px] lg:-right-2 lg:w-[200px] lg:h-[120px] bg-gradient-to-tr from-primary to-violet-600 rounded-2xl p-3 sm:p-4 shadow-xl border border-white/15 z-30 text-white flex flex-col justify-between"
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
                  <span>VISHAL SEN</span>
                  <span>08/29</span>
                </div>
              </motion.div>

              {/* Transfer Success Card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute left-2 bottom-16 w-[140px] sm:left-4 sm:w-[160px] lg:-left-6 lg:w-[180px] bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-3 z-30 flex items-center gap-2 sm:gap-3 shadow-2xl text-white"
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] text-white/40 block leading-none">Payout Settled</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white">₹1,25,000</span>
                </div>
              </motion.div>

              {/* Live Transaction Feed */}
              <div className="absolute top-4 left-2 w-[140px] sm:left-4 sm:w-[160px] lg:left-0 lg:w-[180px] bg-black/85 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-3 z-30 shadow-2xl text-white">
                <span className="text-[7px] sm:text-[8px] uppercase font-bold text-secondary tracking-widest block mb-1.5">Live Activity</span>
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
        <div className="flex w-[200%] gap-6 animate-marquee-loop text-white text-xs font-semibold whitespace-nowrap hover:[animation-play-state:paused]">
          {[
            "SSL Protected", "PAN Varification", "Aadhaar Varification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Varification", "Aadhaar Varification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Varification", "Aadhaar Varification", "Fraud Detection", "24/7 Availability", "Instant Transfers",
            "SSL Protected", "PAN Varification", "Aadhaar Varification", "Fraud Detection", "24/7 Availability", "Instant Transfers"
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
                <div className={`h-10 w-10 lg:h-12 lg:w-12 rounded-full ${s.iconBg} flex items-center justify-center font-bold text-sm lg:text-base mb-4 lg:mb-6`}>
                  {s.step}
                </div>
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
            {[...Array(16)].map((_, idx) => (
              <div key={`row1-${idx}`} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                <Check className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-white">24/7 Dedicated Support</span>
              </div>
            ))}
          </div>
          
          {/* Row 2: Left to Right */}
          <div className="flex w-max gap-6 animate-marquee-loop-reverse whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(16)].map((_, idx) => (
              <div key={`row2-${idx}`} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                <Check className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-white">24/7 Platform Availability</span>
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
            <p className="text-sm text-neutral-500 mt-2">Simulate real-time transactions and watch the 360 PayZ verification flow.</p>
          </div>
          <DashboardDemo />
        </div>
      </section>

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
              { icon: Smartphone, title: "Mobile OTP Security", desc: "Dual-factor authentication secure checks for transactions." },
              { icon: UserCheck, title: "InstaKYC Engine", desc: "Automated Aadhaar/PAN validation takes under a minute." },
              { icon: Send, title: "Instant Vendor Payouts", desc: "Direct-to-bank settlements within 2-5 minutes via IMPS rails." },
              { icon: Zap, title: "Cashback Wallet", desc: "Earn cashback credited to your wallet instantly." },
              { icon: Bell, title: "Smart Alerts", desc: "Instant SMS, email, and push notification for every settlement status." },
              { icon: FileSpreadsheet, title: "Transaction Reports", desc: "Download automated statements for auditing and taxation." },
              // Duplicate set for seamless looping
              { icon: Smartphone, title: "Mobile OTP Security", desc: "Dual-factor authentication secure checks for transactions." },
              { icon: UserCheck, title: "InstaKYC Engine", desc: "Automated Aadhaar/PAN validation takes under a minute." },
              { icon: Send, title: "Instant Vendor Payouts", desc: "Direct-to-bank settlements within 2-5 minutes via IMPS rails." },
              { icon: Zap, title: "Cashback Wallet", desc: "Earn cashback credited to your wallet instantly." },
              { icon: Bell, title: "Smart Alerts", desc: "Instant SMS, email, and push notification for every settlement status." },
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

      {/* SECTION 8: SECURITY CENTER */}
      <section className="relative z-10 py-24 bg-neutral-950 text-white border-t border-white/5">
        <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold text-secondary tracking-widest">Bank-Grade Compliance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">360 PayZ Security Center</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              We employ strict, top-tier protection mechanisms designed to prevent fraud, secure financial details, and ensure complete regulatory alignment.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "256-bit SSL Encryption",
                "Device Binding Protection",
                "IP Address Monitoring",
                "Real-time Fraud Checks",
                "Session Expiry Controls",
                "Card Number Hashing",
                "PAN-KYC Name Matching",
                "Built to RBI guidelines"
              ].map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-xs text-white/80">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Visual Security Dashboard */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase block">System Health</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">Threat Intel & Status</h4>
                </div>
                <div className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full font-semibold border border-green-500/20">
                  Protected
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "IP/Device Verification", val: 99, color: "bg-secondary" },
                  { label: "Card Tokenization (PCI-DSS)", val: 100, color: "bg-secondary" },
                  { label: "RBI compliance checks", val: 98, color: "bg-secondary" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-white/70">{stat.label}</span>
                      <span className="text-white">{stat.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div style={{ width: `${stat.val}%` }} className={`h-full ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                <span>Active sessions: 1</span>
                <span>Location: India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY 360PAYZ */}
      <section className="relative z-10 py-24 w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold text-primary tracking-widest">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950">Why Choose 360payZ?</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We bridge the gap between credit card limits and commercial vendor settlements, providing unmatched speed, rewards, and reliability.
            </p>
            <div className="space-y-3">
              {[
                { title: "Unbeatable Speed", desc: "No long waiting times. Settlements land in minutes." },
                { title: "Direct Cashback", desc: "Get a reward credit back into your account." },
                { title: "Safe & Compliant", desc: "Designed according to Reserve Bank regulations." }
              ].map((adv, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950">{adv.title}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 relative overflow-hidden flex items-center justify-center min-h-[300px]">
              <div className="absolute top-10 left-10 w-24 h-24 bg-primary/5 rounded-full filter blur-xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full filter blur-xl" />
              
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { label: "99.9% Uptime", desc: "Maximum transaction stability" },
                  { label: "Instant KYC", desc: "Ready to use in seconds" },
                  { label: "Multi-Card Link", desc: "Add multiple cards seamlessly" },
                  { label: "24/7 Support", desc: "Available on WhatsApp & email" }
                ].map((box, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary transition-all text-center">
                    <span className="text-sm font-bold text-neutral-950 block">{box.label}</span>
                    <span className="text-[11px] text-neutral-500 mt-1 block">{box.desc}</span>
                  </div>
                ))}
              </div>
            </div>
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

      {/* SECTION 13: AI CHATBOT */}
      <section className="relative z-10 py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <ChatBotDemo />
        </div>
      </section>



      {/* SECTION 15: BLOG / RESOURCES */}
      <section id="blog" className="relative z-10 py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-primary tracking-widest">Knowledge Center</span>
              <h2 className="text-3xl font-extrabold text-neutral-950 mt-1">Latest Industry Insights</h2>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="bg-white p-4 rounded-2xl border border-neutral-200 max-w-sm flex gap-2 shadow-sm">
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter email to subscribe" 
                className="bg-neutral-50 text-xs px-3 py-2 rounded-lg text-neutral-900 border border-neutral-200 focus:outline-none focus:border-primary w-full"
              />
              <button type="submit" className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 min-w-[80px]">
                {newsletterSubmitted ? "Joined!" : "Join"}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_ARTICLES.map((art, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:border-primary transition-colors flex flex-col justify-between h-full shadow-sm">
                <div className="p-6">
                  <span className="text-[9px] bg-primary/10 text-primary font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {art.tag}
                  </span>
                  <h3 className="text-base font-bold text-neutral-950 mt-4 mb-2 hover:text-primary transition-colors cursor-pointer">
                    {art.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                    {art.desc}
                  </p>
                </div>
                
                <div className="p-6 pt-0 border-t border-neutral-200 mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center font-bold text-[10px] border border-neutral-200">
                      {art.imgLetter}
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-800 block">{art.author}</span>
                      <span className="text-[8px] text-neutral-500 block">{art.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium">{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
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
                {["Instant Payouts", "Biometric Login", "Cashback", "24/7 Support"].map((f) => (
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
            Take advantage of interest-free credit card periods, reward cashbacks, and lightning-fast settlements today.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/get-started" className="bg-primary text-white font-bold text-xs px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              Get Started
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 18: FOOTER */}
      <Footer />
    </div>
  );
}
