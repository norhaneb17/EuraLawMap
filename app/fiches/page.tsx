"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FileText, Tag, Search } from "lucide-react";

const mockFiches = [
  {
    slug: "dsa-coordinateur",
    title: "Le coordinateur des services numériques (CSN)",
    excerpt: "Rôle, désignation et pouvoirs des autorités nationales chargées de la mise en œuvre du DSA dans chaque État membre.",
    tags: ["DSA", "Gouvernance", "ARCOM"],
    regulation: "DSA",
    cat: "Plateformes",
  },
  {
    slug: "dma-gatekeepers",
    title: "Les contrôleurs d'accès (gatekeepers) sous le DMA",
    excerpt: "Critères de désignation, obligations spécifiques et procédure de contestation devant la Commission européenne.",
    tags: ["DMA", "Concurrence", "Big Tech"],
    regulation: "DMA",
    cat: "Plateformes",
  },
  {
    slug: "rgpd-dpo",
    title: "Le Délégué à la Protection des Données (DPO)",
    excerpt: "Statut, missions obligatoires et facultatives, conditions de désignation et garanties d'indépendance du DPO.",
    tags: ["RGPD", "DPO", "Compliance"],
    regulation: "RGPD",
    cat: "Données",
  },
  {
    slug: "ai-act-high-risk",
    title: "Les systèmes d'IA à haut risque",
    excerpt: "Définition, catégories (Annexes I et III), obligations applicables et procédures d'évaluation de conformité.",
    tags: ["AI Act", "Risque", "Conformité"],
    regulation: "AI Act",
    cat: "IA",
  },
  {
    slug: "rgpd-bases-legales",
    title: "Les bases légales du traitement (RGPD)",
    excerpt: "Les 6 bases légales de l'article 6 RGPD : consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public, intérêts légitimes.",
    tags: ["RGPD", "Traitement", "Consentement"],
    regulation: "RGPD",
    cat: "Données",
  },
  {
    slug: "nis2-entites",
    title: "Entités essentielles et importantes (NIS2)",
    excerpt: "Distinction entre entités essentielles et importantes, critères de catégorisation et différences dans le régime de supervision.",
    tags: ["NIS2", "Cybersécurité", "Classification"],
    regulation: "NIS2",
    cat: "Cybersécurité",
  },
];

const ALL_REGULATIONS = ["Tous", ...Array.from(new Set(mockFiches.map((f) => f.regulation)))];

const catColors: Record<string, string> = {
  Données: "bg-blue-50 text-blue-700",
  Plateformes: "bg-purple-50 text-purple-700",
  Cybersécurité: "bg-teal-50 text-teal-700",
  IA: "bg-rose-50 text-rose-700",
};

export default function FichesPage() {
  const [activeReg, setActiveReg] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return mockFiches.filter((f) => {
      const matchReg = activeReg === "Tous" || f.regulation === activeReg;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.excerpt.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q));
      return matchReg && matchSearch;
    });
  }, [activeReg, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2">Ressources</p>
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
          Fiches thématiques
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Des synthèses claires sur les notions-clés du droit européen du numérique.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search bar */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une fiche…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-300 bg-white"
          />
        </div>

        {/* Regulation filter pills */}
        <div className="flex flex-wrap gap-2">
          {ALL_REGULATIONS.map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveReg(reg)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                activeReg === reg
                  ? "bg-navy-950 text-white border-navy-950"
                  : "bg-white text-gray-600 border-gray-200 hover:border-navy-400 hover:text-navy-700"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-400 mb-6">
        {filtered.length} fiche{filtered.length !== 1 ? "s" : ""} affichée{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <FileText className="w-8 h-8 mx-auto mb-3 opacity-40" />
          <p className="text-sm">Aucune fiche ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((fiche) => (
            <Link
              key={fiche.slug}
              href={`/fiches/${fiche.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-navy-400 hover:shadow-md transition-all flex flex-col group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <FileText className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
                <div className="flex gap-1.5">
                  <span className="text-xs font-medium px-2 py-0.5 rounded border bg-navy-50 text-navy-700 border-navy-200">
                    {fiche.regulation}
                  </span>
                  {fiche.cat && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${catColors[fiche.cat] ?? "bg-gray-100 text-gray-600"}`}>
                      {fiche.cat}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="font-serif-display font-semibold text-navy-900 text-base leading-snug mb-2 flex-1">
                {fiche.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{fiche.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {fiche.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-3 border-t border-gray-100">
                <span className="text-xs text-gold-600 font-medium group-hover:underline">Lire la fiche →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
