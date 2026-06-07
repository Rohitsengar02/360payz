"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-600 rounded-xl">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Privacy Policy</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <p>
              360payZ Payment Solution Private Limited (&quot;360payZ&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy and is committed to protecting your personal information.
            </p>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Information We Collect</h3>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>WhatsApp Number</li>
              <li>Aadhaar Information</li>
              <li>PAN Information</li>
              <li>Credit Card Information (securely processed)</li>
              <li>Device Information</li>
              <li>IP Address</li>
              <li>Transaction History</li>
              <li>Support Communications</li>
            </ul>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verify your identity</li>
              <li>Complete KYC requirements</li>
              <li>Process transactions</li>
              <li>Prevent fraud and unauthorized activities</li>
              <li>Provide customer support</li>
              <li>Improve platform performance</li>
              <li>Comply with regulatory obligations</li>
            </ul>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Data Security</h3>
            <p>We implement:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>256-bit SSL encryption</li>
              <li>Device verification</li>
              <li>Fraud monitoring systems</li>
              <li>Secure authentication controls</li>
              <li>Access control mechanisms</li>
            </ul>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Information Sharing</h3>
            <p>We do not sell your personal information.</p>
            <p>Information may be shared only with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Banking partners</li>
              <li>Payment processors</li>
              <li>Regulatory authorities</li>
              <li>Law enforcement agencies when required by law</li>
            </ul>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">User Rights</h3>
            <p>Users may:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access their information</li>
              <li>Request corrections</li>
              <li>Update personal details</li>
              <li>Contact support regarding privacy concerns</li>
            </ul>

            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Contact</h3>
            <p>
              WhatsApp: <a href="https://wa.me/919876543210" className="text-primary hover:underline">+91 98765 43210</a>
            </p>
            <p>By using our platform, you agree to this Privacy Policy.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
