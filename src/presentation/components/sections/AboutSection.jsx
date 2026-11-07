import { SectionHeader } from "../ui/SectionHeader.jsx";
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export const AboutSection = ({ profile }) => {
    return (
    <section
        id="about"
        className="py-20 border-b border-slate-800/80 bg-slate-900/20"
    >
        <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
            tag="Professional Profile"
            title="Sobre Mí & Perfil Profesional"
            subtitle="Trayectoria técnica y visión estratégica en ingeniería de calidad, automatización de pruebas y sistemas críticos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Columna de la Foto Profesional */}
            <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 opacity-75 blur-md group-hover:opacity-100 transition duration-300"></div>

                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
                <img
                    src={profile.avatarUrl || "/nicolas1.png"}
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                </div>
            </div>
            </div>

          {/* Columna de Descripción, Datos de Contacto y Botón de LinkedIn */}
            <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{profile.role}</span>
                </h3>

                <p className="text-slate-300 leading-relaxed text-base">
                {profile.headline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-sm font-mono text-slate-300">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{profile.socialLinks.email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{profile.socialLinks.phone || "+57 320 572 2485"}</span>
                </div>
                <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline truncate"
                    >
                    /in/nicolasalvarino
                    </a>
                </div>
                </div>

              {/* Botón de Conectar en LinkedIn */}
                <div className="pt-2">
                <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-600/20 text-sm"
                >
                    <span>Conectar en LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};
