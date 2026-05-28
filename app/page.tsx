import { ProfileSection } from "@/components/ProfileSection";
import { ProjectList } from "@/components/ProjectList";
import { BentoGrid } from "@/components/BentoGrid";
import { CVViewer } from "@/components/CVViewer";
import { IntroTerminal } from "@/components/IntroTerminal";
import { SectionDivider } from "@/components/SectionDivider";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <IntroTerminal />
      <div className="flex flex-col gap-16 pb-12 md:gap-20">
        <ProfileSection />
        <SectionDivider />
        <BentoGrid />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectList />
        <SectionDivider />
        <CVViewer />
        <ContactSection />
      </div>
    </>
  );
}
