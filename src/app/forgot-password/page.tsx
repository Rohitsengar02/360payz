"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Check } from "lucide-react";
import GridBg from "@/components/UI/GridBg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-16 px-6">
      <GridBg />

      {/* Back Button */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-16 z-20">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white/70 hover:text-primary bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>      <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-secondary text-black font-extrabold text-sm mb-4">
            360
          </div>
          <h2 className="text-2xl font-extrabold text-white">Reset Password</h2>
          <p className="text-xs text-white/50 mt-1">We'll send you instructions to reset your password</p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="h-12 w-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
              <Check className="h-6 w-6 stroke-[3]" />
            </div>
            <h4 className="text-sm font-bold text-white">Email Sent!</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Check your inbox at <strong>{email}</strong> for instructions on how to reset your password.
            </p>
          
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-white/40 block mb-1 uppercase">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-black/40 text-xs text-white border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primary"
                />
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-white/30" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black font-extrabold text-xs py-3.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/10 mt-6"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
