import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import AboutSection from "@/components/sections/AboutSection";
import MentorsSection from "@/components/sections/MentorsSection";
import PathSection from "@/components/sections/PathSection";
import JournalSection from "@/components/sections/JournalSection";
import QuizSection from "@/components/sections/QuizSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import UrgencySection from "@/components/sections/UrgencySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-white text-[#111111] overflow-x-hidden">
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
