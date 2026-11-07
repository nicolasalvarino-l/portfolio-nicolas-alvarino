import { SectionHeader } from "../ui/SectionHeader.jsx";
import { Badge } from "../ui/Badge.jsx";

export const SkillsMatrix = ({ categories }) => (
  <section id="skills" className="py-20 border-b border-slate-800/80">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        tag="Capabilities & Toolchain"
        title="Arquitectura de Calidad, Automatización & IA"
        subtitle="Ecosistema de herramientas utilizadas para garantizar calidad continua desde el código hasta producción."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} text={skill} variant="default" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
