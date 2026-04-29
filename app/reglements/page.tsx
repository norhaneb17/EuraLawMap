import RegulationCard from "@/components/RegulationCard";
import { regulationsData } from "@/lib/regulations-data";

const categories = ["Tous", "Données", "Plateformes", "Cybersécurité", "IA", "Finance", "Identité", "Droits num."];

export default function ReglementsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2">Textes de référence</p>
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
          Règlements européens
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Les principaux textes réglementaires européens en matière de droit du numérique.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white cursor-pointer hover:border-navy-400 hover:text-navy-700 transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {regulationsData.map((reg) => (
          <RegulationCard key={reg.id} regulation={reg} />
        ))}
      </div>
    </div>
  );
}
