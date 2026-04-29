import Link from "next/link";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gold-500 rounded flex items-center justify-center">
                <Scale className="w-3.5 h-3.5 text-navy-950" />
              </div>
              <span className="font-serif-display text-lg font-bold text-white">
                Euralaw<span className="text-gold-400">Map</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm">
              La plateforme de référence pour comprendre le droit européen du numérique.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/reglements", label: "Règlements" },
                { href: "/fiches", label: "Fiches thématiques" },
                { href: "/glossaire", label: "Glossaire" },
                { href: "/assistant", label: "Assistant IA" },
                { href: "/quiz", label: "Quiz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-400 hover:text-gold-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://eur-lex.europa.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-gold-400 text-sm transition-colors"
                >
                  EUR-Lex (textes officiels)
                </a>
              </li>
              <li>
                <a
                  href="https://edpb.europa.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-gold-400 text-sm transition-colors"
                >
                  CEPD / EDPB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-8 pt-6 text-center text-navy-500 text-xs">
          © {new Date().getFullYear()} EuralawMap — Plateforme pédagogique, non un avis juridique.
        </div>
      </div>
    </footer>
  );
}
