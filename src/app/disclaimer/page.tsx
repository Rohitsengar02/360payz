"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">General Disclaimer</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Important Legal Information</h3>
              <p>
                Please read this disclaimer carefully before using 360payZ services.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">General Disclaimer</h3>
              <p>
                360payZ provides a technology platform designed to facilitate payment-related services and transaction management.
              </p>
              <p className="mt-3">
                Platform availability and services are subject to applicable laws, regulations, and operational requirements.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">No Financial Advice</h3>
              <p>Information available on this platform is provided for informational purposes only.</p>
              <p className="mt-3">360payZ does not provide:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Financial advice</li>
                <li>Investment advice</li>
                <li>Tax advice</li>
                <li>Legal advice</li>
              </ul>
              <p className="mt-3">
                Users should consult qualified professionals before making financial decisions.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Third-Party Services</h3>
              <p>Certain services may depend on:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Banking partners</li>
                <li>Payment processors</li>
                <li>Verification providers</li>
                <li>Technology partners</li>
              </ul>
              <p className="mt-3 text-neutral-700">
                360payZ is not responsible for delays, interruptions, or failures caused by third-party providers.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Service Availability</h3>
              <p>While we strive to maintain uninterrupted access to our platform:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Temporary downtime may occur.</li>
                <li>Scheduled maintenance may affect availability.</li>
                <li>Technical issues may cause delays.</li>
              </ul>
              <p className="mt-3 font-medium text-neutral-700">
                We do not guarantee continuous or error-free operation.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, 360payZ shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Indirect damages</li>
                <li>Business losses</li>
                <li>Revenue losses</li>
                <li>Data loss</li>
                <li>Service interruptions</li>
                <li>Third-party failures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">User Responsibility</h3>
              <p>Users are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Providing accurate information.</li>
                <li>Maintaining account security.</li>
                <li>Complying with applicable laws.</li>
                <li>Reviewing platform policies before using services.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Policy Updates</h3>
              <p>
                360payZ reserves the right to modify this disclaimer at any time. Updated versions will be published on the website with the revised effective date.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Contact Information</h3>
              <p>For compliance, legal, or policy-related questions:</p>
              <div className="mt-3">
                <p className="font-semibold text-neutral-800">360payZ Support Team</p>
                <p>Email: <a href="mailto:contact@360payz.com" className="text-primary font-medium hover:underline">contact@360payz.com</a>, <a href="mailto:Support@360payz.com" className="text-primary font-medium hover:underline">Support@360payz.com</a></p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 mt-8">
              <p className="text-sm font-semibold text-neutral-800">Footer Notice</p>
              <p className="mt-2 text-sm">
                By accessing or using 360payZ services, you acknowledge that you have read, understood, and agreed to the terms outlined in this policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
