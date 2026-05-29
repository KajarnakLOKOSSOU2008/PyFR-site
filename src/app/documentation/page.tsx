import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function DocumentationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        {/* Sidebar */}
        <nav className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Documentation</h3>
            <ul className="space-y-1">
              <li><Link href="/documentation" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">🚀 Démarrage rapide</Link></li>
              <li><Link href="/documentation/mots-cles" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔤 Mots-clés</Link></li>
              <li><Link href="/documentation/builtins" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">⚡ Fonctions builtins</Link></li>
              <li><Link href="/documentation/methodes" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔧 Méthodes</Link></li>
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Documentation PyFR</h1>
          <p className="text-lg text-slate-600 mb-10">Tout ce que vous devez savoir pour commencer avec PyFR — Python en français.</p>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Installation
            </h2>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 mb-4">Installez PyFR avec pip :</p>
              <CodeBlock code="pip install pyfr" language="bash" />
            </div>
          </section>

          {/* Premier programme */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Votre premier programme
            </h2>
            <p className="text-slate-600 mb-4">Créez un fichier <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">bonjour.pyfr</code> :</p>
            <CodeBlock code={`# Mon premier programme PyFR !
nom = saisir("Comment vous appelez-vous ? ")
afficher(f"Bonjour, {nom} ! Bienvenue dans PyFR !")

# Calculs simples
x = entier(saisir("Entrez un nombre : "))
afficher(f"Le carré de {x} est {x ** 2}")`} language="pyfr" />
            <p className="text-slate-600 mt-4">Exécutez-le avec :</p>
            <CodeBlock code="pyfr run bonjour.pyfr" language="bash" />
          </section>

          {/* CLI */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Ligne de commande
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-4 font-semibold text-slate-700">Commande</th>
                    <th className="py-3 px-4 font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100"><td className="py-3 px-4 font-mono text-[#1a56db]">pyfr run fichier.pyfr</td><td className="py-3 px-4 text-slate-600">Exécuter un fichier PyFR</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-4 font-mono text-[#1a56db]">pyfr compile fichier.pyfr</td><td className="py-3 px-4 text-slate-600">Afficher le code Python transpilé</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-4 font-mono text-[#1a56db]">pyfr check fichier.pyfr</td><td className="py-3 px-4 text-slate-600">Vérifier la syntaxe</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-3 px-4 font-mono text-[#1a56db]">pyfr eval "code"</td><td className="py-3 px-4 text-slate-600">Évaluer du code PyFR</td></tr>
                  <tr><td className="py-3 px-4 font-mono text-[#1a56db]">pyfr repl</td><td className="py-3 px-4 text-slate-600">Lancer le REPL interactif</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/formation/debutant" className="text-[#1a56db] hover:underline font-medium">← Tutoriel débutant</Link>
            <Link href="/documentation/mots-cles" className="text-[#1a56db] hover:underline font-medium">Mots-clés →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
