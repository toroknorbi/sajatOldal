import { motion } from "framer-motion";
import { GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  const languages = [
    { lang: t.education.languages.hungarian, level: t.education.native },
    { lang: t.education.languages.english, level: "B2" },
    { lang: t.education.languages.romanian, level: "B2" },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">{t.education.label}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.education.title}</h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground">{t.education.degree}</h4>
              <p className="text-muted-foreground text-sm mt-1">{t.education.university}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading text-sm font-semibold text-foreground mt-2">{t.education.languagesTitle}</h4>
            </div>
            <div className="space-y-2 ml-14">
              {languages.map((l, i) => (
                <div key={i} className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-foreground">{l.lang}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
