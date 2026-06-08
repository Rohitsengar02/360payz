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
              <p className="text-xs text-neutral-500">Last updated: June 8, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <p>
              360payZ Payment Solution Private Limited (&quot;360payZ&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you access or use our website, products, services, applications, and related platforms.
            </p>
            <p>
              By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Personal Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>WhatsApp Number</li>
                <li>Email Address</li>
                <li>Business Information</li>
                <li>Residential Address</li>
                <li>Date of Birth (where applicable)</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">KYC and Verification Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aadhaar Information</li>
                <li>PAN Information</li>
                <li>Government-issued identification documents</li>
                <li>Business registration documents</li>
                <li>Bank account details required for verification</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Payment and Transaction Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Credit Card Information (processed securely through authorized payment partners)</li>
                <li>Transaction records</li>
                <li>Payment history</li>
                <li>Settlement details</li>
                <li>Merchant account information</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Technical Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP Address</li>
                <li>Device Information</li>
                <li>Browser Information</li>
                <li>Operating System</li>
                <li>Cookies and Usage Data</li>
                <li>Login Activity</li>
                <li>Device Identifiers</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Communication Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customer support requests</li>
                <li>Feedback and survey responses</li>
                <li>WhatsApp communications</li>
                <li>Email communications</li>
                <li>Call recordings where legally permitted</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">2. How We Use Your Information</h2>
              <p>We may use your information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Verify your identity and business credentials</li>
                <li>Complete KYC and onboarding requirements</li>
                <li>Process transactions and settlements</li>
                <li>Prevent fraud, money laundering, and unauthorized activities</li>
                <li>Monitor platform security</li>
                <li>Provide customer support</li>
                <li>Communicate important service updates</li>
                <li>Improve products and platform performance</li>
                <li>Analyze usage patterns and user experience</li>
                <li>Comply with legal, regulatory, and contractual obligations</li>
                <li>Respond to lawful requests from authorities</li>
                <li>Resolve disputes and enforce our terms</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">3. Legal Basis for Processing</h2>
              <p>We process personal information for lawful purposes including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Performance of contractual obligations</li>
                <li>Compliance with legal and regulatory requirements</li>
                <li>Fraud prevention and security monitoring</li>
                <li>Legitimate business interests</li>
                <li>User consent where applicable</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">4. Digital Personal Data Protection (DPDP) Act, 2023 Compliance</h2>
              <p>
                360payZ is committed to processing personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable laws of India.
              </p>
              <p>As a Data Principal under the DPDP Act, users may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access information regarding their personal data processed by us</li>
                <li>Request correction, completion, or updating of personal data</li>
                <li>Request erasure of personal data where legally permissible</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Seek grievance redressal regarding data processing activities</li>
                <li>Nominate another individual to exercise rights on their behalf in accordance with applicable law</li>
              </ul>
              <p>
                We will process personal data only for lawful purposes, maintain appropriate security safeguards, and retain information only as long as necessary to fulfill legal, regulatory, contractual, and operational requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">5. Information Sharing and Disclosure</h2>
              <p>We do not sell, rent, or trade your personal information.</p>
              <p>We may share information only with:</p>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Banking and Financial Partners</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Partner banks</li>
                <li>Settlement providers</li>
                <li>Financial institutions</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Payment Service Providers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment gateways</li>
                <li>Card networks</li>
                <li>Transaction processing partners</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Regulatory Authorities</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Government agencies</li>
                <li>Regulatory bodies</li>
                <li>Statutory authorities</li>
              </ul>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Law Enforcement Agencies</h3>
              <p>Where disclosure is required by law, court order, or legal process.</p>

              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mt-4">Service Providers</h3>
              <p>Trusted third-party vendors who assist us with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cloud hosting</li>
                <li>Analytics</li>
                <li>Customer support</li>
                <li>Security monitoring</li>
                <li>Communication services</li>
              </ul>
              <p>All third parties are required to maintain confidentiality and security of information.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">6. Data Security</h2>
              <p>We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>256-bit SSL encryption</li>
                <li>Secure data transmission protocols</li>
                <li>Device verification mechanisms</li>
                <li>Multi-layer authentication controls</li>
                <li>Access control systems</li>
                <li>Fraud detection and monitoring tools</li>
                <li>Secure server infrastructure</li>
                <li>Continuous security assessments</li>
                <li>Data encryption at rest and in transit</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission or storage is completely secure. Users acknowledge that internet-based services involve inherent security risks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">7. Data Retention</h2>
              <p>We retain personal information only for as long as necessary to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide services</li>
                <li>Fulfill contractual obligations</li>
                <li>Meet regulatory requirements</li>
                <li>Resolve disputes</li>
                <li>Enforce legal agreements</li>
                <li>Prevent fraud and misuse</li>
              </ul>
              <p>
                Certain records may be retained for longer periods where required by applicable laws, financial regulations, or governmental authorities.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">8. Cookies and Tracking Technologies</h2>
              <p>We may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Improve website functionality</li>
                <li>Remember user preferences</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Enhance user experience</li>
                <li>Maintain security and session management</li>
              </ul>
              <p>
                Users may control cookie settings through their browser preferences, although some features may not function properly if cookies are disabled.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">9. Third-Party Services</h2>
              <p>
                Our platform may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices, content, or security of third-party platforms. Users are encouraged to review the privacy policies of any external services they access.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">10. User Rights</h2>
              <p>Subject to applicable laws, users may:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access their personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Update personal details</li>
                <li>Request deletion of personal information where legally permitted</li>
                <li>Withdraw consent where applicable</li>
                <li>Raise privacy-related grievances</li>
                <li>Contact us regarding data protection concerns</li>
              </ul>
              <p>We may require identity verification before processing certain requests.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">11. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that such information has been collected, we will take reasonable steps to delete it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">12. Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in legal requirements, business practices, or service offerings.
              </p>
              <p>
                The updated version will be published on our website with a revised &quot;Last Updated&quot; date. Continued use of our services after such updates constitutes acceptance of the revised Privacy Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">13. Contact Us</h2>
              <p>For privacy-related questions, requests, or grievances, please contact:</p>
              <p className="font-bold text-neutral-900">360payZ Payment Solution Private Limited</p>
              <p>WhatsApp: <a href="https://wa.me/919876543210" className="text-primary hover:underline">+91 98765 43210</a></p>
              <p>Email: <a href="mailto:support@360payz.com" className="text-primary hover:underline">support@360payz.com</a></p>
              <p>Website: <a href="http://www.360payz.com" className="text-primary hover:underline">www.360payz.com</a></p>
            </div>

            <p className="pt-4 border-t border-neutral-200 mt-8 font-semibold">
              By accessing or using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
