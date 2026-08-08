import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://captanovaacademy.com";

export const metadata: Metadata = {
  title: "Free Masterclass: How To Stop Overthinking And Start Living",
  description:
    "Join Renu Sharma for a free live masterclass on breaking the overthinking cycle and building real confidence, communication, and momentum in your life. Limited seats.",
  openGraph: {
    type: "website",
    url: `${siteUrl}/masterclass`,
    title: "Free Masterclass: How To Stop Overthinking And Start Living",
    description:
      "A free live session with Renu Sharma on moving from overthinking to clarity, confidence, and consistent action.",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Captanova Free Masterclass" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Masterclass: How To Stop Overthinking And Start Living",
    description: "A free live session with Renu Sharma — reserve your seat.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: { canonical: `${siteUrl}/masterclass` },
};

export default function MasterclassLayout({ children }: { children: React.ReactNode }) {
  return children;
}
