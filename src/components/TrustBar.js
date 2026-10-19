"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Globe,
  LayoutGrid,
  Smartphone,
  ShieldCheck,
  Cpu,
  Zap,
} from "lucide-react";

export default function TrustBar() {
  const { t, isRTL } = useLanguage();

  const trustIcons = [
    Globe,
    LayoutGrid,
    Smartphone,
    ShieldCheck,
    Cpu,
  ];

  return (
    <div className="w-full py-6 border-y border-slate-800/80 bg-slate-950/70 backdrop-blur-md relative overflow-hidden">
      {/* Background soft glow line */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-cyan-500/10 to-indigo-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {t.hero.trustBar.map((item, idx) => {
            const IconComponent = trustIcons[idx % trustIcons.length] || Zap;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide hover:border-sky-500/40 hover:text-white transition-all group"
              >
                <span className="p-1 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <span>{item}</span>
                {idx < t.hero.trustBar.length - 1 && (
                  <span className="hidden md:inline-block text-slate-700 mx-1">
                    •
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
