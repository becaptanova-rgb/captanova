import type { Metadata } from "next";
import "./globals.css";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://captanovaacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Captanova Academy | Stop Overthinking. Start Leading Your Life.",
    template: "%s | Captanova Academy",
  },
  description:
    "The Academy for Mindset, Communication & Self-Leadership. Discover what's really holding you back with the Captanova Clarity Assessment™. By Renu Sharma.",
  keywords: [
    "mindset coaching",
    "self-leadership",
    "overthinking",
    "confidence building",
    "communication skills",
    "personal development",
    "Renu Sharma",
    "Captanova Academy",
    "awareness journal",
    "life coaching India",
  ],
  authors: [{ name: "Renu Sharma", url: siteUrl }],
  creator: "Renu Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Captanova Academy",
    title: "Stop Overthinking. Start Leading Your Life. | Captanova Academy",
    description:
      "Take the 3-minute Captanova Clarity Assessment™ and discover your personal Growth Profile. The Academy for Mindset, Communication & Self-Leadership by Renu Sharma.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Captanova Academy — Be The Captain Of Your Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Captanova Academy | Stop Overthinking. Start Leading Your Life.",
    description:
      "Take the 3-minute Clarity Assessment™ and discover what's holding you back. Mindset, Communication & Self-Leadership.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Captanova Academy",
              url: siteUrl,
              description: "The Academy for Mindset, Communication & Self-Leadership",
              founder: { "@type": "Person", name: "Renu Sharma" },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-white text-[#111111]">
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
