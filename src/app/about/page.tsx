"use client";

import React from "react";
import Link from "next/link";
import { Target, Eye, ArrowLeft, Users, Zap, CheckCircle2 } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      {/* Header Banner */}
      <div className="w-full px-6 md:px-12 lg:px-16 text-center mb-16 space-y-4 relative">
        <div className="absolute top-0 left-6 md:left-12 lg:left-16 -mt-6 md:-mt-8 z-20">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-primary bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">ABOUT US</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Redefining Business Liquidity</h1>
        <p className="text-sm text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          At 360payZ, we are committed to empowering businesses by transforming available credit limits into instant working capital. Our platform enables business owners to make vendor, supplier, utility, and operational payments using their credit cards while ensuring secure and efficient bank settlements.
        </p>
      </div>

      {/* Content Layout */}
      <div className="w-full px-6 md:px-12 lg:px-16 space-y-20">

        {/* Our Story & Did You Know */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Story</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Founded in 2026, 360payZ was created to solve a common challenge faced by startups, small businesses, and growing enterprises across India.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              While many businesses have access to credit cards, a large number of vendors, wholesalers, landlords, and service providers continue to accept only direct bank transfers. This creates a liquidity gap that often limits business growth and operational flexibility.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To bridge this gap, we built a secure platform that enables businesses to utilize their credit card limits and seamlessly transfer funds to recipient bank accounts. By combining convenience, flexibility, and technology-driven automation, 360payZ helps businesses manage cash flow more effectively while maximizing the benefits of their available credit.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl relative overflow-hidden text-center shadow-sm">
              <span className="text-6xl block mb-4">💡</span>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Did You Know?</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Small businesses can significantly improve working capital management by leveraging credit-based payment solutions, helping extend payment cycles and preserve cash for business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl space-y-4 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="h-10 w-10 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Mission</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To democratize cash-flow management for businesses across India by providing a fast, secure, and reliable credit-to-bank payment platform that improves financial flexibility and operational efficiency.
            </p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-3xl space-y-4 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="h-10 w-10 bg-secondary/20 text-emerald-700 rounded-2xl flex items-center justify-center">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Vision</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To build India&apos;s most trusted business payment ecosystem, enabling entrepreneurs and enterprises to access smarter liquidity solutions, simplified financial operations, and greater control over business cash flow.
            </p>
          </div>
        </div>

        {/* Meet Our Founding Team */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Meet Our Founding Team</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              360payZ is built by a team of passionate technology professionals dedicated to solving real-world financial challenges for Indian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full mx-auto mb-4 border border-neutral-200 flex items-center justify-center text-neutral-400">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900">Aman Tomar</h3>
<p className="text-xs font-semibold text-primary mb-1">Founder, CEO & AI/ML Engineer</p>
<p className="text-[10px] text-neutral-500 font-medium mb-4 uppercase tracking-wider">&nbsp;</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Aman leads the artificial intelligence and automation initiatives at 360payZ. His work focuses on enhancing platform intelligence, operational efficiency, and user experience through advanced technology solutions.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full mx-auto mb-4 border border-neutral-200 flex items-center justify-center text-neutral-400">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900">Akash Singh</h3>
              <p className="text-xs font-semibold text-primary mb-1">Co-founder & CTO</p>
              <p className="text-[10px] text-neutral-500 font-medium mb-4 uppercase tracking-wider">IIT BHU (B.Tech, M.Tech, PhD)</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Akash brings extensive expertise in technology, research, and scalable platform architecture. His focus on innovation and long-term strategy helps drive the vision behind 360payZ.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full mx-auto mb-4 border border-neutral-200 flex items-center justify-center text-neutral-400">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900">Archit singh</h3>
              <p className="text-xs font-semibold text-primary mb-1">Co-founder & COO</p>
              <p className="text-[10px] text-neutral-500 font-medium mb-4 uppercase tracking-wider">IIT Dhanbad (B.Tech, M.Tech)</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Archit specializes in engineering systems, operational excellence, and product development. He plays a key role in building reliable and efficient payment experiences for businesses.
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-600 text-center max-w-3xl mx-auto leading-relaxed pt-2">
            Together, the founding team is committed to building a secure, technology-driven platform that empowers businesses with greater liquidity, flexibility, and financial confidence.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Strategic Roadmap</h2>
          </div>

          <div className="relative border-l border-neutral-200 ml-4 md:ml-8 space-y-12 py-4 max-w-4xl mx-auto">
            {[
              { q: "Q1 2026", title: "Platform Launch", desc: "Launch of the 360payZ web platform featuring secure onboarding, instant verification workflows, and streamlined business payment processing." },
              { q: "Q3 2026", title: "Mobile Applications", desc: "Release of native iOS and Android applications with enhanced user experience, biometric authentication, and real-time transaction management." },
              { q: "Q3 2026", title: "Business Payment Automation", desc: "Introduction of advanced payment workflows, automated reminders, recurring payments, and enhanced business financial management tools." },
              { q: "Q4 2026", title: "International Vendor Payments", desc: "Enable cross-border vendor settlements and multi-currency payment capabilities, helping Indian businesses transact with global suppliers more efficiently." }
            ].map((node, i) => (
              <div key={i} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-1 h-4.5 w-4.5 rounded-full border-4 border-white bg-primary group-hover:bg-secondary transition-colors shadow-sm" />
                <span className="text-xs font-bold text-primary block">{node.q}</span>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">{node.title}</h4>
                <p className="text-sm text-neutral-500 mt-1">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Businesses Choose 360payZ */}
        <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Zap className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Businesses Choose 360payZ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Secure payment processing",
                "24/7 platform availability",
                "Real-time transaction tracking",
                "Business-focused payment solutions",
                "Dedicated customer support",
                "Simplified vendor and supplier payments",
                "Technology-driven operational efficiency"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-white/80 leading-relaxed max-w-2xl border-t border-white/10 pt-6">
              At 360payZ, we believe every business deserves access to smarter financial tools that unlock growth, improve liquidity, and simplify payments.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
