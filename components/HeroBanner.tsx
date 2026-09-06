"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";
import gsap from "gsap";

export default function HeroBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { y: -25, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
      )
        .fromTo(
          titleRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          tagsRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        );

      // Smooth floating ambient orbs
      gsap.to(".floating-orb-1", {
        y: -25,
        x: 15,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
      });

      gsap.to(".floating-orb-2", {
        y: 25,
        x: -20,
        repeat: -1,
        yoyo: true,
        duration: 7.5,
        ease: "sine.inOut",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative bg-linear-to-r from-[#01356b] via-[#0154A5] to-[#16335f] text-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden shadow-inner"
    >
      {/* Decorative ambient lighting & shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,152,219,0.3),transparent_65%)] pointer-events-none"></div>
      <div className="floating-orb-1 absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-400/15 blur-3xl pointer-events-none"></div>
      <div className="floating-orb-2 absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-xs font-semibold uppercase tracking-widest text-blue-100 mb-5 shadow-lg shadow-blue-950/20 animate-shimmer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Executive Leadership & Strategic Vision</span>
        </div>

        {/* Main Heading */}
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.15] mb-4 drop-shadow-xs"
        >
          Vision &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-sky-200 to-sky-300">
            Leadership
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl font-medium leading-relaxed mb-6"
        >
          Guiding Arksh Group through 47+ years of industrial leadership, global
          trade partnerships, and sustainable nation-building impact.
        </p>

        {/* Quick Highlights Pills */}
        <div
          ref={tagsRef}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-blue-100/80 font-medium"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
            <span>Founded in 1978</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
            <Compass className="w-3.5 h-3.5 text-sky-300" />
            <span>12+ Diversified Industries</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Bilateral Trade Facilitator</span>
          </span>
        </div>
      </div>
    </section>
  );
}
