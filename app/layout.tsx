import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Kawser Ferdous Safi | Full Stack Developer (MERN) | Backend & AI Automation Expert",
  description:
    "Passionate full-stack developer specializing in MERN stack, backend development, cloud infrastructure, DevOps, and AI automation. Building scalable web applications with modern JavaScript technologies, AI API integration, and smart automation workflows.",
  keywords: [
    "Kawser Ferdous Safi",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "AI Automation",
    "Prompt Engineering",
    "Node.js Developer",
    "React Developer",
    "Cloud Infrastructure",
    "DevOps",
    "JavaScript Developer",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "API Development",
    "Microservices",
    "n8n Automation",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Kawser Ferdous Safi" }],
  creator: "Kawser Ferdous Safi",
  publisher: "Kawser Ferdous Safi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devsafix.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kawser Ferdous Safi | Full Stack Developer & AI Automation Expert",
    description:
      "Passionate full-stack developer specializing in MERN stack, backend development, and AI automation. Building scalable web applications with modern technologies.",
    url: "https://devsafix.vercel.app",
    siteName: "Kawser Ferdous Safi Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/7xsYZ7HQ/devsafix.png",
        width: 1200,
        height: 630,
        alt: "Kawser Ferdous Safi - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawser Ferdous Safi | Full Stack Developer & AI Automation Expert",
    description:
      "Passionate full-stack developer specializing in MERN stack, backend development, and AI automation. Building scalable web applications.",
    images: ["https://i.ibb.co.com/7xsYZ7HQ/devsafix.png"],
    creator: "@devsafix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags for better SEO */}
        <link rel="canonical" href="https://devsafix.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kawser Ferdous Safi",
              alternateName: "devsafix",
              description:
                "Full Stack Developer specializing in MERN stack, backend development, cloud infrastructure, DevOps, and AI automation",
              url: "https://devsafix.vercel.app",
              image: "https://i.ibb.co.com/7xsYZ7HQ/devsafix.png",
              sameAs: [
                "https://github.com/devsafix",
                "https://www.facebook.com/devsafix",
                "https://www.instagram.com/devsafix",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Person",
                name: "Freelancer",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "AI Automation",
                "DevOps",
                "Cloud Infrastructure",
              ],
              email: "devsafix@gmail.com",
              telephone: "+8801709190412",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
