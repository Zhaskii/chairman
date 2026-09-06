"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Globe2,
  Award,
  Building,
  Briefcase,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { CHAIRMAN_DATA, STATS } from "@/data/content";

export default function PortfolioHome() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
      )
        .fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          pillarsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const editorialShowcases = [
    {
      badge: "Enterprise & Conglomerate",
      title: "Architect of Arksh Group",
      desc: "47+ years pioneering diversified enterprise across automotive, FMCG, electronics, hospitality, and agro-industries.",
      linkText: "Explore Ventures",
      href: "#sectors",
      icon: Building,
    },
    {
      badge: "Diplomatic Envoy",
      title: "Honorary Consul of Vietnam",
      desc: "Fostering international goodwill, bilateral investment, and high-level economic diplomacy between Nepal and Vietnam.",
      linkText: "Diplomatic Work",
      href: "#leadership",
      icon: Globe2,
    },
    {
      badge: "Chamber Leadership",
      title: "Voice of Nepalese Commerce",
      desc: "Former President of Nepal Chamber of Commerce (NCC) & Chairman of International Chamber of Commerce (ICC Nepal).",
      linkText: "Leadership Roles",
      href: "#leadership",
      icon: Briefcase,
    },
    {
      badge: "National Decorations",
      title: "19+ State & Global Honors",
      desc: "Conferred Sukritimaya Rastra Deep, Suprabal Jansewa Shri, and Bikhyat Trishakti Patta by Kings & Presidents.",
      linkText: "View Honors",
      href: "#awards",
      icon: Award,
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative text-white overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════
          HERO: Full-Screen with Photo as Background
      ═══════════════════════════════════════════════════════ */}
      <div className="relative min-h-screen flex flex-col justify-end">
        {/* Full-Bleed Background Photo — No borders, no outline */}
        <div className="absolute inset-0">
          <Image
            src={
              CHAIRMAN_DATA.homePortrait || "/images/rajesh-kajishrestha2.jpg"
            }
            alt={CHAIRMAN_DATA.name}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Dark Gradient Overlays — lighter so Chairman is clearly visible */}
        {/* Bottom gradient for text legibility only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        {/* Very subtle top fade for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Hero Text Content — Bottom of hero, centered */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
          <div
            ref={headlineRef}
            className="flex flex-col items-center text-center"
          >
            {/* Name — forced single line */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-2xl mb-4 whitespace-nowrap">
              Dr. Rajesh Kazi Shrestha
            </h1>

            {/* Short bio — 2 lines max */}
            <p className="text-xs sm:text-sm font-light text-white/85 max-w-sm sm:max-w-md mx-auto leading-snug mb-7 line-clamp-2">
              Founder & Chairman of Arksh Group · Former State Minister of
              Industry, Commerce & Supplies · Honorary Consul of Vietnam to
              Nepal.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#message"
              className="px-7 py-3.5 rounded-full bg-white text-[#01356b] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-sky-50 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl"
            >
              <span>Read Chairman&apos;s Message</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#leadership"
              className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Executive Biography</span>
              <ArrowUpRight className="w-4 h-4 text-sky-300" />
            </a>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
          <a
            href="#message"
            aria-label="Scroll down"
            className="group flex flex-col items-center gap-1"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-white/60 animate-bounce group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BELOW HERO: Pillars of Impact section (dark bg)
      ═══════════════════════════════════════════════════════ */}
      <div
        ref={pillarsRef}
        className="bg-gradient-to-b from-[#013f7e] via-[#0154A5] to-[#16335f] px-4 sm:px-6 md:px-12 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Pillars of Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-3">
              Explore the Chairman&apos;s Portfolio
            </h2>
            <p className="text-sm text-white/60">
              From founding a diversified conglomerate to international
              diplomacy and chamber movements.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {editorialShowcases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-sky-500/20 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400/80 block mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white uppercase tracking-wider transition-colors mt-6 pt-4 border-t border-white/10"
                  >
                    {item.linkText}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
