"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Award,
  Video,
  Image as ImageIcon,
  Briefcase,
  MessageSquare,
  Globe,
  ChevronRight,
  Send,
  Home,
} from "lucide-react";
import { CHAIRMAN_DATA } from "@/data/content";
import Image from "next/image";
import chairman from "@/public/images/ARKSH-CHAIRMAN.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 36);

      const sections = [
        "home",
        "message",
        "awards",
        "leadership",
        "videos",
        "gallery",
        "sectors",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    {
      name: "Home",
      shortName: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "Message",
      shortName: "Message",
      href: "#message",
      icon: MessageSquare,
    },
    {
      name: "Awards & Honors",
      shortName: "Honors",
      href: "#awards",
      icon: Award,
    },
    {
      name: "Leadership",
      shortName: "Leadership",
      href: "#leadership",
      icon: Briefcase,
    },
    {
      name: "Video Speeches",
      shortName: "Speeches",
      href: "#videos",
      icon: Video,
    },
    {
      name: "Visual Moments",
      shortName: "Gallery",
      href: "#gallery",
      icon: ImageIcon,
    },
    {
      name: "Conglomerate",
      shortName: "Sectors",
      href: "#sectors",
      icon: Globe,
    },
    { name: "Contact", shortName: "Contact", href: "#contact", icon: MapPin },
  ];

  return (
    <>
      {/* Top Notification / Contact Bar — hidden at hero, appears when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-[60] h-[34px] flex items-center bg-[#014182] text-white text-[11px] sm:text-xs px-3 sm:px-6 md:px-12 border-b border-white/10 w-full">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-4 overflow-hidden">
            {/* Left contact info in single line */}
            <div className="flex items-center gap-3 sm:gap-5 whitespace-nowrap overflow-x-auto no-scrollbar">
              <a
                href={"mailto:" + CHAIRMAN_DATA.email}
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors shrink-0"
              >
                <div className="bg-white/15 p-1 rounded-md">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">{CHAIRMAN_DATA.email}</span>
              </a>

              <span className="hidden sm:inline-block w-px h-3 bg-white/20 shrink-0"></span>

              <a
                href={"tel:" + CHAIRMAN_DATA.phonePrimary}
                className="hidden sm:flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors shrink-0"
              >
                <div className="bg-white/15 p-1 rounded-md">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">
                  {CHAIRMAN_DATA.phonePrimary}
                </span>
              </a>
            </div>

            {/* Right Status Badge in single line */}
            <div className="flex items-center gap-2 text-white/90 whitespace-nowrap shrink-0">
              <span className="hidden md:inline-block text-[10px] font-bold uppercase tracking-widest text-sky-300">
                Official Portal
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-white tracking-wide">
                Arksh Group
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Zero-jump layout placeholder — contact bar (34px) + header (~52px) = 86px */}
      {isScrolled && <div className="h-[86px] w-full" aria-hidden="true" />}

      {/* Main Navbar — transparent over hero, solid white when scrolled */}
      <header
        className={
          "w-full transition-all duration-300 " +
          (isScrolled
            ? "fixed top-[34px] left-0 right-0 z-50 bg-white/96 backdrop-blur-md shadow-md shadow-blue-950/8 border-b border-blue-100/90 py-2 sm:py-2.5"
            : "fixed top-0 left-0 right-0 z-50 bg-transparent py-3 sm:py-4")
        }
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between gap-2 lg:gap-6">
          {/* Logo & Brand Identity (Strict single line) */}
          <Link
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0 whitespace-nowrap"
          >
            <Image
              src={chairman}
              alt="Arksh Chairman logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-contain shadow-sm group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span
                className={
                  "text-xs sm:text-sm font-bold tracking-tight leading-tight transition-colors " +
                  (isScrolled
                    ? "text-slate-800 group-hover:text-[#0154A5]"
                    : "text-white group-hover:text-sky-200")
                }
              >
                Dr. Rajesh Kazi Shrestha
              </span>
              <span
                className={
                  "text-[10px] font-medium tracking-wide transition-colors " +
                  (isScrolled ? "text-slate-500" : "text-white/70")
                }
              >
                Executive Portfolio • Arksh Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu (Strict single line with no wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 whitespace-nowrap overflow-hidden">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={
                    "px-2.5 xl:px-3.5 py-2 rounded-xl text-xs xl:text-[13px] font-bold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap " +
                    (isScrolled
                      ? isActive
                        ? "text-[#0154A5] bg-blue-50 shadow-2xs"
                        : "text-slate-600 hover:text-[#0154A5] hover:bg-blue-50/60"
                      : isActive
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/15")
                  }
                >
                  <Icon
                    className={
                      "w-3.5 h-3.5 shrink-0 " +
                      (isScrolled
                        ? isActive
                          ? "text-[#0154A5]"
                          : "text-slate-400"
                        : isActive
                          ? "text-sky-300"
                          : "text-white/60")
                    }
                  />
                  {/* Long name on xl+, short name on lg to guarantee 100% single line */}
                  <span className="hidden xl:inline">{link.name}</span>
                  <span className="inline xl:hidden">{link.shortName}</span>
                </a>
              );
            })}

            {/* Direct CTA button (Single line) */}
            <a
              href="#contact"
              className={
                "ml-1 xl:ml-2 px-3.5 xl:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-95 " +
                (isScrolled
                  ? "bg-linear-to-r from-[#0154A5] to-[#2357A6] text-white hover:shadow-md hover:shadow-blue-500/20"
                  : "bg-white text-[#01356b] hover:bg-sky-50")
              }
            >
              <Send className="w-3 h-3" />
              <span>Get In Touch</span>
            </a>
          </nav>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className={
                "hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap " +
                (isScrolled
                  ? "bg-blue-50 text-[#0154A5] border-blue-100 hover:bg-blue-100"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20")
              }
            >
              <span>Contact</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={
                "p-2 rounded-xl transition-colors focus:outline-hidden cursor-pointer " +
                (isScrolled
                  ? "text-[#0154A5] bg-blue-50 hover:bg-blue-100"
                  : "text-white bg-white/10 hover:bg-white/20")
              }
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Fullscreen/Drawer Menu */}
        <div
          className={
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out " +
            (isOpen
              ? "max-h-[85vh] border-t border-blue-100 shadow-2xl bg-white"
              : "max-h-0")
          }
        >
          <div className="px-4 sm:px-8 py-5 space-y-2 overflow-y-auto max-h-[80vh]">
            <div className="pb-3 border-b border-blue-50 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Menu Navigation
              </span>
              <span className="text-[11px] font-semibold text-[#0154A5] bg-blue-50 px-2 py-0.5 rounded-md">
                Dr. Rajesh Kazi Shrestha
              </span>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors " +
                    (isActive
                      ? "bg-blue-50 text-[#0154A5]"
                      : "text-slate-700 hover:bg-blue-50/60 hover:text-[#0154A5]")
                  }
                >
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <div
                      className={
                        "p-1.5 rounded-lg " +
                        (isActive
                          ? "bg-[#0154A5] text-white"
                          : "bg-blue-50 text-[#0154A5]")
                      }
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="whitespace-nowrap">{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>
              );
            })}

            {/* Quick Mobile Contact Details */}
            <div className="pt-4 border-t border-blue-50 space-y-2">
              <a
                href={"tel:" + CHAIRMAN_DATA.phonePrimary}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#0154A5]" />
                <span>Direct Hotline: {CHAIRMAN_DATA.phonePrimary}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-linear-to-r from-[#0154A5] to-[#2357A6] text-white shadow-md shadow-blue-500/20 whitespace-nowrap"
              >
                Contact Chairman Secretariat
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
