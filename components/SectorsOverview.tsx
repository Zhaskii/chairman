"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Car,
  Utensils,
  Coffee,
  Activity,
  Watch,
  Hotel,
  Layers,
  Sprout,
  Sparkles,
  Plane,
  Globe,
  TrendingUp,
  Tag,
  Building2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTORS, SectorItem } from "@/data/content";

export default function SectorsOverview() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInitialMount = useRef(true);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car,
    Utensils,
    Coffee,
    Activity,
    Watch,
    Hotel,
    Layers,
    Sprout,
    Sparkles,
    Plane,
    Globe,
    TrendingUp,
  };

  const filterTabs = [
    "All",
    "Consumer Goods",
    "Mobility & Transport",
    "Hospitality & Tourism",
    "Retail & Lifestyle",
    "Global Commerce",
  ];

  const filteredSectors = SECTORS.filter((item) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Consumer Goods") {
      return (
        item.category.includes("Consumer") || item.category.includes("FMCG")
      );
    }
    if (selectedFilter === "Hospitality & Tourism") {
      return (
        item.category.includes("Hospitality") ||
        item.category.includes("Travel")
      );
    }
    if (selectedFilter === "Retail & Lifestyle") {
      return (
        item.category.includes("Retail") ||
        item.category.includes("Healthcare") ||
        item.category.includes("Personal") ||
        item.category.includes("Home")
      );
    }
    return item.category.includes(selectedFilter);
  });

  // Initial ScrollTrigger on mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sector-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    isInitialMount.current = false;
    return () => ctx.revert();
  }, []);

  // Smooth immediate animation on filter change without breaking opacity
  useEffect(() => {
    if (isInitialMount.current) return;

    gsap.fromTo(
      ".sector-card",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power2.out" },
    );
  }, [selectedFilter]);

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="py-14 sm:py-24 max-w-7xl mx-auto px-3 sm:px-6 md:px-12 w-full max-w-full overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-[#0154A5] text-[11px] font-bold uppercase tracking-widest mb-3">
          <Globe className="w-3.5 h-3.5 text-[#0154A5]" />
          <span>Conglomerate Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a6e] tracking-tight mb-3">
          Diversified Industry Footprint
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
          Under the Chairman&apos;s visionary stewardship since 1978, Arksh
          Group has expanded into {SECTORS.length}+ core business verticals
          powering the Nepalese economy.
        </p>
        <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 px-2">
        {filterTabs.map((tab) => {
          const isSelected = selectedFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={
                "px-3.5 py-1.5 sm:py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer " +
                (isSelected
                  ? "bg-[#0154A5] text-white shadow-md shadow-blue-600/20 scale-[1.02]"
                  : "bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0154A5] border border-blue-100/80")
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Grid of Sector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredSectors.map((sector, idx) => {
          const Icon = iconMap[sector.icon] || Globe;
          return (
            <div
              key={sector.name + "-" + idx}
              className="sector-card bg-white rounded-3xl p-5 sm:p-6 border border-blue-100/90 shadow-[0_4px_20px_rgba(1,84,165,0.05)] hover:shadow-[0_12px_35px_rgba(1,84,165,0.13)] hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient color splash */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-50 to-transparent pointer-events-none"></div>

              <div>
                {/* Header Icon and Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0154A5] group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
                    {sector.category}
                  </span>
                </div>

                {/* Sector Title */}
                <h3 className="font-bold text-base sm:text-lg text-[#1a3a6e] group-hover:text-[#0154A5] transition-colors leading-tight">
                  {sector.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  {sector.description}
                </p>

                {/* Brand Badges */}
                <div className="mt-4 pt-3 border-t border-blue-50 flex flex-wrap gap-1.5">
                  {sector.brands.map((brand, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0154A5] bg-blue-50/80 px-2 py-0.5 rounded-lg border border-blue-100/60"
                    >
                      <Tag className="w-2.5 h-2.5 opacity-60" />
                      <span>{brand}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
