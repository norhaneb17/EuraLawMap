import { FileText, BookOpen, Brain, Trophy, AlertCircle } from "lucide-react";

const contents = [
  { icon: FileText, label: "15 règlements européens du numérique, analysés et mis à jour" },
  { icon: FileText, label: "11 fiches thématiques sur les notions-clés" },
  { icon: Brain, label: "Un glossaire de 120 concepts définis et référencés par article" },
  { icon: Trophy, label: "Un quiz interactif pour tester ses connaissances" },
];

export default function AProposPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-4">
          À propos d'EuraLexMap
        </h1>
        <p className="text-lg text-navy-400 dark:text-gray-400 leading-relaxed border-l-2 border-navy-200 dark:border-navy-700 pl-4">
          Un projet né d'un constat simple : le droit européen du numérique est dense, technique
          et en constante évolution, mais il concerne tout le monde.
        </p>
      </div>

      {/* Main text */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-14">
        <p>
          Je suis <strong className="text-navy-900 dark:text-white font-semibold">Norhane Boureghda</strong>,
          étudiante en droit en master 2 de Droit du numérique, et j'ai créé EuraLexMap pour répondre
          à un besoin que j'ai moi-même ressenti : avoir un espace clair, structuré et fiable pour
          naviguer dans l'écosystème réglementaire européen du numérique.
        </p>
        <p>
          Le droit du numérique européen — DSA, DMA, AI Act, RGPD, NIS2 et les autres — est en train
          de remodeler profondément les pratiques des entreprises, des plateformes et des professionnels
          du droit. Ces textes sont publics, mais leur lecture reste difficile d'accès pour qui n'est
          pas rompu à la rédaction législative européenne.
        </p>
        <p>
          EuraLexMap est ma façon de prendre en main ces outils : construire une plateforme pédagogique
          structurée, intégrer des technologies d'IA pour enrichir l'expérience, et contribuer à rendre
          ce corpus juridique plus lisible pour les étudiants, les juristes et les professionnels concernés.
        </p>
        <p>
          Ce projet est aussi une démonstration personnelle que les outils d'intelligence artificielle
          peuvent être mis au service d'une pratique juridique rigoureuse — non pas pour remplacer le
          raisonnement juridique, mais pour l'amplifier.
        </p>
      </div>

      {/* Contents section */}
      <div className="mb-14">
        <h2 className="font-serif-display text-xl font-bold text-navy-950 dark:text-white mb-5">
          Ce que contient le site
        </h2>
        <ul className="space-y-3">
          {contents.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-3.5 h-3.5 text-navy-500 dark:text-navy-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-1">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4">
        <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          EuraLexMap est un projet à visée pédagogique. Le contenu de ce site ne constitue pas un
          avis juridique. Pour toute question spécifique, consultez un professionnel du droit.
        </p>
      </div>

    </div>
  );
}
