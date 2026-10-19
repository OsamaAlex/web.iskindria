import { Cairo, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Web Alex — نحوّل فكرتك إلى موقع أو تطبيق جاهز للعمل | مطور ويب متقدم",
  description:
    "تصميم وتطوير مواقع الشركات، المتاجر الإلكترونية، تطبيقات الويب والموبايل، والأنظمة الإدارية المتكاملة بسرعة واحترافية. استلم نموذجك الأولي في ساعتين.",
  keywords: [
    "مطور ويب",
    "تصميم مواقع",
    "تطوير مواقع",
    "متجر إلكتروني",
    "تطبيقات ويب",
    "لوحات تحكم",
    "أنظمة حجز",
    "Next.js",
    "Web Developer Egypt",
    "Web Alex",
  ],
  authors: [{ name: "Web Alex" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Web Alex — حلول برمجية ومواقع متطورة للشركات والمتاجر",
    description: "نحوّل فكرتك إلى موقع أو تطبيق جاهز للعمل بسرعة واحترافية ودون تعقيد.",
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Web Alex - Alexandria Modern Lighthouse",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060911",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('webalex_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col selection:bg-sky-500 selection:text-slate-950 font-cairo transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

