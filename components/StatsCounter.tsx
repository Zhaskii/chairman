"use client";

import React, { useEffect, useRef } from "react";
import { Award, Briefcase, Calendar, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/content";

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const statElements = document.querySelectorAll(".counter-value");

      statElements.forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetValue,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      gsap.fromTo(
        ".stat-box",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const icons = [Calendar, Briefcase, Award, Layers];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 mt-2 sm:mt-2.5 w-full max-w-full"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {STATS.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={stat.label}
              className="stat-box bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border border-blue-100/90 shadow-[0_4px_20px_rgba(1,84,165,0.05)] hover:shadow-[0_12px_35px_rgba(1,84,165,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#0154A5] group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-1.5 shadow-2xs">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div className="flex items-baseline gap-0.5">
                  <span
                    className="counter-value text-2xl sm:text-3xl font-black text-[#1a3a6e] tracking-tight"
                    data-target={stat.value}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#3498db]">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 group-hover:text-[#0154A5] transition-colors leading-tight">
                  {stat.label}
                </h3>
              </div>

              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium leading-tight">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
