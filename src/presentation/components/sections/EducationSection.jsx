import { SectionHeader } from "../ui/SectionHeader.jsx";
import { Badge } from "../ui/Badge.jsx";
import { GraduationCap, Award } from "lucide-react";

export const EducationSection = ({ education }) => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Academic & Credentials"
          title="Educación & Certificaciones"
          subtitle="Formación académica en Ingeniería de Sistemas, posgrado en Inteligencia Artificial y especialización continua en calidad de software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => {
            const isCertification = item.type
              ?.toLowerCase()
              .includes("certificación");
            const IconComponent = isCertification ? Award : GraduationCap;

            return (
              <article
                key={item.id}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      <IconComponent className="w-4 h-4" />
                      {item.type || "Formación Académica"}
                    </span>
                    <Badge
                      text={item.status}
                      variant={
                        item.status === "En curso" ? "primary" : "accent"
                      }
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-mono text-blue-400">
                    {item.institution}
                  </p>

                  {item.focus && (
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">
                      {item.focus}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
