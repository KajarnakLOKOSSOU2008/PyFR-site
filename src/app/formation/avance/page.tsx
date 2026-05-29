import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const lessons = [
  { num: 1, title: "NumPy en français", code: `# Leçon 1 : NumPy en français\nimporter numpy comme np\n\n# Création de tableaux\na = np.tableau([1, 2, 3, 4, 5])\nb = np.zeros(5)\nc = np.uns((3, 3))\n\n# Statistiques\nafficher(f"Moyenne: {a.moyenne()}")\nafficher(f"Écart-type: {a.ecart_type()}")\nafficher(f"Variance: {a.variance()}")\nafficher(f"Min/Max: {a.minimum()}/{a.maximum()}")\n\n# Matrices\nM = np.tableau([[1, 2], [3, 4]])\nafficher(f"Forme: {M.forme}")\nafficher(f"Déterminant: {np.determinant(M)}")\nafficher(f"Transposée:\\n{M.transposer()}")\nafficher(f"Inverse:\\n{np.inverse_matrice(M)}")`, explanation: "Toutes les méthodes NumPy sont traduites : `.tableau()` → `.array()`, `.moyenne()` → `.mean()`, `.ecart_type()` → `.std()`, `.forme` → `.shape`. Les fonctions linalg aussi : `np.determinant()` → `np.linalg.det()`." },
  { num: 2, title: "Pandas en français", code: `# Leçon 2 : Pandas en français\nimporter pandas comme pd\n\n# Charger des données\ndf = pd.lire_csv("donnees.csv")\n\n# Explorer\nafficher(f"Forme: {df.forme}")\nafficher(f"Colonnes: {df.colonnes}")\nafficher(df.tete(5))\nafficher(df.decrire())\n\n# Manipuler\ndf.grouper_par("categorie").moyenne()\ndf.trier_valeurs("age", inverse=vrai)\ndf.remplir_manquant(0)\ndf.supprimer_dupliques()\n\n# Exporter\ndf.vers_csv("resultat.csv")`, explanation: "Pandas est entièrement traduit : `.lire_csv()` → `.read_csv()`, `.grouper_par()` → `.groupby()`, `.tete()` → `.head()`, `.decrire()` → `.describe()`, `.vers_csv()` → `.to_csv()`." },
  { num: 3, title: "Décorateurs et générateurs", code: `# Leçon 3 : Concepts avancés\n# Décorateur\nfonction chronometre(fonction_origine):\n    fonction enveloppe(*args, **kwargs):\n        debut = temps()\n        resultat = fonction_origine(*args, **kwargs)\n        fin = temps()\n        afficher(f"Temps: {fin - debut:.4f}s")\n        retourner resultat\n    retourner enveloppe\n\n@chronometre\nfonction calcul_lourd():\n    somme = 0\n    pour i dans plage(1000000):\n        somme += i\n    retourner somme\n\n# Générateur\nfonction fibonacci_gen():\n    a, b = 0, 1\n    tant_que vrai:\n        produire a\n        a, b = b, a + b\n\ngen = fibonacci_gen()\npour _ dans plage(10):\n    afficher(suivant(gen))`, explanation: "`produire` → `yield` pour les générateurs. `suivant()` → `next()` pour avancer dans un générateur. Les décorateurs fonctionnent comme en Python standard." },
  { num: 4, title: "Programmation asynchrone", code: `# Leçon 4 : Async/Await en français\nimporter asyncio_module\n\nasynchrone fonction recuperer_donnees(url):\n    afficher(f"Récupération de {url}...")\n    attendre asyncio_module.dormir(1)\n    afficher(f"Terminé: {url}")\n    retourner f"Données de {url}"\n\nasynchrone fonction principal():\n    taches = [\n        recuperer_donnees("api.fr/data1"),\n        recuperer_donnees("api.fr/data2"),\n        recuperer_donnees("api.fr/data3"),\n    ]\n    resultats = attendre asyncio_module.regrouper(*taches)\n    afficher(resultats)\n\nasyncio_module.executer(principal())`, explanation: "`asynchrone` → `async`, `attendre` → `await`, `produire` → `yield`. La programmation asynchrone fonctionne exactement comme en Python avec `asyncio`." },
  { num: 5, title: "Projet complet", code: `# Leçon 5 : Projet complet — Analyse de données\nimporter numpy comme np\nimporter aleatoire\n\n# Générer des données\naleatoire.graine(42)\nn = 1000\ntemperatures = [aleatoire.gaussienne(20, 5) pour _ dans plage(n)]\nhumidites = [aleatoire.uniforme(30, 90) pour _ dans plage(n)]\n\n# Convertir en numpy\nt = np.tableau(temperatures)\nh = np.tableau(humidites)\n\n# Statistiques\nafficher("=== Analyse météo ===")\nafficher(f"Température moyenne: {t.moyenne():.1f}°C")\nafficher(f"Température min/max: {t.minimum():.1f}/{t.maximum():.1f}°C")\nafficher(f"Humidité moyenne: {h.moyenne():.1f}%")\n\n# Corrélation\ncorr = np.correlation(t, h)\nafficher(f"Corrélation: {corr:.3f}")\n\n# Filtrer les jours chauds\njours_chauds = t[t > 25]\nafficher(f"Jours > 25°C: {longueur(jours_chauds)}")`, explanation: "Ce projet combine tout ce que vous avez appris : variables, boucles, compréhensions, numpy, statistiques. PyFR vous permet d'écrire des projets complets en français tout en utilisant tout l'écosystème Python." },
];

export default function AvancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">⚡ Avancé</span>
          <span className="text-slate-500 text-sm">5 leçons • 4-5 heures</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tutoriel Avancé</h1>
        <p className="text-lg text-slate-600">Maîtrisez PyFR avec NumPy, Pandas et les concepts avancés de Python.</p>
      </div>

      <div className="space-y-12">
        {lessons.map((lesson) => (
          <section key={lesson.num} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{lesson.num}</span>
              <h2 className="text-2xl font-bold text-slate-900">{lesson.title}</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <CodeBlock code={lesson.code} language="pyfr" />
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2">💡 Explication</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{lesson.explanation}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="flex justify-between pt-10 border-t border-slate-200 mt-12">
        <Link href="/formation/intermediaire" className="text-[#1a56db] hover:underline font-medium">← Intermédiaire</Link>
        <Link href="/communaute" className="text-[#1a56db] hover:underline font-medium">Communauté →</Link>
      </div>
    </div>
  );
}
