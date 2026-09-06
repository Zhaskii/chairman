"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Building,
  Globe,
  GraduationCap,
  Trophy,
  Search,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles,
  X
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LEADERSHIP_ROLES, AffiliationItem } from "@/data/content";

export default function LeadershipSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const categories = [
    { key: "All", label: "All Roles", count: LEADERSHIP_ROLES.length },
    {
      key: "Diplomatic",
      label: "Diplomatic",
      count: LEADERSHIP_ROLES.filter((r) => r.category === "Diplomatic").length,
    },
    {
      key: "Chambers",
      label: "Chambers & Trade",
      count: LEADERSHIP_ROLES.filter((r) => r.category === "Chambers").length,
    },
    {
      key: "Government & Academic",
      label: "Government & Academic",
      count: LEADERSHIP_ROLES.filter((r) => r.category === "Government & Academic").length,
    },
    {
      key: "Sports & Culture",
      label: "Sports & Culture",
      count: LEADERSHIP_ROLES.filter((r) => r.category === "Sports & Culture").length,
    },
  ];

  const filteredRoles = LEADERSHIP_ROLES.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Diplomatic":
        return Globe;
      case "Chambers":
        return Building;
      case "Government & Academic":
        return GraduationCap;
      case "Sports & Culture":
        return Trophy;
      default:
        return Briefcase;
    }
  };

  // Initial ScrollTrigger on mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".leadership-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".leadership-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    isInitialMount.current = false;
    return () => ctx.revert();
  }, []);

  // Smooth immediate re-fade on filter/search without breaking opacity
  useEffect(() => {
    if (isInitialMount.current) return;

    gsap.fromTo(
      ".leadership-card",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.025, duration: 0.35, ease: "power2.out" }
    );
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-16 sm:py-24 mt-20 bg-white border-y border-blue-100/60 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/70 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="leadership-header-anim text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-[#0154A5] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-[#0154A5]" />
            <span>Public & Institutional Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a6e] tracking-tight mb-4">
            Leadership Roles & Affiliations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Championing bilateral trade, industrial policy, high-level chamber councils, and socio-economic advancement across {LEADERSHIP_ROLES.length}+ prominent institutions.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#f0f6ff] p-4 sm:p-5 rounded-3xl border border-blue-200/70 mb-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Pills with Count Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 w-full lg:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={"px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer " +
                    (isSelected
                      ? "bg-[#0154A5] text-white shadow-md shadow-blue-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-blue-100/70 hover:text-[#0154A5] border border-blue-100")
                  }
                >
                  <span>{cat.label}</span>
                  <span
                    className={"px-1.5 py-0.2 rounded-full text-[10px] font-extrabold " +
                      (isSelected ? "bg-white/20 text-white" : "bg-blue-100/80 text-[#0154A5]")
                    }
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, chamber, council..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 text-xs pl-10 pr-8 py-2.5 rounded-2xl border border-blue-200 focus:outline-hidden focus:border-[#0154A5] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter / Active Filter Bar */}
        <div className="flex items-center justify-between mb-4 px-2 text-xs font-semibold text-slate-500">
          <p>
            Showing <span className="text-[#0154A5] font-black">{filteredRoles.length}</span> of {LEADERSHIP_ROLES.length} positions
          </p>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-[#0154A5] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Affiliations List Grid */}
        <div
          ref={containerRef}
          className="flex flex-col gap-3"
        >
          {filteredRoles.length === 0 ? (
            <div className="py-16 text-center text-slate-600 bg-[#f8fbff] rounded-3xl border border-blue-100 p-6">
              <p className="text-base font-bold text-slate-700">No positions found</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search term or selecting another category.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-[#0154A5] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1a3a6e] transition-colors"
              >
                Show All {LEADERSHIP_ROLES.length} Roles
              </button>
            </div>
          ) : (
            filteredRoles.map((role, idx) => {
              const Icon = getCategoryIcon(role.category);
              return (
                <div
                  key={role.title + "-" + role.organization + "-" + idx}
                  className="leadership-card group flex flex-col sm:flex-row items-start sm:items-center bg-[#f0f6ff] hover:bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  {/* Left Role Column */}
                  <div className="w-full sm:w-[38%] md:w-[32%] px-5 py-3.5 bg-blue-50/70 group-hover:bg-blue-50 sm:border-r border-b sm:border-b-0 border-blue-100/80 flex items-center justify-between gap-2 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white text-[#0154A5] shadow-2xs shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1a3a6e] group-hover:text-[#0154A5] transition-colors leading-tight">
                        {role.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Organization Column */}
                  <div className="flex-1 w-full px-5 py-3.5 flex items-center justify-between gap-3 text-left sm:text-right">
                    <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Organization
                    </span>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors leading-snug">
                      {role.organization}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
