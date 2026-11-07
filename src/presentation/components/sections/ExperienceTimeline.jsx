import { SectionHeader } from "../ui/SectionHeader.jsx";
import { Badge } from "../ui/Badge.jsx";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export const ExperienceTimeline = ({ experiences }) => (
  <section id="experience" className="py-20 border-b border-slate-800/80">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        tag="Career Trajectory (2019 - Present)"
        title="Experiencia Profesional en QA Automation & SDET"
        subtitle="Más de 5 años asegurando la calidad de sistemas críticos en banca, fintech y consultoría tecnológica mediante automatización de pruebas y DevTestOps."
      />

      <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <article
            key={exp.id}
            className="relative group rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-8 transition-all shadow-lg"
          >
            {/* Nodo indicador en la línea de tiempo */}
            <span
              className={`absolute -left-[33px] sm:-left-[49px] top-8 w-4 h-4 rounded-full border-2 ${
                index === 0
                  ? "bg-emerald-400 border-emerald-950 shadow-[0_0_12px_#10b981]"
                  : "bg-slate-900 border-blue-500 group-hover:bg-blue-400"
              } transition-colors`}
            />

            {/* Cabecera del rol y empresa */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{exp.role}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm">
                  <span className="font-mono font-semibold text-emerald-400">
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700 self-start">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Responsabilidades principales */}
            <ul className="mt-5 space-y-2.5 text-slate-300 text-sm">
              {exp.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bloque destacado de Logros Cuantitativos (KPIs de QA) */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="mt-5 p-4 rounded-lg bg-emerald-950/30 border border-emerald-800/50">
                <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5 mb-2">
                  <Trophy className="w-4 h-4" />
                  Logros de Impacto & Métricas QA
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-100/90">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">▸</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack tecnológico por empresa */}
            {exp.techStack && exp.techStack.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <Badge key={tech} text={tech} variant="primary" />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
