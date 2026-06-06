import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlowCursor from "@/components/UI/GlowCursor";
import GlobalLayoutWrapper from "@/components/GlobalLayoutWrapper";
import { OnboardingProvider } from "@/context/OnboardingContext";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "360payZ - Premium Credit Card to Vendor Payment Platform",
  description: "Transfer funds from credit cards to vendor bank accounts in minutes. Secure, compliant, and available 24/7. Get cashback on every transaction.",
  keywords: "fintech, credit card to bank transfer, vendor payments, rent payment by credit card, merchant payouts, India business payments, built to RBI guidelines",
  openGraph: {
    title: "360payZ - Credit Card to Vendor Payouts",
    description: "Securely settle vendor invoices using your credit card line of credit and earn instant cashback rewards.",
    type: "website",
    locale: "en_IN",
    url: "https://360payz.com",
    siteName: "360payZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "360payZ - Credit Card to Vendor Payouts",
    description: "Settle vendor invoices using your credit card line of credit and earn cashback on every transaction.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} light scroll-smooth`}>
      <body className="antialiased min-h-screen bg-background text-neutral-900 selection:bg-primary selection:text-white">
        {/* Global UI Overlays */}
        <div className="gradient-mesh" />
        <div className="noise-overlay" />
        <GlowCursor />
        
        <OnboardingProvider>
          <GlobalLayoutWrapper>
            {children}
            <WhatsAppWidget />
          </GlobalLayoutWrapper>
        </OnboardingProvider>
      </body>
    </html>
  );
}
