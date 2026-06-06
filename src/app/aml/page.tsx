"use client";

import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function AMLPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-red-500/10 text-red-600 rounded-xl">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Anti-Money Laundering (AML) Policy</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Protecting the Financial Ecosystem</h3>
              <p>
                At 360payZ, we are committed to preventing money laundering, fraud, terrorist financing, and other illegal financial activities. Our Anti-Money Laundering (AML) framework helps maintain a secure and compliant payment environment for all users.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Our AML Commitment</h3>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-bold text-neutral-900">Customer Verification</h4>
                  <p className="mt-1">Every user must complete identity verification before accessing platform services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Risk Assessment</h4>
                  <p className="mt-1">User activities are continuously assessed to identify unusual transaction patterns and potential risks.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Transaction Monitoring</h4>
                  <p className="mt-1">Advanced monitoring systems review transactions to detect suspicious or potentially fraudulent activities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Regulatory Compliance</h4>
                  <p className="mt-1">We cooperate with financial institutions, regulatory authorities, and law enforcement agencies whenever legally required.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">AML Monitoring Process</h3>
              
              <div className="mt-4 space-y-6">
                <div>
                  <span className="font-bold text-neutral-900 block">Step 1: Customer Identification</span>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mobile Verification</li>
                    <li>Email Verification</li>
                    <li>Identity Validation</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Step 2: Risk Evaluation</span>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>User Profile Assessment</li>
                    <li>Transaction Pattern Review</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Step 3: Transaction Monitoring</span>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Real-Time Monitoring</li>
                    <li>Automated Risk Detection</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Step 4: Suspicious Activity Review</span>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Manual Investigation</li>
                    <li>Compliance Team Assessment</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Step 5: Reporting & Action</span>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Regulatory Reporting</li>
                    <li>Account Restrictions (if necessary)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">User Responsibilities</h3>
              <p>Users must:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Provide accurate information.</li>
                <li>Complete all verification requirements.</li>
                <li>Cooperate with compliance reviews.</li>
                <li>Avoid activities that violate applicable laws.</li>
              </ul>
              <p className="mt-3 text-red-600 font-medium">
                Failure to comply may result in account restrictions, suspension, or termination.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200 mt-8">
              <p className="text-sm font-semibold text-neutral-800">Compliance Commitment</p>
              <p className="mt-2 text-sm">
                360payZ maintains ongoing AML controls to ensure platform security, regulatory compliance, and financial transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
