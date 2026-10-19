"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getFormattedProjects } from "@/data/data";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  MessageCircle,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Layers,
  Globe,
} from "lucide-react";

export default function ProjectsSection() {
  const { t, isRTL, getWhatsAppLink, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const categories = [
    {
      key: "all",
      label: t?.projects?.filterAll || (isRTL ? "الكل" : "All"),
    },
    {
      key: "threeD",
      label:
        t?.projects?.categories?.threeD ||
        (isRTL ? "مواقع ثلاثية الأبعاد 3D" : "3D & Interactive"),
    },
    {
      key: "realestate",
      label:
        t?.projects?.categories?.realestate ||
        (isRTL ? "عقارات ومنصات" : "Real Estate"),
    },
    {
      key: "booking",
      label:
        t?.projects?.categories?.booking ||
        (isRTL ? "حجوزات وعيادات" : "Booking & Medical"),
    },
    {
      key: "ecommerce",
      label:
        t?.projects?.categories?.ecommerce ||
        (isRTL ? "متاجر إلكترونية" : "E-Commerce"),
    },
    {
      key: "corporate",
      label:
        t?.projects?.categories?.corporate ||
        (isRTL ? "شركات وأعمال ومواقع شخصية" : "Corporate & Personal"),
    },
  ];

  // Fetch projects from data.js, ordered and localized
  const allProjects = getFormattedProjects(lang);

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.categoryKey === activeCategory);

  const handleOrderProject = (e, project) => {
    e.stopPropagation();
    const msg = isRTL
      ? `مرحبًا Web Alex، أود تنفيذ مشروع أو تطبيق مماثل لمشروع: "${project.title}".`
      : `Hello Web Alex, I'd like to build a project similar to: "${project.title}".`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  const handleOpenModal = (e, project) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#060911]">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-bold">
            <FolderGit2 className="w-4 h-4" />
            <span>{t?.projects?.badge || (isRTL ? "معرض الأعمال" : "Portfolio")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t?.projects?.title || (isRTL ? "مشروعات وتطبيقات نفخر بتنفيذها" : "Featured Projects & Web Apps")}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            {t?.projects?.subtitle ||
              (isRTL
                ? "مجموعة من المواقع والمنصات وتطبيقات الويب الحقيقية التي تم تطويرها لتلبية احتياجات أعمال مختلفة."
                : "A curated collection of real web applications and interactive platforms built for diverse industries.")}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 shadow-lg shadow-sky-500/25 font-bold scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl glass-panel p-6 flex flex-col justify-between border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 cursor-pointer overflow-hidden"
            >
              <div>
                {/* Visual Header / Real Project Mockup Screenshot Preview */}
                <div className="relative h-48 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center mb-5 overflow-hidden group-hover:border-sky-500/40 transition-colors shadow-inner">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-4xl shadow-lg">
                      {project.image}
                    </div>
                  )}

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10">
                    <span className="project-card-category-badge px-3 py-1 rounded-full text-[11px] font-bold">
                      {t?.projects?.categories?.[project.categoryKey] ||
                        project.categoryKey ||
                        "Web"}
                    </span>
                  </div>

                  {/* Live Web App Badge if liveUrl exists */}
                  {project.liveUrl && (
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10">
                      <span className="project-card-live-badge px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </span>
                    </div>
                  )}

                  {/* Overlay Action Hint on Hover */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
                    <span className="project-card-hover-hint text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>
                        {t?.projects?.viewDetails ||
                          (isRTL
                            ? "معاينة التطبيق والصور"
                            : "Preview Web App & Gallery")}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                {/* Project Headline */}
                <p className="text-xs font-semibold text-sky-400 mb-2.5 line-clamp-1">
                  {project.headline}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech & Modules Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="project-tag-pill px-2.5 py-1 rounded-md text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions: Live Preview Modal + WhatsApp Order */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                {/* Live Demo / Open Modal Button */}
                <button
                  type="button"
                  onClick={(e) => handleOpenModal(e, project)}
                  className="project-preview-btn py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  title={
                    isRTL ? "معاينة التطبيق والصور" : "Preview App & Gallery"
                  }
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>
                    {isRTL ? "معاينة التطبيق" : "Preview App"}
                  </span>
                </button>

                {/* Order Similar Project CTA */}
                <button
                  type="button"
                  onClick={(e) => handleOrderProject(e, project)}
                  className="project-order-btn flex-1 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>
                    {t?.projects?.requestSimilar ||
                      (isRTL ? "اطلب مشروعًا مماثلًا" : "Order Similar")}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Project Inspection Modal with Live Web Preview & Gallery */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
