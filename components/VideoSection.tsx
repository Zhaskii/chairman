"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Video,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VIDEOS, VideoItem } from "@/data/content";

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(
    null,
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Ensure at least 3 videos are displayed on screens >= 768px (and >= 640px), 1 or 2 on small mobile
  useEffect(() => {
    const updateItemsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerView(1);
      } else if (w < 860) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3); // Shows at least 3 videos side-by-side
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay slider with smooth pause on hover
  useEffect(() => {
    if (isHovered || VIDEOS.length <= itemsPerView) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, itemsPerView]);

  // Modal keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalVideo(null);
    };
    if (activeModalVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModalVideo]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".video-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="py-14 sm:py-24 max-w-7xl mx-auto px-3 sm:px-6 md:px-12 w-full max-w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Header */}
      <div className="video-heading text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-[#0154A5] text-[11px] font-bold uppercase tracking-widest mb-3">
          <Video className="w-3.5 h-3.5 text-[#0154A5]" />
          <span>Watch & Listen</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a6e] tracking-tight mb-4">
          Video Messages & Speeches
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
          Keynote addresses, media dialogues, bilateral trade presentations, and
          official speeches by Dr. Rajesh Kazi Shrestha.
        </p>
        <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Slider Wrapper with Chevrons and Track */}
      <div className="relative px-0 md:px-12 w-full max-w-full">
        {/* Navigation Chevron Left */}
        {VIDEOS.length > itemsPerView && (
          <button
            onClick={prevSlide}
            aria-label="Previous video"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white text-[#0154A5] hover:bg-[#0154A5] hover:text-white border-2 border-blue-200 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 shrink-0" />
          </button>
        )}

        {/* Navigation Chevron Right */}
        {VIDEOS.length > itemsPerView && (
          <button
            onClick={nextSlide}
            aria-label="Next video"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white text-[#0154A5] hover:bg-[#0154A5] hover:text-white border-2 border-blue-200 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 shrink-0" />
          </button>
        )}

        {/* Carousel Viewport */}
        <div className="overflow-hidden rounded-3xl p-1">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform:
                "translateX(-" + currentIndex * (100 / itemsPerView) + "%)",
            }}
          >
            {VIDEOS.map((video, idx) => {
              const thumbnailSrc =
                "https://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
              return (
                <div
                  key={video.id + "-" + idx}
                  style={{
                    minWidth: 100 / itemsPerView + "%",
                    width: 100 / itemsPerView + "%",
                  }}
                  className="px-2.5 sm:px-3 shrink-0 box-border"
                >
                  <div
                    onClick={() => setActiveModalVideo(video)}
                    className="group relative bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-[0_8px_30px_rgba(1,84,165,0.06)] hover:shadow-[0_16px_45px_rgba(1,84,165,0.16)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col h-full"
                  >
                    {/* 16:9 Video Thumbnail */}
                    <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={thumbnailSrc}
                        alt={video.title}
                        fill
                        unoptimized
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          <div className="sonar-wave"></div>
                          <div className="w-14 h-14 bg-white/25 backdrop-blur-md border border-white/60 rounded-full flex items-center justify-center group-hover:scale-115 group-hover:bg-[#0154A5] transition-all duration-300 shadow-xl relative z-10">
                            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Video Tag */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                        <Video className="w-3 h-3 text-red-400" />
                        <span>Address</span>
                      </div>
                    </div>

                    {/* Card Description */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <h4 className="text-sm sm:text-base font-bold text-[#1a3a6e] group-hover:text-[#0154A5] transition-colors leading-snug line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="mt-4 pt-3 border-t border-blue-50 flex items-center justify-between text-xs text-[#0154A5] font-bold">
                        <span>Click to Play Speech</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination & Mobile Navigation Indicator */}
        <div className="flex justify-between items-center mt-6 px-2">
          <div className="text-xs font-bold text-slate-500">
            Showing video{" "}
            <span className="text-[#0154A5]">{currentIndex + 1}</span> -{" "}
            <span className="text-[#0154A5]">
              {Math.min(currentIndex + itemsPerView, VIDEOS.length)}
            </span>{" "}
            of <span className="text-[#0154A5]">{VIDEOS.length}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={
                  "h-2 rounded-full transition-all duration-300 " +
                  (currentIndex === i
                    ? "w-6 bg-[#0154A5]"
                    : "w-2 bg-blue-200 hover:bg-blue-300")
                }
                aria-label={"Go to slide " + (i + 1)}
              />
            ))}
          </div>

          {/* Quick prev / next buttons on mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-blue-50 text-[#0154A5] border border-blue-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-blue-50 text-[#0154A5] border border-blue-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModalVideo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-950 border-b border-white/10 text-white">
              <div className="flex items-center gap-2 pr-4">
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <h3 className="font-bold text-sm sm:text-base text-slate-100 line-clamp-1">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive 16:9 Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={
                  "https://www.youtube-nocookie.com/embed/" +
                  activeModalVideo.id +
                  "?autoplay=1&rel=0"
                }
                title={activeModalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
              <span>
                Dr. Rajesh Kazi Shrestha &bull; Arksh Group Official Speeches
              </span>
              <a
                href={activeModalVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
