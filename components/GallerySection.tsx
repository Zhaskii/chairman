"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Camera,
  Calendar,
  Award,
  ZoomIn,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/content";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateView = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else if (w < 768) setItemsPerView(2);
      else if (w < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, GALLERY_PHOTOS.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered || GALLERY_PHOTOS.length <= itemsPerView) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, itemsPerView]);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => ((prev ?? 0) + 1) % GALLERY_PHOTOS.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) =>
            ((prev ?? 0) - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length,
        );
    };

    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".gallery-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-14 sm:py-24 bg-[#f8fbff] border-t border-blue-50 relative w-full max-w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="gallery-header text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#0154A5] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-[#0154A5]" />
            <span>Visual Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a6e] tracking-tight mb-4">
            Historic Moments & Ceremonies
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Archival captures of state honors, presidential decorations, and
            bilateral diplomatic milestones.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-[#0154A5] to-[#3498db] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative px-0 md:px-12 w-full max-w-full">
          {GALLERY_PHOTOS.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous image"
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-blue-200 rounded-full shadow-lg items-center justify-center text-[#0154A5] hover:bg-[#0154A5] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next image"
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-blue-200 rounded-full shadow-lg items-center justify-center text-[#0154A5] hover:bg-[#0154A5] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform:
                  "translateX(-" + currentIndex * (100 / itemsPerView) + "%)",
              }}
            >
              {GALLERY_PHOTOS.map((photo, idx) => (
                <div
                  key={photo.id}
                  style={{ minWidth: 100 / itemsPerView + "%" }}
                  className="px-2 sm:px-3 shrink-0"
                >
                  <div
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-4/5 rounded-3xl overflow-hidden border border-blue-100 shadow-[0_8px_30px_rgba(1,84,165,0.08)] bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_rgba(1,84,165,0.18)]"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#012d5a]/90 via-[#012d5a]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                    {/* Year badge */}
                    {photo.year && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#0154A5] shadow-xs">
                        {photo.year}
                      </div>
                    )}

                    {/* Expand icon */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                      <p className="text-xs font-semibold leading-snug line-clamp-3 text-blue-50">
                        {photo.caption}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                        <span>Click to Enlarge</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-[80] p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) =>
                  ((prev ?? 0) - 1 + GALLERY_PHOTOS.length) %
                  GALLERY_PHOTOS.length,
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[80] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) => ((prev ?? 0) + 1) % GALLERY_PHOTOS.length,
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[80] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-4/3 max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <div className="inline-flex items-center gap-2 mb-1 text-xs text-sky-300 font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>
                  Historic State Decoration &bull;{" "}
                  {GALLERY_PHOTOS[lightboxIndex].year}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-200">
                {GALLERY_PHOTOS[lightboxIndex].caption}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Photo {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
