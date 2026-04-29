import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Brain, MessageSquare, Trophy } from "lucide-react";
import RegulationCard from "@/components/RegulationCard";
import { mockRegulations, mockStats } from "@/lib/mock-data";

const stats = [
  { label: "Règlements", value: mockStats.regulations, icon: BookOpen },
  { label: "Fiches thématiques", value: mockStats.fiches, icon: FileText },
  { label: "Concepts définis", value: mockStats.concepts, icon: Brain },
];

const features = [
  {
    icon: FileText,
    title: "Fiches thématiques",
    desc: "Des synthèses claires sur les notions-clés du droit européen du numérique, organisées par thème.",
    href: "/fiches",
    cta: "Parcourir les fiches",
  },
  {
    icon: MessageSquare,
    title: "Assistant IA",
    desc: "Posez vos questions à un assistant spécialisé en droit européen du numérique, disponible 24h/24.",
    href: "/assistant",
    cta: "Interroger l'assistant",
  },
  {
    icon: Trophy,
    title: "Quiz d'auto-évaluation",
    desc: "Testez vos connaissances sur chaque règlement avec des quiz interactifs et des explications détaillées.",
    href: "/quiz",
    cta: "Commencer un quiz",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-950 to-navy-950 opacity-60" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mb-6">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase border border-gold-800 px-3 py-1 rounded-full">Droit européen du numérique</span>
          </div>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Le droit européen du numérique,{" "}
            <span className="text-gold-400">simplifié</span>
          </h1>
          <p className="text-navy-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            DSA, DMA, AI Act, RGPD, DGA et plus — des fiches de synthèse, un glossaire juridique
            et un assistant IA pour maîtriser les textes européens.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/reglements"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold px-6 py-3 rounded-lg transition-colors text-sm shadow-lg"
            >
              Explorer les règlements
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fiches"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm border border-navy-700"
            >
              Lire les fiches
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-8 gap-1">
                <stat.icon className="w-5 h-5 text-gold-500 mb-1" />
                <span className="font-serif-display text-3xl font-bold text-navy-950">{stat.value}</span>
                <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-1">Textes de référence</p>
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950">
              Règlements européens
            </h2>
          </div>
          <Link
            href="/reglements"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
          >
            Voir tous <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockRegulations.map((reg) => (
            <RegulationCard key={reg.slug} regulation={reg} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-2">Outils</p>
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-navy-950">
              Tout pour comprendre et réviser
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-navy-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-50 transition-colors">
                  <f.icon className="w-5 h-5 text-navy-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-serif-display font-bold text-navy-900 text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <Link
                  href={f.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors"
                >
                  {f.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
