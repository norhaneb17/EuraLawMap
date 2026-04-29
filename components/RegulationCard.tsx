import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Regulation } from "@/lib/types";

const statusLabels: Record<string, { label: string; color: string }> = {
  in_force: { label: "En vigueur", color: "bg-green-100 text-green-800" },
  partially_applicable: { label: "Application progressive", color: "bg-amber-100 text-amber-800" },
  proposed: { label: "Proposé", color: "bg-blue-100 text-blue-800" },
};

const categoryColors: Record<string, string> = {
  "Données": "bg-blue-50 text-blue-700 border-blue-200",
  "Plateformes": "bg-purple-50 text-purple-700 border-purple-200",
  "Concurrence": "bg-orange-50 text-orange-700 border-orange-200",
  "Intelligence Artificielle": "bg-rose-50 text-rose-700 border-rose-200",
  "Cybersécurité": "bg-teal-50 text-teal-700 border-teal-200",
  "Vie privée": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function RegulationCard({ regulation }: { regulation: Regulation }) {
  const status = statusLabels[regulation.status] || statusLabels.in_force;
  const catColor = categoryColors[regulation.category] || "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <Link href={`/reglement/${regulation.slug}`} className="group block">
      <div className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-navy-300 hover:shadow-lg transition-all duration-200 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{regulation.icon_emoji}</span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${catColor}`}>
            {regulation.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif-display font-semibold text-navy-900 text-lg leading-snug mb-2 group-hover:text-navy-700 transition-colors">
          {regulation.title}
        </h3>

        {/* Reference */}
        <p className="text-xs text-gray-400 font-mono mb-3">{regulation.reference}</p>

        {/* Summary */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4 line-clamp-3">
          {regulation.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(regulation.application_date).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status.color}`}>
              {status.label}
            </span>
            <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-navy-700 group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
}
