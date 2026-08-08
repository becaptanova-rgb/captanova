import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import AboutSection from "@/components/sections/AboutSection";
import PathSection from "@/components/sections/PathSection";
import JournalSection from "@/components/sections/JournalSection";
import Footer from "@/components/Footer";

// Below-the-fold sections are code-split into their own chunks so the
// initial JS payload (hero + nav) stays small and interactive fast.
// Each gets a height-matched skeleton to avoid layout shift.
const skeleton = (h: string) => (
  <div className={`w-full ${h} animate-pulse bg-[var(--bg-soft)]`} />
);

const MentorsSection = dynamic(() => import("@/components/sections/MentorsSection"), {
  loading: () => skeleton("min-h-[600px]"),
});
const QuizSection = dynamic(() => import("@/components/sections/QuizSection"), {
  loading: () => skeleton("min-h-[700px]"),
});
const TransformationSection = dynamic(() => import("@/components/sections/TransformationSection"), {
  loading: () => skeleton("min-h-[500px]"),
});
const ProgramsSection = dynamic(() => import("@/components/sections/ProgramsSection"), {
  loading: () => skeleton("min-h-[800px]"),
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => skeleton("min-h-[500px]"),
});
const LeadMagnetSection = dynamic(() => import("@/components/sections/LeadMagnetSection"), {
  loading: () => skeleton("min-h-[400px]"),
});
const UrgencySection = dynamic(() => import("@/components/sections/UrgencySection"), {
  loading: () => skeleton("min-h-[300px]"),
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <main className="bg-white text-[var(--text-primary)] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <AboutSection />
      <MentorsSection />
      <PathSection />
      <JournalSection />
      <QuizSection />
      <TransformationSection />
      <ProgramsSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <UrgencySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
