"use client";

import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
            <div className="p-2.5 bg-secondary/20 text-emerald-800 rounded-xl">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Cookie Policy</h1>
              <p className="text-xs text-neutral-500">Last updated: June 3, 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-neutral-600 leading-loose break-words">
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Enhancing Your Experience Through Smart Technology</h3>
              <p>
                360payZ uses cookies and similar technologies to improve website performance, enhance security, and provide a personalized user experience.
              </p>
              <p className="mt-3">
                This Cookie Policy explains how and why cookies are used on our platform.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">What Are Cookies?</h3>
              <p>Cookies are small text files stored on your device when you visit a website.</p>
              <p className="mt-3">They help us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Remember your preferences</li>
                <li>Improve platform performance</li>
                <li>Enhance security</li>
                <li>Analyze website usage</li>
                <li>Deliver a better user experience</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Types of Cookies We Use</h3>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-bold text-neutral-900">Essential Cookies</h4>
                  <p className="mt-1">These cookies are required for the website to function properly.</p>
                  <p className="mt-2">They support:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Secure Login</li>
                    <li>User Authentication</li>
                    <li>Session Management</li>
                    <li>Fraud Prevention</li>
                  </ul>
                  <p className="mt-2 text-xs text-neutral-500">Without these cookies, certain platform features may not operate correctly.</p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900">Analytics Cookies</h4>
                  <p className="mt-1">Analytics cookies help us understand how visitors use our website.</p>
                  <p className="mt-2">They help us:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Measure traffic</li>
                    <li>Improve user experience</li>
                    <li>Identify technical issues</li>
                    <li>Optimize platform performance</li>
                  </ul>
                  <p className="mt-2 text-xs text-neutral-500">The information collected is aggregated and does not directly identify users.</p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900">Performance Cookies</h4>
                  <p className="mt-1">These cookies improve website speed and reliability.</p>
                  <p className="mt-2">They help:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Reduce page load times</li>
                    <li>Optimize content delivery</li>
                    <li>Improve platform responsiveness</li>
                    <li>Enhance overall performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900">Preference Cookies</h4>
                  <p className="mt-1">Preference cookies remember your choices and settings.</p>
                  <p className="mt-2">Examples include:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Language preferences</li>
                    <li>User interface settings</li>
                    <li>Previously selected options</li>
                    <li>Personalized experiences</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Why We Use Cookies</h3>
              <p>We use cookies to:</p>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-bold text-neutral-900">Improve Security</h4>
                  <p className="mt-1">Protect accounts and detect suspicious activities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Enhance User Experience</h4>
                  <p className="mt-1">Remember settings and preferences.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Measure Performance</h4>
                  <p className="mt-1">Monitor website effectiveness and reliability.</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Optimize Services</h4>
                  <p className="mt-1">Continuously improve platform functionality.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Third-Party Cookies</h3>
              <p>Some cookies may be provided by trusted third-party partners that assist with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>Website Analytics</li>
                <li>Security Monitoring</li>
                <li>Customer Support Services</li>
                <li>Performance Tracking</li>
              </ul>
              <p className="mt-3">
                These providers operate under their own privacy and cookie policies.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Managing Your Cookies</h3>
              <p>You can manage cookie preferences through your browser settings.</p>
              <p className="mt-3">Most browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 mb-3">
                <li>View Cookies</li>
                <li>Delete Cookies</li>
                <li>Block Cookies</li>
                <li>Receive Cookie Notifications</li>
              </ul>
              <p className="mt-3">
                Please note that disabling certain cookies may impact website functionality and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Data Protection</h3>
              <p>
                Information collected through cookies is protected in accordance with our Privacy Policy and applicable data protection practices.
              </p>
              <p className="mt-3">
                We implement appropriate safeguards to secure user information.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Policy Updates</h3>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or business practices.
              </p>
              <p className="mt-3">
                Updated versions will be published on this page with the revised effective date.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-neutral-900 uppercase tracking-wider mb-3">Contact Us</h3>
              <p>If you have questions regarding our Cookie Policy, please contact:</p>
              <div className="mt-3">
                <p className="font-semibold text-neutral-800">360payZ Support Team</p>
                <p>Email: <a href="mailto:support@360payz.com" className="text-primary font-medium hover:underline">support@360payz.com</a></p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-neutral-200 mt-8">
              <p className="text-sm font-semibold text-neutral-800">Policy Acknowledgement</p>
              <p className="mt-2 text-sm">
                By continuing to use the 360payZ website, you acknowledge that you have read, understood, and agreed to this Cookie Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
