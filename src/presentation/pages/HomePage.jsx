import { profileData } from "../../data/profileRepository.js";
import { Navbar } from "../components/layout/Navbar.jsx";
import { HeroSection } from "../components/sections/HeroSection.jsx";
import { AboutSection } from "../components/sections/AboutSection.jsx";
import { MetricsBar } from "../components/sections/MetricsBar.jsx";
import { SkillsMatrix } from "../components/sections/SkillsMatrix.jsx";
import { ExperienceTimeline } from "../components/sections/ExperienceTimeline.jsx";
import { ProjectsGrid } from "../components/sections/ProjectsGrid.jsx";
import { EducationSection } from "../components/sections/EducationSection.jsx";
import { Footer } from "../components/layout/Footer.jsx";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar fullName={profileData.fullName} />
      <main>
        <AboutSection profile={profileData} />
        <HeroSection profile={profileData} />
        <MetricsBar metrics={profileData.metrics} />
        <SkillsMatrix categories={profileData.skillCategories} />
        <ExperienceTimeline experiences={profileData.experiences} />
        <ProjectsGrid projects={profileData.projects} />
        <EducationSection education={profileData.education} />
      </main>
      <Footer profile={profileData} />
    </div>
  );
};
