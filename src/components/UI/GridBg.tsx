"use client";

import { motion } from "framer-motion";

export default function GridBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Radiant Glow Lights (Floating Orbs) */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] glow-orb glow-orb-primary opacity-[0.08] animate-pulse-soft" />
      <div className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] glow-orb glow-orb-secondary opacity-[0.08] animate-pulse-soft" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[10%] left-[10%] w-[35vw] h-[35vw] glow-orb glow-orb-primary opacity-[0.05] animate-pulse-soft" style={{ animationDelay: "-5s" }} />
      
      {/* Animated Light Trails */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A3FF12" stopOpacity="0" />
            <stop offset="50%" stopColor="#A3FF12" stopOpacity="1" />
            <stop offset="100%" stopColor="#A3FF12" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Neon laser lines moving down */}
        <motion.rect
          x="15%"
          y="-200"
          width="1.5"
          height="200"
          fill="url(#neonGradient1)"
          animate={{ y: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <motion.rect
          x="45%"
          y="-200"
          width="1.5"
          height="200"
          fill="url(#neonGradient2)"
          animate={{ y: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 2 }}
        />
        <motion.rect
          x="75%"
          y="-200"
          width="1.5"
          height="200"
          fill="url(#neonGradient1)"
          animate={{ y: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear", delay: 5 }}
        />
      </svg>
    </div>
  );
}
