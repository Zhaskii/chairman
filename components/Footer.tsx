"use client";

import React, { useState } from "react";
import Image from "next/image";
import chairman from "@/public/images/ARKSH-CHAIRMAN.png";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Globe2,
  Award,
  Building2,
  Briefcase,
  MessageSquare,
  Image as ImageIcon,
  Video,
  ArrowUpRight,
} from "lucide-react";
import { CHAIRMAN_DATA } from "@/data/content";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CHAIRMAN_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const portfolioLinks = [
    { name: "Chairman's Message", href: "#message", icon: MessageSquare },
    { name: "Awards & Honors", href: "#awards", icon: Award },
    { name: "Leadership & Roles", href: "#leadership", icon: Briefcase },
    { name: "Video Speeches", href: "#videos", icon: Video },
    { name: "Visual Moments", href: "#gallery", icon: ImageIcon },
    { name: "Conglomerate Sectors", href: "#sectors", icon: Building2 },
  ];

  const credentials = [
    "Founder & Chairman — Arksh Group",
    "Honorary Consul of Vietnam to Nepal",
    "Former President — Nepal Chamber of Commerce",
    "Chairman — International Chamber of Commerce Nepal",
    "Former State Minister of Industry, Commerce & Supplies",
    "Recipient of 19+ National & International Honors",
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#0154A5] via-[#014a94] to-[#013b78] text-white pt-16 sm:pt-20 pb-8 font-sans w-full relative overflow-hidden"
    >
      {/* Gradient top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Personal Identity & Contact */}
          <div className="space-y-6 lg:col-span-1">
            {/* Monogram + Name */}
            <div className="flex items-center gap-3">
              <Image
                src={chairman}
                alt="Arksh Chairman logo"
                className="w-12 h-12 rounded-xl object-contain shadow-lg shrink-0"
              />
              <div>
                <h3 className="text-base font-black tracking-tight text-white leading-tight">
                  Dr. Rajesh Kazi Shrestha
                </h3>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-sky-300">
                  Personal Portfolio
                </span>
              </div>
            </div>

            {/* Short bio */}
            <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed">
              Industrialist, trade diplomat, and nation builder with over 47
              years of transformative leadership across enterprise, diplomacy,
              and public service.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-1">
              <a
                href={
                  "https://maps.google.com/?q=Arksh+Group+Lazimpat+Kathmandu+Nepal"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-xs sm:text-sm text-blue-100/75 hover:text-white transition-colors group"
              >
                <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-xl shrink-0 transition-colors mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-300" />
                </div>
                <span className="leading-snug">{CHAIRMAN_DATA.address}</span>
              </a>

              <a
                href={"tel:" + CHAIRMAN_DATA.phonePrimary}
                className="flex items-center gap-3 text-xs sm:text-sm text-blue-100/75 hover:text-white transition-colors group"
              >
                <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-xl shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky-300" />
                </div>
                <span>
                  {CHAIRMAN_DATA.phonePrimary} / {CHAIRMAN_DATA.phoneSecondary}
                </span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 text-xs sm:text-sm text-blue-100/75 hover:text-white transition-colors group text-left w-full cursor-pointer"
              >
                <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-xl shrink-0 transition-colors">
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-sky-300" />
                  )}
                </div>
                <span className="flex items-center gap-1.5">
                  {CHAIRMAN_DATA.email}
                  {copiedEmail && (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                      Copied!
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Portfolio Navigation */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200/50 block mb-1">
              Portfolio
            </span>
            <h4 className="text-base font-bold text-white mb-4">
              Explore This Site
            </h4>
            <div className="w-7 h-0.5 bg-sky-400 rounded-full mb-5" />

            <ul className="space-y-2.5">
              {portfolioLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm text-blue-100/65 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2.5 group"
                    >
                      <Icon className="w-3.5 h-3.5 text-sky-400/70 group-hover:text-sky-300 shrink-0 transition-colors" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Key Credentials */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200/50 block mb-1">
              Profile
            </span>
            <h4 className="text-base font-bold text-white mb-4">
              Key Credentials
            </h4>
            <div className="w-7 h-0.5 bg-sky-400 rounded-full mb-5" />

            <ul className="space-y-3">
              {credentials.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-100/65 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200/50 block mb-1">
              Location
            </span>
            <h4 className="text-base font-bold text-white mb-4">
              Office Location
            </h4>
            <div className="w-7 h-0.5 bg-sky-400 rounded-full mb-5" />

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md h-56 relative">
              <iframe
                src={CHAIRMAN_DATA.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Rajesh Kazi Shrestha — Office Location"
              />
            </div>

            <a
              href={
                "https://maps.google.com/?q=Arksh+Group+Lazimpat+Kathmandu+Nepal"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-sky-300 hover:text-white transition-colors font-semibold"
            >
              <Globe2 className="w-3.5 h-3.5" />
              Open in Google Maps
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/50">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-white font-bold">
              Dr. Rajesh Kazi Shrestha
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sky-300/80 font-medium">
              Personal Portfolio
            </span>
            <span>&bull;</span>
            <span className="text-blue-100/50">
              Industrialist · Trade Diplomat · Nation Builder
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
