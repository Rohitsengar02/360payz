"use client";

import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import GridBg from "@/components/UI/GridBg";

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-16 px-6 text-center">
      <GridBg />
      
      <div className="max-w-md space-y-6 relative z-10">
        <div className="h-16 w-16 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mx-auto border border-red-500/20">
          <ShieldAlert className="h-8 w-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Error 404</span>
          <h1 className="text-4xl font-extrabold text-white">Route Terminated</h1>
          <p className="text-xs text-white/50 leading-relaxed max-w-xs mx-auto">
            The requested endpoint or page does not exist or has been relocated to another address.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold text-xs px-6 py-3 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
