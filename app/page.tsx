"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PortfolioHome from "@/components/PortfolioHome";
import ChairmanMessage from "@/components/ChairmanMessage";
import AwardsTimeline from "@/components/AwardsTimeline";
import LeadershipSection from "@/components/LeadershipSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import SectorsOverview from "@/components/SectorsOverview";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function ChairmanPage() {
  return (
    <main className="min-h-screen bg-[#f0f6ff] flex flex-col selection:bg-[#0154A5] selection:text-white w-full max-w-full overflow-x-clip">
      <Navbar />

      <PortfolioHome />

      <ChairmanMessage />

      <AwardsTimeline />

      <LeadershipSection />

      <VideoSection />

      <GallerySection />

      <SectorsOverview />

      <Footer />

      <BackToTop />
    </main>
  );
}
