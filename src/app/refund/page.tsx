"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function RefundPage() {
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
              <RefreshCcw className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Refund & Reversal Policy</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Simple, Transparent & Secure Refund Process</h3>
              <p>
                At 360payZ, we strive to provide a seamless payment experience. In situations where a transaction cannot be successfully completed, we ensure that eligible refunds are processed efficiently and transparently.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">When Are Refunds Applicable?</h3>
              <p>Refunds may be initiated under the following circumstances:</p>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-bold text-neutral-900">Failed Transactions</h4>
                  <p className="mt-1">The transaction was not successfully completed.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Duplicate Payments</h4>
                  <p className="mt-1">A payment was processed more than once due to technical issues.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Technical Errors</h4>
                  <p className="mt-1">System or network failures prevented successful processing.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Bank Rejections</h4>
                  <p className="mt-1">The beneficiary bank rejected the transaction.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Refund Process</h3>
              
              <div className="mt-4 space-y-6 border-l-2 border-primary/20 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 1 – Transaction Review</span>
                  <p className="mt-1">Our system automatically verifies the transaction status.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 2 – Refund Initiation</span>
                  <p className="mt-1">Eligible refunds are initiated to the original payment source.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 3 – Processing</span>
                  <p className="mt-1">The refund request is processed through banking and payment partners.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <span className="font-bold text-neutral-900 block">Step 4 – Completion</span>
                  <p className="mt-1">The refunded amount is credited back to the user&apos;s account.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Expected Refund Timelines</h3>
              
              <div className="mt-4 border border-neutral-200 rounded-xl overflow-x-auto text-sm">
                <table className="w-full text-left min-w-[400px]">
                  <tbody className="divide-y divide-neutral-200">
                    <tr className="bg-neutral-50 hover:bg-neutral-100 transition-colors">
                      <td className="px-4 py-3 font-semibold text-neutral-900 w-1/2">IMPS Transactions</td>
                      <td className="px-4 py-3">Within 24 Hours</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-neutral-900">UPI Transactions</td>
                      <td className="px-4 py-3">Within 24 Hours</td>
                    </tr>
                    <tr className="bg-neutral-50 hover:bg-neutral-100 transition-colors">
                      <td className="px-4 py-3 font-semibold text-neutral-900">NEFT Transactions</td>
                      <td className="px-4 py-3">Within 72 Hours</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-neutral-900">Banking Delays</td>
                      <td className="px-4 py-3">Subject to partner bank processing timelines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4">
                Please note that actual processing times may vary depending on the banking network.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Refund Notifications</h3>
              <p>Users will receive updates through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Email Notifications</li>
                <li>SMS Alerts</li>
                <li>In-App Notifications</li>
              </ul>
              <p className="mt-3">
                These notifications will provide the latest refund status and confirmation details.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Non-Refundable Charges</h3>
              <p>Certain charges may not be refundable, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Government taxes</li>
                <li>Regulatory fees</li>
                <li>Third-party processing charges</li>
                <li>Service fees already settled with external providers</li>
              </ul>
              <p className="mt-3">
                Applicable charges will be disclosed before transaction confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Incorrect Information</h3>
              <p>Refunds may be delayed or declined if users provide:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Incorrect beneficiary details</li>
                <li>Invalid account information</li>
                <li>Incomplete transaction information</li>
                <li>Incorrect personal details</li>
              </ul>
              <p className="mt-3">
                Users are responsible for reviewing all information before confirming a transaction.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Need Refund Assistance?</h3>
              <p>If you need help regarding a refund, please contact our support team with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Transaction ID</li>
                <li>Registered Mobile Number</li>
                <li>Transaction Date</li>
                <li>Relevant Supporting Details</li>
              </ul>
              <div className="mt-3">
                <p>Support Email: <a href="mailto:support@360payz.com" className="text-primary font-medium hover:underline">support@360payz.com</a></p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-neutral-200 mt-8">
              <p className="text-sm font-semibold text-neutral-800">Policy Acknowledgement</p>
              <p className="mt-2 text-sm">
                By using 360payZ services, you acknowledge that you have read and understood this Refund Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
