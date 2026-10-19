"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Send,
  Clock,
  CheckCircle2,
  Zap,
  Sparkles,
  HeartHandshake,
  Workflow,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

export default function HowItWorks() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const iconMap = {
    Send: Send,
    Clock: Clock,
    CheckCircle2: CheckCircle2,
    Zap: Zap,
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#060911]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-bold">
            <Workflow className="w-4 h-4" />
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.howItWorks.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {t.howItWorks.steps.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Zap;
            const isSpecial = !!item.highlight;

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isSpecial
                    ? "glass-card-primary border-2 border-sky-400 shadow-xl shadow-sky-500/10"
                    : "glass-panel border border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Special Highlight Tag */}
                {isSpecial && (
                  <div className="absolute -top-3.5 right-6 rtl:right-auto rtl:left-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[11px] shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.highlight}</span>
                  </div>
                )}

                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isSpecial
                          ? "bg-sky-400 text-slate-950 shadow-md shadow-sky-400/30"
                          : "bg-slate-900 border border-slate-800 text-sky-400"
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-3xl font-black text-slate-700/80 font-mono">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 mb-3">
                    {item.sub}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Step Progression Line Hint */}
                <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span>{isRTL ? `المرحلة ${item.step} من 06` : `Phase ${item.step} of 06`}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <a
            href={getWhatsAppLink(
              isRTL
                ? "مرحبًا Web Alex، أود بدء الخطوة الأولى وإرسال تفاصيل مشروعي."
                : "Hello Web Alex, I'd like to initiate Step 1 and send my project brief."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-black text-base shadow-xl shadow-sky-500/20 hover:brightness-110 glow-primary-btn transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>{isRTL ? "ابدأ الخطوة الأولى الآن عبر واتساب" : "Start Step 1 Now on WhatsApp"}</span>
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
