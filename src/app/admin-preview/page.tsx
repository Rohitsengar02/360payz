"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  UserCheck, 
  FileText, 
  ShieldAlert, 
  Coins, 
  Check, 
  X, 
  MessageSquare, 
  ArrowLeft,
  LayoutDashboard,
  Search,
  Activity,
  ArrowRight
} from "lucide-react";
import GridBg from "@/components/UI/GridBg";

interface KYCRequest {
  id: string;
  name: string;
  pan: string;
  aadhaar: string;
  status: "Pending" | "Approved" | "Rejected";
}

interface SupportTicket {
  id: string;
  user: string;
  query: string;
  status: "Open" | "Resolved";
  date: string;
}

export default function AdminPreviewPage() {
  const [activeSubTab, setActiveSubTab] = useState("kyc");

  // Sample KYC Requests
  const [kycList, setKycList] = useState<KYCRequest[]>([
    { id: "KYC0098", name: "Ramesh Kumar", pan: "ABCDE1234F", aadhaar: "•••• •••• 9210", status: "Pending" },
    { id: "KYC0099", name: "Sunita Deshmukh", pan: "XYZWP9876Q", aadhaar: "•••• •••• 1045", status: "Pending" },
    { id: "KYC0095", name: "Vikram Malhotra", pan: "LMNOP5566R", aadhaar: "•••• •••• 3840", status: "Approved" },
    { id: "KYC0092", name: "Aman Sen", pan: "QRSTU3344V", aadhaar: "•••• •••• 4820", status: "Approved" }
  ]);

  // Sample Support Tickets
  const [tickets, setTickets] = useState<SupportTicket[]>([
    { id: "TCK901", user: "Rohan Sen", query: "My payment failed but limit was blocked.", status: "Open", date: "Today" },
    { id: "TCK902", user: "Neha Sharma", query: "Can I increase my daily limit past 2 Lakhs?", status: "Open", date: "Yesterday" },
    { id: "TCK903", user: "Amit Patel", query: "How to export last 6 months GST statement?", status: "Resolved", date: "2 days ago" }
  ]);

  // Sample Fraud Alerts
  const [fraudAlerts, setFraudAlerts] = useState([
    { id: "FRD201", user: "Unknown", detail: "Multiple failed card authorization attempts.", severity: "High", time: "5 mins ago" },
    { id: "FRD202", user: "Suresh G.", detail: "IP mismatch detected (Expected: Bengaluru, Actual: Frankfurt VPN).", severity: "Medium", time: "1 hour ago" }
  ]);

  const approveKYC = (id: string) => {
    setKycList(kycList.map(item => item.id === id ? { ...item, status: "Approved" } : item));
  };

  const rejectKYC = (id: string) => {
    setKycList(kycList.map(item => item.id === id ? { ...item, status: "Rejected" } : item));
  };

  const resolveTicket = (id: string) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: "Resolved" } : t));
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col md:flex-row">
      <GridBg />

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-neutral-200 bg-white/80 backdrop-blur-md p-6 flex flex-col justify-between shrink-0 z-20 pt-12 md:pt-6 shadow-sm">
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Control Panel</span>
            <h2 className="text-xl font-bold text-neutral-900 mt-1">Admin Console</h2>
          </div>

          <nav className="space-y-1">
            {[
              { id: "kyc", label: "KYC Queue", icon: UserCheck },
              { id: "tickets", label: "Support Tickets", icon: MessageSquare },
              { id: "fraud", label: "Fraud Alerts", icon: ShieldAlert },
              { id: "reports", label: "Rewards & Volume", icon: Coins }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeSubTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-neutral-200">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs text-neutral-500 hover:text-primary transition-colors w-full"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto z-20 pt-12 md:pt-10">
        
        {/* Top Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Registered Users", value: "1,248", trend: "+12.4% weekly", icon: Users },
            { label: "Pending KYC Requests", value: kycList.filter(k => k.status === "Pending").length.toString(), trend: "Urgent", icon: UserCheck, color: "text-amber-600" },
            { label: "Fraud Alerts Flagged", value: fraudAlerts.length.toString(), trend: "Monitor", icon: ShieldAlert, color: "text-red-600" },
            { label: "Total Rewards Tracked", value: "₹24,85,200", trend: "+₹14.5k today", icon: Coins, color: "text-primary" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] text-neutral-500 block font-bold uppercase">{stat.label}</span>
                <span className={`text-2xl font-extrabold block mt-2 ${stat.color || "text-neutral-900"}`}>{stat.value}</span>
                <span className="text-[9px] text-neutral-500 block mt-1">{stat.trend}</span>
              </div>
              <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-neutral-600 shadow-inner">
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>

        {/* TAB 1: KYC QUEUE */}
        {activeSubTab === "kyc" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">KYC Verification Queue</h1>
              <p className="text-xs text-neutral-500 mt-1">Verify or reject submitted National Identity documents</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-100/50 text-neutral-500 font-semibold">
                    <th className="p-4">Applicant ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">PAN Number</th>
                    <th className="p-4">Aadhaar Reference</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {kycList.map((item) => (
                    <tr key={item.id} className="hover:bg-neutral-100/30 transition-colors">
                      <td className="p-4 font-mono font-bold text-neutral-900">{item.id}</td>
                      <td className="p-4 font-semibold text-neutral-900">{item.name}</td>
                      <td className="p-4 font-mono">{item.pan}</td>
                      <td className="p-4 font-mono">{item.aadhaar}</td>
                      <td className="p-4">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          item.status === "Approved" ? "bg-green-500/10 text-green-700 border-green-500/20" :
                          item.status === "Rejected" ? "bg-red-500/10 text-red-600 border-red-500/20" :
                          "bg-amber-500/10 text-amber-700 border-amber-500/20"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {item.status === "Pending" ? (
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => rejectKYC(item.id)}
                              className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg border border-red-500/20 transition-all"
                              title="Reject"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                            <button 
                              onClick={() => approveKYC(item.id)}
                              className="p-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-700 rounded-lg border border-green-500/20 transition-all"
                              title="Approve"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[10px] text-neutral-400 font-medium">Action Completed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: SUPPORT TICKETS */}
        {activeSubTab === "tickets" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Active Support Tickets</h1>
              <p className="text-xs text-neutral-500 mt-1">Review and resolve customer support queries</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 space-y-4 shadow-sm">
              {tickets.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start justify-between gap-4 shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-neutral-500 font-mono">{t.id}</span>
                      <span className="text-xs font-semibold text-neutral-900">{t.user}</span>
                      <span className="text-[9px] text-neutral-400 font-medium">• {t.date}</span>
                    </div>
                    <p className="text-xs text-neutral-600">{t.query}</p>
                  </div>
                  
                  <div>
                    {t.status === "Open" ? (
                      <button 
                        onClick={() => resolveTicket(t.id)}
                        className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:opacity-95 flex items-center gap-1 shadow-md shadow-primary/20"
                      >
                        <Check className="h-3 w-3 stroke-[3]" /> Resolve Ticket
                      </button>
                    ) : (
                      <span className="bg-green-500/10 text-green-700 text-[10px] font-semibold px-2 py-1 rounded-full border border-green-500/20">
                        Resolved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FRAUD ALERTS */}
        {activeSubTab === "fraud" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">360payZ Fraud Alerts</h1>
              <p className="text-xs text-neutral-500 mt-1">Real-time indicators flagged by security algorithms</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Alert Feed */}
              <div className="lg:col-span-2 space-y-4">
                {fraudAlerts.map((alert) => (
                  <div key={alert.id} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start justify-between gap-4 shadow-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-red-500/15 text-red-600 text-[9px] font-bold px-2 py-0.5 rounded border border-red-500/20">{alert.severity} RISK</span>
                        <span className="text-xs font-bold text-neutral-900 font-mono">{alert.id}</span>
                      </div>
                      <p className="text-xs text-neutral-600">{alert.detail}</p>
                      <span className="text-[9px] text-neutral-400 block">{alert.time}</span>
                    </div>
                    <button className="text-[10px] font-bold text-neutral-800 bg-white hover:bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200 transition-colors shadow-sm">
                      Investigate
                    </button>
                  </div>
                ))}
              </div>

              {/* Risk Gauge */}
              <div className="lg:col-span-1">
                <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl text-center space-y-4 shadow-sm">
                  <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Overall Risk Score</h3>
                  <div className="relative inline-flex items-center justify-center">
                    {/* Circle Gauge */}
                    <div className="h-32 w-32 rounded-full border-8 border-neutral-200 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl font-black text-green-700">99.8</span>
                        <span className="text-[10px] text-neutral-500 block">Secure</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    AI engine evaluates all transactions continuously. Normal activity range maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REPORTS */}
        {activeSubTab === "reports" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Rewards & Volume Reports</h1>
              <p className="text-xs text-neutral-500 mt-1">Overview of daily transaction volume and rewards distribution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-neutral-900">Daily Volume Tracker</h4>
                <div className="h-32 w-full flex items-end gap-2 pt-4">
                  {[20, 35, 50, 40, 65, 80, 95].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-neutral-200 rounded-t-sm h-full relative">
                      <div style={{ height: `${val}%` }} className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-neutral-500">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Sun</span>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-neutral-900">Card Rewards Metrics</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-600">
                    <span>Average Payout Reward:</span>
                    <span className="text-neutral-900 font-semibold">Rewards</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Total Disbursed:</span>
                    <span className="text-neutral-900 font-semibold">₹24,85,200</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Unclaimed Wallet Balances:</span>
                    <span className="text-neutral-900 font-semibold">₹1,12,040</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
