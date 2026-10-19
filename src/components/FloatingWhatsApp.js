"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const { t, isRTL, getWhatsAppLink } = useLanguage();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a sleek friendly reminder after 3.5s, then automatically dismiss after 5s so it never blocks content
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 3500);

    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={`hidden xl:flex fixed bottom-5 z-40 flex-col pointer-events-none transition-all duration-300 ${
        isRTL ? "right-5 items-end" : "left-5 items-start"
      }`}
    >
      {/* Sleek Compact Micro-Notification (Auto-dismisses in 5s, never blocks cards or buttons) */}
      {showNotification && (
        <div className="floating-whatsapp-pill mb-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 dark:bg-slate-900/95 border border-emerald-500/50 shadow-2xl backdrop-blur-xl animate-fadeIn pointer-events-auto flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowNotification(false)}
            className="font-bold text-slate-100 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <span>{isRTL ? "متاحون لمساعدتك عبر واتساب ⚡" : "We're online on WhatsApp ⚡"}</span>
          </a>
          <button
            onClick={() => setShowNotification(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors shrink-0 ms-0.5"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button with Smooth Hover Label */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto glow-whatsapp-btn"
        aria-label={t.floatingWhatsApp.tooltip}
        title={t.floatingWhatsApp.tooltip}
      >
        {/* Compact WhatsApp Icon */}
        <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0">
          <MessageCircle className="w-6 h-6 fill-slate-950" />
        </div>

        {/* Expanding Label on Hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-black pe-3 rtl:pe-0 rtl:ps-3">
          {isRTL ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        </span>
      </a>
    </div>
  );
}
