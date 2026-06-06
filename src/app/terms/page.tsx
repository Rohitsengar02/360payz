"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-xl">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Terms of Use</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">1. Acceptance of Terms</h3>
              <p>
                Welcome to 360payZ. By accessing, registering, or using our platform, website, mobile application, or related services, you agree to comply with and be bound by these Terms of Use.
              </p>
              <p className="mt-3">
                If you do not agree with these terms, please discontinue the use of our services immediately.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">2. Eligibility</h3>
              <p>To use 360payZ services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Be at least 18 years of age.</li>
                <li>Be legally capable of entering into binding agreements.</li>
                <li>Complete all required KYC verification procedures.</li>
                <li>Provide accurate and up-to-date information.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
              <p>
                We reserve the right to refuse service to any user who fails to meet these requirements.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">3. Account Registration</h3>
              <p>Users are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Maintaining the confidentiality of their account credentials.</li>
                <li>Ensuring the accuracy of information provided during registration.</li>
                <li>Updating account details when changes occur.</li>
                <li>Reporting any unauthorized access immediately.</li>
              </ul>
              <p>
                360payZ is not responsible for losses resulting from unauthorized access caused by user negligence.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">4. Platform Services</h3>
              <p>
                360payZ provides a digital platform designed to facilitate secure payment-related services and financial transaction management.
              </p>
              <p className="mt-3">Our services may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>User account management</li>
                <li>Payment processing assistance</li>
                <li>Transaction tracking</li>
                <li>Verification services</li>
                <li>Customer support</li>
                <li>Security monitoring</li>
              </ul>
              <p className="mt-3">
                Additional features may be introduced or modified from time to time.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">5. User Responsibilities</h3>
              <p>By using 360payZ, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the platform only for lawful purposes.</li>
                <li>Provide genuine and accurate information.</li>
                <li>Maintain the security of your account.</li>
                <li>Cooperate with verification and compliance procedures.</li>
                <li>Follow all platform policies and guidelines.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">6. Prohibited Activities</h3>
              <p>Users must not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Provide false or misleading information.</li>
                <li>Engage in fraudulent activities.</li>
                <li>Attempt unauthorized access to platform systems.</li>
                <li>Circumvent security controls.</li>
                <li>Violate applicable laws or regulations.</li>
                <li>Use the platform for illegal financial activities.</li>
                <li>Interfere with platform operations or services.</li>
              </ul>
              <p className="mt-3">
                Violation of these terms may result in immediate account suspension or termination.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">7. Verification and Compliance</h3>
              <p>To ensure platform security and regulatory compliance, users may be required to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Complete identity verification.</li>
                <li>Submit supporting documents.</li>
                <li>Participate in additional security checks.</li>
                <li>Cooperate with compliance reviews when necessary.</li>
              </ul>
              <p className="mt-3">
                Failure to complete required verification may limit access to certain services.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">8. Security Measures</h3>
              <p>360payZ employs multiple security mechanisms including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Encrypted communications</li>
                <li>Secure authentication systems</li>
                <li>Fraud monitoring</li>
                <li>Device verification</li>
                <li>Transaction monitoring</li>
                <li>Access control procedures</li>
              </ul>
              <p className="mt-3">
                Users must also take reasonable steps to protect their accounts and devices.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">9. Fees and Charges</h3>
              <p>
                Certain services may be subject to applicable fees, charges, or taxes.
              </p>
              <p className="mt-3">
                Any applicable fees will be clearly disclosed before a transaction or service request is completed.
              </p>
              <p className="mt-3">
                360payZ reserves the right to modify fees with appropriate notice.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">10. Intellectual Property</h3>
              <p>
                All content, trademarks, logos, designs, software, and intellectual property associated with 360payZ remain the exclusive property of 360payZ and its licensors.
              </p>
              <p className="mt-3">
                Users may not copy, reproduce, distribute, or modify any platform content without prior written permission.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">11. Service Availability</h3>
              <p>
                While we strive to maintain uninterrupted access to our services, we do not guarantee continuous availability.
              </p>
              <p className="mt-3">Services may be temporarily unavailable due to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>System maintenance</li>
                <li>Security upgrades</li>
                <li>Technical issues</li>
                <li>Third-party service interruptions</li>
                <li>Regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">12. Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, 360payZ shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Indirect or consequential losses</li>
                <li>Business interruption</li>
                <li>Data loss</li>
                <li>Delays caused by third-party providers</li>
                <li>Service disruptions beyond our control</li>
              </ul>
              <p className="mt-3">
                Users acknowledge that use of the platform is at their own risk.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">13. Suspension and Termination</h3>
              <p>360payZ may suspend, restrict, or terminate accounts if:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Terms are violated.</li>
                <li>Fraudulent activity is suspected.</li>
                <li>Regulatory requirements necessitate action.</li>
                <li>Security risks are identified.</li>
              </ul>
              <p className="mt-3">
                Termination may occur without prior notice when required for security or legal reasons.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">14. Modifications to Terms</h3>
              <p>
                We reserve the right to update or modify these Terms of Use at any time.
              </p>
              <p className="mt-3">
                Updated versions will be published on the website with a revised effective date.
              </p>
              <p className="mt-3">
                Continued use of the platform after updates constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">15. Governing Law</h3>
              <p>
                These Terms of Use shall be governed and interpreted in accordance with the laws of India.
              </p>
              <p className="mt-3">
                Any disputes arising from the use of the platform shall be subject to the jurisdiction of the competent courts of India.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">16. Contact Information</h3>
              <p>For questions regarding these Terms of Use, please contact:</p>
              <div className="mt-3">
                <p className="font-semibold text-neutral-800">360payZ Support Team</p>
                <p>Email: <a href="mailto:support@360payz.com" className="text-primary font-medium hover:underline">support@360payz.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
