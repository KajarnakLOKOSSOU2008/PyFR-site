import Link from "next/link";

const categories = [
  { title: "Listes", items: [["ajouter()", "append()"], ["etendre()", "extend()"], ["inserer()", "insert()"], ["retirer()", "remove()"], ["depiler()", "pop()"], ["trier()", "sort()"], ["inverse_en_place()", "reverse()"], ["copier()", "copy()"], ["vider()", "clear()"], ["index_de()", "index()"], ["compter_occurrences()", "count()"]] },
  { title: "Chaînes de caractères", items: [["majuscule()", "upper()"], ["minuscule()", "lower()"], ["capitaliser()", "capitalize()"], ["titre()", "title()"], ["remplacer()", "replace()"], ["decouper()", "split()"], ["joindre()", "join()"], ["commence_par()", "startswith()"], ["finit_par()", "endswith()"], ["chercher()", "find()"], ["retirer_espaces()", "strip()"], ["est_chiffre()", "isdigit()"], ["est_lettre()", "isalpha()"], ["formater()", "format()"], ["encoder()", "encode()"]] },
  { title: "Dictionnaires", items: [["cles()", "keys()"], ["valeurs()", "values()"], ["elements()", "items()"], ["obtenir()", "get()"], ["mettre_a_jour()", "update()"], ["definir_defaut()", "setdefault()"]] },
  { title: "Ensembles", items: [["ajouter_element()", "add()"], ["union()", "union()"], ["intersection()", "intersection()"], ["difference()", "difference()"], ["symetrique()", "symmetric_difference()"], ["est_sous_ensemble()", "issubset()"], ["est_sur_ensemble()", "issuperset()"]] },
  { title: "Fichiers", items: [["lire()", "read()"], ["lire_ligne()", "readline()"], ["lire_lignes()", "readlines()"], ["ecrire()", "write()"], ["positionner()", "seek()"], ["position()", "tell()"], ["fermer()", "close()"], ["vider_tampon()", "flush()"]] },
  { title: "NumPy", items: [["tableau()", "array()"], ["moyenne()", "mean()"], ["ecart_type()", "std()"], ["variance()", "var()"], ["mediane()", "median()"], ["reshaper()", "reshape()"], ["aplatir()", "flatten()"], ["transposer()", "transpose()"], ["produit_scalaire()", "dot()"], ["produit_matriciel()", "matmul()"], ["linspace()", "linspace()"], ["arange()", "arange()"]] },
  { title: "Pandas", items: [["lire_csv()", "read_csv()"], ["lire_excel()", "read_excel()"], ["grouper_par()", "groupby()"], ["fusionner()", "merge()"], ["tete()", "head()"], ["queue()", "tail()"], ["decrire()", "describe()"], ["trier_valeurs()", "sort_values()"], ["renommer()", "rename()"], ["remplir_manquant()", "fillna()"], ["vers_csv()", "to_csv()"], ["vers_excel()", "to_excel()"]] },
  { title: "Attributs / Propriétés", items: [["forme", "shape"], ["dimensions", "ndim"], ["taille", "size"], ["type_donnees", "dtype"], ["nom", "name"]] },
];

export default function MethodesPage() {
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
              <li><Link href="/documentation/methodes" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-semibold">🔧 Méthodes</Link></li>
              <li><Link href="/documentation/modules" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">📦 Modules</Link></li>
              <li><Link href="/documentation/fstrings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50">💬 F-strings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Méthodes PyFR</h1>
          <p className="text-lg text-slate-600 mb-10">Toutes les méthodes Python traduites, organisées par type d&apos;objet.</p>

          {categories.map((cat, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="bg-white rounded-lg border border-slate-200 p-3 hover:border-blue-300 transition-colors">
                    <div className="font-mono text-sm">
                      <span className="text-[#dc2626] font-semibold">.{item[0]}</span>
                      <span className="text-slate-400 mx-2">→</span>
                      <span className="text-[#1a56db]">.{item[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/documentation/builtins" className="text-[#1a56db] hover:underline font-medium">← Fonctions builtins</Link>
            <Link href="/documentation/modules" className="text-[#1a56db] hover:underline font-medium">Modules →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
