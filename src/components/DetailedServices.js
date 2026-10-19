"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Layers,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Sliders,
  Shield,
  Zap,
} from "lucide-react";

export default function DetailedServices() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-[#070b14] relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-bold">
            <Layers className="w-4 h-4" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.services.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 01 to 08 Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl glass-panel p-6 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-sky-400/60 group-hover:text-sky-400 font-mono transition-colors">
                    {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Short Desc */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Details footer */}
              <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed">
                {item.details}
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 p-6 rounded-3xl glass-card-primary border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isRTL
                  ? "هل تحتاج تركيبة مخصصة من هذه الخدمات لمشروعك؟"
                  : "Need a tailored combination of these solutions?"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {isRTL
                  ? "نقوم بدمج الويب والموبايل ولوحات التحكم في نظام موحد يناسب حجم عملك بالضبط."
                  : "We merge web, mobile, and dashboards into one seamless unified platform."}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink(
              isRTL
                ? "مرحبًا Web Alex، أود استشارة حول دمج خدمات مخصصة لمشروعي."
                : "Hello Web Alex, I'd like a consultation on combining custom solutions for my business."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center gap-2 shrink-0 transition-colors shadow-lg shadow-sky-500/20"
          >
            <span>{isRTL ? "استشرنا مجانًا الآن" : "Free Consultation"}</span>
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
