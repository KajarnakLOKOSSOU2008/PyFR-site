import Link from "next/link";

const categories = [
  { title: "Entrées / Sorties", items: [["afficher", "print"], ["saisir", "input"]] },
  { title: "Types", items: [["entier", "int"], ["decimal", "float"], ["chaine", "str"], ["liste", "list"], ["dictionnaire", "dict"], ["ensemble", "set"], ["booleen", "bool"], ["octet", "bytes"], ["complexe", "complex"], ["ensemble_gele", "frozenset"]] },
  { title: "Séquences", items: [["plage", "range"], ["enumerer", "enumerate"], ["zipper", "zip"], ["filtrer", "filter"], ["appliquer", "map"], ["trier", "sorted"], ["inverser", "reversed"], ["longueur", "len"], ["maximum", "max"], ["minimum", "min"], ["somme", "sum"]] },
  { title: "Mathématiques", items: [["absolu", "abs"], ["arrondi", "round"], ["tout", "all"], ["aucun", "any"]] },
  { title: "Types et attributs", items: [["type_de", "type"], ["est_instance", "isinstance"], ["sous_classe", "issubclass"], ["a_attr", "hasattr"], ["obtenir_attr", "getattr"], ["definir_attr", "setattr"], ["proprietes", "dir"], ["super_classe", "super"], ["hachage", "hash"], ["representation", "repr"]] },
  { title: "Itération", items: [["iterateur", "iter"], ["suivant", "next"]] },
  { title: "Compilation", items: [["compiler", "compile"], ["evaluer", "eval"], ["executer", "exec"]] },
  { title: "Fichiers", items: [["ouvrir", "open"]] },
  { title: "Autres", items: [["aide", "help"], ["appeler", "callable"], ["identifiant", "id"], ["objet", "object"], ["statique", "staticmethod"], ["classe_methode", "classmethod"], ["propriete", "property"]] },
];

export default function BuiltinsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        <nav className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Documentation</h3>
            <ul className="space-y-1">
              <li><Link href="/documentation" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🚀 Démarrage rapide</Link></li>
              <li><Link href="/documentation/mots-cles" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔤 Mots-clés</Link></li>
              <li><Link href="/documentation/builtins" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">⚡ Fonctions builtins</Link></li>
              <li><Link href="/documentation/methodes" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔧 Méthodes</Link></li>
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Fonctions builtins</h1>
          <p className="text-lg text-slate-600 mb-10">Toutes les fonctions builtins Python traduites en français.</p>

          {categories.map((cat, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Français</th>
                      <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Python</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item, j) => (
                      <tr key={j} className="border-t border-slate-100 hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-[#dc2626] font-semibold">{item[0]}</td>
                        <td className="py-3 px-4 font-mono text-[#1a56db]">{item[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/documentation/mots-cles" className="text-[#1a56db] hover:underline font-medium">← Mots-clés</Link>
            <Link href="/documentation/methodes" className="text-[#1a56db] hover:underline font-medium">Méthodes →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
