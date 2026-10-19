"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Globe,
  Building2,
  ShoppingCart,
  Calendar,
  Smartphone,
  Wrench,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageCircle,
  Box,
} from "lucide-react";

export default function CoreServices() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const iconMap = {
    Globe: Globe,
    Building2: Building2,
    ShoppingCart: ShoppingCart,
    Calendar: Calendar,
    Smartphone: Smartphone,
    Wrench: Wrench,
    Box: Box,
  };

  const handleOrderService = (serviceTitle) => {
    const msg = isRTL
      ? `مرحبًا Web Alex، أود الاستفسار وطلب خدمة: ${serviceTitle}`
      : `Hello Web Alex, I would like to inquire about ordering: ${serviceTitle}`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>{t.coreServices.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.coreServices.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.coreServices.subtitle}
          </p>
        </div>

        {/* 6 Core Cards Grid with Required Visual Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.coreServices.items.map((service) => {
            const IconComp = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 border ${
                  service.borderGlow || "border-slate-800"
                } overflow-hidden`}
              >
                {/* Top Section */}
                <div>
                  {/* Required Visual Preview Image with Aspect Frame */}
                  <div className="relative w-full h-48 mb-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group-hover:border-sky-500/40 transition-colors shadow-inner">
                    <img
                      src={service.image || `/images/services/${service.id}.jpg`}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Overlay Badge & Icon */}
                    <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.gradient} backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg`}
                      >
                        <IconComp className="w-5 h-5 text-sky-300" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-sky-300 border border-slate-700/80">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="text-xs font-semibold text-slate-400 mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Special Competitive Edge Note if present */}
                  {service.badgeNote && (
                    <div className="mb-4 p-2.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{service.badgeNote}</span>
                    </div>
                  )}

                  {/* "Includes / يشمل" Feature Checklist */}
                  <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-800/80">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      {isRTL ? "يشمل النظام:" : "Includes:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.includes.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-[11px] font-medium"
                        >
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <a
                    href={handleOrderService(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-200 group-hover:text-slate-950 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-cyan-300 bg-slate-900 border border-slate-800 group-hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                    <span>{t.coreServices.orderBtn}</span>
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
