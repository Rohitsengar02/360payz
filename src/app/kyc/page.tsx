"use client";

import Link from "next/link";
import { ArrowLeft, UserCheck } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function KYCPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Know Your Customer (KYC) Policy</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Secure Identity Verification</h3>
              <p>
                Know Your Customer (KYC) procedures help us verify user identities, prevent fraud, and comply with applicable regulatory requirements.
              </p>
              <p className="mt-3">
                All users must successfully complete KYC verification before accessing payment services.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Required Documents</h3>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-bold text-neutral-900">Aadhaar Verification</h4>
                  <p className="mt-1">Used to verify identity information.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">PAN Verification</h4>
                  <p className="mt-1">Used to validate tax-related information.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Mobile Verification</h4>
                  <p className="mt-1">OTP-based verification for account security.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">WhatsApp Verification</h4>
                  <p className="mt-1">Verification of communication channels.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">KYC Verification Journey</h3>
              
              <div className="mt-4 space-y-6 border-l-2 border-primary/20 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 1: Mobile OTP Verification</span>
                  <p className="mt-1">Confirm ownership of the registered mobile number.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 2: WhatsApp Verification</span>
                  <p className="mt-1">Verify your registered WhatsApp number.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 3: Aadhaar Authentication</span>
                  <p className="mt-1">Identity verification through approved processes.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 4: PAN Verification</span>
                  <p className="mt-1">Validation of PAN details.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 5: Account Approval</span>
                  <p className="mt-1">Successful completion of verification enables service access.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Verification Requirements</h3>
              <p>Users must:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Submit valid documents.</li>
                <li>Provide accurate information.</li>
                <li>Ensure all details match official records.</li>
                <li>Update information when necessary.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Verification Failure</h3>
              <p>Applications may be rejected if:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Information is incomplete.</li>
                <li>Documents are invalid.</li>
                <li>Verification requirements are not met.</li>
                <li>Information cannot be authenticated.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-200 mt-8">
              <p className="text-sm font-semibold text-neutral-800">Data Protection</p>
              <p className="mt-2 text-sm">
                KYC information is stored securely and processed in accordance with our Privacy Policy and applicable data protection standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
