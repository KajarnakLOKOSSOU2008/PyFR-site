import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const pyfrCode = `# PyFR — Python en français 🇫🇷
importer numpy comme np

fonction factorielle(n):
    si n <= 1:
        retourner 1
    retourner n * factorielle(n - 1)

afficher(f"Factorielle de 10 = {factorielle(10)}")

# NumPy en français !
a = np.tableau([1, 2, 3, 4, 5])
afficher(f"Moyenne: {a.moyenne()}")
afficher(f"Écart-type: {a.ecart_type()}")`;

const pythonCode = `# Python — Standard 🐍
import numpy as np

def factorielle(n):
    if n <= 1:
        return 1
    return n * factorielle(n - 1)

print(f"Factorielle de 10 = {factorielle(10)}")

# NumPy standard
a = np.array([1, 2, 3, 4, 5])
print(f"Moyenne: {a.mean()}")
print(f"Écart-type: {a.std()}")`;

const features = [
  { icon: "🔤", title: "Syntaxe en français", desc: "si, pour, fonction, classe... Tous les mots-clés Python en français avec une traduction intuitive et naturelle." },
  { icon: "🐍", title: "100% Compatible Python", desc: "Utilisez numpy, pandas, matplotlib, scikit-learn et tous les packages Python sans aucune modification." },
  { icon: "⚡", title: "Transpilation instantanée", desc: "Votre code français est converti en Python standard en temps réel. Aucune perte de performance." },
  { icon: "📦", title: "Packages Python", desc: "importer numpy comme np, importer pandas... Utilisez vos packages favoris avec des noms français." },
  { icon: "🎓", title: "Facile à apprendre", desc: "La programmation en français rend l'apprentissage plus accessible pour les francophones." },
  { icon: "🌍", title: "Communauté francophone", desc: "Rejoignez une communauté grandissante de développeurs francophones." },
];

const stats = [
  { value: "60+", label: "Mots-clés traduits" },
  { value: "150+", label: "Méthodes traduites" },
  { value: "100%", label: "Compatible Python" },
  { value: "30+", label: "Modules traduits" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Version 1.0.0 — Stable
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-100">
              <span className="text-[#60a5fa]">Py</span>
              <span className="text-[#f87171]">FR</span>
              <span className="text-white"> — Python en Français</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 animate-fade-in-up animate-delay-200 leading-relaxed">
              Programmez en français. Compatible avec <span className="text-white font-semibold">tout l&apos;écosystème Python</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
              <Link
                href="/documentation"
                className="inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1e40af] text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Commencer
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link
                href="/telechargement"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all"
              >
                📥 Télécharger
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-[#1a56db]">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pourquoi <span className="french-gradient-text">PyFR</span> ?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              PyFR rend la programmation accessible à tous les francophones tout en restant 100% compatible avec Python.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Comparison Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              PyFR vs Python
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Même puissance, syntaxe en français. Le code PyFR est transpilé en Python standard.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🇫🇷</span>
                <span className="font-semibold text-slate-700">PyFR</span>
              </div>
              <CodeBlock code={pyfrCode} language="pyfr" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🐍</span>
                <span className="font-semibold text-slate-700">Python</span>
              </div>
              <CodeBlock code={pythonCode} language="python" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a56db] to-[#1e40af] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à coder en français ?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Installez PyFR en une commande et commencez à programmer dans votre langue.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block mb-8">
            <code className="text-lg font-mono">pip install pyfr</code>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/formation/debutant" className="bg-white text-[#1a56db] hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-colors">
              Commencer le tutoriel
            </Link>
            <Link href="/documentation" className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-xl font-semibold transition-colors">
              Lire la documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
