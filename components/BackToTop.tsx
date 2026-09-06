"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={"fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#0154A5] text-white shadow-xl shadow-blue-900/20 border border-white/20 hover:bg-[#1a3a6e] hover:scale-110 active:scale-95 transition-all duration-300 " +
        (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none")
      }
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
