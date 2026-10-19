"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MessageCircle,
  Sparkles,
  Clock,
  ArrowRight,
  ArrowLeft,
  Zap,
} from "lucide-react";

export default function CTASection() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#060911] via-slate-950 to-[#070b14]">
      {/* Radiant Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-emerald-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl glass-card-primary border-2 border-sky-500/30 p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-2xl overflow-hidden">
          {/* Top Decorative Sparkle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{isRTL ? "انطلاقة سريعة بدون تعقيد" : "Fast & Frictionless Kickoff"}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.ctaBanner.title}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {t.ctaBanner.subtitle}
          </p>

          {/* Primary CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 glow-whatsapp-btn flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>{t.ctaBanner.ctaButton}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Guarantee Note */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-sky-300/90 font-medium">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.ctaBanner.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
