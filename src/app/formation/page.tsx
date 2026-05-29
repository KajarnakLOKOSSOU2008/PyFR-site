import Link from "next/link";

const levels = [
  {
    title: "Débutant",
    icon: "🌱",
    color: "green",
    desc: "Vous débutez en programmation ? Commencez ici ! Apprenez les bases de PyFR étape par étape.",
    lessons: 5,
    duration: "2-3 heures",
    href: "/formation/debutant",
    topics: ["Bonjour le monde", "Variables et types", "Conditions", "Boucles", "Fonctions"],
  },
  {
    title: "Intermédiaire",
    icon: "🚀",
    color: "blue",
    desc: "Vous connaissez les bases ? Approfondissez avec les structures de données, les classes et les fichiers.",
    lessons: 5,
    duration: "3-4 heures",
    href: "/formation/intermediaire",
    topics: ["Listes et dictionnaires", "Classes et héritage", "Exceptions", "Fichiers", "Modules"],
  },
  {
    title: "Avancé",
    icon: "⚡",
    color: "purple",
    desc: "Maîtrisez PyFR avec numpy, pandas, et les concepts avancés de Python.",
    lessons: 5,
    duration: "4-5 heures",
    href: "/formation/avance",
    topics: ["NumPy en français", "Pandas en français", "Décorateurs", "Async", "Projet complet"],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-800" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-800" },
};

export default function FormationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Formation PyFR</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Apprenez à programmer en français, de débutant à avancé. Chaque leçon inclut des exemples de code que vous pouvez exécuter.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {levels.map((level, i) => {
          const c = colorMap[level.color];
          return (
            <Link key={i} href={level.href} className="group">
              <div className={`rounded-xl border ${c.border} ${c.bg} p-6 h-full hover:shadow-lg transition-all group-hover:scale-[1.02]`}>
                <div className="text-4xl mb-4">{level.icon}</div>
                <h2 className={`text-xl font-bold ${c.text} mb-2`}>{level.title}</h2>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{level.desc}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.badge}`}>{level.lessons} leçons</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.badge}`}>{level.duration}</span>
                </div>
                <ul className="space-y-1.5">
                  {level.topics.map((topic, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
