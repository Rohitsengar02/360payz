"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin, Clock, ShieldCheck, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import GridBg from "@/components/UI/GridBg";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen pt-12 pb-20">
      <GridBg />

      {/* Header Banner */}
      <div className="w-full px-6 md:px-12 lg:px-16 text-center mb-16 space-y-4 relative">
        
        {/* Back Button */}
        <div className="absolute top-0 left-6 md:left-12 lg:left-16 -mt-6 md:-mt-8 z-20">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-primary bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <span className="text-xs uppercase font-extrabold text-primary tracking-widest block pt-4 md:pt-0">CONTACT US</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Let's Connect</h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Need custom volume limits, tech integration, or priority support? Our experts are here to help you 24/7.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Info & Support Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Support Channels</h2>
            <p className="text-xs text-neutral-500">Direct lines for technical and account queries</p>
          </div>

          <div className="space-y-4">
            {[
              { icon: MessageSquare, title: "WhatsApp Support", details: "+91 98765 43210", desc: "Average response: under 2 minutes", color: "text-emerald-600" },
              { icon: Mail, title: "General Contact", details: "contact@360payz.com", desc: "For general queries & partnerships", color: "text-primary" },
              { icon: Mail, title: "Support Email", details: "Support@360payz.com", desc: "Average resolution: 2 hours", color: "text-primary" },
              { icon: Phone, title: "Helpline", details: "1800-360-PAYZ", desc: "9 AM - 9 PM, Mon - Sat", color: "text-emerald-800" }
            ].map((c, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm">
                <div className={`p-3 bg-white ${c.color} rounded-xl h-fit border border-neutral-200 shadow-sm`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{c.title}</h4>
                  <span className="text-sm font-semibold text-neutral-900 block mt-1">{c.details}</span>
                  <span className="text-[11px] text-neutral-500 block mt-0.5">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-8 shadow-lg relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Message Sent!</h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{form.name}</strong>. One of our support executives will contact you via email at <strong>{form.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="bg-neutral-100 border border-neutral-200 hover:border-primary px-6 py-2 rounded-xl text-xs text-neutral-800 transition-colors shadow-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900">Send us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 block mb-1 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Kabir Roy"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 block mb-1 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="kabir@company.com"
                      className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-neutral-500 block mb-1 uppercase">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Higher transaction limits query"
                    className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-neutral-500 block mb-1 uppercase">Message Details</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter the details of your inquiry here..."
                    className="w-full bg-white text-xs text-neutral-900 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-extrabold text-xs py-3.5 rounded-xl hover:opacity-95 active:scale-[0.98] transition-all shadow-md shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Service Level Agreement (SLA) */}
      <div className="w-full px-6 md:px-12 lg:px-16 mt-20 pt-12 border-t border-neutral-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-extrabold text-primary tracking-widest">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Service Level Agreement</h2>
          <p className="text-sm text-neutral-500">
            We are committed to providing you with the highest level of reliability and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "99.9% Uptime", desc: "Our platform infrastructure guarantees 99.9% availability for uninterrupted business payments.", icon: ShieldCheck },
            { title: "24/7 WhatsApp Support", desc: "Dedicated WhatsApp support available around the clock for priority assistance and issue resolution.", icon: MessageSquare },
            { title: "Same-Day Settlements", desc: "Vendor payments processed securely and settled within the same business day.", icon: Check }
          ].map((sla, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:border-primary/20 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#F5F3FF] rounded-full flex items-center justify-center text-primary mb-4 border border-primary/10">
                <sla.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">{sla.title}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">{sla.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
            Backed by <span className="text-neutral-600">360payZ PAYMENT SOLUTIONS PVT. LTD.</span>
          </p>
        </div>
      </div>

      {/* Office Locations */}
      <div className="w-full px-6 md:px-12 lg:px-16 mt-20 pt-12 border-t border-neutral-200 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Our Offices</h3>
          <p className="text-xs text-neutral-500">Visit us or send correspondence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { city: "Bengaluru (HQ)", address: "360payZ Tech Park, 4th Floor, HSR Layout, Sector 6, Bengaluru, Karnataka - 560102" },
            { city: "Mumbai Branch", address: "WeWork Oberoi Commerz II, Off Western Express Hwy, Goregaon East, Mumbai, Maharashtra - 400063" }
          ].map((loc, idx) => (
            <div key={idx} className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl flex gap-3 shadow-sm">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-neutral-900">{loc.city}</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
