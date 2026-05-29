import Link from "next/link";
import { usePathname } from "next/navigation";

const docLinks = [
  { href: "/documentation", label: "Démarrage rapide", icon: "🚀" },
  { href: "/documentation/mots-cles", label: "Mots-clés", icon: "🔤" },
  { href: "/documentation/builtins", label: "Fonctions builtins", icon: "⚡" },
  { href: "/documentation/methodes", label: "Méthodes", icon: "🔧" },
  { href: "/documentation/modules", label: "Modules", icon: "📦" },
  { href: "/documentation/fstrings", label: "F-strings", icon: "💬" },
];

export default function DocSidebar() {
  const pathname = usePathname();

  return (
    <nav className="doc-sidebar w-64 shrink-0 hidden lg:block">
      <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Documentation</h3>
        <ul className="space-y-1">
          {docLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
