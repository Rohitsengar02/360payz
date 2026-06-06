"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type PaymentMethodType = "credit_card" | "debit_card" | "bank_account" | "upi" | null;

export interface OnboardingState {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  // Verification
  mobileVerified: boolean;
  emailVerified: boolean;
  // KYC
  kycSubmitted: boolean;
  kycStatus: "pending" | "in_review" | "verified" | "rejected";
  aadhaarFrontFile: File | null;
  aadhaarBackFile: File | null;
  panFile: File | null;
  dob: string;
  address: string;
  // Payment
  selectedPaymentMethod: PaymentMethodType;
}

const initialState: OnboardingState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  phoneCountryCode: "+91",
  mobileVerified: false,
  emailVerified: false,
  kycSubmitted: false,
  kycStatus: "pending",
  aadhaarFrontFile: null,
  aadhaarBackFile: null,
  panFile: null,
  dob: "",
  address: "",
  selectedPaymentMethod: null,
};

interface OnboardingContextProps {
  state: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
  resetState: () => void;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>(initialState);

  const updateState = (updates: Partial<OnboardingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState(initialState);
  };

  return (
    <OnboardingContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
