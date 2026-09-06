"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Award,
  Medal,
  Crown,
  Star,
  Filter,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AWARDS, AwardItem } from "@/data/content";

export default function AwardsTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const categories = [
    { key: "All", label: "All Honors", count: AWARDS.length },
    {
      key: "National",
      label: "National Orders",
      count: AWARDS.filter((a) => a.category === "National").length,
    },
    {
      key: "Leadership",
      label: "Leadership",
      count: AWARDS.filter((a) => a.category === "Leadership").length,
    },
    {
      key: "International",
      label: "International",
      count: AWARDS.filter((a) => a.category === "International").length,
    },
    {
      key: "Industry",
      label: "Industry",
      count: AWARDS.filter((a) => a.category === "Industry").length,
    },
  ];

  const filteredAwards = AWARDS.filter((award) => {
    const matchesCategory =
      selectedCategory === "All" || award.category === selectedCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !query ||
      award.title.toLowerCase().includes(query) ||
      award.desc.toLowerCase().includes(query) ||
      award.year.includes(query);
    return matchesCategory && matchesSearch;
  });

  // Initial ScrollTrigger on mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".award-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".award-card", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    isInitialMount.current = false;
    return () => ctx.revert();
  }, []);

  // Filter change animation
  useEffect(() => {
    if (isInitialMount.current) return;

    gsap.fromTo(
      ".award-card",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.025, duration: 0.35, ease: "power2.out" },
    );
  }, [selectedCategory, searchTerm]);

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 mt-16 sm:mt-24"
    >
      {/* Section Heading */}
      <div className="award-header-anim text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-[#0154A5] text-[11px] font-bold uppercase tracking-widest mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span>Distinguished Honors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a6e] tracking-tight mb-4">
          Awards & National Recognitions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
          A distinguished legacy of national decorations conferred by Heads of
          State, Prime Ministers, and International Trade Bodies.
        </p>
        <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-blue-200/70 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={
                  "px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer " +
                  (isSelected
                    ? "bg-[#0154A5] text-white shadow-md shadow-blue-600/25 scale-[1.02]"
                    : "bg-[#f8fbff] text-slate-700 hover:bg-blue-100/70 hover:text-[#0154A5] border border-blue-100")
                }
              >
                <span>{cat.label}</span>
                <span
                  className={
                    "px-1.5 py-0.2 rounded-full text-[10px] font-extrabold " +
                    (isSelected
                      ? "bg-white/20 text-white"
                      : "bg-blue-100/80 text-[#0154A5]")
                  }
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search honors, years, titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#f8fbff] text-slate-800 text-xs pl-10 pr-8 py-2.5 rounded-2xl border border-blue-200 focus:outline-hidden focus:border-[#0154A5] focus:bg-white transition-all placeholder:text-slate-400 shadow-2xs"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between mb-6 px-2 text-xs font-semibold text-slate-500">
        <p>
          Showing{" "}
          <span className="text-[#0154A5] font-black">
            {filteredAwards.length}
          </span>{" "}
          of {AWARDS.length} honors
        </p>
        {(selectedCategory !== "All" || searchTerm) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchTerm("");
            }}
            className="text-[#0154A5] hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Timeline List */}
      <div
        ref={timelineRef}
        className="relative border-l-2 border-blue-200 ml-3 sm:ml-8 md:ml-24 space-y-6 sm:space-y-8 pb-8"
      >
        {filteredAwards.length === 0 ? (
          <div className="pl-8 py-12 text-center text-slate-600 bg-white rounded-3xl border border-blue-100 p-6">
            <p className="text-base font-bold text-slate-700">
              No honors match your criteria
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Try another category or clear your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="mt-4 px-4 py-2 bg-[#0154A5] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1a3a6e] transition-colors"
            >
              Show All {AWARDS.length} Honors
            </button>
          </div>
        ) : (
          filteredAwards.map((award, index) => {
            const isRoyal =
              award.desc.includes("King") || award.desc.includes("President");
            const isPM = award.desc.includes("Prime Minister");

            return (
              <div
                key={award.year + "-" + award.title + "-" + index}
                className="award-card relative pl-5 sm:pl-8 group cursor-pointer"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-3 border-[#0154A5] z-10 transition-all duration-300 group-hover:bg-[#3498db] group-hover:scale-140 group-hover:shadow-[0_0_16px_rgba(1,84,165,0.8)] group-hover:border-white"></div>

                {/* Left Year Marker */}
                <div className="hidden md:block absolute -left-20 sm:-left-24 top-5 font-black text-sm sm:text-base text-[#0154A5] opacity-70 group-hover:opacity-100 transition-opacity duration-300 tracking-wider">
                  {award.year}
                </div>

                {/* Content Card */}
                <div className="bg-white p-5 sm:p-7 rounded-3xl border border-blue-100 shadow-[0_4px_20px_rgba(1,84,165,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_35px_rgba(1,84,165,0.12)] group-hover:border-blue-300 relative overflow-hidden">
                  {/* Decorative background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-50 to-transparent pointer-events-none"></div>

                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="text-xs font-bold text-[#0154A5] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                          {award.year}
                        </span>
                        {award.category && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                            {award.category}
                          </span>
                        )}
                        {isRoyal && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                            <Crown className="w-3 h-3 text-amber-600" />
                            <span>State Order</span>
                          </span>
                        )}
                        {isPM && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                            <Medal className="w-3 h-3 text-blue-600" />
                            <span>Prime Ministerial Honor</span>
                          </span>
                        )}
                      </div>

                      <h4 className="text-[#1a3a6e] text-base sm:text-lg font-black tracking-tight leading-snug group-hover:text-[#0154A5] transition-colors">
                        {award.title}
                      </h4>

                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                        {award.desc}
                      </p>
                    </div>

                    {/* Trophy Icon */}
                    <div className="w-10 h-10 rounded-2xl bg-blue-50/80 text-[#0154A5] group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
