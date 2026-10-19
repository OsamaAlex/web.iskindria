"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  MessageCircle,
  Zap,
  ArrowRight,
  ArrowLeft,
  Heart,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-[#04060b] border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Brand & Mission Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500/20 via-cyan-400/15 to-indigo-600/25 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/20 p-0.5 overflow-hidden group-hover:scale-105 group-hover:border-sky-400/60 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Web Alex Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]"
                />
              </div>
              <span className="text-2xl font-black text-white">
                {t.footer.brand}
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isRTL ? "متاح للعمل الفوري" : "Available for Projects"}</span>
              </div>
            </div>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick WhatsApp Action (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.ctaTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isRTL
                ? "ابدأ محادثتك واستلم النموذج الأولي في ساعتين."
                : "Kick off your project and receive a prototype in 2 hours."}
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.footer.ctaBtn}</span>
            </a>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-1">
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
