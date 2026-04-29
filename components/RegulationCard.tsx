import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RegulationData } from "@/lib/regulations-data";

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  partial: "bg-amber-100 text-amber-800",
  upcoming: "bg-blue-100 text-blue-800",
};

const catColors: Record<string, string> = {
  "Données": "bg-blue-50 text-blue-700 border-blue-200",
  "Plateformes": "bg-purple-50 text-purple-700 border-purple-200",
  "Cybersécurité": "bg-teal-50 text-teal-700 border-teal-200",
  "IA": "bg-rose-50 text-rose-700 border-rose-200",
  "Finance": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Identité": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Droits num.": "bg-orange-50 text-orange-700 border-orange-200",
};

export default function RegulationCard({ regulation }: { regulation: RegulationData }) {
  const statusColor = statusColors[regulation.status] || statusColors.active;
  const catColor = catColors[regulation.cat] || "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <Link href={`/reglement/${regulation.id}`} className="group block">
      <div className="h-full bg-white border border-gray-200 rounded-xl p-5 hover:border-navy-400 hover:shadow-md transition-all duration-200 flex flex-col">
        {/* Badge + cat */}
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono font-bold text-navy-950 text-sm bg-navy-50 border border-navy-200 px-2 py-0.5 rounded">
            {regulation.badge}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded border ${catColor}`}>
            {regulation.cat}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif-display font-semibold text-navy-900 text-sm leading-snug mb-1 group-hover:text-navy-700 transition-colors">
          {regulation.name}
        </h3>

        {/* Ref */}
        <p className="text-xs text-gray-400 font-mono mb-3 truncate">{regulation.ref}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor}`}>
            {regulation.statusLabel}
          </span>
          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-navy-700 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
