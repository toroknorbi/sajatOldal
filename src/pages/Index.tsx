import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AchievementsSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <footer id="contact" className="py-16 border-t border-border">
        <div className="container text-center">
          <p className="text-secondary-foreground text-sm mb-6 font-light">
            {t.footer.tagline}
          </p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a href="mailto:toroknorbert10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground font-heading">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
