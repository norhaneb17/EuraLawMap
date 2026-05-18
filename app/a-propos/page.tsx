import { FileText, Brain, Trophy, Scale, AlertCircle } from "lucide-react";

const contents = [
  { icon: FileText, number: "15", label: "règlements européens", sub: "analysés et mis à jour" },
  { icon: FileText, number: "11", label: "fiches thématiques", sub: "sur les notions-clés" },
  { icon: Brain,    number: "120", label: "concepts définis",   sub: "référencés par article" },
  { icon: Trophy,   number: "1",   label: "quiz interactif",    sub: "pour tester vos connaissances" },
];

export default function AProposPage() {
  return (
    <div className="bg-white dark:bg-gray-900">

      {/* Header éditorial */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-4">
          À propos
        </p>
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-6 leading-tight">
          À propos de Legamapex
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          RGPD, DSA, DMA, AI Act, NIS2, Data Act… Ces textes transforment la manière dont le
          numérique est encadré en Europe. Mais entre EUR-Lex, des PDF de centaines de pages et
          une terminologie ultra-technique, y voir clair relève souvent du défi.
        </p>
        <p className="text-base md:text-lg font-semibold text-navy-900 dark:text-white border-l-4 border-gold-400 pl-4">
          Legamapex est là pour simplifier tout ça.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          La plateforme centralise les grandes réglementations européennes du numérique et les rend
          accessibles. Que vous soyez étudiant en droit ou simplement concerné par les règles qui
          encadrent votre quotidien numérique.
        </p>
      </div>

      {/* Contenus — grille 2×2 */}
      <div className="bg-gray-50 dark:bg-gray-800/40 border-y border-gray-100 dark:border-gray-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-xl font-bold text-navy-950 dark:text-white mb-8">
            Ce que vous y trouverez
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {contents.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-navy-500 dark:text-navy-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif-display text-2xl font-bold text-navy-900 dark:text-white">
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold text-navy-700 dark:text-navy-300">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IA note */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          Le droit du numérique bouge vite. Legamapex aussi — le site est construit avec des outils
          d&apos;intelligence artificielle et pensé pour évoluer au rythme de son domaine.
        </p>
      </div>

      {/* Qui suis-je */}
      <div className="bg-gray-50 dark:bg-gray-800/40 border-y border-gray-100 dark:border-gray-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center flex-shrink-0">
              <Scale className="w-5 h-5 text-navy-500 dark:text-navy-400" />
            </div>
            <div>
              <h2 className="font-serif-display text-xl font-bold text-navy-950 dark:text-white mb-3">
                Qui suis-je ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Je suis{" "}
                <strong className="text-navy-900 dark:text-white font-semibold">
                  Norhane Boureghda
                </strong>
                , étudiante en M2 Droit du numérique à l&apos;Université Paris-Nanterre et alternante
                au Ministère de la Justice. J&apos;ai créé Legamapex parce que j&apos;aurais aimé avoir
                cet outil quand j&apos;ai découvert ces textes pour la première fois.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4">
          <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Ce projet est à visée pédagogique. Le contenu de ce site ne constitue pas un avis
            juridique. Pour toute question spécifique, consultez un professionnel du droit.
          </p>
        </div>
      </div>

    </div>
  );
}
