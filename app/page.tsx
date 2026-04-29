import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Brain } from "lucide-react";
import RegulationCard from "@/components/RegulationCard";
import SearchBar from "@/components/SearchBar";
import { mockRegulations, mockStats } from "@/lib/mock-data";

const stats = [
  { label: "Règlements", value: mockStats.regulations, icon: BookOpen },
  { label: "Fiches thématiques", value: mockStats.fiches, icon: FileText },
  { label: "Concepts définis", value: mockStats.concepts, icon: Brain },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-gold-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-navy-700">
            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
            Droit européen du numérique
          </div>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Comprendre les règlements<br />
            <span className="text-gold-400">européens du numérique</span>
          </h1>
          <p className="text-navy-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            DSA, DMA, AI Act, RGPD, DGA et plus — expliqués clairement pour les étudiants en droit,
            avec fiches de synthèse, glossaire et assistant IA.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <SearchBar fullWidth />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-navy-800">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-6">
                <stat.icon className="w-5 h-5 text-gold-400 mb-2" />
                <span className="font-serif-display text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-navy-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950">
              Règlements européens
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Cliquez sur un règlement pour accéder à la fiche détaillée
            </p>
          </div>
          <Link
            href="/reglements"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
          >
            Voir tous
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mockRegulations.map((reg) => (
            <RegulationCard key={reg.slug} regulation={reg} />
          ))}
        </div>
      </section>

      {/* CTA Features */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950 text-center mb-12">
            Tout ce dont vous avez besoin pour réviser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📄",
                title: "Fiches thématiques",
                desc: "Des fiches de synthèse sur les notions clés, organisées par niveau (L3, M1, M2) et par thème.",
                href: "/fiches",
                cta: "Parcourir les fiches",
              },
              {
                emoji: "🤖",
                title: "Assistant IA",
                desc: "Posez vos questions à un assistant spécialisé en droit européen du numérique, disponible 24h/24.",
                href: "/assistant",
                cta: "Interroger l'assistant",
              },
              {
                emoji: "🎯",
                title: "Quiz d'auto-évaluation",
                desc: "Testez vos connaissances sur chaque règlement avec des quiz générés par IA, avec explications détaillées.",
                href: "/quiz",
                cta: "Commencer un quiz",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="font-serif-display font-semibold text-navy-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.desc}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
                >
                  {feature.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
