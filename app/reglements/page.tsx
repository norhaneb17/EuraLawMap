import RegulationCard from "@/components/RegulationCard";
import SearchBar from "@/components/SearchBar";
import { mockRegulations } from "@/lib/mock-data";

export default function ReglementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
          Règlements européens
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Les principaux textes réglementaires européens en matière de droit du numérique,
          synthétisés et annotés pour les étudiants en droit.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar fullWidth />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockRegulations.map((reg) => (
          <RegulationCard key={reg.slug} regulation={reg} />
        ))}
      </div>
    </div>
  );
}
