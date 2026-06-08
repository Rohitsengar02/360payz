"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ShieldAlert, Cpu, Landmark, CircleDollarSign, CheckSquare } from "lucide-react";

export default function FlowVisualizer() {
  const steps = [
    {
      title: "Credit Card",
      desc: "User inputs card credentials securely",
      icon: CreditCard,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Verification Engine",
      desc: "Instant card network & bank authorization",
      icon: Cpu,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Fraud Check",
      desc: "360payZ AI analyzes risk markers",
      icon: ShieldAlert,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Vendor / Supplier Bank Account",
      desc: "Instant beneficiary bank verification",
      icon: Landmark,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Bank Settlement",
      desc: "Funds settled using different settlement option.",
      icon: CheckSquare,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cashback Wallet",
      desc: "cashback credited instantly",
      icon: CircleDollarSign,
      color: "from-primary to-green-400",
    },
  ];

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Mobile Flow (Vertical) */}
      <div className="md:hidden flex flex-col items-center gap-6 relative">
        {steps.map((s, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-white border border-neutral-200 p-4 rounded-2xl w-full max-w-sm glass-panel shadow-sm"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-tr ${s.color} text-black font-semibold shadow-md`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">{s.title}</h4>
                <p className="text-xs text-neutral-500">{s.desc}</p>
              </div>
            </motion.div>
            {idx < steps.length - 1 && (
              <div className="h-8 w-0.5 bg-gradient-to-b from-primary to-secondary animate-pulse" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop Flow (Horizontal Grid with Connector Pipes) */}
      <div className="hidden md:block relative px-10">
        <div className="grid grid-cols-6 gap-6 relative z-10">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with Tilt Hover */}
              <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center text-black font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="h-7 w-7" />
                <div className="absolute -inset-1 rounded-2xl bg-inherit filter blur opacity-30 group-hover:opacity-75 transition-opacity -z-10" />
              </div>

              {/* Text info */}
              <h4 className="text-sm font-bold text-neutral-900 mt-4">{s.title}</h4>
              <p className="text-[11px] text-neutral-500 mt-1 max-w-[140px] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connecting SVG Path Line Animation */}
        <div className="absolute top-[32px] left-[calc(8.33%+32px)] right-[calc(8.33%+32px)] h-2 -z-0 pointer-events-none">
          <svg className="w-full h-[10px]" overflow="visible">
            {/* Background Line */}
            <line
              x1="0%"
              y1="5"
              x2="100%"
              y2="5"
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="2"
            />
            {/* Animated Laser Pulse Line */}
            <motion.line
              x1="0%"
              y1="5"
              x2="100%"
              y2="5"
              stroke="url(#laserGrad)"
              strokeWidth="3"
              strokeDasharray="40 160"
              animate={{ strokeDashoffset: [0, -200] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#A3FF12" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
