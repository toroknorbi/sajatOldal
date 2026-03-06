import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: t.experience.period,
      company: t.experience.company,
      role: t.experience.role,
      projects: [
        { name: t.experience.project1, points: t.experience.project1Points, link: null },
        { name: t.experience.project2, points: t.experience.project2Points, link: "https://apps.apple.com/ro/app/fit-trainer-lose-weight-30d/id6468640485" },
        { name: t.experience.project3, points: t.experience.project3Points, link: "https://apps.apple.com/ro/developer/zen-labs/id485971738" },
      ],
    },
  ];

  const sideProjects = [
    {
      name: t.experience.comicsTitle,
      description: t.experience.comicsDesc,
      tech: ["Swift", "REST APIs", "Core Data"],
      link: null,
    },
    {
      name: t.experience.utreeTitle,
      description: t.experience.utreeDesc,
      tech: ["React Native", "TypeScript", "State Management"],
      link: null,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">{t.experience.label}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.experience.title}</h2>
          <div className="section-divider mb-12" />
        </motion.div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-8">
              <span className="font-heading text-primary text-sm">{exp.period}</span>
              <h3 className="text-xl font-heading font-semibold text-foreground">{exp.company}</h3>
              <span className="text-muted-foreground text-sm">— {exp.role}</span>
            </div>

            <div className="space-y-8 ml-0 md:ml-8">
              {exp.projects.map((project, j) => (
                <div key={j} className="border-l border-border pl-6">
                  <div className="flex items-center gap-2 mb-4">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                        {project.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <h4 className="font-mono text-lg font-bold text-foreground">{project.name}</h4>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {project.points.map((point, k) => (
                      <li key={k} className="text-secondary-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3 mt-16" id="projects">{t.experience.sideWorkLabel}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.experience.sideWorkTitle}</h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</h4>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground font-heading">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
