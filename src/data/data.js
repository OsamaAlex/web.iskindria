/**
 * Web Alex - Projects & Data Configuration
 * =========================================================================
 * المشروعات الحقيقية المعتمدة (Real Web Projects Portfolio):
 * 1. بوابة تصدير متكاملة للحاصلات الزراعية: https://verdigate.vercel.app
 * 2. موقع ثلاثي الأبعاد - تشغيل صوتي وفيديو: https://www.iskindria.com
 * 3. موقع شخصي احترافي (أحمد ياسين): https://ahmed.iskindria.com
 * 4. منصة عقارية متكاملة لعرض وإدارة العقارات: https://alfrancya.vercel.app
 * 5. موقع احترافي لمكتب قانوني (التوني): https://eltony.iskindria.com
 * 6. متجر إلكتروني متكامل (فاطمة دلتا): https://fatima-delta-steel.vercel.app
 * 7. منصة متكاملة للإعلان وحجز وإدارة مواعيد العيادة: https://dramirgeorgy.vercel.app
 * =========================================================================
 * ميزة التعليقات على الصور (Image Comments with Glass Effect):
 * - يمكنك إضافة تعليق لكل صورة داخل 'imageComments' (مثل: multi language, dashboard, users, mobile app).
 * - ستظهر هذه التعليقات بتأثير زجاجي راقي فوق الصورة مباشرة داخل نافذة المودال.
 * - يمكنك كتابة تعليقات نصية مباشرة أو كائنات ثنائية اللغة: { ar: "...", en: "..." }.
 * =========================================================================
 */

export const projectsData = [
  {
    id: 1,
    order: 1,
    title: {
      ar: "بوابة تصدير متكاملة (Verdigate)",
      en: "Verdigate - Agricultural Export Gateway",
    },
    category: "corporate",
    categoryKey: "corporate",
    headline: {
      ar: "بوابة تصدير متكاملة للحاصلات الزراعية مع تحليل الأسواق والمنافسين دولياً",
      en: "Agri-Commodity Export Gateway with Global Market & Competitor Intelligence",
    },
    description: {
      ar: "تتضمن موقع احترافي متعدد اللغات مع ميزة فتح الموقع تلقائياً بلغة البلد التي يفتح منها مع لوحة تحكم مخصصة للتصدير تتضمن تحليل السوق و المنافسين الموثق من بوابات التجارة العالمية.",
      en: "A professional multilingual export gateway featuring automatic geo-language detection (opens automatically in the visitor's local language), paired with a dedicated export dashboard featuring market and competitor intelligence verified by international trade portals.",
    },
    liveUrl: "https://verdigate.vercel.app",
    images: [
      "/1/2.png",
      "/1/3.png",
      "/1/4.png",
      "/1/5.png",
      "/1/6.png",
      "/1/7.png",
      "/1/8.png",
    ],
    imageComments: [
      {
        ar: "تعدد اللغات والموقع التلقائي حسب الدولة (Multi Language)",
        en: "Multi-Language & Geo-Location Routing (Auto Country Detection)",
      },
      {
        ar: "مميزات فريدة مثل ( أداة المحاكاة اللوجيستية",
        en: "Unique Features: Logistics & Shipping Simulation Tool",
      },
      {
        ar: "لوحة التحكم السحابية وتحليل الأسواق والمنافسين (Dashboard)",
        en: "Cloud Export Dashboard & Competitor Market Intelligence",
      },
      {
        ar: "إضافة المحاصيل بالأكواد الدولية و التفاصيل المتعارف عليها الدولية",
        en: "Crop Management with HS Codes & International Quality Standards",
      },
      {
        ar: " تحليل فوري للأسواق والمنافسين (Instant Market Analysis)",
        en: "Real-Time Global Market & Competitor Intelligence Analysis",
      },
      {
        ar: "دمج خدمات الذكاء الإصطناعي داخل المنصة تلقائياً",
        en: "Automated Native AI Services Integration",
      },
    ],
    thumbnail: "/1/verdi.png",
    tags: ["Next.js", "Geo-Language Routing", "Market Intelligence", "Export Analytics", "Bilingual"],
    metrics: {
      ar: "فتح تلقائي بلغة بلد الزائر • تحليل سوق ومنافسين موثق • لوحة تحكم مخصصة للتصدير",
      en: "Auto Geo-Language • Certified Market Analytics • Dedicated Export Portal",
    },
    icon: "🌱",
  },
  {
    id: 2,
    order: 2,
    title: {
      ar: "منصة ثلاثيةالأبعاد -  (إسكندرية)",
      en: "Iskindria - Interactive 3D Platform",
    },
    category: "threeD",
    categoryKey: "threeD",
    headline: {
      ar: "موقع ثلاثي الأبعاد تفاعلي متقدم مع تشغيل صوتي ومكتبة سينمائية وتجربة بصرية فريدة",
      en: "Advanced 3D Dome Sphere Platform with Ambient Audio & 4K AI Cinema",
    },
    description: {
      ar: "منصة ثلاثية الأبعاد تفاعلية متطورة تتضمن:\n🌐 معرض كروي ثلاثي الأبعاد تفاعلي بتقنية الإسقاط البصري السلس والسحب بالماوس.\n🎬 نصوص فيديو سينمائية مدمجة داخل أحرف الشعار بدون أي حواف زائدة.\n🎵 مشغل صوتي محيطي مع معادل موجات صوتية وقائمة استماع قابلة للتوسيع.\n🎥 سينما الإسكندرية وإعادة بناء المعالم التاريخية بتقنيات الذكاء الاصطناعي وبدقة 4K.\n🌍 دعم كامل للغتين (العربية والإنجليزية) مع تصميم متجاوب لاتجاهي RTL و LTR.\n✨ مؤشر فنار الإسكندرية المخصص مع وميض الفنار والجسيمات النجمية.",
      en: "An advanced state-of-the-art interactive 3D platform featuring:\n🌐 Interactive 3D Dome Sphere Gallery: Seamless mouse drag, auto-rotation, and smooth 3D perspective projection.\n🎬 Video-Masked Brand Typography: Cinematic video playing directly inside the font letters with zero overflow.\n🎵 Ambient Background Music Player: Autoplay audio engine with bouncing sound waves equalizer and expandable tracklist drawer.\n🎥 Alexandria Cinema & AI Reconstructions: Video playlist modals featuring 4K drone cinematography and AI historical recreations of 300 BC Alexandria.\n🌍 Full Bilingual Localization (AR / EN): Dynamic RTL & LTR layout switching with Cairo and Cinzel typography.\n✨ Custom Pharos Lighthouse Cursor: Transparent cutout silhouette with pulsing top lantern beacon, golden trailing halo, and stardust particles.",
    },
    liveUrl: "https://www.iskindria.com",
    images: [
      "/2/1.png",
      "/2/2.png",
      "/2/3.png",
    ],
    imageComments: [
      {
        ar: "إسكندرية التاريخية",
        en: "Historical Alexandria 3D Virtual Heritage Experience",
      },
      {
        ar: "مشغل صوتي محيطي ومكتبة سينمائية (Audio & 4K Cinema)",
        en: "Ambient Audio Engine & 4K Cinema Library",
      },
      {
        ar: "متعدد اللغات  (AR / EN)",
        en: "Dynamic Bilingual Localization (AR / EN)",
      },
    ],
    thumbnail: "/2/4.png",
    tags: ["Three.js / 3D", "Web Audio API", "Video-Masked Typography", "4K AI Reconstructions", "Bilingual RTL/LTR"],
    metrics: {
      ar: "معرض كروي ثلاثي الأبعاد • محرك صوت محيطي • مقاطع 4K معاد بناؤها بالـ AI",
      en: "3D Sphere Dome Gallery • Ambient Audio Engine • 4K AI Reconstructions",
    },
    icon: "🏛️",
  },
  {
    id: 3,
    order: 3,
    title: {
      ar: "موقع شخصي احترافي (CV)",
      en: "Professional Personal Website & CV",
    },
    category: "corporate",
    categoryKey: "corporate",
    headline: {
      ar: "موقع شخصي احترافي يتضمن السيرة الذاتية والإنجازات والميديا والتواصل",
      en: "Executive Portfolio Featuring Career Milestones, Megaprojects & Media",
    },
    description: {
      ar: "موقع احترافي يتضمن السيرة الذاتية و الإنجازات و الميديا و التواصل.",
      en: "A comprehensive senior professional platform presenting interactive biography, career milestones, megaproject portfolio documentation, media appearances, and direct communication channels.",
    },
    liveUrl: "https://ahmed-yassin.vercel.app",
    images: [
      "/3/2.png",
      "/3/3.png",
      "/3/4.png",
    ],
    imageComments: [
      {
        ar: "متعدد اللغات",
        en: "Full Multilingual Localization (AR / EN)",
      },
      {
        ar: "رؤية متجاوبة مع جميع الشاشات ( شاشة الموبيلات )",
        en: "100% Fully Responsive Layout (Mobile Optimized)",
      },
      {
        ar: "إمكانية التبديل بين الثيم الفاتح / الداكن",
        en: "Seamless Light & Dark Theme Toggle",
      },
    ],
    thumbnail: "/3/1.png",
    tags: ["Personal Portfolio", "Interactive CV", "Megaprojects", "Media Hub", "Direct Contact"],
    metrics: {
      ar: "سيرة ذاتية تفاعلية • توثيق المشاريع والإنجازات • روابط ميديا وتواصل مباشر",
      en: "Interactive CV • Career Timeline & Milestones • Media Hub & Contact",
    },
    icon: "👤",
  },
  {
    id: 4,
    order: 4,
    title: {
      ar: "الفرنسية للتسويق العقاري",
      en: "Al-Francya Real Estate Platform",
    },
    category: "realestate",
    categoryKey: "realestate",
    headline: {
      ar: "منصة عقارية متكاملة لعرض وإدارة العقارات مع إمكانية إضافة عقار من المستخدم",
      en: "Full-Featured Real Estate Platform with User Property Submission",
    },
    description: {
      ar: "منصة لبيع وتأجير العقارات مع إدارة المحتوى والبيانات من خلال نظام متكامل يتيح البحث المتقدم وفلترة العقارات والتواصل الفوري مع مسؤولي المبيعات، كما يتيح اضافه عقار من جانب المستخدم لعرضها على المنصة .",
      en: "A comprehensive property buying and leasing platform with integrated content management, advanced multi-criteria property search and filtering, instant sales agent inquiries, and user self-service property submissions for platform listing.",
    },
    liveUrl: "https://alfrancya.vercel.app",
    images: [
      "/4/1.png",
      "/4/2.png",
      "/4/3.png",
    ],
    imageComments: [
      {
        ar: "البحث الذكي وفلترة العقارات المتقدمة (Smart Filters)",
        en: "Smart Property Search & Advanced Filters",
      },
      {
        ar: "بوابة إضافة العقار من جانب المستخدم (User Property Add)",
        en: "User Property Submission Portal",
      },
      {
        ar: "تطبيق الموبيل سهل الاستخدام",
        en: "User-Friendly Mobile App & Responsive Experience",
      },
    ],
    thumbnail: "/4/1.png",
    tags: ["Real Estate", "Search & Filters", "User Property Add", "Agent Dashboard", "WhatsApp Inquiries"],
    metrics: {
      ar: "إضافة عقار من المستخدمين • فلترة وبحث متقدم • تواصل فوري مع المبيعات",
      en: "User Property Submissions • Advanced Smart Filter • Direct Agent Chats",
    },
    icon: "🏢",
  },
  {
    id: 5,
    order: 5,
    title: {
      ar: "موقع احترافي لمكتب قانوني (التوني للمحاماة)",
      en: "El-Tony Law Firm & Legal Consultations",
    },
    category: "corporate",
    categoryKey: "corporate",
    headline: {
      ar: "موقع يعرض الخدمات والتخصصات القانونية وفريق العمل وطلب الاستشارات",
      en: "Prestigious Legal Portal for Law Practice Areas & Consultations",
    },
    description: {
      ar: "موقع يعرض الخدمات والتخصصات القانونية وفريق العمل ويمنح العملاء وسيلة سهلة وموثوقة للتواصل وطلب الاستشارات القانونية.",
      en: "A distinguished legal platform presenting practice areas, attorney credentials, and team expertise, providing clients with an accessible and trusted gateway for consultations and case inquiries.",
    },
    liveUrl: "https://eltony.iskindria.com",
    images: [
      "/5/1.png",
      "/5/2.png",
    ],
    imageComments: [
      {
        ar: "عرض التخصصات القانونية وفريق المحامين (Practice Areas)",
        en: "Legal Practice Areas & Team Directory",
      },
      {
        ar: "حجز الاستشارات القانونية السرية (Consultation Booking)",
        en: "Confidential Legal Consultation Booking",
      },

    ],
    thumbnail: "/5/1.png",
    tags: ["Law Firm Portal", "Practice Areas", "Consultation Booking", "Client Intake", "Bilingual"],
    metrics: {
      ar: "عرض التخصصات وفريق العمل • طلب استشارات موثوق • وسيلة تواصل سريعة",
      en: "Practice Areas Catalog • Trusted Consultations • Rapid Communication",
    },
    icon: "⚖️",
  },
  {
    id: 6,
    order: 6,
    title: {
      ar: "متجر إلكتروني متكامل (Fatima)",
      en: "Fatima - Full E-Commerce Store",
    },
    category: "ecommerce",
    categoryKey: "ecommerce",
    headline: {
      ar: "متجر إلكتروني متكامل لعرض المنتجات وإدارة الطلبات والعملاء والسلة الذكية",
      en: "Full-Featured Online Store with Dynamic Admin & Smart Cart",
    },
    description: {
      ar: "متجر إلكتروني متكامل لعرض المنتجات وإدارة الطلبات والعملاء من خلال لوحة تحكم سريعة ومرنة تدعم العروض الترويجية والسلة الذكية.",
      en: "An all-in-one e-commerce platform for product showcases, order processing, and customer management powered by an agile admin dashboard supporting dynamic promotions and an intelligent shopping cart.",
    },
    liveUrl: "https://fatima-delta-steel.vercel.app",
    images: [

      "/6/2.png",

      "/6/3.png",
      "/6/6.png",
      "/6/7.png",
    ],
    imageComments: [
      {
        ar: "السلة الذكية وتجربة الشراء السريعة (Smart Cart)",
        en: "Smart Shopping Cart & Instant Checkout",
      },
      {
        ar: "لوحة إدارة المنتجات والمخزون والعروض (Dashboard)",
        en: "Inventory & Dynamic Promotions Dashboard",
      },
      {
        ar: "إدارة طلبات العملاء وتتبع الشحنات (Orders & Users)",
        en: "Customer Orders & Shipment Tracking",
      },
      {
        ar: "إدارة المخزون ( المستودع ) (Orders & Users)",
        en: "Warehouse & Stock Inventory Management",
      },

    ],
    thumbnail: "/6/1.png",
    tags: ["E-Commerce", "Admin Dashboard", "Smart Cart", "Promotions & Offers", "Order Management"],
    metrics: {
      ar: "سلة ذكية وسريعة • لوحة تحكم مرنة للطلبات والعملاء • دعم العروض الترويجية",
      en: "Smart Fast Cart • Flexible Order Admin • Promotional Offers Engine",
    },
    icon: "🛍️",
  },
  {
    id: 7,
    order: 7,
    title: {
      ar: "منصة عيادة متكاملة ",
      en: "Integrated Medical Clinic & Booking Platform",
    },
    category: "booking",
    categoryKey: "booking",
    headline: {
      ar: "منصة متكاملة للإعلان وحجز وإدارة مواعيد العيادة مع تأكيد آلي عبر واتساب",
      en: "Medical Marketing & Clinic Appointment Booking with WhatsApp Automation",
    },
    description: {
      ar: "حل رقمي لتنظيم الحجوزات والمواعيد وتسهيل إدارة العيادة والتعامل مع المرضى وتأكيد المواعيد آلياً عبر واتساب.",
      en: "A digital healthcare solution designed to organize patient bookings and appointments, streamline clinic administration, and automatically confirm bookings via WhatsApp.",
    },
    liveUrl: "https://dramirgeorgy.vercel.app",
    images: [
      "/7/1.png",
      "/7/2.png",
      "/7/3.png",
      "/7/4.png",
      "/7/5.png",
      "/7/6.png",
    ],
    imageComments: [
      {
        ar: "حجز مواعيد العيادة إلكترونياً (Online Booking)",
        en: "Online Medical Appointment Booking",
      },
      {
        ar: "إدارة محتوي الموقع من لوحة التحكم",
        en: "CMS & Dynamic Website Content Management Dashboard",
      },
      {
        ar: "تشخيص ذكي قبل الحجز",
        en: "Smart Pre-Booking Symptom & Triage Diagnosis",
      },
      {
        ar: "تسجيل الأرشيف الطبي للمرضي",
        en: "Digital Patient Medical Records & History Archive",
      },
      {
        ar: "لوحة جدول المواعيد وإدارة المرضى (Doctor Dashboard)",
        en: "Doctor Schedule Control & Patient Management Dashboard",
      },
      {
        ar: "استعلام عن حالة الحجز بسهولة",
        en: "Instant Appointment Status & Booking Inquiry",
      },
    ],
    thumbnail: "/7/88.png",
    tags: ["Clinic Booking", "Medical Portal", "WhatsApp Automation", "Patient Management"],
    metrics: {
      ar: "حجز مواعيد فوري • تأكيد آلي عبر WhatsApp • تنظيم جدول العيادة والمرضى",
      en: "Instant Appointments • Automated WhatsApp Alerts • Clinic Schedule Flow",
    },
    icon: "🩺",
  },
];

/**
 * دالة مساعدة لاستخراج وترتيب المشروعات حسب اللغة الحالية والترتيب المحدد
 */
export function getFormattedProjects(lang = "ar") {
  const isEn = lang === "en";

  return [...projectsData]
    .sort((a, b) => (a.order || a.id) - (b.order || b.id))
    .map((project) => {
      const resolveText = (field) => {
        if (!field) return "";
        if (typeof field === "string") return field;
        return isEn ? field.en || field.ar || "" : field.ar || field.en || "";
      };

      const rawImages =
        project.images && project.images.length > 0
          ? project.images
          : [`/${project.id}/1.jpg`, `/${project.id}/2.jpg`, `/${project.id}/3.jpg`];

      const rawComments = project.imageComments || project.captions || [];

      // Normalize gallery items with image source and comment
      const gallery = rawImages.map((imgItem, idx) => {
        if (typeof imgItem === "object" && imgItem !== null) {
          const imgSrc = imgItem.src || imgItem.url || "";
          const imgComment = resolveText(imgItem.comment || imgItem.caption || rawComments[idx]);
          return {
            src: imgSrc,
            comment: imgComment,
          };
        }
        return {
          src: imgItem,
          comment: resolveText(rawComments[idx]),
        };
      });

      const images = gallery.map((item) => item.src);
      const imageComments = gallery.map((item) => item.comment);
      const thumbnail = project.thumbnail || images[0] || `/${project.id}/1.jpg`;

      return {
        id: project.id,
        order: project.order || project.id,
        title: resolveText(project.title),
        headline: resolveText(project.headline),
        description: resolveText(project.description),
        categoryKey: project.categoryKey || project.category || "corporate",
        liveUrl: project.liveUrl || "",
        thumbnail,
        gallery, // array of { src, comment }
        images, // array of string paths
        imageComments, // array of string comments
        tags: project.tags || ["Web App"],
        metrics: resolveText(project.metrics),
        image: project.icon || "🚀",
      };
    });
}

/**
 * =========================================================================
 * نموذج العرض التجريبي المخصص لـ (See Demo) في الـ Hero Section
 * الخاص بعرض الـ 999 ج.م (تحويل السيرة الذاتية إلى موقع شخصي احترافي)
 * =========================================================================
 * - الموقع المباشر (liveUrl): https://ahmed-yassin.vercel.app
 * - يمكنك إضافة صور جديدة للمشروع في أي وقت بإضافتها لمصفوفة images أدناه.
 * - يمكنك كتابة تعليقات لكل صورة في مصفوفة imageComments لتظهر بتأثير زجاجي راقي.
 * =========================================================================
 */
export const cvOfferDemoProject = {
  id: "cv-offer-demo",
  title: {
    ar: "نموذج حي: موقع وسيرة ذاتية شخصية احترافية",
    en: "Live Demo: Personal & Executive Portfolio",
  },
  category: "corporate",
  categoryKey: "corporate",
  headline: {
    ar: "تحويل السيرة الذاتية إلى موقع شخصي احترافي بنطاق .com مدى الحياة — فقط 999 جنيهًا",
    en: "Transform Your CV into a Lifetime .com Personal Website — Only 999 EGP",
  },
  description: {
    ar: "معاينة حية وتفاعلية لعرض تحويل السيرة الذاتية (CV) إلى موقع شخصي احترافي بنطاق .com مدى الحياة. يتضمن استعراض السيرة الذاتية التفاعلية، توثيق المشروعات والإنجازات الكبرى، الميديا، وأزرار التواصل المباشر مع استضافة سريعة وتصميم متجاوب 100%.",
    en: "Live interactive preview of the 999 EGP special offer: Turning your CV into a professional personal website with a lifetime .com domain. Includes interactive biography, career milestones, project showcases, media hub, and direct contact channels.",
  },
  liveUrl: "https://ahmed-yassin.vercel.app",
  // يمكنك إضافة أو تعديل صور المشروع التجريبي هنا في أي وقت:
  images: [
    "/3/2.png",
    "/3/3.png",
    "/3/4.png",
  ],
  // التعليقات الزجاجية التفاعلية على كل صورة:
  imageComments: [
    {
      ar: "متعدد اللغات (AR / EN)",
      en: "Full Multilingual Localization (AR / EN)",
    },
    {
      ar: "رؤية متجاوبة مع جميع الشاشات ( شاشة الموبيلات )",
      en: "100% Fully Responsive Layout (Mobile Optimized)",
    },
    {
      ar: "إمكانية التبديل بين الثيم الفاتح / الداكن",
      en: "Seamless Light & Dark Theme Toggle",
    },
  ],
  thumbnail: "/3/1.png",
  tags: [
    "Personal Portfolio",
    "Interactive CV",
    "Lifetime .com",
    "Special Offer 999 EGP",
    "Bilingual AR/EN",
    "Responsive Web",
  ],
  metrics: {
    ar: "نطاق .com مدى الحياة • سيرة ذاتية تفاعلية • سرعة فائقة وتجاوب كامل",
    en: "Lifetime .com Domain • Interactive CV • High Performance & Responsive",
  },
  icon: "👤",
  whatsAppMsg: {
    ar: "مرحبًا Web Alex، أود الاستفادة من العرض الخاص: تحويل سيرتي الذاتية (CV) إلى موقع احترافي بنطاق .com مدى الحياة مقابل 999 جنيهًا (شاهدت المعاينة التجريبية See Demo).",
    en: "Hello Web Alex, I'd like to claim the Special Offer: Turn my CV into a professional website with a lifetime .com domain for only 999 EGP (I saw the Demo).",
  },
};

/**
 * دالة مساعدة لاستخراج بيانات العرض التجريبي مهيأة حسب لغة الواجهة
 */
export function getFormattedCvDemoProject(lang = "ar") {
  const isEn = lang === "en";
  const resolveText = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return isEn ? field.en || field.ar || "" : field.ar || field.en || "";
  };

  const rawImages = cvOfferDemoProject.images || [];
  const rawComments = cvOfferDemoProject.imageComments || [];

  const gallery = rawImages.map((imgItem, idx) => {
    if (typeof imgItem === "object" && imgItem !== null) {
      const imgSrc = imgItem.src || imgItem.url || "";
      const imgComment = resolveText(imgItem.comment || imgItem.caption || rawComments[idx]);
      return { src: imgSrc, comment: imgComment };
    }
    return {
      src: imgItem,
      comment: resolveText(rawComments[idx]),
    };
  });

  const images = gallery.map((item) => item.src);
  const imageComments = gallery.map((item) => item.comment);
  const thumbnail = cvOfferDemoProject.thumbnail || images[0] || "/3/1.png";

  return {
    id: cvOfferDemoProject.id,
    order: 0,
    title: resolveText(cvOfferDemoProject.title),
    headline: resolveText(cvOfferDemoProject.headline),
    description: resolveText(cvOfferDemoProject.description),
    categoryKey: cvOfferDemoProject.categoryKey || "corporate",
    liveUrl: cvOfferDemoProject.liveUrl,
    thumbnail,
    gallery,
    images,
    imageComments,
    tags: cvOfferDemoProject.tags || ["Personal Website"],
    metrics: resolveText(cvOfferDemoProject.metrics),
    image: cvOfferDemoProject.icon || "👤",
    whatsAppMsg: resolveText(cvOfferDemoProject.whatsAppMsg),
  };
}

