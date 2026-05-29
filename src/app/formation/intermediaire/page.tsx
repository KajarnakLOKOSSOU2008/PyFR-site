import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const lessons = [
  { num: 1, title: "Listes et dictionnaires", code: `# Leçon 1 : Structures de données\n# Listes\nfruits = ["pomme", "banane", "cerise"]\nfruits.ajouter("orange")\nfruits.retirer("banane")\nafficher(f"Fruits: {fruits}")\n\n# Compréhension de liste\ncarres = [x**2 pour x dans plage(10)]\npairs = [x pour x dans plage(20) si x % 2 == 0]\n\n# Dictionnaires\npersonne = {"nom": "Alice", "age": 30}\npersonne["ville"] = "Paris"\nafficher(f"Clés: {liste(personne.cles())}")\nafficher(f"Valeurs: {liste(personne.valeurs())}")`, explanation: "Les méthodes de liste (.ajouter(), .retirer(), .trier()) et de dictionnaire (.cles(), .valeurs(), .obtenir()) sont traduites. Les compréhensions de liste fonctionnent avec `pour` et `si`." },
  { num: 2, title: "Classes et héritage", code: `# Leçon 2 : Classes\nclasse Animal:\n    fonction __init__(soi, nom, age):\n        soi.nom = nom\n        soi.age = age\n\n    fonction __str__(soi):\n        retourner f"{soi.nom} ({soi.age} ans)"\n\nclasse Chien(Animal):\n    fonction __init__(soi, nom, age, race):\n        Animal.__init__(soi, nom, age)\n        soi.race = race\n\n    fonction parler(soi):\n        retourner "Wouf !"\n\nrex = Chien("Rex", 5, "Berger")\nafficher(rex)\nafficher(rex.parler())`, explanation: "`classe` → `class`, `soi` → `self`. L'héritage fonctionne exactement comme en Python. Toutes les méthodes spéciales (__init__, __str__, __repr__) sont supportées." },
  { num: 3, title: "Exceptions", code: `# Leçon 3 : Gestion des erreurs\nfonction diviser(a, b):\n    essayer:\n        resultat = a / b\n        afficher(f"{a} / {b} = {resultat}")\n    excepte ErreurZeroDivision:\n        afficher("Erreur: Division par zéro !")\n    excepte ErreurType comme e:\n        afficher(f"Erreur de type: {e}")\n    enfin:\n        afficher("Fin de la division")\n\ndiviser(10, 2)\ndiviser(10, 0)\n\n# Lever une exception\nfonction verifier_age(age):\n    si age < 0:\n        lever ErreurValeur("L'âge ne peut pas être négatif")`, explanation: "`essayer` → `try`, `excepte` → `except`, `enfin` → `finally`, `lever` → `raise`. Toutes les exceptions Python sont traduites : ErreurValeur, ErreurType, ErreurZeroDivision, etc." },
  { num: 4, title: "Fichiers", code: `# Leçon 4 : Lecture et écriture de fichiers\n# Écrire dans un fichier\navec ouvrir("test.txt", mode="w") comme f:\n    f.ecrire("Bonjour PyFR !\\n")\n    f.ecrire("Deuxième ligne\\n")\n\n# Lire un fichier\navec ouvrir("test.txt") comme f:\n    contenu = f.lire()\n    afficher(contenu)\n\n# Lire ligne par ligne\navec ouvrir("test.txt") comme f:\n    pour ligne dans f.lire_lignes():\n        afficher(ligne.retirer_espaces())`, explanation: "`ouvrir()` → `open()`, les arguments nommés sont traduits (`mode=`, `encodage=`). Les méthodes de fichier (.lire(), .ecrire(), .lire_lignes()) sont également traduites." },
  { num: 5, title: "Modules et packages", code: `# Leçon 5 : Modules\n# Modules stdlib en français\nimporter mathematiques\nafficher(f"Pi = {mathematiques.pi}")\nafficher(f"Racine(16) = {mathematiques.sqrt(16)}")\n\nimporter aleatoire\nn = aleatoire.entier(1, 100)\nafficher(f"Aléatoire: {n}")\n\n# Packages externes — même syntaxe !\nimporter numpy comme np\na = np.tableau([1, 2, 3])\nafficher(f"Moyenne: {a.moyenne()}")\n\n# Importer depuis\ndepuis mathematiques importer sqrt, pi\nafficher(sqrt(pi))`, explanation: "Les modules stdlib sont traduits : `mathematiques` → `math`, `aleatoire` → `random`. Les packages externes (numpy, pandas) gardent leur nom mais les méthodes sont traduites." },
];

export default function IntermediairePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">🚀 Intermédiaire</span>
          <span className="text-slate-500 text-sm">5 leçons • 3-4 heures</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tutoriel Intermédiaire</h1>
        <p className="text-lg text-slate-600">Approfondissez vos connaissances avec les structures de données, les classes et les modules.</p>
      </div>

      <div className="space-y-12">
        {lessons.map((lesson) => (
          <section key={lesson.num} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{lesson.num}</span>
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
        <Link href="/formation/debutant" className="text-[#1a56db] hover:underline font-medium">← Débutant</Link>
        <Link href="/formation/avance" className="text-[#1a56db] hover:underline font-medium">Niveau avancé →</Link>
      </div>
    </div>
  );
}
