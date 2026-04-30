export interface GlossaryTerm {
  term: string;          // Full term as shown in glossaire
  variants: string[];    // Variants to match in fiche text (case-insensitive)
  definition: string;
  letter: string;        // For anchor: /glossaire#letter-X
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Contrôleur d'accès (gatekeeper)",
    variants: ["contrôleur d'accès", "contrôleurs d'accès", "gatekeeper", "gatekeepers"],
    definition: "Entreprise désignée par la Commission européenne comme exploitant un ou plusieurs services de plateforme essentiels et remplissant les critères quantitatifs du DMA.",
    letter: "C",
  },
  {
    term: "Coordinateur des services numériques (CSN)",
    variants: ["coordinateur des services numériques", "coordinateurs des services numériques", "CSN"],
    definition: "Autorité nationale désignée par chaque État membre pour superviser l'application du DSA sur son territoire. En France, ce rôle est confié à l'ARCOM.",
    letter: "C",
  },
  {
    term: "Délégué à la protection des données (DPO)",
    variants: ["délégué à la protection des données", "délégués à la protection des données", "DPO"],
    definition: "Responsable de la protection des données désigné obligatoirement par les responsables de traitement et sous-traitants dans certains cas (organisme public, traitements à grande échelle, données sensibles).",
    letter: "D",
  },
  {
    term: "Donnée à caractère personnel",
    variants: ["donnée à caractère personnel", "données à caractère personnel", "donnée personnelle", "données personnelles"],
    definition: "Toute information se rapportant à une personne physique identifiée ou identifiable. Une personne est 'identifiable' si elle peut être identifiée, directement ou indirectement.",
    letter: "D",
  },
  {
    term: "Entité essentielle",
    variants: ["entité essentielle", "entités essentielles"],
    definition: "Catégorie d'entités soumises aux obligations les plus strictes de NIS2, comprenant notamment les opérateurs de services essentiels dans des secteurs critiques (énergie, transports, santé, etc.).",
    letter: "E",
  },
  {
    term: "Fournisseur de modèle d'IA à usage général (GPAI)",
    variants: ["modèle d'IA à usage général", "modèles d'IA à usage général", "GPAI"],
    definition: "Fournisseur d'un modèle d'IA entraîné avec un grand volume de données et capable de réaliser diverses tâches, y compris les grands modèles de langage (LLM) comme GPT-4 ou Claude.",
    letter: "F",
  },
  {
    term: "Intérêts légitimes",
    variants: ["intérêt légitime", "intérêts légitimes"],
    definition: "L'une des 6 bases légales du RGPD permettant un traitement de données sans consentement, à condition que les intérêts du responsable de traitement ne soient pas outrepassés par les droits fondamentaux de la personne concernée.",
    letter: "I",
  },
  {
    term: "Notice and action",
    variants: ["notice and action"],
    definition: "Mécanisme du DSA obligeant les plateformes à mettre en place un système permettant à tout utilisateur de signaler des contenus illicites, avec obligation de traitement rapide du signalement.",
    letter: "N",
  },
  {
    term: "Portabilité des données",
    variants: ["portabilité des données"],
    definition: "Droit de la personne concernée de recevoir ses données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.",
    letter: "P",
  },
  {
    term: "Sous-traitant",
    variants: ["sous-traitant", "sous-traitants"],
    definition: "Personne physique ou morale qui traite des données à caractère personnel pour le compte du responsable du traitement, selon les instructions de ce dernier.",
    letter: "S",
  },
  {
    term: "Très grande plateforme en ligne (VLOP)",
    variants: ["très grande plateforme en ligne", "très grandes plateformes en ligne", "VLOP", "VLOPs"],
    definition: "Plateforme en ligne désignée par la Commission européenne sous le DSA en raison d'un nombre d'utilisateurs actifs mensuels égal ou supérieur à 45 millions dans l'UE. Soumise aux obligations les plus strictes.",
    letter: "T",
  },
];
