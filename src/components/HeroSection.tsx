import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import profilePicture from "@/assets/profile-picture.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container relative z-10 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-6">
            {t.hero.role}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-6">
            <span className="text-foreground">{t.hero.headline1}</span>
            <br />
            <span className="text-gradient">{t.hero.headline2}</span>
          </h1>
          <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-4 font-light">
            {t.hero.subtitle}
          </p>
          <p className="font-heading text-sm text-muted-foreground tracking-widest mb-8">
            {t.hero.techLine}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="font-heading text-xs uppercase tracking-widest">
              <a href="#experience">
                <ArrowDown className="w-4 h-4 mr-1" />
                {t.hero.viewProjects}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-heading text-xs uppercase tracking-widest">
              <a href="/Torok_Szasz_Norbert_CV.pdf" download>
                <FileDown className="w-4 h-4 mr-1" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="mailto:toroknorbert10@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              toroknorbert10@gmail.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground/60">
              <Phone className="w-4 h-4" />
              +40 747 716 519
            </span>
            <span className="flex items-center gap-2 text-muted-foreground/60">
              <MapPin className="w-4 h-4" />
              Târgu Mureș, Romania
            </span>
          </div>
        </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 flex justify-center items-center relative scale-125 pt-10 pb-12 md:pb-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  borderTopColor: 'hsl(var(--primary))',
                  borderRightColor: 'transparent',
                }}
              />
              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl" />
              {/* Dashed orbit */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border bg-muted">
                <img
                  src={profilePicture}
                  alt="Norbert Török-Szász"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
