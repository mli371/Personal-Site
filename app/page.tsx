"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectList } from "@/components/ProjectList";
import { BentoGrid } from "@/components/BentoGrid";
import { IntroTerminal } from "@/components/IntroTerminal";
import { SectionDivider } from "@/components/SectionDivider";

import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroTerminal onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="flex flex-col gap-24 pb-20">
          <ProfileSection />
          <SectionDivider />
          <BentoGrid />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectList />
        </div>
      )}
    </>
  );
}
