"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Send, 
  CreditCard, 
  Users, 
  Bell, 
  Sliders, 
  TrendingUp, 
  Download, 
  Plus, 
  LogOut, 
  Check, 
  AlertTriangle, 
  ShieldAlert, 
  TrendingDown, 
  Search,
  Sparkles,
  Zap,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import GridBg from "@/components/UI/GridBg";
import DashboardDemo from "@/components/DashboardDemo";

interface Card {
  id: string;
  name: string;
  number: string;
  expiry: string;
  bank: string;
  active: boolean;
}

interface Vendor {
  name: string;
  account: string;
  ifsc: string;
  bank: string;
}

export default function DashboardPreviewPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample Cards
  const [cards, setCards] = useState<Card[]>([
    { id: "c1", name: "Corporate Card", number: "•••• •••• •••• 5820", expiry: "12/29", bank: "HDFC Bank", active: true },
    { id: "c2", name: "Operations Card", number: "•••• •••• •••• 9144", expiry: "06/28", bank: "ICICI Bank", active: true },
    { id: "c3", name: "Ad-Spend Card", number: "•••• •••• •••• 3051", expiry: "08/30", bank: "Axis Bank", active: false }
  ]);

  // Sample Vendors
  const [vendors, setVendors] = useState<Vendor[]>([
    { name: "Apex Distributors", account: "50100239482910", ifsc: "HDFC0000102", bank: "HDFC Bank" },
    { name: "Global Logistics Pvt Ltd", account: "000293849102", ifsc: "ICIC0000004", bank: "ICICI Bank" },
    { name: "Surya Enterprise", account: "310492837381", ifsc: "SBIN0000781", bank: "State Bank of India" },
    { name: "Metro Tech Solutions", account: "918029382840", ifsc: "UTIB0000140", bank: "Axis Bank" }
  ]);

  // New Vendor Form
  const [newVendor, setNewVendor] = useState({ name: "", account: "", ifsc: "", bank: "" });
  const [showAddVendor, setShowAddVendor] = useState(false);

  // New Card Form
  const [newCard, setNewCard] = useState({ name: "", number: "", expiry: "", bank: "" });
  const [showAddCard, setShowAddCard] = useState(false);

  // Notifications Log
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Payout of ₹45,000 to Apex Distributors completed successfully.", type: "success", time: "10 mins ago" },
    { id: 2, text: "Security alert: Login detected from new IP 192.168.1.45.", type: "warning", time: "2 hours ago" },
    { id: 3, text: "Cashback reward of ₹850 credited to your wallet.", type: "info", time: "1 day ago" }
  ]);

  const toggleCard = (id: string) => {
    setCards(cards.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  const handleAddVendor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVendor.name || !newVendor.account || !newVendor.ifsc || !newVendor.bank) return;
    setVendors([...vendors, newVendor]);
    setNewVendor({ name: "", account: "", ifsc: "", bank: "" });
    setShowAddVendor(false);
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCard.name || !newCard.number || !newCard.expiry || !newCard.bank) return;
    setCards([...cards, {
      id: "c" + (cards.length + 1),
      name: newCard.name,
      number: "•••• •••• •••• " + newCard.number.slice(-4),
      expiry: newCard.expiry,
      bank: newCard.bank,
      active: true
    }]);
    setNewCard({ name: "", number: "", expiry: "", bank: "" });
    setShowAddCard(false);
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col md:flex-row">
      <GridBg />

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-neutral-200 bg-white/80 backdrop-blur-md p-6 flex flex-col justify-between shrink-0 z-20 pt-12 md:pt-6 shadow-sm">
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Business Portal</span>
            <h2 className="text-xl font-bold text-neutral-900 mt-1">360payZ Suite</h2>
          </div>

          <nav className="space-y-1">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "vendors", label: "Vendor / Supplier Bank Account", icon: Users },
              { id: "cards", label: "Linked Cards", icon: CreditCard },
              { id: "logs", label: "Security Logs", icon: ShieldAlert },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
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
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs text-neutral-500 hover:text-red-600 transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto z-20 pt-12 md:pt-10">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold text-neutral-900">Console Overview</h1>
                <p className="text-xs text-neutral-500 mt-1">Track key metrics and run payments simulation</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Live Portal active
                </span>
              </div>
            </div>

            {/* Top Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Limit Available", value: "₹4,85,200", trend: "+2.4%", desc: "Linked credit lines" },
                { label: "Today's Settlements", value: "₹45,000", trend: "0.0%", desc: "Pending clearances: 0" },
                { label: "Total Cashbacks Earned", value: "₹8,450", trend: "+12.1%", desc: "Direct wallet balance", color: "text-primary" },
                { label: "Active Vendors", value: "4 registered", trend: "100%", desc: "Fully verified" }
              ].map((c, i) => (
                <div key={i} className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] text-neutral-500 block font-bold uppercase">{c.label}</span>
                  <span className={`text-2xl font-extrabold block mt-2 ${c.color || "text-neutral-900"}`}>{c.value}</span>
                  <span className="text-[10px] text-neutral-500 block mt-1">{c.desc}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions & Recent Transfers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Simulator Card */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-neutral-950 border border-zinc-800 p-6 rounded-3xl shadow-xl">
                  <h3 className="text-sm font-bold text-white mb-4">Interactive Sandbox</h3>
                  <DashboardDemo />
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Quick Actions</h4>
                  
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => setActiveTab("vendors")}
                      className="w-full text-center py-2.5 rounded-xl bg-white border border-neutral-200 hover:border-primary text-xs font-semibold text-neutral-800 transition-colors shadow-sm"
                    >
                      Manage Beneficiaries
                    </button>
                    <button 
                      onClick={() => setActiveTab("cards")}
                      className="w-full text-center py-2.5 rounded-xl bg-white border border-neutral-200 hover:border-secondary text-xs font-semibold text-neutral-800 transition-colors shadow-sm"
                    >
                      Update Credit Cards
                    </button>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Quick Help Center</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Have questions about transaction charges, limits, or verification statuses?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-bold"
                  >
                    Open Support Ticket <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VENDORS */}
        {activeTab === "vendors" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-extrabold text-neutral-900">Vendor Directory</h1>
                <p className="text-xs text-neutral-500 mt-1">Manage, add, and verify vendor bank accounts</p>
              </div>
              <button 
                onClick={() => setShowAddVendor(!showAddVendor)}
                className="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-primary/95 transition-colors flex items-center gap-1.5 shadow-md shadow-primary/20"
              >
                <Plus className="h-4 w-4" /> Add Vendor
              </button>
            </div>

            {/* Add Vendor Form */}
            {showAddVendor && (
              <form onSubmit={handleAddVendor} className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl max-w-lg space-y-4 shadow-lg">
                <h3 className="text-sm font-bold text-neutral-900">Add Beneficiary Account</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">VENDOR NAME</label>
                    <input
                      type="text"
                      required
                      value={newVendor.name}
                      onChange={(e) => setNewVendor({...newVendor, name: e.target.value})}
                      placeholder="e.g. Paramount Plastics"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">BANK NAME</label>
                    <input
                      type="text"
                      required
                      value={newVendor.bank}
                      onChange={(e) => setNewVendor({...newVendor, bank: e.target.value})}
                      placeholder="e.g. Yes Bank"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">ACCOUNT NUMBER</label>
                    <input
                      type="text"
                      required
                      value={newVendor.account}
                      onChange={(e) => setNewVendor({...newVendor, account: e.target.value})}
                      placeholder="e.g. 100928472910"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">IFSC CODE</label>
                    <input
                      type="text"
                      required
                      value={newVendor.ifsc}
                      onChange={(e) => setNewVendor({...newVendor, ifsc: e.target.value})}
                      placeholder="e.g. YESB0000102"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setShowAddVendor(false)} 
                    className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-neutral-200"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md shadow-primary/20 hover:bg-primary/95"
                  >
                    Save Beneficiary
                  </button>
                </div>
              </form>
            )}

            {/* Vendors Table */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-100/50 text-neutral-500 font-semibold">
                    <th className="p-4">Vendor Name</th>
                    <th className="p-4">Bank</th>
                    <th className="p-4">Account Number</th>
                    <th className="p-4">IFSC</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {vendors.map((v, i) => (
                    <tr key={i} className="hover:bg-neutral-100/30 transition-colors">
                      <td className="p-4 font-semibold text-neutral-900">{v.name}</td>
                      <td className="p-4">{v.bank}</td>
                      <td className="p-4 font-mono">{v.account}</td>
                      <td className="p-4 font-mono">{v.ifsc}</td>
                      <td className="p-4">
                        <span className="bg-green-500/10 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-500/20 flex items-center gap-1 w-fit">
                          <Check className="h-3 w-3" /> Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CARDS */}
        {activeTab === "cards" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-extrabold text-neutral-900">Linked Credit Cards</h1>
                <p className="text-xs text-neutral-500 mt-1">Manage linked credit cards and spending limits</p>
              </div>
              <button 
                onClick={() => setShowAddCard(!showAddCard)}
                className="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-primary/95 transition-colors flex items-center gap-1.5 shadow-md shadow-primary/20"
              >
                <Plus className="h-4 w-4" /> Link Card
              </button>
            </div>

            {/* Add Card Form */}
            {showAddCard && (
              <form onSubmit={handleAddCard} className="bg-neutral-50 border border-neutral-200 p-6 rounded-3xl max-w-lg space-y-4 shadow-lg">
                <h3 className="text-sm font-bold text-neutral-900">Link New Credit Card</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">CARD NAME/LABEL</label>
                    <input
                      type="text"
                      required
                      value={newCard.name}
                      onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                      placeholder="e.g. Marketing Card"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">BANK NAME</label>
                    <input
                      type="text"
                      required
                      value={newCard.bank}
                      onChange={(e) => setNewCard({...newCard, bank: e.target.value})}
                      placeholder="e.g. HDFC Bank"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">CARD NUMBER</label>
                    <input
                      type="text"
                      maxLength={16}
                      required
                      value={newCard.number}
                      onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                      placeholder="e.g. 4312847291038472"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-neutral-500 block mb-1">EXPIRY DATE</label>
                    <input
                      type="text"
                      maxLength={5}
                      required
                      value={newCard.expiry}
                      onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                      placeholder="MM/YY"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setShowAddCard(false)} 
                    className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-neutral-200"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md shadow-primary/20 hover:bg-primary/95"
                  >
                    Link Card
                  </button>
                </div>
              </form>
            )}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((c) => (
                <div 
                  key={c.id} 
                  className={`rounded-3xl p-6 border relative overflow-hidden flex flex-col justify-between min-h-[180px] transition-all shadow-md ${
                    c.active 
                      ? "border-primary bg-gradient-to-br from-primary/30 via-zinc-950 to-zinc-950 text-white"
                      : "border-neutral-200 bg-neutral-100 text-neutral-700 opacity-60"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-[10px] block uppercase ${c.active ? "text-white/50" : "text-neutral-400"}`}>{c.bank}</span>
                      <span className={`text-sm font-bold ${c.active ? "text-white" : "text-neutral-800"}`}>{c.name}</span>
                    </div>
                    <span className="text-xs">💳</span>
                  </div>

                  <div className="my-4">
                    <span className={`text-sm font-mono tracking-widest ${c.active ? "text-white" : "text-neutral-700"}`}>{c.number}</span>
                  </div>

                  <div className={`flex justify-between items-center pt-3 border-t ${c.active ? "border-white/5" : "border-neutral-200"}`}>
                    <div className={`text-[10px] ${c.active ? "text-white/50" : "text-neutral-400"}`}>
                      <span>EXPIRY: {c.expiry}</span>
                    </div>
                    <button
                      onClick={() => toggleCard(c.id)}
                      className={`text-[9px] font-extrabold px-3 py-1 rounded-full border transition-all ${
                        c.active
                          ? "bg-green-500/15 text-green-400 border-green-500/30"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {c.active ? "ACTIVE" : "INACTIVE"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LOGS */}
        {activeTab === "logs" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900">Security & Audit Logs</h1>
              <p className="text-xs text-neutral-500 mt-1">Audit trail of critical administrative and security events</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 space-y-4 shadow-sm">
              {notifications.map((n) => (
                <div key={n.id} className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 justify-between shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg mt-0.5 ${
                      n.type === "success" ? "bg-green-500/10 text-green-700" :
                      n.type === "warning" ? "bg-red-500/10 text-red-600" :
                      "bg-blue-500/10 text-blue-600"
                    }`}>
                      {n.type === "success" ? <CheckCircle className="h-4 w-4" /> :
                       n.type === "warning" ? <ShieldAlert className="h-4 w-4" /> :
                       <HelpCircle className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-xs text-neutral-900 leading-relaxed">{n.text}</p>
                      <span className="text-[10px] text-neutral-500 block mt-1">{n.time}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-neutral-500 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded uppercase">SYSTEM</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
