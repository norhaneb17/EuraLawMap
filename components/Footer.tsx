import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-3">
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold tracking-widest text-sm uppercase">EuraLex<span className="text-gold-400">Map</span></span>
                <span className="text-navy-500 text-[10px] tracking-widest uppercase font-medium mt-0.5">Droit du numérique européen</span>
              </div>
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
                { href: "/cartographie", label: "Cartographie" },
                { href: "/fiches", label: "Fiches thématiques" },
                { href: "/glossaire", label: "Glossaire" },
                { href: "/quiz", label: "Quiz" },
                { href: "/a-propos", label: "À propos" },
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
          © {new Date().getFullYear()} EuraLexMap — Compilation de textes juridiques européens à visée pédagogique. Ne constitue pas un avis juridique.
        </div>
      </div>
    </footer>
  );
}
