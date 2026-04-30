import { BookOpen } from "lucide-react";

const mockConcepts = [
  { term: "Contrôleur d'accès (gatekeeper)", definition: "Entreprise désignée par la Commission européenne comme exploitant un ou plusieurs services de plateforme essentiels (SPE) et remplissant les critères quantitatifs du DMA.", related_articles: ["DMA art. 3", "DMA art. 4"], letter: "C" },
  { term: "Coordinateur des services numériques (CSN)", definition: "Autorité nationale désignée par chaque État membre pour superviser l'application du DSA sur son territoire. En France, ce rôle est confié à l'ARCOM.", related_articles: ["DSA art. 49", "DSA art. 50"], letter: "C" },
  { term: "Délégué à la protection des données (DPO)", definition: "Responsable de la protection des données désigné obligatoirement par les responsables de traitement et sous-traitants dans certains cas (organisme public, traitements à grande échelle, données sensibles).", related_articles: ["RGPD art. 37", "RGPD art. 38", "RGPD art. 39"], letter: "D" },
  { term: "Donnée à caractère personnel", definition: "Toute information se rapportant à une personne physique identifiée ou identifiable. Une personne est 'identifiable' si elle peut être identifiée, directement ou indirectement.", related_articles: ["RGPD art. 4(1)"], letter: "D" },
  { term: "Entité essentielle", definition: "Catégorie d'entités soumises aux obligations les plus strictes de NIS2, comprenant notamment les opérateurs de services essentiels dans des secteurs critiques (énergie, transports, santé, etc.).", related_articles: ["NIS2 art. 3"], letter: "E" },
  { term: "Fournisseur de modèle d'IA à usage général (GPAI)", definition: "Fournisseur d'un modèle d'IA entraîné avec un grand volume de données et capable de réaliser diverses tâches, y compris les grands modèles de langage (LLM) comme GPT-4 ou Claude.", related_articles: ["AI Act art. 3(63)", "AI Act art. 51"], letter: "F" },
  { term: "Intérêts légitimes", definition: "L'une des 6 bases légales du RGPD permettant un traitement de données sans consentement, à condition que les intérêts du responsable de traitement ne soient pas outrepassés par les droits fondamentaux de la personne concernée.", related_articles: ["RGPD art. 6(1)(f)"], letter: "I" },
  { term: "Notice and action", definition: "Mécanisme du DSA obligeant les plateformes à mettre en place un système permettant à tout utilisateur de signaler des contenus illicites, avec obligation de traitement rapide du signalement.", related_articles: ["DSA art. 16", "DSA art. 17"], letter: "N" },
  { term: "Portabilité des données", definition: "Droit de la personne concernée de recevoir ses données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.", related_articles: ["RGPD art. 20"], letter: "P" },
  { term: "Sous-traitant", definition: "Personne physique ou morale qui traite des données à caractère personnel pour le compte du responsable du traitement, selon les instructions de ce dernier.", related_articles: ["RGPD art. 4(8)", "RGPD art. 28"], letter: "S" },
  { term: "Très grande plateforme en ligne (VLOP)", definition: "Plateforme en ligne désignée par la Commission européenne sous le DSA en raison d'un nombre d'utilisateurs actifs mensuels égal ou supérieur à 45 millions dans l'UE. Soumise aux obligations les plus strictes.", related_articles: ["DSA art. 33", "DSA art. 34", "DSA art. 35"], letter: "T" },
];

const groupByLetter = (concepts: typeof mockConcepts) => {
  const grouped: Record<string, typeof mockConcepts> = {};
  concepts.forEach((c) => {
    if (!grouped[c.letter]) grouped[c.letter] = [];
    grouped[c.letter].push(c);
  });
  return grouped;
};

export default function GlossairePage() {
  const grouped = groupByLetter(mockConcepts);
  const letters = Object.keys(grouped).sort();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-3">
          Glossaire
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          Les concepts essentiels du droit européen du numérique, définis et référencés
          avec les articles pertinents.
        </p>
      </div>

      {/* Letter index */}
      <div className="flex flex-wrap gap-2 mb-10">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-9 h-9 flex items-center justify-center bg-navy-950 text-white rounded-lg text-sm font-bold hover:bg-navy-700 transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Concepts by letter */}
      <div className="space-y-10">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif-display text-3xl font-bold text-gold-500">{letter}</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="space-y-4">
              {grouped[letter].map((concept) => (
                <div
                  key={concept.term}
                  id={`term-${concept.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-navy-200 dark:hover:border-navy-600 transition-colors scroll-mt-20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif-display font-semibold text-navy-900 dark:text-white text-base mb-2">
                        {concept.term}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {concept.definition}
                      </p>
                    </div>
                    <BookOpen className="w-4 h-4 text-navy-300 flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {concept.related_articles.map((art) => (
                      <span
                        key={art}
                        className="text-xs bg-navy-50 text-navy-600 border border-navy-100 px-2 py-0.5 rounded font-mono"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
