import { SectionHeader } from "../ui/SectionHeader.jsx";
import { Badge } from "../ui/Badge.jsx";
import { FolderGit2 } from "lucide-react";

export const ProjectsGrid = ({ projects }) => (
  <section id="projects" className="py-20 border-b border-slate-800/80">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        tag="Featured Work"
        title="Proyectos & Arquitecturas Destacadas"
        subtitle="Soluciones de automatización E2E, validación de APIs y modelos de Inteligencia Artificial."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 uppercase">
                  {proj.category}
                </span>
                <FolderGit2 className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {proj.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {proj.techStack.map((tech) => (
                <Badge key={tech} text={tech} variant="primary" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
