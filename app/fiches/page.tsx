import Link from "next/link";
import { FileText, Tag } from "lucide-react";

const mockFiches = [
  {
    slug: "dsa-coordinateur",
    title: "Le coordinateur des services numériques (CSN)",
    excerpt: "Rôle, désignation et pouvoirs des autorités nationales chargées de la mise en œuvre du DSA dans chaque État membre.",
    tags: ["DSA", "Gouvernance", "ARCOM"],
    difficulty: "L3",
    regulation: "DSA",
  },
  {
    slug: "dma-gatekeepers",
    title: "Les contrôleurs d'accès (gatekeepers) sous le DMA",
    excerpt: "Critères de désignation, obligations spécifiques et procédure de contestation devant la Commission européenne.",
    tags: ["DMA", "Concurrence", "Big Tech"],
    difficulty: "M1",
    regulation: "DMA",
  },
  {
    slug: "rgpd-dpo",
    title: "Le Délégué à la Protection des Données (DPO)",
    excerpt: "Statut, missions obligatoires et facultatives, conditions de désignation et garanties d'indépendance du DPO.",
    tags: ["RGPD", "DPO", "Compliance"],
    difficulty: "L3",
    regulation: "RGPD",
  },
  {
    slug: "ai-act-high-risk",
    title: "Les systèmes d'IA à haut risque",
    excerpt: "Définition, catégories (Annexes I et III), obligations applicables et procédures d'évaluation de conformité.",
    tags: ["AI Act", "Risque", "Conformité"],
    difficulty: "M1",
    regulation: "AI Act",
  },
  {
    slug: "rgpd-bases-legales",
    title: "Les bases légales du traitement (RGPD)",
    excerpt: "Les 6 bases légales de l'article 6 RGPD : consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public, intérêts légitimes.",
    tags: ["RGPD", "Traitement", "Consentement"],
    difficulty: "L3",
    regulation: "RGPD",
  },
  {
    slug: "nis2-entites",
    title: "Entités essentielles et importantes (NIS2)",
    excerpt: "Distinction entre entités essentielles et importantes, critères de catégorisation et différences dans le régime de supervision.",
    tags: ["NIS2", "Cybersécurité", "Classification"],
    difficulty: "M1",
    regulation: "NIS2",
  },
];


export default function FichesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
          Fiches thématiques
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Des synthèses claires sur les notions-clés du droit européen du numérique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockFiches.map((fiche) => (
          <Link
            key={fiche.slug}
            href={`/fiches/${fiche.slug}`}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gold-400 hover:shadow-md transition-all flex flex-col group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <FileText className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs font-medium px-2 py-0.5 rounded border bg-navy-50 text-navy-700 border-navy-200">
                {fiche.regulation}
              </span>
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
    </div>
  );
}
