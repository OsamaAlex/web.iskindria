"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  Globe,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const { t, lang, toggleLanguage, isRTL, getWhatsAppLink } = useLanguage();
  const { isLight, isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-2 shadow-xl border-b backdrop-blur-xl"
          : "bg-transparent py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Encased in Frosted Glass Capsule */}
          <a
            href="#home"
            className="navbar-brand-pill flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border transition-all duration-300 group focus:outline-none hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-500/25 via-cyan-400/20 to-indigo-600/30 border border-sky-400/40 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 group-hover:border-sky-400/70 transition-all duration-300 p-0.5 overflow-hidden shrink-0">
              <Image
                src="/logo.png"
                alt="Web Alex Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="navbar-brand-title text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5 leading-tight">
                {t.nav.brand}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="navbar-brand-subtitle text-[10px] font-bold tracking-wide leading-tight">
                {isRTL ? "تطوير ويب متقدم" : "Senior Web Solutions"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Switches */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-sky-400/50 transition-all duration-200 cursor-pointer shadow-sm group"
              title={isLight ? t.nav.themeToggleDark : t.nav.themeToggleLight}
              aria-label={isLight ? t.nav.themeToggleDark : t.nav.themeToggleLight}
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              )}
            </button>

            {/* Language Switch Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer shadow-sm"
              title={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.nav.langSwitch}</span>
            </button>

            {/* Direct Project Request CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:brightness-110 shadow-md shadow-sky-500/25 transition-all duration-200 glow-primary-btn"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>{t.nav.cta}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: Theme, Language & Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
              title={isLight ? t.nav.themeToggleDark : t.nav.themeToggleLight}
              aria-label={isLight ? t.nav.themeToggleDark : t.nav.themeToggleLight}
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-indigo-500" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Mobile Language Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowIcon className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          {/* Theme switcher row in drawer */}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/60 border border-slate-800"
            >
              <div className="flex items-center gap-2">
                {isLight ? (
                  <Moon className="w-4 h-4 text-indigo-500" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
                <span>
                  {isLight ? t.nav.themeToggleDark : t.nav.themeToggleLight}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-sky-400 font-bold">
                {isLight ? (isRTL ? "مضيء" : "Light") : (isRTL ? "ليلي" : "Dark")}
              </span>
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>{t.nav.cta}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isRTL ? "واتساب مباشر" : "Direct WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
