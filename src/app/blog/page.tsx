"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function BlogPage() {
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
        <span className="text-xs uppercase font-extrabold text-primary tracking-widest">INSIGHTS & NEWS</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Our Blog</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Stay up to date with the latest news, updates, and articles from the 360payZ team.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 mb-24 min-h-[40vh] flex flex-col items-center justify-center text-center">
        <div className="bg-white/50 backdrop-blur-sm border border-neutral-200 rounded-3xl p-12 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Coming Soon</h2>
          <p className="text-neutral-500">
            We are working hard on creating insightful content for you. Check back later for articles, tips, and company updates.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
