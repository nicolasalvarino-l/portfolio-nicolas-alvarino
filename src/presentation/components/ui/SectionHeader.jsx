export const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="mb-12">
    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
      // {tag}
    </span>
    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 max-w-2xl text-base text-slate-400">{subtitle}</p>
    )}
  </div>
);
