import Link from "next/link";

const contributors = [
  { name: "Dossou Kajarnak LOKOSSOU", role: "Créateur & Mainteneur", github: "KajarnakLOKOSSOU2008" },
];

const roadmap = [
  { status: "done", title: "Transpileur de base", desc: "Mots-clés, builtins, méthodes, modules" },
  { status: "done", title: "CLI pyfr", desc: "run, compile, check, eval, repl" },
  { status: "done", title: "Support NumPy", desc: "Méthodes et attributs NumPy traduits" },
  { status: "done", title: "Support Pandas", desc: "Méthodes Pandas traduites" },
  { status: "done", title: "F-strings", desc: "Traduction des expressions dans les f-strings" },
  { status: "progress", title: "Site web officiel", desc: "Documentation, formation, communauté" },
  { status: "progress", title: "IDE Integration", desc: "Extension VS Code pour PyFR" },
  { status: "planned", title: "PyPI Package", desc: "Publication sur PyPI pour pip install pyfr" },
  { status: "planned", title: "Jupyter Notebook", desc: "Kernel PyFR pour Jupyter" },
  { status: "planned", title: "Interactive Docs", desc: "Documentation interactive avec exécution en ligne" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  done: { label: "✅ Terminé", color: "bg-green-100 text-green-800" },
  progress: { label: "🔨 En cours", color: "bg-yellow-100 text-yellow-800" },
  planned: { label: "📋 Prévu", color: "bg-slate-100 text-slate-600" },
};

export default function CommunautePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Communauté PyFR</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Rejoignez la communauté francophone PyFR. Contribuez, apprenez et partagez.
        </p>
      </div>

      {/* Rejoindre */}
      <section className="bg-gradient-to-r from-[#1a56db] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white mb-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté</h2>
          <p className="text-blue-100 mb-8 text-lg">
            PyFR est un projet open source. Chaque contribution compte, que ce soit du code, de la documentation, ou simplement partager le projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/KajarnakLOKOSSOU2008/PyFR" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1a56db] hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Contribuer sur GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Comment contribuer */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Comment contribuer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="font-bold text-slate-900 mb-2">Code</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Ajoutez des traductions, corrigez des bugs, améliorez le transpileur. Forkez le dépôt et soumettez une Pull Request.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Améliorez la documentation, ajoutez des exemples, traduisez des pages. La documentation est aussi importante que le code.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="text-3xl mb-3">📢</div>
            <h3 className="font-bold text-slate-900 mb-2">Partager</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Parlez de PyFR autour de vous, écrivez des articles, donnez des présentations. Faites connaître le projet !</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Roadmap</h2>
        <div className="space-y-3 max-w-2xl">
          {roadmap.map((item, i) => {
            const s = statusMap[item.status];
            return (
              <div key={i} className="bg-white rounded-lg border border-slate-200 p-4 flex items-start gap-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${s.color}`}>{s.label}</span>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Équipe */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Équipe</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contributors.map((c, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {c.name.charAt(0)}
              </div>
              <h3 className="font-bold text-slate-900">{c.name}</h3>
              <p className="text-slate-500 text-sm">{c.role}</p>
              <a href={`https://github.com/${c.github}`} target="_blank" rel="noopener noreferrer"
                className="text-[#1a56db] text-sm hover:underline mt-2 inline-block">@{c.github}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Code de conduite */}
      <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Code de conduite</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          PyFR s&apos;engage à fournir une expérience welcoming et inclusive pour tous. Nous attendons de tous les contributeurs qu&apos;ils respectent les principes suivants :
        </p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li className="flex items-start gap-2"><span className="text-[#1a56db] mt-0.5">•</span> Utiliser un langage accueillant et inclusif</li>
          <li className="flex items-start gap-2"><span className="text-[#1a56db] mt-0.5">•</span> Respecter les différents points de vue et expériences</li>
          <li className="flex items-start gap-2"><span className="text-[#1a56db] mt-0.5">•</span> Accepter les critiques constructives avec grâce</li>
          <li className="flex items-start gap-2"><span className="text-[#1a56db] mt-0.5">•</span> Se concentrer sur ce qui est meilleur pour la communauté</li>
          <li className="flex items-start gap-2"><span className="text-[#1a56db] mt-0.5">•</span> Faire preuve d&apos;empathie envers les autres membres</li>
        </ul>
      </section>
    </div>
  );
}
