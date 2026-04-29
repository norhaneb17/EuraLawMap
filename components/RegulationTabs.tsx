"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { RegulationData } from "@/lib/regulations-data";

const tabs = [
  { id: "apercu", label: "Aperçu" },
  { id: "nature", label: "Nature juridique" },
  { id: "obligations", label: "Obligations clés" },
  { id: "sanctions", label: "Sanctions" },
  { id: "articulations", label: "Articulations" },
  { id: "calendrier", label: "Calendrier" },
];

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800 border-green-200",
  partial: "bg-amber-100 text-amber-800 border-amber-200",
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
};

const catColors: Record<string, string> = {
  "Données": "bg-blue-50 text-blue-700",
  "Plateformes": "bg-purple-50 text-purple-700",
  "Cybersécurité": "bg-teal-50 text-teal-700",
  "IA": "bg-rose-50 text-rose-700",
  "Finance": "bg-emerald-50 text-emerald-700",
  "Identité": "bg-indigo-50 text-indigo-700",
  "Droits num.": "bg-orange-50 text-orange-700",
};

export default function RegulationTabs({ regulation }: { regulation: RegulationData }) {
  const [activeTab, setActiveTab] = useState("apercu");
  const statusColor = statusColors[regulation.status] || statusColors.active;
  const catColor = catColors[regulation.cat] || "bg-gray-50 text-gray-700";

  return (
    <div>
      {/* Header */}
      <div className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${statusColor}`}>
              {regulation.statusLabel}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded ${catColor}`}>
              {regulation.cat}
            </span>
            <span className="text-xs text-navy-400 font-mono ml-auto">{regulation.ref}</span>
            <span className="text-xs text-navy-500">
              Mis à jour le{" "}
              {new Date(regulation.updatedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <p className="text-navy-400 text-xs font-semibold tracking-widest uppercase mb-1">
            {regulation.type}
          </p>
          <h1 className="font-serif-display text-3xl md:text-4xl font-bold mb-1">
            {regulation.title}
          </h1>
          <p className="text-navy-300 text-base mb-6">{regulation.fullName}</p>

          <p className="text-navy-300 text-sm leading-relaxed max-w-4xl mb-8 border-l-2 border-navy-700 pl-4">
            {regulation.summary}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href={regulation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy-950 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Consulter le texte officiel sur EUR-Lex
            </a>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-navy-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-white text-white"
                    : "border-transparent text-navy-400 hover:text-navy-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Aperçu */}
        {activeTab === "apercu" && (
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Contexte</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{regulation.context}</p>
            </section>
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Champ d&apos;application</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{regulation.champ}</p>
            </section>
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Acteurs concernés</h2>
              <div className="flex flex-wrap gap-2">
                {regulation.actors.map((actor, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Nature juridique */}
        {activeTab === "nature" && (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-300 font-semibold px-4 py-2 rounded-lg text-sm">
              {regulation.type === "Règlement" ? "Règlement — Application directe" : "Directive — Transposition nécessaire"}
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{regulation.natureNote}</p>
            </div>
          </div>
        )}

        {/* Obligations */}
        {activeTab === "obligations" && (
          <div className="space-y-4">
            {regulation.obligations.map((obligation, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p
                  className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: obligation }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Sanctions */}
        {activeTab === "sanctions" && (
          <div className="space-y-4">
            {regulation.sanctions.map((s, i) => (
              <div key={i} className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <div className="flex-shrink-0">
                  <span className="text-sm font-bold text-red-700 bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 px-3 py-1.5 rounded-lg block text-center">
                    {s.amount}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        )}

        {/* Articulations */}
        {activeTab === "articulations" && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{regulation.articulations}</p>
          </div>
        )}

        {/* Calendrier */}
        {activeTab === "calendrier" && (
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-6">
              {regulation.timeline.map((item, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-950 dark:bg-navy-700 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="text-xs font-bold text-navy-500 dark:text-navy-400 uppercase tracking-wide mb-1">{item.date}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
