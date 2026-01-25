import HeroSection from "@/components/home/heroSection";
import KeyFeatureSection from "@/components/home/keyFeatureSection";
import NotesSection from "@/components/home/notesSection";

import "@/styles/layout.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NotesSection />
      <KeyFeatureSection />
    </>
  );
}
