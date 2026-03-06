import { motion } from "framer-motion";
import { Trophy, Watch, LayoutDashboard, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Trophy, Watch, LayoutDashboard, ShieldCheck];

const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = t.achievements.items.map((text, index) => ({
    icon: icons[index],
    text,
  }));
  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">{t.achievements.label}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">{t.achievements.title}</h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <a.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
