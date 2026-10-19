"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Tag,
  Check,
  Clock,
  Zap,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  Globe,
  LayoutDashboard,
  Smartphone,
  Plus,
} from "lucide-react";

export default function PricingSection() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleSelectPackage = (pkgName, pkgPrice) => {
    const msg = isRTL
      ? `مرحبًا Web Alex، أود طلب "${pkgName}" (${pkgPrice}) ومناقشة تفاصيل مشروعي.`
      : `Hello Web Alex, I would like to order the "${pkgName}" (${pkgPrice}) and discuss my project requirements.`;
    return getWhatsAppLink(msg);
  };

  const renderLegendIcon = (icon) => {
    switch (icon) {
      case "globe":
        return <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
      case "domain":
        return <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case "dashboard":
        return <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case "mobile":
        return <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      default:
        return <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#070b14] border-t border-slate-900">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-bold">
            <Tag className="w-4 h-4" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.pricing.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {t.pricing.packages.map((pkg) => {
            const isHighlighted = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? "glass-card-primary p-8 border-2 border-sky-400 shadow-2xl shadow-sky-500/15 lg:-translate-y-3"
                    : "glass-panel p-7 border border-slate-800/90 hover:border-slate-700"
                }`}
              >
                {/* Popular Highlight Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 font-black text-xs shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.pricing.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Target */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-white mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {pkg.target}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-slate-800/80">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400">
                      / {pkg.period}
                    </span>
                  </div>

                  {/* Attractive Core Formula Legend */}
                  {pkg.legend && (
                    <div className="pricing-legend-card relative p-3 sm:p-3.5 rounded-2xl mb-4 border transition-all duration-300 overflow-hidden shadow-md">
                      {/* Ambient background glow */}
                      <div className="pricing-legend-glow absolute -right-6 -top-6 w-24 h-24 rounded-full blur-xl pointer-events-none opacity-40" />

                      <div className="relative z-10 flex items-center justify-between gap-1 mb-2">
                        <span className="pricing-legend-badge-title text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-400 shrink-0 animate-pulse" />
                          <span>{t.pricing.legendBadge || (isRTL ? "مكونات ومعادلة الباقة:" : "Core Package Formula:")}</span>
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                      </div>

                      {/* Attractive Badge Formula Chain */}
                      <div className="relative z-10 flex flex-wrap items-center gap-1.5">
                        {pkg.legendParts ? (
                          pkg.legendParts.map((item, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && (
                                <span className="pricing-legend-plus font-black text-xs sm:text-sm select-none px-0.5">
                                  +
                                </span>
                              )}
                              <span
                                className={`pricing-legend-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                                  item.highlight ? "pricing-legend-pill-highlight" : "pricing-legend-pill-default"
                                }`}
                              >
                                {renderLegendIcon(item.icon)}
                                <span className="font-black">{item.text}</span>
                              </span>
                            </React.Fragment>
                          ))
                        ) : (
                          <span className="text-xs font-bold text-sky-300">{pkg.legend}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Delivery Time Badge */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-semibold mb-6">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{t.pricing.deliveryPrefix}</span>
                    <span className="text-emerald-400 font-bold">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isHighlighted
                              ? "bg-sky-400/20 text-sky-300"
                              : "bg-slate-800 text-emerald-400"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={handleSelectPackage(pkg.name, pkg.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isHighlighted
                        ? "bg-gradient-to-r from-sky-400 to-cyan-400 hover:brightness-110 text-slate-950 shadow-lg shadow-sky-500/25 glow-primary-btn"
                        : "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.pricing.requestBtn}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Note Box */}
        <div className="rounded-3xl glass-panel p-8 border border-sky-500/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 hidden sm:flex">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">
                  {t.pricing.customNote.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {t.pricing.customNote.text}
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppLink(
                isRTL
                  ? "مرحبًا Web Alex، لدي فكرة مشروع مخصصة وأود تحديد التكلفة والمدة المناسبة."
                  : "Hello Web Alex, I have a custom project concept and would like an estimate on timeline and cost."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 text-slate-950 font-bold text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>{t.pricing.customNote.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
