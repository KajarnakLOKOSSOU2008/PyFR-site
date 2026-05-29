"use client";

import { useState } from "react";

export default function CodeBlock({ code, language = "pyfr", showCopy = true }: { code: string; language?: string; showCopy?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (text: string) => {
    return text
      .replace(/(#[^\n]*)/g, '<span class="comment">$1</span>')
      .replace(/\b(si|sinon_si|sinon|tant_que|pour|dans|fonction|retourner|classe|soi|essayer|excepte|enfin|lever|affirmer|avec|comme|importer|depuis|et|ou|non|est|vrai|faux|rien|casser|continuer|passer|global|supprimer|attendre|asynchrone|produire|affirmer|assertion)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(afficher|saisir|entier|decimal|chaine|liste|dictionnaire|ensemble|plage|longueur|somme|maximum|minimum|trier|enumerer|inverser|filtrer|appliquer|absolu|arrondi|ouvrir|est_instance|sous_classe|booleen|octet|complexe|zipper|iterateur|suivant|type_de|aide|super_classe|objet|representation|hachage)\b/g, '<span class="builtin">$1</span>')
      .replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
  };

  return (
    <div className="relative group">
      <div className="code-block p-4 md:p-5">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700/50">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{language}</span>
          {showCopy && (
            <button
              onClick={handleCopy}
              className="text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-700"
            >
              {copied ? "✓ Copié !" : "📋 Copier"}
            </button>
          )}
        </div>
        <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </div>
    </div>
  );
}
