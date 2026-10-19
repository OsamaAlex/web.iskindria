"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";
import {
  MessageSquare,
  CheckCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  Phone,
  FileText,
  Clock,
  ArrowRight,
  ArrowLeft,
  Mail,
  Zap,
} from "lucide-react";

export default function ContactSection() {
  const { t, isRTL, getWhatsAppLink, whatsappNumber, emailAddress } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: t.contact.form.types[0] || "",
    budget: t.contact.form.budgets[0] || "",
    details: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMessage = () => {
    const clientName = formData.name.trim() || (isRTL ? "عميل مميز" : "Valued Client");
    const clientPhone = formData.phone.trim() || (isRTL ? "غير محدد" : "Not specified");
    const projectType = formData.projectType || t.contact.form.types[0];
    const budget = formData.budget || t.contact.form.budgets[0];
    const details = formData.details.trim() || (isRTL ? "أود مناقشة فكرة مشروعي وتحديد أفضل طريقة لتنفيذها." : "I'd like to discuss my project concept and find the best way to execute it.");

    if (isRTL) {
      return `🌟 *طلب مشروع جديد — Web Alex*
━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${clientName}
📱 *رقم التواصل / واتساب:* ${clientPhone}
💼 *نوع المشروع المطلوب:* ${projectType}
💰 *الميزانية المتوقعة:* ${budget}

📝 *تفاصيل وفكرة المشروع:*
${details}
━━━━━━━━━━━━━━━━━━
⚡ *أرجو إرسال النموذج الأولي وعرض السعر المقترح.*`;
    } else {
      return `🌟 *New Project Request — Web Alex*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${clientName}
📱 *Contact / WhatsApp:* ${clientPhone}
💼 *Project Type:* ${projectType}
💰 *Budget:* ${budget}

📝 *Project Scope & Details:*
${details}
━━━━━━━━━━━━━━━━━━
⚡ *Looking forward to the initial prototype and quote.*`;
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err) {
      // ignore
    }

    const message = generateMessage();
    const url = getWhatsAppLink(message);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const message = generateMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#060911]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold">
            <MessageSquare className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column / Checklist & Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Checklist Card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-sky-400" />
                <span>{t.contact.checklistTitle}</span>
              </h3>

              <div className="space-y-3">
                {t.contact.checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Response Promise */}
              <div className="p-3.5 rounded-2xl bg-sky-950/40 border border-sky-500/30 text-xs font-semibold text-sky-300 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.contact.form.responseGuarantee}</span>
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="rounded-3xl glass-card-primary p-6 sm:p-8 border border-emerald-500/30 space-y-4">
              <h4 className="text-lg font-bold text-white">
                {isRTL ? "تفضل التواصل المباشر السريع؟" : "Prefer Instant Direct Contact?"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {isRTL
                  ? "يمكنك الضغط على الزر أدناه وفتح محادثة واتساب فورية والتحدث معي مباشرة في أي وقت."
                  : "Click below to launch an instant WhatsApp chat directly with me anytime."}
              </p>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.directCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              {/* Email Direct Link */}
              <a
                href={`mailto:${emailAddress || "contact@iskindria.com"}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-sky-500/30 hover:border-sky-400 text-white font-bold text-sm flex items-center justify-between shadow-lg shadow-sky-500/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <div className="text-[11px] text-slate-400 font-medium leading-none mb-1">
                      {t.contact.emailLabel || (isRTL ? "البريد الإلكتروني المباشر" : "Official Email")}
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-sky-300 font-semibold leading-none">
                      {emailAddress || "contact@iskindria.com"}
                    </div>
                  </div>
                </div>
                <ArrowIcon className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column / Interactive Quote Builder Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 md:p-10 border border-sky-500/20 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-1">
                  {t.contact.form.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {isRTL
                    ? "املأ البيانات أدناه وسيتم صياغة ملخص طلبك وإرساله فوراً عبر واتساب."
                    : "Fill out the fields below to format and send your project brief instantly on WhatsApp."}
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
                {/* Row: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-300">
                      {t.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-300">
                      {t.contact.form.phoneLabel}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Row: Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-300">
                      {t.contact.form.typeLabel}
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                    >
                      {t.contact.form.types.map((type, i) => (
                        <option key={i} value={type} className="bg-slate-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-300">
                      {t.contact.form.budgetLabel}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                    >
                      {t.contact.form.budgets.map((b, i) => (
                        <option key={i} value={b} className="bg-slate-900">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-bold text-slate-300">
                    {t.contact.form.detailsLabel}
                  </label>
                  <textarea
                    rows={4}
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder={t.contact.form.detailsPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit and Copy Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 glow-whatsapp-btn flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>{t.contact.form.submitWhatsApp}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto py-4 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">
                          {isRTL ? "تم النسخ!" : "Copied!"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{t.contact.form.copySummary}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Copied Toast alert */}
                {copied && (
                  <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs text-center font-semibold animate-fadeIn">
                    {t.contact.form.copiedToast}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
