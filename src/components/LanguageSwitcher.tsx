import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[11px] font-heading uppercase tracking-wider px-2.5 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="w-[18px] text-center">{current.code.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden min-w-[130px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-heading transition-colors ${
                language === lang.code
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
