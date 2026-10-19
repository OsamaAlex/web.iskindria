"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CoreServices from "@/components/CoreServices";
import DetailedServices from "@/components/DetailedServices";
import ProjectsSection from "@/components/ProjectsSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#060911]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust & Specialization Bar */}
      <TrustBar />

      {/* Core Services (6 Featured Service Cards) */}
      <CoreServices />

      {/* Detailed Solutions (01 to 08 Matrix) */}
      <DetailedServices />

      {/* Projects / Portfolio Showcase (7 Projects + Filters + Modal) */}
      <ProjectsSection />

      {/* Pricing & Packages (3 Tiers + Custom Inquiry) */}
      <PricingSection />

      {/* How It Works (6-Step Roadmap) */}
      <HowItWorks />

      {/* High Conversion CTA Banner */}
      <CTASection />

      {/* Contact Us & Project Request Builder */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp with Tooltip */}
      <FloatingWhatsApp />
    </main>
  );
}
