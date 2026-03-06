import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const skillData = [
  { key: "core", skills: ["Swift", "SwiftUI", "React Native", "TypeScript", "JavaScript"] },
  { key: "architecture", skills: ["MVVM", "Modular Architecture", "Dependency Injection"] },
  { key: "cloud", skills: ["REST APIs", "Cloud Functions", "CI/CD", "Git"] },
  { key: "data", skills: ["Core Data", "Firebase", "Structured Data Handling"] },
  { key: "concurrency", skills: ["Async/Await", "Reactive Programming", "Parallel Execution"] },
  { key: "analytics", skills: ["Crash Analysis", "Performance Monitoring", "App Tracking"] },
  { key: "frontend", skills: ["React", "UI Frameworks", "SwiftUI"] },
  { key: "ai", skills: ["Machine Learning", "Automation Strategies"] },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">{t.skills.label}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.skills.title}</h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillData.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-3">
                {(t.skills.categories as Record<string, string>)[cat.key]}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1.5 rounded-full border border-border text-secondary-foreground group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">{t.skills.strengthsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.skills.strengths.map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-secondary-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
