import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="cosmic-bg min-h-screen relative overflow-x-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
