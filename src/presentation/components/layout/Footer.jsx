export const Footer = ({ profile }) => (
  <footer className="py-12 bg-[#090D16] text-center text-xs font-mono text-slate-500">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>
        © {new Date().getFullYear()} {profile.fullName}. Clean Architecture +
        React + Vite.
      </p>
      <a
        href={profile.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 hover:underline"
      >
        LinkedIn: /in/nicolasalvarino
      </a>
    </div>
  </footer>
);
