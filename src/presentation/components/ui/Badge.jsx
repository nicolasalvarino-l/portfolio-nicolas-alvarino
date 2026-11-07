export const Badge = ({ text, variant = "default" }) => {
  const styles = {
    default: "bg-slate-800/80 text-slate-200 border-slate-700",
    accent: "bg-emerald-950/60 text-emerald-400 border-emerald-800/60",
    primary: "bg-blue-950/60 text-blue-400 border-blue-800/60",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-mono rounded-full border ${styles[variant]}`}
    >
      {text}
    </span>
  );
};
