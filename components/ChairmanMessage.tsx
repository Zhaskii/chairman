"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Quote,
  CheckCircle2,
  Award,
  ShieldCheck,
  Sparkles,
  Building,
  Globe2,
  ArrowUpRight,
  Calendar,
  Briefcase,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CHAIRMAN_DATA, STATS } from "@/data/content";

export default function ChairmanMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Main Card Reveal with smooth ease
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 30, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // Strategic Pillars Staggered Pop
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pillar-grid",
            start: "top 90%",
            once: true,
          },
        },
      );

      // Stat Counters with Rollup Ease
      const statElements = document.querySelectorAll(".counter-value");
      statElements.forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetValue,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statIcons = [Calendar, Briefcase, Award, Layers];

  return (
    <section
      id="message"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-10 sm:-mt-12 relative z-20 w-full max-w-full"
    >
      <div
        ref={cardRef}
        className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-[0_16px_50px_rgba(1,84,165,0.11)] border border-blue-100/90 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_70px_rgba(1,84,165,0.16)] group/card"
      >
        {/* Top Split Container: Left Profile + Right Message */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Portrait & Credentials */}
          <div
            ref={leftColRef}
            className="lg:w-[36%] p-6 sm:p-8 bg-linear-to-b from-[#f6fafe] via-[#edf5ff] to-white flex flex-col items-center justify-start gap-5 border-b lg:border-b-0 lg:border-r border-blue-100/80"
          >
            {/* Portrait with 47+ Years Badge */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_14px_40px_rgba(1,84,165,0.20)] w-full max-w-xs sm:max-w-sm aspect-4/5 group border-2 border-white transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={CHAIRMAN_DATA.portrait}
                alt={CHAIRMAN_DATA.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#012d5a]/90 via-transparent to-transparent pointer-events-none"></div>

              {/* Top Verified Ribbon */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0154A5] flex items-center gap-1.5 shadow-md border border-blue-100/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0154A5]" />
                <span>Founder & Chairman</span>
              </div>
            </div>

            {/* Name & Titles */}
            <div className="text-center w-full">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#3498db] mb-1">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a3a6e] tracking-tight">
                {CHAIRMAN_DATA.name}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                {CHAIRMAN_DATA.role}
              </p>

              <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Quick Leadership Badges */}
            <div className="w-full space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-white/95 p-3 rounded-2xl border border-blue-100 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all duration-300">
                <Globe2 className="w-4 h-4 text-[#0154A5] shrink-0" />
                <span className="font-semibold">
                  Honorary Consul, Vietnam to Nepal
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-white/95 p-3 rounded-2xl border border-blue-100 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all duration-300">
                <Building className="w-4 h-4 text-[#0154A5] shrink-0" />
                <span className="font-semibold">
                  Chairman, Int. Chamber of Commerce (ICC Nepal)
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-white/95 p-3 rounded-2xl border border-blue-100 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all duration-300">
                <Award className="w-4 h-4 text-[#0154A5] shrink-0" />
                <span className="font-semibold">
                  Past President & Advisory Council, NCC
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The Chairman Message */}
          <div
            ref={rightColRef}
            className="lg:w-[64%] p-6 sm:p-8 lg:p-11 flex flex-col justify-between items-center text-center gap-5"
          >
            {/* Top Accent Line */}
            <div className="h-1 w-24 bg-linear-to-r from-[#0154A5] via-[#2357A6] to-[#3498db] rounded-full mx-auto"></div>

            <div className="inline-flex items-center justify-center gap-2 mx-auto">
              <Sparkles className="w-4 h-4 text-[#3498db]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3498db]">
                A Message From Our Leader
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1a3a6e] leading-snug text-center max-w-xl mx-auto">
              &ldquo;{CHAIRMAN_DATA.messageIntro}&rdquo;
            </h3>

            {/* Letter Body */}
            <div className="space-y-3.5 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
              {CHAIRMAN_DATA.messageParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Callout Quote */}
            <div className="w-full max-w-2xl bg-linear-to-r from-[#f0f6ff] via-white to-[#f0f6ff] border-x-2 border-[#0154A5] rounded-2xl py-4 px-6 sm:px-8 shadow-2xs text-center mx-auto my-2 transition-all duration-300 hover:shadow-xs">
              <p className="text-[#1a3a6e] font-semibold text-sm sm:text-base italic leading-relaxed text-center">
                &ldquo;{CHAIRMAN_DATA.quote}&rdquo;
              </p>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="pillar-grid grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl mx-auto my-1">
              {CHAIRMAN_DATA.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="pillar-card bg-[#f8fbff] hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center group"
                >
                  <div className="flex flex-col items-center text-center gap-1.5">
                    <div className="p-2 rounded-xl bg-blue-100/80 text-[#0154A5] group-hover:bg-[#0154A5] group-hover:text-white transition-all duration-300 shrink-0 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1a3a6e] group-hover:text-[#0154A5] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sign-off footer */}
            <div className="w-full max-w-2xl pt-4 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Warm Regards & Commitment,
                </p>
                <p className="text-lg sm:text-xl font-black text-[#1a3a6e] font-serif mt-0.5">
                  {CHAIRMAN_DATA.name}
                </p>
                <p className="text-xs text-[#0154A5] font-semibold">
                  Chairman & Managing Director &bull; Arksh Group
                </p>
              </div>

              <a
                href="#awards"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-[#0154A5] font-bold text-xs hover:bg-[#0154A5] hover:text-white transition-all duration-300 shadow-2xs hover:shadow-sm group shrink-0"
              >
                <span>View Honors & Recognitions</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Integrated Executive Impact Stats Ribbon */}
        <div className="bg-linear-to-r from-[#013f7e] via-[#0154A5] to-[#16335f] text-white p-5 sm:p-7 border-t border-blue-300/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {STATS.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className={
                    "flex items-center gap-3.5 px-3 sm:px-5 group transition-transform duration-300 hover:-translate-y-0.5 " +
                    (idx > 0 ? "pt-3 sm:pt-0" : "")
                  }
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-sky-300 border border-white/20 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="counter-value text-3xl sm:text-4xl font-black text-white tracking-tight"
                        data-target={stat.value}
                      >
                        {stat.value}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-sky-300">
                        {stat.suffix}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-blue-100 leading-tight mt-0.5">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-blue-200/75 leading-tight mt-0.5 hidden sm:block">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
