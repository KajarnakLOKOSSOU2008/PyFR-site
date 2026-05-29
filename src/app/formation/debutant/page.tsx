import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const lessons = [
  { num: 1, title: "Bonjour le monde", code: `# Leçon 1 : Bonjour le monde !\nafficher("Bonjour le monde !")\nafficher("Bienvenue dans PyFR !")\n\n# Variables\nnom = "Alice"\nafficher(f"Bonjour, {nom} !")`, explanation: "La fonction `afficher()` est l'équivalent français de `print()`. Elle affiche du texte à l'écran. Les variables sont créées simplement en les assignant." },
  { num: 2, title: "Variables et types", code: `# Leçon 2 : Variables et types\n# Nombres\nage = 25          # entier (int)\ntaille = 1.75     # decimal (float)\nnom = "Alice"     # chaine (str)\nest_etudiant = vrai  # booleen (bool)\n\n# Conversions\nx = entier("42")\ny = decimal("3.14")\nz = chaine(100)\n\nafficher(f"Âge: {age}, Type: {type_de(age)}")`, explanation: "PyFR traduit les types Python : `entier` → `int`, `decimal` → `float`, `chaine` → `str`, `booleen` → `bool`. `type_de()` retourne le type d'une variable." },
  { num: 3, title: "Conditions", code: `# Leçon 3 : Conditions (si / sinon)\nage = entier(saisir("Votre âge ? "))\n\nsi age < 13:\n    afficher("Vous êtes un enfant")\nsinon_si age < 18:\n    afficher("Vous êtes un adolescent")\nsinon_si age < 65:\n    afficher("Vous êtes un adulte")\nsinon:\n    afficher("Vous êtes un senior")\n\n# Opérateurs logiques\nsi age >= 18 et age <= 65:\n    afficher("En âge de travailler")`, explanation: "`si` → `if`, `sinon_si` → `elif`, `sinon` → `else`. Les opérateurs logiques `et` → `and`, `ou` → `or`, `non` → `not`." },
  { num: 4, title: "Boucles", code: `# Leçon 4 : Boucles\n# Boucle pour\nafficher("=== Boucle pour ===")\npour i dans plage(5):\n    afficher(f"  Itération {i}")\n\n# Boucle pour sur une liste\nfruits = ["pomme", "banane", "cerise"]\npour fruit dans fruits:\n    afficher(f"  J'aime les {fruit}s")\n\n# Boucle tant_que\nafficher("=== Boucle tant_que ===")\ncompteur = 0\ntant_que compteur < 5:\n    afficher(f"  Compteur = {compteur}")\n    compteur += 1`, explanation: "`pour` → `for`, `dans` → `in`, `plage()` → `range()`, `tant_que` → `while`. Les boucles fonctionnent exactement comme en Python." },
  { num: 5, title: "Fonctions", code: `# Leçon 5 : Fonctions\nfonction saluer(nom):\n    retourner f"Bonjour, {nom} !"\n\nfonction factorielle(n):\n    si n <= 1:\n        retourner 1\n    retourner n * factorielle(n - 1)\n\nfonction puissance(base, exposant=2):\n    retourner base ** exposant\n\n# Appels\nafficher(saluer("Alice"))\nafficher(f"10! = {factorielle(10)}")\nafficher(f"3² = {puissance(3)}")\nafficher(f"2¹⁰ = {puissance(2, 10)}")`, explanation: "`fonction` → `def`, `retourner` → `return`. Les fonctions supportent les arguments par défaut, *args, **kwargs, et les fonctions récursives." },
];

export default function DebutantPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">🌱 Débutant</span>
          <span className="text-slate-500 text-sm">5 leçons • 2-3 heures</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tutoriel Débutant</h1>
        <p className="text-lg text-slate-600">Apprenez les bases de la programmation avec PyFR, étape par étape.</p>
      </div>

      <div className="space-y-12">
        {lessons.map((lesson) => (
          <section key={lesson.num} id={`lecon-${lesson.num}`} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#1a56db] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{lesson.num}</span>
              <h2 className="text-2xl font-bold text-slate-900">{lesson.title}</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <CodeBlock code={lesson.code} language="pyfr" />
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2">💡 Explication</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{lesson.explanation}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="flex justify-between pt-10 border-t border-slate-200 mt-12">
        <Link href="/formation" className="text-[#1a56db] hover:underline font-medium">← Formation</Link>
        <Link href="/formation/intermediaire" className="text-[#1a56db] hover:underline font-medium">Niveau intermédiaire →</Link>
      </div>
    </div>
  );
}
