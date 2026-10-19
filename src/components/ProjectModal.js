"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Globe,
  Image as ImageIcon,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Maximize2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Eye,
  Users,
  ShoppingBag,
  Layers,
} from "lucide-react";

/**
 * Smart icon selector based on keywords in the image comment
 */
const getCommentIcon = (commentText) => {
  if (!commentText) return <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />;
  const lower = String(commentText).toLowerCase();

  // Multi language / International
  if (
    lower.includes("language") ||
    lower.includes("لغ") ||
    lower.includes("ترجم") ||
    lower.includes("multilingual")
  ) {
    return <Globe className="w-4 h-4 text-sky-400 shrink-0" />;
  }

  // Dashboard / Analytics / Admin
  if (
    lower.includes("dashboard") ||
    lower.includes("تحكم") ||
    lower.includes("لوحة") ||
    lower.includes("إحصائ") ||
    lower.includes("analytics") ||
    lower.includes("control")
  ) {
    return <Monitor className="w-4 h-4 text-cyan-400 shrink-0" />;
  }

  // Users / Clients / Team / Patients
  if (
    lower.includes("user") ||
    lower.includes("مستخدم") ||
    lower.includes("عملاء") ||
    lower.includes("فريق") ||
    lower.includes("مرضى") ||
    lower.includes("client") ||
    lower.includes("patient") ||
    lower.includes("team")
  ) {
    return <Users className="w-4 h-4 text-emerald-400 shrink-0" />;
  }

  // Mobile App / Responsive
  if (
    lower.includes("mobile") ||
    lower.includes("موبايل") ||
    lower.includes("هاتف") ||
    lower.includes("جوال") ||
    lower.includes("responsive") ||
    lower.includes("متجاوب") ||
    lower.includes("app")
  ) {
    return <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />;
  }

  // Cart / Store / E-Commerce
  if (
    lower.includes("cart") ||
    lower.includes("متجر") ||
    lower.includes("سلة") ||
    lower.includes("شراء") ||
    lower.includes("منتج") ||
    lower.includes("shop") ||
    lower.includes("store")
  ) {
    return <ShoppingBag className="w-4 h-4 text-pink-400 shrink-0" />;
  }

  // 3D / Audio / Interactive
  if (
    lower.includes("3d") ||
    lower.includes("ثلاثي") ||
    lower.includes("صوت") ||
    lower.includes("فيديو") ||
    lower.includes("audio") ||
    lower.includes("تفاعلي")
  ) {
    return <Layers className="w-4 h-4 text-purple-400 shrink-0" />;
  }

  return <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />;
};

export default function ProjectModal({ project, onClose }) {
  const { t, isRTL, getWhatsAppLink, lang } = useLanguage();
  const isEn = lang === "en";

  // Gallery normalization supporting objects { src, comment } and string arrays
  const galleryItems = useMemo(() => {
    const resolveText = (val) => {
      if (!val) return "";
      if (typeof val === "string") return val;
      return isEn ? val.en || val.ar || "" : val.ar || val.en || "";
    };

    if (project?.gallery && Array.isArray(project.gallery) && project.gallery.length > 0) {
      return project.gallery.map((item, idx) => {
        if (typeof item === "string") {
          return {
            src: item,
            comment: resolveText(project?.imageComments?.[idx]),
          };
        }
        return {
          src: item.src || item.url || "",
          comment: resolveText(item.comment || item.caption || project?.imageComments?.[idx]),
        };
      });
    }

    if (project?.images && Array.isArray(project.images) && project.images.length > 0) {
      return project.images.map((img, idx) => {
        if (typeof img === "object" && img !== null) {
          return {
            src: img.src || img.url || "",
            comment: resolveText(img.comment || img.caption || project?.imageComments?.[idx]),
          };
        }
        return {
          src: img,
          comment: resolveText(project?.imageComments?.[idx]),
        };
      });
    }

    if (project?.thumbnail) {
      return [
        {
          src: project.thumbnail,
          comment: resolveText(project?.imageComments?.[0]),
        },
      ];
    }

    return [];
  }, [project, isEn]);

  const [viewMode, setViewMode] = useState(
    project?.liveUrl ? "preview" : "gallery"
  );
  const [deviceView, setDeviceView] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeLoading, setIframeLoading] = useState(true);
  const iframeRef = useRef(null);

  // Close on Escape & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (viewMode === "gallery" && galleryItems.length > 1) {
        if (e.key === "ArrowLeft") {
          setActiveImgIndex((prev) =>
            isRTL
              ? (prev + 1) % galleryItems.length
              : (prev - 1 + galleryItems.length) % galleryItems.length
          );
        } else if (e.key === "ArrowRight") {
          setActiveImgIndex((prev) =>
            isRTL
              ? (prev - 1 + galleryItems.length) % galleryItems.length
              : (prev + 1) % galleryItems.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, viewMode, galleryItems.length, isRTL]);

  if (!project) return null;

  const currentItem = galleryItems[activeImgIndex] || galleryItems[0] || {
    src: project.thumbnail || "",
    comment: "",
  };
  const currentImage = currentItem.src;
  const currentComment = currentItem.comment;

  const handleOrderSimilar = () => {
    const msg = isRTL
      ? `مرحبًا Web Alex، أعجبني مشروع "${project.title}" وأود طلب مشروع أو تطبيق ويب مماثل بنفس المواصفات.`
      : `Hello Web Alex, I loved the "${project.title}" project and would like to build a similar web platform with matching specifications.`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  const handleVisitLive = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleReloadIframe = () => {
    setIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setActiveImgIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] rounded-3xl glass-card-primary border border-sky-500/30 p-4 sm:p-6 md:p-8 shadow-2xl z-10 max-h-[96vh] flex flex-col overflow-hidden bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100">
        {/* Top Header Strip: Project Title, Badge, and Close Button */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3 pe-8 rtl:pe-0 rtl:ps-8">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/30 border border-sky-500/40 flex items-center justify-center text-xl sm:text-2xl shadow-inner shrink-0">
              {project.image || "🚀"}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/30">
                  {t?.projects?.categories?.[project.categoryKey] ||
                    project.categoryKey ||
                    "Web App"}
                </span>
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isEn ? "Live Web App" : "تطبيق ويب حي ومباشر"}</span>
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white transition-all cursor-pointer border border-slate-300 dark:border-slate-700 shadow-sm shrink-0"
            aria-label={isEn ? "Close" : "إغلاق"}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto space-y-5 pe-1 rtl:pe-0 rtl:ps-1 flex-1">
          {/* View Mode Switcher Pills: Live Web Preview vs Images Gallery */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-100 dark:bg-slate-950/70 p-2 rounded-2xl border border-slate-300 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              {project.liveUrl && (
                <button
                  type="button"
                  onClick={() => setViewMode("preview")}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    viewMode === "preview"
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-md shadow-sky-500/30 font-black"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>
                    {isEn ? "Live Web Preview" : "معاينة صفحة الويب الحية"}
                  </span>
                </button>
              )}

              {galleryItems.length > 0 && (
                <button
                  type="button"
                  onClick={() => setViewMode("gallery")}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    viewMode === "gallery"
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-md shadow-sky-500/30 font-black"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>
                    {isEn ? "Screenshots Gallery" : "معرض الصور واللقطات"} (
                    {galleryItems.length})
                  </span>
                </button>
              )}
            </div>

            {/* If in Web Preview Mode: Device Responsive Switcher + External Open */}
            {viewMode === "preview" && project.liveUrl && (
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Device View Toggles: Desktop / Tablet / Mobile */}
                <div className="flex items-center bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-0.5">
                  <button
                    onClick={() => setDeviceView("desktop")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      deviceView === "desktop"
                        ? "bg-sky-500 text-slate-950 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                    }`}
                    title={isEn ? "Desktop View" : "عرض الكمبيوتر"}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView("tablet")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      deviceView === "tablet"
                        ? "bg-sky-500 text-slate-950 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                    }`}
                    title={isEn ? "Tablet View" : "عرض التابلت"}
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView("mobile")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      deviceView === "mobile"
                        ? "bg-sky-500 text-slate-950 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                    }`}
                    title={isEn ? "Mobile View" : "عرض الموبايل"}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                {/* Reload Button */}
                <button
                  onClick={handleReloadIframe}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-800 transition-colors"
                  title={isEn ? "Reload Preview" : "إعادة تحميل المعاينة"}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>

                {/* Open in New Window */}
                <button
                  onClick={handleVisitLive}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 border border-slate-300 dark:border-slate-800 transition-colors flex items-center gap-1 text-xs font-bold"
                  title={isEn ? "Open in New Window" : "فتح في نافذة جديدة"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {isEn ? "New Tab" : "نافذة جديدة"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* DISPLAY MODE 1: LIVE INTERACTIVE WEB PREVIEW IFRAME */}
          {viewMode === "preview" && project.liveUrl && (
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
              {/* Simulated Browser Address Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950/80 px-4 py-1 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px] max-w-sm truncate">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{project.liveUrl}</span>
                </div>

                <span className="text-[11px] text-sky-400 font-medium hidden sm:inline">
                  {deviceView === "desktop"
                    ? "Desktop 100%"
                    : deviceView === "tablet"
                    ? "Tablet 768px"
                    : "Mobile 380px"}
                </span>
              </div>

              {/* Iframe Viewport Container */}
              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[620px] bg-slate-950 overflow-x-auto flex justify-center items-stretch p-1">
                {iframeLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                    <span className="text-xs text-slate-300 font-medium">
                      {isEn
                        ? "Loading live web app preview..."
                        : "جارِ تحميل معاينة التطبيق الحي..."}
                    </span>
                  </div>
                )}

                <div
                  className={`h-full transition-all duration-300 rounded-xl overflow-hidden border border-slate-800/60 bg-white ${
                    deviceView === "desktop"
                      ? "w-full"
                      : deviceView === "tablet"
                      ? "w-[768px] max-w-full shadow-2xl"
                      : "w-[380px] max-w-full shadow-2xl"
                  }`}
                >
                  <iframe
                    ref={iframeRef}
                    key={iframeKey}
                    src={project.liveUrl}
                    title={`${project.title} Live Preview`}
                    className="w-full h-full border-0"
                    onLoad={() => setIframeLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  />
                </div>
              </div>

              {/* Security / Fallback Notice Strip */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>
                    {isEn
                      ? "You can interact with the live website directly inside this frame."
                      : "يمكنك التفاعل وتصفح التطبيق مباشرة داخل هذه النافذة."}
                  </span>
                </span>
                <button
                  onClick={handleVisitLive}
                  className="text-sky-400 hover:text-sky-300 font-bold underline flex items-center gap-1"
                >
                  <span>
                    {isEn ? "Open full window" : "فتح في نافذة كاملة"}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* DISPLAY MODE 2: IMAGES GALLERY & SCREENSHOTS SHOWCASE */}
          {(viewMode === "gallery" || !project.liveUrl) &&
            galleryItems.length > 0 && (
              <div className="space-y-3">
                {/* Main Active Preview Image Container */}
                <div className="relative w-full h-72 sm:h-96 md:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group flex items-center justify-center">
                  {/* Floating High-Contrast Glass Comment Badge - Above/Over Image */}
                  {currentComment && (
                    <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 z-20 max-w-[95%] sm:max-w-2xl pointer-events-none transition-all duration-300">
                      <div className="image-glass-comment-wrapper p-[2px] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(14,165,233,0.45)] animate-fadeIn">
                        <div className="image-glass-comment px-4 py-2.5 sm:px-6 sm:py-3 rounded-[14px] flex items-center gap-3 sm:gap-4 backdrop-blur-2xl">
                          <span className="comment-icon-bubble w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                            {getCommentIcon(currentComment)}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-500/25 text-sky-300 border border-sky-400/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>{isEn ? "Featured View / Highlight" : "الميزة المعروضة في اللقطة"}</span>
                              </span>
                            </div>
                            <span className="comment-text text-sm sm:text-base md:text-lg font-black tracking-wide leading-tight truncate">
                              {currentComment}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <img
                    key={currentImage}
                    src={currentImage}
                    alt={`${project.title} - ${currentComment || `Screenshot ${activeImgIndex + 1}`}`}
                    className="w-full h-full object-cover transition-all duration-300 animate-fadeIn"
                  />

                  {/* Gradient overlay for bottom and top readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none" />

                  {/* Previous / Next Arrow Controls */}
                  {galleryItems.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-lg cursor-pointer z-10"
                        title={isEn ? "Previous image" : "الصورة السابقة"}
                      >
                        <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 -translate-y-1/2 right-3 rtl:right-auto rtl:left-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-lg cursor-pointer z-10"
                        title={isEn ? "Next image" : "الصورة التالية"}
                      >
                        <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                      </button>
                    </>
                  )}

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-sky-300 text-xs font-bold border border-slate-700/80 flex items-center gap-1.5 shadow-md z-10">
                    <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>
                      {activeImgIndex + 1} / {galleryItems.length}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <button
                      onClick={handleVisitLive}
                      className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3.5 py-1.5 rounded-xl bg-slate-950/90 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/40 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg z-10"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isEn ? "Live Demo" : "معاينة الموقع الحقيقي"}</span>
                    </button>
                  )}
                </div>

                {/* Thumbnails Carousel Bar with Captions */}
                {galleryItems.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                    {galleryItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`group/thumb relative w-28 h-18 sm:w-36 sm:h-22 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer text-left rtl:text-right ${
                          activeImgIndex === idx
                            ? "border-sky-400 scale-105 shadow-lg shadow-sky-500/40 ring-2 ring-sky-400/50"
                            : "border-slate-800 opacity-65 hover:opacity-100 hover:border-slate-600"
                        }`}
                        title={item.comment || `Thumbnail ${idx + 1}`}
                      >
                        <img
                          src={item.src}
                          alt={item.comment || `Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {item.comment && (
                          <div className="absolute inset-x-0 bottom-0 py-1 px-1.5 bg-slate-950/90 backdrop-blur-xs text-[10px] text-sky-200 font-bold truncate text-center pointer-events-none border-t border-sky-500/30">
                            {item.comment}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

          {/* PROJECT DESCRIPTION & DETAILS SECTION */}
          {/* Headline Banner */}
          {project.headline && (
            <div className="p-3 sm:p-3.5 rounded-xl bg-sky-50 dark:bg-slate-900/90 border border-sky-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-inner">
              <Sparkles className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
              <span>{project.headline}</span>
            </div>
          )}

          {/* Full Detailed Description */}
          {project.description && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {isEn ? "Project Description & Solutions:" : "وصف المشروع والحلول المنفذة:"}
              </h4>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          )}

          {/* Metrics & Highlights */}
          {project.metrics && (
            <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                  {isEn ? "Key Features & Highlights:" : "أبرز مميزات ومواصفات المشروع:"}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950 dark:text-slate-200">
                  {project.metrics}
                </p>
              </div>
            </div>
          )}

          {/* Tags / Technologies Included */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {isEn ? "Technologies & Modules:" : "التقنيات والموديولات البرمجية:"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-sky-500/20 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
          {/* Real Live Website Button */}
          {project.liveUrl && (
            <button
              onClick={handleVisitLive}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:brightness-110 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>
                {isEn ? "Open Live Web App" : "معاينة الموقع الحقيقي"}
              </span>
            </button>
          )}

          {/* WhatsApp Project Order Button */}
          <button
            onClick={handleOrderSimilar}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>
              {isEn ? "Order Similar Project" : "طلب مشروع أو تطبيق مماثل"}
            </span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-colors cursor-pointer"
          >
            {isEn ? "Close" : "إغلاق"}
          </button>
        </div>
      </div>
    </div>
  );
}
