"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ProjectModal from "./ProjectModal";
import { getFormattedCvDemoProject } from "@/data/data";
import {
  MessageCircle,
  Eye,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle,
  ShieldCheck,
  Smartphone,
  Layers,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Clock,
  Flame,
  Globe,
  Star,
  CheckCircle2,
} from "lucide-react";

/**
 * 6 Core Web Alex Services Background Showcase
 */
const serviceSlides = [
  {
    src: "/images/services/custom.jpg",
    label: { ar: "أنظمة وبرمجيات سحابية مخصصة", en: "Custom Web Apps & Cloud Systems" },
  },
  {
    src: "/images/services/3d-personal.jpg",
    label: { ar: "مواقع فريدة ثلاثية الأبعاد وشخصية", en: "3D & Personal Websites" },
  },
  {
    src: "/images/services/corporate.jpg",
    label: { ar: "بوابات ومواقع الشركات والمؤسسات", en: "Corporate Portals" },
  },
  {
    src: "/images/services/ecommerce.jpg",
    label: { ar: "متاجر إلكترونية متكاملة وسريعة", en: "Full E-Commerce Platforms" },
  },
  {
    src: "/images/services/booking.jpg",
    label: { ar: "منصات الحجز والعيادات والمواعيد", en: "Booking & Clinic Solutions" },
  },
  {
    src: "/images/services/mobile.jpg",
    label: { ar: "تطبيقات الهاتف والتصميم المتجاوب", en: "Mobile Apps & Responsive Web" },
  },
];

export default function HeroSection() {
  const { t, isRTL, getWhatsAppLink, lang } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const offer = t.hero.specialOffer;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const demoProject = useMemo(() => getFormattedCvDemoProject(lang), [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-20 lg:pb-3 flex flex-col justify-center"
    >
      {/* ========================================================================= */}
      {/* ANIMATED BACKGROUND SLIDER (Continuous Video-like Cinematic Camera Motion) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {serviceSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out ${isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={slide.src}
                alt={slide.label[isRTL ? "ar" : "en"]}
                className="w-full h-full object-cover object-center hero-bg-slide-image pointer-events-none select-none"
                loading={idx <= 1 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* CONTRAST PROTECTION MULTI-LAYER OVERLAYS */}
        {/* Layer 1: Dark Translucent Base */}
        <div className="hero-slider-overlay-base absolute inset-0 transition-colors duration-500" />

        {/* Layer 2: Directional Heavy Gradient (Densest on text side for maximum legibility) */}
        <div className="hero-slider-overlay-gradient absolute inset-0" />

        {/* Layer 3: Vertical Top & Bottom Fade for smooth header/footer transition */}
        <div className="hero-slider-overlay-vertical absolute inset-0" />

        {/* Layer 4: Tech Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow z-1" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none z-1" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[12px] pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left / Main Text Column Wrapped in Premium Glass Shield (7 cols) */}
          <div className="lg:col-span-7 relative z-10">
            <div className="hero-text-glass-card p-4 sm:p-5 lg:p-4 xl:p-5 rounded-3xl flex flex-col items-start text-start space-y-2.5 sm:space-y-3.5 lg:space-y-2 xl:space-y-2.5 shadow-2xl backdrop-blur-2xl">
              {/* Status & Guarantee Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full hero-status-badge border text-xs font-bold tracking-wide shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 -mr-3.5 rtl:-ml-3.5"></span>
                <span>{t.hero.statusBadge}</span>
              </div>

              {/* Main Headline with Dedicated Contrast Classes */}
              <h1 className="hero-main-title text-2xl sm:text-3xl md:text-4xl lg:text-[2.1rem] xl:text-[2.6rem] font-black leading-[1.18] tracking-tight">
                {t.hero.titleStart}{" "}
                <span className="hero-title-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
                  {t.hero.titleGradient}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-main-subtitle text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm font-semibold leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              {/* Marketing Pitch Box with Frosted Glass Shield */}
              <div className="hero-pitch-box p-2.5 sm:p-3 lg:p-2 xl:p-2.5 rounded-xl border-l-4 rtl:border-l-0 rtl:border-r-4 border-sky-400 text-xs sm:text-sm lg:text-xs xl:text-sm leading-normal max-w-xl shadow-inner w-full">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 animate-pulse" />
                  <p className="font-medium text-inherit">{t.hero.pitch}</p>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="w-full sm:w-auto flex flex-col md:flex-row items-center gap-3 pt-0.5">
                {/* Primary WhatsApp Action */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-lg shadow-emerald-500/25 glow-whatsapp-btn cursor-pointer transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>

                {/* Secondary Projects Action */}
                <a
                  href="#projects"
                  className="hero-secondary-btn flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer shadow-md shrink-0"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full pt-2 border-t hero-metrics-border">
                {t.hero.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="hero-metric-card p-1.5 sm:p-2 lg:p-1.5 xl:p-2 rounded-xl flex flex-col shadow-sm"
                  >
                    <span className="text-sm sm:text-base lg:text-sm xl:text-base font-black text-sky-400 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="hero-metric-label text-[10px] font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column / High-Impact Special Offer Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Dual Radiant Ambient Outer Glow */}
              <div className="special-offer-ambient-glow absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse-glow pointer-events-none" />
              <div className="special-offer-border-glow absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 rounded-[1.8rem] opacity-90 shadow-2xl pointer-events-none" />

              {/* Showcase Container - Special Offer */}
              <div className="special-offer-card relative rounded-[1.6rem] p-3.5 sm:p-5 lg:p-3 xl:p-4 shadow-2xl overflow-hidden">
                {/* Radial Top Glow Accent */}
                <div className="special-offer-radial-glow absolute top-0 right-1/4 w-60 h-28 rounded-full blur-3xl pointer-events-none" />

                {/* Top Visual Header Strip */}
                <div className="special-offer-header relative z-10 flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-md shadow-rose-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-md shadow-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/60" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="special-offer-badge inline-flex items-center gap-1 text-[11px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md animate-pulse">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{offer?.badge || (isRTL ? "عرض خاص" : "Special Offer")}</span>
                    </span>

                    <span className="special-offer-dealtag text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full border shadow-sm">
                      {offer?.dealTag}
                    </span>
                  </div>
                </div>

                {/* Main Headline & Highlight Banner */}
                <div className="relative z-10 space-y-1 mb-1.5 sm:mb-2">
                  <h3 className="special-offer-title text-base sm:text-lg lg:text-sm xl:text-base font-black leading-tight tracking-tight drop-shadow-sm">
                    {offer?.title}
                  </h3>

                  <div className="special-offer-highlight-box p-1.5 sm:p-2 lg:p-1.5 xl:p-2 rounded-xl border shadow-inner flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                    <p className="special-offer-highlight-text text-xs sm:text-sm lg:text-xs xl:text-sm font-black flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
                      <span>{offer?.highlight}</span>
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="special-offer-demo-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.04] active:scale-[0.97] shrink-0"
                      title={isRTL ? "معاينة النموذج الحي وموقع السيرة الذاتية" : "Preview Live CV Website Demo"}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{offer?.seeDemo || (isRTL ? "شاهد النموذج (See Demo)" : "See Demo")}</span>
                      <ExternalLink className="w-3 h-3 opacity-75" />
                    </button>
                  </div>

                  {offer?.description && (
                    <p className="special-offer-desc text-[11px] sm:text-xs lg:text-[10.5px] xl:text-xs leading-normal font-normal">
                      {offer.description}
                    </p>
                  )}
                </div>

                {/* High-Contrast VIP Price Spotlight Box */}
                <div className="special-offer-price-box relative z-10 p-2 sm:p-3 lg:p-2 xl:p-2.5 rounded-xl border shadow-lg overflow-hidden mb-1.5 sm:mb-2">
                  <div className="special-offer-price-flare-1 absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl pointer-events-none" />
                  <div className="special-offer-price-flare-2 absolute bottom-0 left-0 w-28 h-28 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-row items-center justify-between gap-2">
                    <div>
                      <div className="special-offer-price-label flex items-center gap-1 mb-0.5 text-[10px] font-black uppercase tracking-wider">
                        <Star className="w-3 h-3" />
                        <span>{isRTL ? "السعر الحصري شامل كل شيء" : "All-Inclusive Special Deal"}</span>
                      </div>

                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="special-offer-price-value text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black font-outfit">
                          {offer?.price}
                        </span>
                        <span className="special-offer-price-currency text-xs sm:text-sm font-black">
                          {offer?.currency}
                        </span>
                        <span className="special-offer-price-orig text-[11px] sm:text-xs font-bold line-through">
                          {offer?.originalPrice}
                        </span>
                        <span className="px-1.5 py-0.5 rounded-md bg-rose-500 text-white font-black text-[10px] shadow-sm">
                          -60%
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-[10px] sm:text-[11px] shadow-sm flex items-center gap-1">
                        <Globe className="w-3 h-3 stroke-[2.5]" />
                        <span className="text-slate-950 font-black">{isRTL ? "نطاق .com مدى الحياة" : "Lifetime .com Included"}</span>
                      </div>
                      <span className="special-offer-price-tagline text-[10px] font-medium hidden sm:inline-block lg:inline-block">
                        {isRTL ? "⚡ استضافة سريعة + دعم" : "⚡ Fast Hosting + Setup"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Offer Features List - High Contrast Cards */}
                <div className="relative z-10 space-y-1 lg:space-y-1 mb-2 sm:mb-2.5">
                  {offer?.features?.map((feat, idx) => {
                    const badgeStyles = [
                      { icon: Sparkles, color: "text-amber-500 bg-amber-500/15 border-amber-500/30" },
                      { icon: Globe, color: "text-sky-500 bg-sky-500/15 border-sky-500/30" },
                      { icon: Smartphone, color: "text-emerald-500 bg-emerald-500/15 border-emerald-500/30" },
                      { icon: Zap, color: "text-cyan-500 bg-cyan-500/15 border-cyan-500/30" },
                    ];
                    const cfg = badgeStyles[idx % badgeStyles.length];
                    const IconComp = cfg.icon;

                    return (
                      <div
                        key={idx}
                        className="special-offer-feature-card group/item flex items-center gap-2 p-1 sm:p-1.5 lg:p-1 xl:p-1.5 rounded-xl border transition-all duration-200 shadow-sm"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border shadow-sm ${cfg.color}`}
                        >
                          <IconComp className="w-3 h-3" />
                        </div>
                        <span className="special-offer-feature-text text-[11px] sm:text-xs lg:text-[11px] xl:text-xs font-bold leading-tight flex-1">
                          {feat}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 opacity-90 group-hover/item:opacity-100" />
                      </div>
                    );
                  })}
                </div>

                {/* Direct High-Impact Action Button */}
                <div className="relative z-10 space-y-1">
                  <a
                    href={getWhatsAppLink(offer?.whatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 lg:py-2 xl:py-2.5 rounded-xl text-xs sm:text-sm lg:text-xs xl:text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-[0_4px_20px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer group overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
                    <span className="text-slate-950 font-black">{offer?.ctaBtn}</span>
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
                  </a>

                  <p className="special-offer-note text-[10px] sm:text-[11px] text-center font-medium leading-none">
                    {offer?.note}
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - High Contrast Solid Gold */}
              <div className="special-offer-floating-1 absolute -top-2.5 -right-1 sm:-right-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-xl shadow-lg shadow-amber-500/40 flex items-center gap-1.5 border border-white/40 animate-float-slow z-20">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                <span className="text-slate-950 font-black">{offer?.floatingBadge1}</span>
              </div>

              {/* Floating Badge 2 - High Contrast Solid Emerald */}
              <div className="special-offer-floating-2 absolute -bottom-2.5 -left-1 sm:-left-2 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-xl shadow-lg shadow-emerald-500/40 flex items-center gap-1.5 border border-white/40 z-20">
                <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="text-slate-950 font-black">{offer?.floatingBadge2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Services Slider Discreet Floating Indicator Pill */}
      <div className="absolute bottom-1.5 sm:bottom-2.5 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-950/80 dark:bg-slate-900/85 border border-sky-500/30 backdrop-blur-md text-[11px] shadow-lg pointer-events-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-400 font-medium hidden md:inline">
          {isRTL ? "خدماتنا المنفذة:" : "Our Services:"}
        </span>
        <span className="text-sky-300 font-bold max-w-[220px] truncate">
          {serviceSlides[currentSlide].label[isRTL ? "ar" : "en"]}
        </span>
        <div className="flex items-center gap-1.5 ps-1 border-s border-slate-700/60 rtl:border-s-0 rtl:border-e rtl:ps-0 rtl:pe-1">
          {serviceSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide
                ? "w-4 bg-sky-400 shadow-sm shadow-sky-400/50"
                : "w-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              title={serviceSlides[i].label[isRTL ? "ar" : "en"]}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CV Special Offer Live Demo Inspection Modal */}
      {isDemoModalOpen && (
        <ProjectModal
          project={demoProject}
          onClose={() => setIsDemoModalOpen(false)}
        />
      )}
    </section>
  );
}
