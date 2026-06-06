"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function GlobalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnboarding = pathname?.startsWith("/get-started");

  if (isOnboarding) {
    return (
      <main className="relative z-10 min-h-screen">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24 min-h-screen">
        {children}
      </main>
    </>
  );
}
