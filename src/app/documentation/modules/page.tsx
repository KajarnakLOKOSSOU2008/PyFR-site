import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const modules = [
  { fr: "mathematiques", en: "math", example: "importer mathematiques", desc: "Fonctions mathématiques (sin, cos, sqrt, pi...)" },
  { fr: "systeme", en: "sys", example: "importer systeme", desc: "Paramètres et fonctions système" },
  { fr: "aleatoire", en: "random", example: "importer aleatoire", desc: "Nombres aléatoires, mélange, échantillonnage" },
  { fr: "date_heure", en: "datetime", example: "importer date_heure", desc: "Manipulation de dates et heures" },
  { fr: "systeme_exploitation", en: "os", example: "importer systeme_exploitation", desc: "Interface avec le système d'exploitation" },
  { fr: "cheminlib", en: "pathlib", example: "importer cheminlib", desc: "Manipulation de chemins de fichiers" },
  { fr: "expressions_regulieres", en: "re", example: "importer expressions_regulieres", desc: "Expressions régulières" },
  { fr: "iteration", en: "itertools", example: "importer iteration", desc: "Itérateurs avancés" },
  { fr: "collections_module", en: "collections", example: "importer collections_module", desc: "Structures de données avancées" },
  { fr: "fonctions_module", en: "functools", example: "importer fonctions_module", desc: "Fonctions d'ordre supérieur" },
  { fr: "journal", en: "logging", example: "importer journal", desc: "Journalisation (logging)" },
  { fr: "statistiques", en: "statistics", example: "importer statistiques", desc: "Fonctions statistiques" },
  { fr: "decimale", en: "decimal", example: "importer decimale", desc: "Arithmétique décimale précise" },
  { fr: "json_module", en: "json", example: "importer json_module", desc: "Encodage et décodage JSON" },
  { fr: "csv_module", en: "csv", example: "importer csv_module", desc: "Lecture et écriture de fichiers CSV" },
  { fr: "sous_processus", en: "subprocess", example: "importer sous_processus", desc: "Exécution de sous-processus" },
  { fr: "unite", en: "unittest", example: "importer unite", desc: "Tests unitaires" },
  { fr: "argument", en: "argparse", example: "importer argument", desc: "Analyse d'arguments en ligne de commande" },
  { fr: "copie", en: "copy", example: "importer copie", desc: "Copie profonde et superficielle" },
  { fr: "trace", en: "traceback", example: "importer trace", desc: "Traces d'appels" },
];

export default function ModulesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        <nav className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Documentation</h3>
            <ul className="space-y-1">
              <li><Link href="/documentation" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🚀 Démarrage rapide</Link></li>
              <li><Link href="/documentation/mots-cles" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔤 Mots-clés</Link></li>
              <li><Link href="/documentation/builtins" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">⚡ Fonctions builtins</Link></li>
              <li><Link href="/documentation/methodes" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔧 Méthodes</Link></li>
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Modules PyFR</h1>
          <p className="text-lg text-slate-600 mb-6">Noms de modules Python traduits en français.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-10">
            <p className="text-blue-800 text-sm">
              💡 <strong>Astuce :</strong> Les packages externes (numpy, pandas, matplotlib...) gardent leur nom original.
              Vous pouvez utiliser <code className="bg-blue-100 px-1 rounded">importer numpy comme np</code> directement !
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Français</th>
                  <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Python</th>
                  <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Description</th>
                  <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Exemple</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod, i) => (
                  <tr key={i} className="border-t border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-mono text-[#dc2626] font-semibold">{mod.fr}</td>
                    <td className="py-3 px-4 font-mono text-[#1a56db]">{mod.en}</td>
                    <td className="py-3 px-4 text-slate-600 text-sm">{mod.desc}</td>
                    <td className="py-3 px-4 font-mono text-slate-500 text-xs">{mod.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Exemples avec les modules</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Module mathematiques</h3>
                <CodeBlock code={`importer mathematiques
afficher(f"Pi = {mathematiques.pi}")
afficher(f"Racine de 16 = {mathematiques.sqrt(16)}")
afficher(f"Sinus(pi/2) = {mathematiques.sin(mathematiques.pi / 2)}")`} language="pyfr" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Module aleatoire</h3>
                <CodeBlock code={`importer aleatoire
aleatoire.graine(42)
n = aleatoire.entier(1, 100)
afficher(f"Nombre aléatoire: {n}")
aleatoire.melanger(ma_liste)`} language="pyfr" />
              </div>
            </div>
          </section>

          <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
            <Link href="/documentation/methodes" className="text-[#1a56db] hover:underline font-medium">← Méthodes</Link>
            <Link href="/documentation/fstrings" className="text-[#1a56db] hover:underline font-medium">F-strings →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
