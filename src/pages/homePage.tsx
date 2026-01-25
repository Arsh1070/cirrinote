import HeroSection from "@/components/home/heroSection";
import KeyFeatureSection from "@/components/home/keyFeatureSection";
import NotesSection from "@/components/home/notesSection";

import "@/styles/layout.css";

export default function Home() {
  testFnCall();
  const testFnCall = () => {};
  return (
    <>
      <HeroSection />
      <NotesSection />
      <KeyFeatureSection />
    </>
  );
}
