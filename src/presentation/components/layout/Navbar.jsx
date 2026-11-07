import { ShieldCheck, Code2 } from "lucide-react";

export const Navbar = ({ fullName }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#090D16]/85 backdrop-blur-md border-b border-slate-800/80">
    <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a
        href="#"
        className="flex items-center gap-2 text-white font-bold tracking-tight"
      >
        <ShieldCheck className="w-5 h-5 text-emerald-400" />
        <span>{fullName}</span>
        <span className="hidden sm:inline-block text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
          QA & AI
        </span>
      </a>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <li>
          <a
            href="#skills"
            className="hover:text-emerald-400 transition-colors"
          >
            Stack Técnico
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-emerald-400 transition-colors"
          >
            Experiencia
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="hover:text-emerald-400 transition-colors"
          >
            Educación
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
