import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function TelechargementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Télécharger PyFR</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Installez PyFR en une commande et commencez à programmer en français.
        </p>
      </div>

      {/* Install rapide */}
      <section className="bg-gradient-to-r from-[#1a56db] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white mb-14 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Installation rapide</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-6">
          <CodeBlock code="pip install pyfr" language="bash" />
        </div>
        <p className="text-blue-100 text-center text-sm">
          Compatible avec Python 3.8+
        </p>
      </section>

      {/* Étapes détaillées */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guide d&apos;installation détaillé</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="font-bold text-slate-900">Vérifiez votre version de Python</h3>
            </div>
            <CodeBlock code="python --version  # Python 3.8 ou supérieur requis" language="bash" />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="font-bold text-slate-900">Installez PyFR</h3>
            </div>
            <CodeBlock code={`# Installation depuis PyPI (recommandé)\npip install pyfr\n\n# Ou installation depuis le code source\ngit clone https://github.com/KajarnakLOKOSSOU2008/PyFR.git\ncd PyFR\npip install -e .`} language="bash" />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="font-bold text-slate-900">Vérifiez l&apos;installation</h3>
            </div>
            <CodeBlock code={`pyfr eval "afficher('PyFR est installé ! 🎉')"`} language="bash" />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="font-bold text-slate-900">Créez votre premier programme</h3>
            </div>
            <CodeBlock code={`# Créez un fichier bonjour.pyfr\necho 'afficher("Bonjour PyFR !")' > bonjour.pyfr\n\n# Exécutez-le\npyfr run bonjour.pyfr`} language="bash" />
          </div>
        </div>
      </section>

      {/* CLI Reference */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Référence de la ligne de commande</h2>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-slate-700">Commande</th>
                <th className="py-4 px-6 font-semibold text-slate-700">Description</th>
                <th className="py-4 px-6 font-semibold text-slate-700">Exemple</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["pyfr run", "Exécuter un fichier .pyfr", "pyfr run programme.pyfr"],
                ["pyfr compile", "Afficher le code Python", "pyfr compile programme.pyfr"],
                ["pyfr check", "Vérifier la syntaxe", "pyfr check programme.pyfr"],
                ["pyfr eval", "Évaluer du code", "pyfr eval \"afficher(42)\""],
                ["pyfr repl", "REPL interactif", "pyfr repl"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-blue-50/30">
                  <td className="py-3 px-6 font-mono text-[#1a56db] font-semibold text-sm">{row[0]}</td>
                  <td className="py-3 px-6 text-slate-600 text-sm">{row[1]}</td>
                  <td className="py-3 px-6 font-mono text-slate-500 text-xs">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Configuration système */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Configuration requise</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">✅ Requis</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>Python 3.8 ou supérieur</li>
              <li>pip (gestionnaire de packages)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">💡 Optionnel</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>NumPy (pour les calculs scientifiques)</li>
              <li>Pandas (pour l&apos;analyse de données)</li>
              <li>Matplotlib (pour les graphiques)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="bg-slate-50 rounded-xl p-8 border border-slate-200 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Code source</h2>
        <p className="text-slate-600 mb-6">PyFR est open source sous licence MIT. Consultez le code, signalez des bugs ou contribuez !</p>
        <a href="https://github.com/KajarnakLOKOSSOU2008/PyFR" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Voir sur GitHub
        </a>
      </section>
    </div>
  );
}
