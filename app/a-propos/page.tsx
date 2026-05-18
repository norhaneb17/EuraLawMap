import { AlertCircle } from "lucide-react";

export default function AProposPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-4">
          À propos de Legamapex
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          RGPD, DSA, DMA, AI Act, NIS2, Data Act… Ces textes transforment la manière dont le numérique
          est encadré en Europe. Mais entre EUR-Lex, des PDF de centaines de pages et une terminologie
          ultra-technique, y voir clair relève souvent du défi.
        </p>
        <p className="text-lg font-semibold text-navy-900 dark:text-white mt-4">
          Legamapex est là pour simplifier tout ça.
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-12">
        <p>
          La plateforme centralise les grandes réglementations européennes du numérique et les rend
          accessibles. Que vous soyez étudiant en droit ou simplement concerné par les règles qui
          encadrent votre quotidien numérique.
        </p>
      </div>

      {/* Contents */}
      <div className="mb-12">
        <h2 className="font-serif-display text-xl font-bold text-navy-950 dark:text-white mb-5">
          Ce que vous y trouverez
        </h2>
        <ul className="space-y-3">
          {[
            "15 règlements européens analysés et mis à jour",
            "11 fiches thématiques sur les notions-clés",
            "Un glossaire de 120 concepts définis et référencés par article",
            "Un quiz interactif pour tester vos connaissances",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold-500 font-bold flex-shrink-0 mt-0.5">→</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IA note */}
      <div className="mb-12 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        <p>
          Le droit du numérique bouge vite. Legamapex aussi — le site est construit avec des outils
          d&apos;intelligence artificielle et pensé pour évoluer au rythme de son domaine.
        </p>
      </div>

      {/* Who am I */}
      <div className="mb-12">
        <h2 className="font-serif-display text-xl font-bold text-navy-950 dark:text-white mb-4">
          Qui suis-je ?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Je suis <strong className="text-navy-900 dark:text-white font-semibold">Norhane Boureghda</strong>,
          étudiante en M2 Droit du numérique à l&apos;Université Paris-Nanterre et alternante au Ministère
          de la Justice. J&apos;ai créé Legamapex parce que j&apos;aurais aimé avoir cet outil quand j&apos;ai
          découvert ces textes pour la première fois.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4">
        <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Ce projet est à visée pédagogique. Le contenu de ce site ne constitue pas un avis juridique.
          Pour toute question spécifique, consultez un professionnel du droit.
        </p>
      </div>

    </div>
  );
}
