"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import RegulationCard from "@/components/RegulationCard";
import { regulationsData } from "@/lib/regulations-data";

const categories = ["Tous", "Données", "Plateformes", "Cybersécurité", "IA", "Finance", "Identité", "Droits num."];

export default function ReglementsPage() {
  const [activeCat, setActiveCat] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return regulationsData.filter((reg) => {
      const matchCat = activeCat === "Tous" || reg.cat === activeCat;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        reg.title.toLowerCase().includes(q) ||
        reg.fullName.toLowerCase().includes(q) ||
        reg.badge.toLowerCase().includes(q) ||
        reg.name.toLowerCase().includes(q) ||
        reg.summary.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCat, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2">Textes de référence</p>
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-3">
          Règlements européens
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          Les principaux textes réglementaires européens en matière de droit du numérique.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search bar */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un règlement…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-300 bg-white dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                activeCat === cat
                  ? "bg-navy-950 text-white border-navy-950"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-navy-400 hover:text-navy-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
        {filtered.length} règlement{filtered.length !== 1 ? "s" : ""} affiché{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-sm">Aucun règlement ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((reg) => (
            <RegulationCard key={reg.id} regulation={reg} />
          ))}
        </div>
      )}
    </div>
  );
}
