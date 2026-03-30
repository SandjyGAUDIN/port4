import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./_components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandjy Gaudin | Développeur Fullstack & Étudiant BUT Informatique",
  description: "Découvrez le portfolio de Sandjy Gaudin, développeur passionné à Reims. Spécialisé en C#, Web, Next.js et Laravel. Étudiant en BUT Informatique.",
  keywords: ["Sandjy Gaudin", "Développeur Reims", "Portfolio Sandjy Gaudin", "BUT Informatique", "Développeur C#", "Développeur Web"],
  authors: [{ name: "Sandjy Gaudin" }],
  // Favicon et icônes
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sandjy Gaudin - Portfolio",
    description: "Développeur Fullstack spécialisé en solutions innovantes.",
    url: "https://portfoliosandjygaudin.vercel.app",
    siteName: "Portfolio de Sandjy Gaudin",
    images: [{ 
      url: "/Images/Sandjyphoto.png",
      width: 1200,
      height: 630,
      alt: "Sandjy Gaudin - Développeur Fullstack"
    }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandjy Gaudin | Portfolio",
    description: "Développeur Fullstack à Reims.",
    images: ["/Images/Sandjyphoto.png"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Le JSON-LD doit être dans une variable ou directement dans le return
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sandjy Gaudin",
    "jobTitle": "Développeur Fullstack",
    "url": "https://portfoliosandjygaudin.vercel.app",
    "sameAs": [
      "https://github.com/SandjyGAUDIN",
      "https://www.linkedin.com/in/sandjy-gaudin-665525290/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Reims",
      "addressRegion": "Grand Est",
      "addressCountry": "France"
    }
  };

  return (
    <html lang="fr"> {/* Changé de "en" à "fr" car ton contenu est en français */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}