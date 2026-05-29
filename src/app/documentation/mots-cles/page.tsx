import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const categories = [
  { title: "Contrôle de flux", items: [
    ["si", "if", "si x > 0:"],
    ["sinon_si", "elif", "sinon_si x > 0:"],
    ["sinon", "else", "sinon:"],
    ["tant_que", "while", "tant_que vrai:"],
    ["pour", "for", "pour i dans plage(10):"],
    ["dans", "in", "pour x dans liste:"],
    ["casser", "break", "casser"],
    ["continuer", "continue", "continuer"],
    ["passer", "pass", "passer"],
  ]},
  { title: "Fonctions et Classes", items: [
    ["fonction", "def", "fonction saluer():"],
    ["retourner", "return", "retourner x"],
    ["classe", "class", "classe Voiture:"],
    ["soi", "self", "soi.nom = nom"],
  ]},
  { title: "Exceptions", items: [
    ["essayer", "try", "essayer:"],
    ["excepte", "except", "excepte ErreurValeur:"],
    ["enfin", "finally", "enfin:"],
    ["lever", "raise", "lever ErreurValeur('x')"],
    ["affirmer", "assert", "affirmer x > 0"],
  ]},
  { title: "Contexte et Import", items: [
    ["avec", "with", "avec ouvrir('f') comme f:"],
    ["comme", "as", "importer math comme m"],
    ["importer", "import", "importer numpy"],
    ["depuis", "from", "depuis os importer path"],
  ]},
  { title: "Logique", items: [
    ["et", "and", "x et y"],
    ["ou", "or", "x ou y"],
    ["non", "not", "non x"],
    ["est", "is", "x est rien"],
  ]},
  { title: "Constantes", items: [
    ["vrai", "True", "drapeau = vrai"],
    ["faux", "False", "drapeau = faux"],
    ["rien", "None", "resultat = rien"],
  ]},
  { title: "Déclarations", items: [
    ["global", "global", "global compteur"],
    ["supprimer", "del", "supprimer x"],
    ["produire", "yield", "produire x"],
    ["attendre", "await", "attendre coroutine()"],
    ["asynchrone", "async", "asynchrone fonction f():"],
  ]},
];

export default function MotsClesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        <nav className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Documentation</h3>
            <ul className="space-y-1">
              <li><Link href="/documentation" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🚀 Démarrage rapide</Link></li>
              <li><Link href="/documentation/mots-cles" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">🔤 Mots-clés</Link></li>
              <li><Link href="/documentation/builtins" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">⚡ Fonctions builtins</Link></li>
              <li><Link href="/documentation/methodes" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">🔧 Méthodes</Link></li>
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Mots-clés PyFR</h1>
          <p className="text-lg text-slate-600 mb-10">Tous les mots-clés Python traduits en français, organisés par catégorie.</p>

          {categories.map((cat, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Français</th>
                      <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Python</th>
                      <th className="py-3 px-4 font-semibold text-slate-700 text-sm">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item, j) => (
                      <tr key={j} className="border-t border-slate-100 hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-[#dc2626] font-semibold">{item[0]}</td>
                        <td className="py-3 px-4 font-mono text-[#1a56db]">{item[1]}</td>
                        <td className="py-3 px-4 font-mono text-slate-600 text-sm">{item[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/documentation" className="text-[#1a56db] hover:underline font-medium">← Démarrage rapide</Link>
            <Link href="/documentation/builtins" className="text-[#1a56db] hover:underline font-medium">Fonctions builtins →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
