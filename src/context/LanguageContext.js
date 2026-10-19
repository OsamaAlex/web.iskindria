"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext();

export const WHATSAPP_NUMBER = "201159666279"; // Updated WhatsApp Contact Number (+201159666279)
export const DISPLAY_PHONE = "+201159666279";
export const EMAIL_ADDRESS = "contact@iskindria.com";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("webalex_lang");
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("webalex_lang", lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const currentTranslations = translations[lang] || translations.ar;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  const getWhatsAppLink = (customText = "") => {
    let defaultMsg =
      lang === "ar"
        ? "مرحبًا Web Alex، أود الاستفسار عن تفاصيل وطلب مشروع جديد."
        : "Hello Web Alex, I would like to inquire about starting a new project.";
    const textToSend = customText ? customText : defaultMsg;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        isRTL,
        toggleLanguage,
        t: currentTranslations,
        getWhatsAppLink,
        whatsappNumber: WHATSAPP_NUMBER,
        emailAddress: EMAIL_ADDRESS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
