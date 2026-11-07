export const MetricsBar = ({ metrics }) => (
  <section className="border-b border-slate-800/80 bg-slate-900/30">
    <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((item) => (
        <div key={item.id} className="border-l-2 border-emerald-500 pl-4">
          <p className="text-2xl font-extrabold text-white font-mono">
            {item.value}
          </p>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);
