import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function FstringsPage() {
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
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">F-strings en PyFR</h1>
          <p className="text-lg text-slate-600 mb-10">Les f-strings fonctionnent parfaitement en PyFR. Les expressions entre <code className="bg-slate-100 px-2 py-0.5 rounded">{}</code> sont automatiquement traduites.</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Usage basique</h2>
            <CodeBlock code={`nom = "Alice"
age = 30
afficher(f"Je suis {nom}, j'ai {age} ans")`} language="pyfr" />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Expressions avec traduction</h2>
            <p className="text-slate-600 mb-4">Les mots-clés et fonctions français dans les f-strings sont automatiquement traduits :</p>
            <CodeBlock code={`# Fonctions builtin dans les f-strings
nombres = [3, 1, 4, 1, 5]
afficher(f"Longueur: {longueur(nombres)}")
afficher(f"Somme: {somme(nombres)}")
afficher(f"Maximum: {maximum(nombres)}")

# Conditions dans les f-strings
x = 10
afficher(f"Résultat: {'positif' si x > 0 sinon 'négatif'}")`} language="pyfr" />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Méthodes dans les f-strings</h2>
            <CodeBlock code={`texte = "Bonjour le Monde"
afficher(f"Majuscule: {texte.majuscule()}")
afficher(f"Minuscule: {texte.minuscule()}")
afficher(f"Remplacé: {texte.remplacer('Monde', 'PyFR')}")`} language="pyfr" />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">NumPy dans les f-strings</h2>
            <CodeBlock code={`importer numpy comme np
a = np.tableau([1, 2, 3, 4, 5])
afficher(f"Moyenne: {a.moyenne():.2f}")
afficher(f"Forme: {a.forme}")
afficher(f"Écart-type: {a.ecart_type():.2f}")`} language="pyfr" />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Formatage avancé</h2>
            <CodeBlock code={`# Arguments nommés dans les f-strings
pi = 3.14159265
afficher(f"Pi = {pi:.2f}")
afficher(f"Pi = {pi:.4f}")

# Alignement
afficher(f"{'Nom':<20} {'Âge':>5}")
afficher(f"{'Alice':<20} {30:>5}")`} language="pyfr" />
          </section>

          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/documentation/modules" className="text-[#1a56db] hover:underline font-medium">← Modules</Link>
            <Link href="/formation" className="text-[#1a56db] hover:underline font-medium">Formation →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
