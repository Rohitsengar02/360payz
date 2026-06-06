"use client";

import { useEffect, useRef, useState } from "react";

export default function GlowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: "-300px",
        top: "-300px",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(163,255,18,0.02) 50%, rgba(0,0,0,0) 80%)",
        mixBlendMode: "multiply",
      }}
    />
  );
}
