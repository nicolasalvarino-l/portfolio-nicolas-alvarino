import { Terminal } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* Consola de comandos QA interactiva de alto impacto */}
        <div className="w-full max-w-3xl rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-slate-400 flex items-center gap-1.5 text-xs">
              <Terminal className="w-4 h-4 text-emerald-400" /> qa-automation-pipeline-runner.sh
            </span>
          </div>
          <div className="p-6 space-y-3 text-slate-300">
            <p className="text-slate-500">$ gradle clean test -Denv=production -Dsuite=regression</p>
            <p className="text-emerald-400">✔ [PASS] E2E Suite: Serenity BDD + Playwright & Screenplay Pattern</p>
            <p className="text-emerald-400">✔ [PASS] API Contract, Schema & Endpoint Validation (Karate DSL)</p>
            <p className="text-emerald-400">✔ [PASS] Core Banking DB Integrity & IBM iSeries (AS400) SQL Operations</p>
            <p className="text-blue-400">ℹ [AI-MODEL] Computer Vision & NLP TestOps Agents initialized successfully</p>
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-400">
              <span>Execution Summary: 148 tests completed, 0 failed</span>
              <span className="text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                100% Reliability / CI-CD Stable
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};