import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">{t.about.label}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.about.title}</h2>
          <div className="section-divider mb-8" />
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed">
            {t.about.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
