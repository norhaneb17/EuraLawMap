import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Tag, BookOpen, Scale, AlertTriangle, CheckCircle } from "lucide-react";


const fichesData: Record<string, {
  slug: string;
  title: string;
  regulation: string;
  difficulty: string;
  tags: string[];
  intro: string;
  sections: { heading: string; content: string }[];
  articles: { ref: string; texte: string }[];
  exemple: string;
  pieges: string[];
  aRetenir: string[];
}> = {
  "dsa-coordinateur": {
    slug: "dsa-coordinateur",
    title: "Le coordinateur des services numériques (CSN)",
    regulation: "DSA",
    difficulty: "L3",
    tags: ["DSA", "Gouvernance", "ARCOM"],
    intro:
      "Le Règlement (UE) 2022/2065 sur les services numériques (DSA) crée une nouvelle architecture de gouvernance reposant sur des autorités nationales spécialisées : les coordinateurs pour les services numériques (CSN). En France, ce rôle est confié à l'ARCOM.",
    sections: [
      {
        heading: "Qu'est-ce qu'un coordinateur pour les services numériques ?",
        content:
          "Chaque État membre doit désigner une autorité compétente chargée de la mise en œuvre et de l'application du DSA sur son territoire. Cette autorité est le coordinateur pour les services numériques (CSN). Elle dispose de pouvoirs d'enquête, de surveillance et de sanction. En France, l'ARCOM (Autorité de Régulation de la Communication Audiovisuelle et Numérique) a été désignée par la loi du 21 mai 2024.",
      },
      {
        heading: "Missions du CSN",
        content:
          "Le CSN est chargé de : (1) superviser le respect du DSA par les fournisseurs de services intermédiaires établis dans son État membre ; (2) recevoir les signalements relatifs aux violations du DSA ; (3) coopérer avec les CSN des autres États membres et avec la Commission européenne ; (4) instruire les plaintes des utilisateurs ; (5) prononcer des sanctions en cas de violation.",
      },
      {
        heading: "Répartition des compétences : CSN vs Commission européenne",
        content:
          "Le DSA distingue selon la taille des plateformes. Pour les très grandes plateformes en ligne (TGPEL) et très grands moteurs de recherche en ligne (TGMRL) — ceux ayant plus de 45 millions d'utilisateurs actifs mensuels dans l'UE — c'est la Commission européenne qui est l'autorité principale de surveillance, en coordination avec les CSN. Pour les autres fournisseurs, le CSN de l'État membre d'établissement est compétent (principe du pays d'origine).",
      },
      {
        heading: "Pouvoirs de sanction",
        content:
          "Le CSN peut imposer des amendes pouvant atteindre 6 % du chiffre d'affaires annuel mondial du fournisseur en cas de violation du DSA. En cas de violation grave et répétée mettant en danger des vies humaines ou causant des préjudices graves, des astreintes journalières de 5 % du chiffre d'affaires journalier peuvent être prononcées. Dans des situations d'urgence exceptionnelles, le CSN peut ordonner des mesures provisoires.",
      },
    ],
    articles: [
      { ref: "Article 49 DSA", texte: "Obligation pour chaque État membre de désigner un ou plusieurs CSN compétents pour l'application du règlement." },
      { ref: "Article 50 DSA", texte: "Pouvoirs d'enquête et d'exécution des CSN : droit d'accès aux données, auditions, inspections." },
      { ref: "Article 52 DSA", texte: "Sanctions : amendes jusqu'à 6 % du CA mondial annuel pour violation du règlement." },
      { ref: "Article 61 DSA", texte: "Mécanisme de coopération entre CSN au sein du Comité européen des services numériques (CESN)." },
    ],
    exemple:
      "En pratique : une plateforme de réseaux sociaux avec 10 millions d'utilisateurs en France mais établie aux Pays-Bas relève du CSN néerlandais (principe du pays d'origine). Si cette plateforme dépasse 45 millions d'utilisateurs dans l'UE, c'est la Commission européenne qui devient l'autorité principale, en coopération avec le CSN néerlandais. L'ARCOM peut néanmoins agir si des utilisateurs français sont affectés.",
    pieges: [
      "Ne pas confondre CSN et autorité de protection des données (CNIL) : la CNIL reste compétente pour le RGPD, le CSN pour le DSA.",
      "Le principe du pays d'origine signifie que c'est l'État d'établissement (siège social) qui détermine le CSN compétent, pas le pays où les utilisateurs se trouvent.",
      "Les TGPEL (ex : Meta, TikTok, YouTube) relèvent principalement de la Commission européenne, pas du CSN national.",
    ],
    aRetenir: [
      "Un CSN par État membre, désigné par la loi nationale.",
      "En France : l'ARCOM est le CSN depuis mai 2024.",
      "Compétence basée sur le pays d'établissement (siège social du fournisseur).",
      "La Commission européenne supervise directement les très grandes plateformes (+45M utilisateurs UE).",
      "Sanctions : jusqu'à 6 % du CA mondial annuel.",
    ],
  },

  "dma-gatekeepers": {
    slug: "dma-gatekeepers",
    title: "Les contrôleurs d'accès (gatekeepers) sous le DMA",
    regulation: "DMA",
    difficulty: "M1",
    tags: ["DMA", "Concurrence", "Big Tech"],
    intro:
      "Le Règlement (UE) 2022/1925 sur les marchés numériques (DMA) introduit le concept de « contrôleur d'accès » (gatekeeper) pour désigner les grandes plateformes qui contrôlent l'accès aux marchés numériques. Ces acteurs sont soumis à des obligations asymétriques visant à garantir la contestabilité et l'équité des marchés numériques.",
    sections: [
      {
        heading: "Définition du gatekeeper",
        content:
          "Un contrôleur d'accès est un fournisseur de services de plateforme essentiels (SPE) qui remplit les critères de désignation fixés par le DMA. Les SPE visés incluent : les services d'intermédiation en ligne (places de marché), les moteurs de recherche, les réseaux sociaux, les plateformes de partage de vidéos, les services de messagerie, les systèmes d'exploitation, les navigateurs web, les assistants virtuels et les services d'informatique en nuage.",
      },
      {
        heading: "Critères de désignation (article 3 DMA)",
        content:
          "Trois critères cumulatifs : (1) Taille significative : CA annuel ≥ 7,5 milliards € dans l'EEE ou capitalisation boursière ≥ 75 milliards €, et service actif dans au moins 3 États membres ; (2) Position de contrôle : service utilisé par ≥ 45 millions d'utilisateurs finaux actifs mensuels dans l'UE et ≥ 10 000 entreprises utilisatrices actives annuelles dans l'UE ; (3) Position durable : ces seuils atteints durant 3 des dernières 5 années. La Commission peut aussi désigner directement sans ces seuils si elle constate une position de contrôle réelle.",
      },
      {
        heading: "Obligations des gatekeepers",
        content:
          "Le DMA impose des obligations dites « per se » (automatiques, sans analyse de marché) : (1) Obligations positives (article 6) : permettre l'interopérabilité, donner aux entreprises utilisatrices accès à leurs données, permettre aux utilisateurs finaux de désinstaller les apps préinstallées ; (2) Obligations négatives (article 5) : ne pas combiner données personnelles provenant de différents SPE sans consentement, ne pas pratiquer l'auto-préférence, ne pas empêcher les utilisateurs de contacter les entreprises en dehors de la plateforme.",
      },
      {
        heading: "Procédure de désignation",
        content:
          "La Commission européenne est seule compétente pour désigner les gatekeepers. La procédure : (1) Notification obligatoire du fournisseur atteignant les seuils (dans les 2 mois) ; (2) Enquête de marché de la Commission (max 12 mois) ; (3) Décision de désignation. Les gatekeepers désignés ont 6 mois pour se conformer aux obligations. Premiers gatekeepers désignés en septembre 2023 : Alphabet (Google), Amazon, Apple, ByteDance (TikTok), Meta, Microsoft.",
      },
    ],
    articles: [
      { ref: "Article 3 DMA", texte: "Critères quantitatifs de désignation des contrôleurs d'accès (seuils CA, utilisateurs, durabilité)." },
      { ref: "Article 4 DMA", texte: "Procédure de désignation par la Commission européenne et réexamen périodique." },
      { ref: "Article 5 DMA", texte: "Obligations directement applicables : interdictions de comportements anticoncurrentiels (combinaison de données, auto-préférence)." },
      { ref: "Article 6 DMA", texte: "Obligations susceptibles de précision : interopérabilité, accès aux données, désinstallation des apps préinstallées." },
      { ref: "Article 26 DMA", texte: "Sanctions : amendes jusqu'à 10 % du CA mondial annuel, 20 % en cas de récidive, astreintes de 5 % du CA journalier." },
    ],
    exemple:
      "Apple a été désigné gatekeeper pour l'App Store, iOS et Safari. Obligation concrète : Apple doit désormais permettre le « sideloading » (installation d'apps hors App Store) dans l'UE et autoriser des moteurs de paiement alternatifs dans les apps. Apple a contesté certaines de ces mesures devant la Cour de justice de l'UE. La Commission a ouvert des enquêtes pour non-conformité en mars 2024.",
    pieges: [
      "Le DMA ne s'applique pas à toutes les grandes entreprises tech, seulement aux gatekeepers désignés par la Commission.",
      "Les obligations du DMA sont distinctes du droit de la concurrence (article 102 TFUE) : elles s'appliquent automatiquement sans qu'il faille prouver un abus de position dominante.",
      "Ne pas confondre SPE (service de plateforme essentiel) et toute activité numérique : seuls les services listés à l'article 2(2) DMA sont concernés.",
    ],
    aRetenir: [
      "6 gatekeepers désignés en 2023 : Alphabet, Amazon, Apple, ByteDance, Meta, Microsoft.",
      "Seuils : CA ≥ 7,5 Md€ OU capitalisation ≥ 75 Md€ + 45M utilisateurs UE.",
      "Obligations per se : automatiques, sans analyse de marché préalable.",
      "Sanction maximale : 10 % du CA mondial (20 % en récidive).",
      "Seule la Commission européenne peut désigner et sanctionner les gatekeepers au titre du DMA.",
    ],
  },

  "rgpd-dpo": {
    slug: "rgpd-dpo",
    title: "Le Délégué à la Protection des Données (DPO)",
    regulation: "RGPD",
    difficulty: "L3",
    tags: ["RGPD", "DPO", "Compliance"],
    intro:
      "Le Délégué à la Protection des Données (DPO, ou DPD en français) est une figure centrale du RGPD, introduit par le Règlement (UE) 2016/679. Il joue un rôle de conseil, de contrôle interne et d'interface avec l'autorité de contrôle (en France : la CNIL). Sa désignation est obligatoire dans certains cas.",
    sections: [
      {
        heading: "Quand la désignation d'un DPO est-elle obligatoire ?",
        content:
          "L'article 37 RGPD impose la désignation d'un DPO dans trois hypothèses : (1) Le responsable du traitement ou le sous-traitant est une autorité ou un organisme public (sauf juridictions dans l'exercice de leurs fonctions juridictionnelles) ; (2) Les activités de base consistent en des opérations de traitement qui exigent un suivi régulier et systématique à grande échelle des personnes concernées (ex : profilage publicitaire, surveillance des comportements en ligne) ; (3) Les activités de base consistent en un traitement à grande échelle de catégories particulières de données (article 9) ou de données relatives à des condamnations pénales (article 10). En dehors de ces cas, la désignation reste possible mais facultative.",
      },
      {
        heading: "Profil et statut du DPO",
        content:
          "Le DPO est désigné sur la base de ses qualités professionnelles, notamment une connaissance spécialisée du droit et des pratiques en matière de protection des données. Il peut être un salarié de l'organisme ou un prestataire externe (DPO mutualisé ou externalisé). Un groupe d'entreprises peut nommer un DPO unique. Le DPO bénéficie de garanties d'indépendance : il ne peut être sanctionné ou relevé de ses fonctions pour l'exercice de ses missions. Il rapporte directement au niveau le plus élevé de la direction.",
      },
      {
        heading: "Missions du DPO",
        content:
          "L'article 39 RGPD énumère cinq missions minimales : (1) Informer et conseiller le responsable du traitement, le sous-traitant et les employés sur leurs obligations RGPD ; (2) Contrôler le respect du RGPD et des politiques internes (sensibilisation, audits) ; (3) Conseiller sur l'analyse d'impact relative à la protection des données (AIPD) et en vérifier l'exécution ; (4) Coopérer avec l'autorité de contrôle (CNIL) ; (5) Faire office de point de contact avec la CNIL pour toute question relative aux traitements.",
      },
      {
        heading: "Responsabilité du DPO",
        content:
          "Attention : le DPO n'est pas le responsable du traitement. Il est un conseiller. La responsabilité juridique des traitements pèse sur le responsable du traitement ou le sous-traitant, pas sur le DPO. Cependant, en cas de manquement grave à ses missions de conseil, sa responsabilité civile contractuelle pourrait être engagée. En France, le DPO doit être notifié à la CNIL (notification en ligne obligatoire).",
      },
    ],
    articles: [
      { ref: "Article 37 RGPD", texte: "Désignation obligatoire du DPO : trois cas (organisme public, suivi systématique à grande échelle, données sensibles à grande échelle)." },
      { ref: "Article 38 RGPD", texte: "Position du DPO : indépendance, ressources nécessaires, accès au niveau le plus élevé de la direction, absence de conflit d'intérêts." },
      { ref: "Article 39 RGPD", texte: "Missions du DPO : information, conseil, contrôle, AIPD, coopération avec l'autorité de contrôle." },
    ],
    exemple:
      "Un hôpital public traite des données de santé (catégorie particulière, article 9) de milliers de patients → désignation obligatoire. Une startup de 5 salariés qui collecte uniquement les emails de ses clients pour envoyer une newsletter → désignation non obligatoire (mais recommandée). Une plateforme de publicité ciblée qui profile des millions d'internautes → désignation obligatoire (suivi systématique à grande échelle).",
    pieges: [
      "Le DPO n'est pas responsable des violations de données : c'est le responsable du traitement qui l'est. Le DPO est un conseiller, pas un garant.",
      "L'indépendance du DPO est réelle : un employeur ne peut pas lui donner des instructions sur la façon d'exercer ses missions, ni le licencier pour avoir signalé une violation.",
      "La notification du DPO à la CNIL est obligatoire en France, même si la désignation n'est pas légalement requise.",
      "Un DPO peut cumuler d'autres fonctions, mais sans conflit d'intérêts : un directeur juridique ou un responsable informatique peut être DPO si ses autres fonctions ne créent pas de conflit avec ses missions de protection des données.",
    ],
    aRetenir: [
      "Désignation obligatoire dans 3 cas : organisme public, suivi systématique à grande échelle, données sensibles à grande échelle.",
      "Le DPO est indépendant : il ne peut être sanctionné pour l'exercice de ses missions.",
      "5 missions clés : informer, contrôler, conseiller sur les AIPD, coopérer avec la CNIL, point de contact.",
      "La responsabilité reste chez le responsable du traitement, pas chez le DPO.",
      "Notification obligatoire à la CNIL en France.",
    ],
  },

  "ai-act-high-risk": {
    slug: "ai-act-high-risk",
    title: "Les systèmes d'IA à haut risque",
    regulation: "AI Act",
    difficulty: "M1",
    tags: ["AI Act", "Risque", "Conformité"],
    intro:
      "Le Règlement (UE) 2024/1689 sur l'intelligence artificielle (AI Act) adopte une approche fondée sur le risque. Les systèmes d'IA à haut risque sont soumis aux obligations les plus contraignantes avant leur mise sur le marché. Comprendre leur définition et leur régime est essentiel pour tout juriste du numérique.",
    sections: [
      {
        heading: "L'approche par le risque de l'AI Act",
        content:
          "L'AI Act classe les systèmes d'IA en quatre catégories selon leur niveau de risque : (1) Risque inacceptable : pratiques interdites (article 5), ex : notation sociale par les gouvernements, manipulation subliminale ; (2) Haut risque : obligations strictes (articles 8 à 15) ; (3) Risque limité : obligations de transparence allégées (article 50) ; (4) Risque minimal : pas d'obligations spécifiques. Les systèmes d'IA à usage général (GPAI) font l'objet d'un régime particulier (articles 51 à 56).",
      },
      {
        heading: "Définition des systèmes d'IA à haut risque",
        content:
          "Deux catégories de systèmes à haut risque : (A) Systèmes listés à l'Annexe I (composants de sécurité de produits réglementés) : IA intégrée dans des jouets, véhicules, dispositifs médicaux, ascenseurs, équipements radio, etc. → soumis à une procédure de mise sur le marché existante ; (B) Systèmes listés à l'Annexe III (domaines à haut risque autonomes) : 8 catégories dont l'identification biométrique, les infrastructures critiques, l'éducation, l'emploi, les services essentiels (crédit, assurance), la répression, la migration et l'administration de la justice.",
      },
      {
        heading: "Obligations applicables aux systèmes à haut risque",
        content:
          "Les fournisseurs de systèmes d'IA à haut risque doivent : (1) Mettre en place un système de gestion des risques (article 9) ; (2) Assurer la gouvernance des données d'entraînement (article 10) ; (3) Établir une documentation technique (article 11) ; (4) Mettre en place une journalisation automatique des événements (article 12) ; (5) Garantir la transparence et fournir des instructions d'utilisation (article 13) ; (6) Prévoir une supervision humaine (article 14) ; (7) Garantir un niveau approprié d'exactitude, robustesse et cybersécurité (article 15) ; (8) Procéder à une évaluation de la conformité avant mise sur le marché.",
      },
      {
        heading: "Procédures d'évaluation de la conformité",
        content:
          "Avant la mise sur le marché, une évaluation de la conformité est obligatoire. Selon le type de système : (1) Autoévaluation par le fournisseur avec documentation technique + déclaration UE de conformité pour la plupart des systèmes de l'Annexe III ; (2) Évaluation par un organisme notifié tiers pour les systèmes d'identification biométrique à distance en temps réel et certains systèmes de l'Annexe I. Le marquage CE est requis pour les systèmes à haut risque conformes. Les systèmes doivent être enregistrés dans la base de données EU de l'IA (article 71).",
      },
    ],
    articles: [
      { ref: "Article 6 AI Act", texte: "Définition des systèmes d'IA à haut risque : deux catégories (Annexe I et Annexe III)." },
      { ref: "Article 9 AI Act", texte: "Système de gestion des risques : obligation d'identifier, analyser et évaluer les risques tout au long du cycle de vie." },
      { ref: "Article 10 AI Act", texte: "Données et gouvernance des données : qualité, pertinence, absence de biais dans les données d'entraînement." },
      { ref: "Article 14 AI Act", texte: "Supervision humaine : les systèmes à haut risque doivent permettre une surveillance et une intervention humaines effectives." },
      { ref: "Annexe III AI Act", texte: "Liste des 8 domaines de systèmes d'IA à haut risque : biométrie, infrastructures critiques, éducation, emploi, services essentiels, répression, migration, justice." },
    ],
    exemple:
      "Un système d'IA utilisé par une banque pour décider automatiquement d'accorder ou refuser un crédit relève de l'Annexe III, catégorie 5 (accès aux services essentiels). Il est classé à haut risque. La banque (déployeur) doit s'assurer que le fournisseur du système respecte toutes les obligations des articles 8 à 15, mettre en place une supervision humaine significative, et effectuer une évaluation d'impact sur les droits fondamentaux avant déploiement.",
    pieges: [
      "Ne pas confondre fournisseur (qui développe et met sur le marché) et déployeur (qui utilise le système dans un contexte professionnel) : leurs obligations sont différentes.",
      "Un système d'IA à haut risque n'est pas interdit — il doit simplement respecter les obligations de conformité avant sa mise sur le marché.",
      "Les systèmes d'IA à usage général (comme les grands modèles de langage type GPT) relèvent d'un régime distinct (articles 51-56), sauf s'ils sont intégrés dans un système à haut risque.",
      "L'Annexe III peut être modifiée par actes délégués de la Commission pour ajouter de nouveaux domaines.",
    ],
    aRetenir: [
      "Deux sources de systèmes à haut risque : Annexe I (sécurité de produits réglementés) et Annexe III (8 domaines sensibles).",
      "7 obligations clés : gestion des risques, gouvernance des données, documentation technique, journalisation, transparence, supervision humaine, robustesse.",
      "Évaluation de conformité obligatoire avant mise sur le marché + marquage CE.",
      "Distinction fournisseur / déployeur : obligations différentes.",
      "Sanction pour non-conformité : jusqu'à 30 millions € ou 6 % du CA mondial annuel.",
    ],
  },

  "rgpd-bases-legales": {
    slug: "rgpd-bases-legales",
    title: "Les bases légales du traitement (RGPD)",
    regulation: "RGPD",
    difficulty: "L3",
    tags: ["RGPD", "Traitement", "Consentement"],
    intro:
      "En vertu du principe de licéité du traitement posé par l'article 5, paragraphe 1, point a) du RGPD, tout traitement de données personnelles doit reposer sur l'une des six bases légales énumérées à l'article 6. L'absence de base légale valide constitue une violation du RGPD susceptible de sanction.",
    sections: [
      {
        heading: "Vue d'ensemble des 6 bases légales (article 6 RGPD)",
        content:
          "L'article 6 RGPD liste de façon exhaustive les bases légales : (a) Consentement ; (b) Exécution d'un contrat ; (c) Obligation légale ; (d) Sauvegarde des intérêts vitaux ; (e) Mission d'intérêt public ou exercice de l'autorité publique ; (f) Intérêts légitimes. Ces bases sont alternatives : il suffit qu'une seule s'applique. Le responsable du traitement doit déterminer la base légale AVANT de commencer le traitement, et en informer les personnes concernées.",
      },
      {
        heading: "(a) Le consentement",
        content:
          "Le consentement doit être libre, spécifique, éclairé et univoque (article 4(11)). Il doit être donné par un acte positif clair (case à cocher, signature). Il ne peut pas être déduit du silence ou de cases précochées. La personne concernée peut retirer son consentement à tout moment, aussi facilement qu'elle l'a donné. Le consentement n'est pas la base légale la plus adaptée dans les relations employeur/salarié en raison du déséquilibre de pouvoir. Pour les données de mineurs de moins de 15 ans (en France), le consentement des parents est requis.",
      },
      {
        heading: "(b) Exécution d'un contrat",
        content:
          "Le traitement est licite s'il est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie, ou à l'exécution de mesures précontractuelles prises à sa demande. Le critère de nécessité est strict : le traitement doit être objectivement indispensable pour exécuter le contrat, pas simplement utile ou pratique. Exemple : traiter l'adresse de livraison d'un client pour exécuter une commande en ligne.",
      },
      {
        heading: "(c) Obligation légale et (d) Intérêts vitaux",
        content:
          "(c) Obligation légale : le traitement est nécessaire pour respecter une obligation légale à laquelle le responsable est soumis (ex : conservation des bulletins de paie par un employeur, transmission de données fiscales à l'administration). La loi doit être suffisamment précise. (d) Intérêts vitaux : base légale résiduelle applicable uniquement lorsque la personne est dans l'incapacité physique ou juridique de donner son consentement et que sa vie ou celle d'une autre personne est en danger (ex : urgence médicale).",
      },
      {
        heading: "(e) Mission d'intérêt public et (f) Intérêts légitimes",
        content:
          "(e) Mission d'intérêt public : traitement nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable. Base typique des administrations publiques. (f) Intérêts légitimes : base la plus flexible, applicable aux organismes privés. Nécessite un test de mise en balance en trois étapes : (1) Identifier un intérêt légitime du responsable ou d'un tiers ; (2) Démontrer que le traitement est nécessaire à cet intérêt ; (3) Vérifier que les intérêts ou droits fondamentaux des personnes ne prévalent pas (test de proportionnalité). Cette base ne s'applique pas aux autorités publiques dans l'exercice de leurs missions.",
      },
    ],
    articles: [
      { ref: "Article 5(1)(a) RGPD", texte: "Principe de licéité : tout traitement doit reposer sur une base légale valide." },
      { ref: "Article 6 RGPD", texte: "Liste exhaustive des 6 bases légales : consentement, contrat, obligation légale, intérêts vitaux, intérêt public, intérêts légitimes." },
      { ref: "Article 4(11) RGPD", texte: "Définition du consentement : manifestation de volonté libre, spécifique, éclairée et univoque." },
      { ref: "Article 7 RGPD", texte: "Conditions du consentement : charge de la preuve, droit de retrait, proportionnalité." },
      { ref: "Article 13 RGPD", texte: "Obligation d'informer la personne concernée de la base légale du traitement au moment de la collecte." },
    ],
    exemple:
      "Une entreprise envoie une newsletter commerciale : (1) Si elle utilise le consentement → elle doit avoir une case à cocher spécifique pour la newsletter, non précochée. (2) Si elle veut utiliser les intérêts légitimes → elle doit démontrer que son intérêt commercial est réel, que la newsletter est nécessaire à cet intérêt, et que l'intérêt des abonnés (ne pas être spammés) ne l'emporte pas. La CNIL recommande le consentement pour les communications marketing B2C.",
    pieges: [
      "On ne peut pas changer de base légale en cours de route : si le traitement a débuté sur la base du consentement, on ne peut pas switcher vers les intérêts légitimes si le consentement est retiré.",
      "Le consentement n'est pas la 'meilleure' base légale dans tous les cas : si une obligation légale s'applique, il faut l'utiliser, et le consentement ne peut pas la remplacer.",
      "Les intérêts légitimes ne sont pas une base légale 'fourre-tout' : le test de mise en balance est exigeant et doit être documenté.",
      "Pour les données sensibles (article 9), une base légale supplémentaire spécifique est requise en plus de l'article 6.",
    ],
    aRetenir: [
      "6 bases légales exhaustives : aucune autre n'est possible.",
      "La base légale doit être choisie AVANT le début du traitement et communiquée aux personnes.",
      "Consentement : libre, spécifique, éclairé, univoque, et retirable à tout moment.",
      "Intérêts légitimes : nécessite un test de mise en balance documenté.",
      "Pour les données sensibles (article 9), une condition supplémentaire de l'article 9(2) est toujours nécessaire.",
    ],
  },

  "nis2-entites": {
    slug: "nis2-entites",
    title: "Entités essentielles et importantes (NIS2)",
    regulation: "NIS2",
    difficulty: "M1",
    tags: ["NIS2", "Cybersécurité", "Classification"],
    intro:
      "La Directive (UE) 2022/2555 (NIS2), transposée en droit français par la loi du 26 février 2024, remplace la directive NIS de 2016. Elle étend considérablement le champ d'application de la réglementation en matière de cybersécurité en distinguant deux catégories d'entités : les entités essentielles et les entités importantes, soumises à des régimes de supervision différenciés.",
    sections: [
      {
        heading: "Champ d'application : qui est concerné ?",
        content:
          "NIS2 s'applique aux entités des secteurs listés aux Annexes I et II de la directive qui dépassent le seuil des moyennes entreprises (plus de 50 salariés OU chiffre d'affaires/bilan annuel supérieur à 10 millions €). Certaines entités sont incluses quel que soit leur taille (ex : fournisseurs de réseaux publics de communications électroniques, registres de noms de domaine TLD, administrations publiques centrales). NIS2 exclut explicitement certains secteurs déjà couverts par d'autres règlements (DORA pour la finance, etc.).",
      },
      {
        heading: "Entités essentielles (EE) — Annexe I",
        content:
          "Les entités essentielles proviennent des 11 secteurs hautement critiques listés à l'Annexe I : énergie (électricité, pétrole, gaz, hydrogène), transports (aérien, ferroviaire, maritime, routier), secteur bancaire, infrastructures des marchés financiers, santé, eau potable, eaux usées, infrastructure numérique (points d'échange internet, fournisseurs DNS, registres TLD, fournisseurs de services cloud, centres de données, réseaux de diffusion de contenu, fournisseurs de services de confiance), gestion des services TIC (MSP/MSSP), administrations publiques (centrales et régionales dans certains États), espace. Sont automatiquement essentielles les grandes entreprises (+250 salariés ou CA >50M€/bilan >43M€) de ces secteurs.",
      },
      {
        heading: "Entités importantes (EI) — Annexe II",
        content:
          "Les entités importantes proviennent de 7 secteurs critiques supplémentaires listés à l'Annexe II : services postaux et d'expédition, gestion des déchets, fabrication, production et distribution de produits chimiques, production, transformation et distribution de denrées alimentaires, fabrication (dispositifs médicaux, produits informatiques/électroniques/optiques, équipements électriques, machines, véhicules, autres moyens de transport), fournisseurs numériques (places de marché en ligne, moteurs de recherche en ligne, plateformes de réseaux sociaux), recherche. Les moyennes entreprises des secteurs de l'Annexe I constituent également des entités importantes.",
      },
      {
        heading: "Différences de régime entre EE et EI",
        content:
          "Les obligations de sécurité sont identiques pour les deux catégories (article 21 NIS2). La différence porte sur la supervision : (1) Entités essentielles : supervision proactive (ex ante) — l'autorité peut effectuer des audits réguliers, des inspections sur place, des scans de sécurité sans attendre un incident ; sanctions : jusqu'à 10 millions € ou 2 % du CA mondial annuel. (2) Entités importantes : supervision réactive (ex post) — l'autorité n'intervient généralement qu'en cas d'incident ou de plainte ; sanctions : jusqu'à 7 millions € ou 1,4 % du CA mondial annuel. En France, l'ANSSI est l'autorité compétente.",
      },
    ],
    articles: [
      { ref: "Article 3 NIS2", texte: "Définition et critères de distinction entre entités essentielles et entités importantes." },
      { ref: "Article 21 NIS2", texte: "Mesures de gestion des risques en matière de cybersécurité : identiques pour EE et EI (politiques, incidents, continuité, chaîne d'approvisionnement, etc.)." },
      { ref: "Article 23 NIS2", texte: "Obligations de notification des incidents significatifs : alerte précoce dans les 24h, notification dans les 72h, rapport final dans le mois." },
      { ref: "Article 32 NIS2", texte: "Mesures de supervision des entités essentielles : audits réguliers, contrôles sur place, scans de sécurité." },
      { ref: "Article 33 NIS2", texte: "Mesures de supervision des entités importantes : supervision ex post, interventions sur signalement." },
    ],
    exemple:
      "Un hôpital universitaire (secteur santé, Annexe I) avec 800 salariés est une entité essentielle → l'ANSSI peut l'auditer proactivement, sans attendre un incident. Un fournisseur de plateforme e-commerce (Annexe II) avec 120 salariés et CA de 30M€ est une entité importante → l'ANSSI interviendra principalement en réaction à un incident signalé. Les deux doivent appliquer les mêmes mesures techniques de l'article 21 (dont l'authentification multifacteur et la gestion des vulnérabilités).",
    pieges: [
      "NIS2 ne s'applique pas aux micro-entreprises et petites entreprises (moins de 50 salariés et CA/bilan ≤ 10M€), sauf exceptions explicites.",
      "Les obligations de sécurité (article 21) sont les mêmes pour EE et EI : seule la supervision diffère, pas les mesures à mettre en place.",
      "La notification des incidents dans les 72h (article 23) s'applique aux deux catégories.",
      "En France, NIS2 a été transposée par la loi du 26 février 2024 et s'applique progressivement. L'ANSSI publie des listes d'entités concernées.",
      "Ne pas confondre NIS2 avec DORA (Règlement sur la résilience opérationnelle numérique du secteur financier) : les entités financières relèvent de DORA, pas de NIS2.",
    ],
    aRetenir: [
      "Entités essentielles (Annexe I) : 11 secteurs hautement critiques, supervision proactive, amendes jusqu'à 10M€ ou 2 % CA mondial.",
      "Entités importantes (Annexe II) : 7 secteurs critiques supplémentaires + moyennes entreprises de l'Annexe I, supervision réactive, amendes jusqu'à 7M€ ou 1,4 % CA mondial.",
      "Obligations de sécurité identiques pour les deux (article 21).",
      "Notification des incidents : 24h (alerte), 72h (notification), 1 mois (rapport final).",
      "En France : autorité compétente = ANSSI.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(fichesData).map((slug) => ({ slug }));
}

export default function FichePage({ params }: { params: { slug: string } }) {
  const fiche = fichesData[params.slug];

  if (!fiche) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/fiches"
          className="inline-flex items-center gap-1.5 text-navy-400 hover:text-gold-500 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux fiches
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded border bg-navy-50 text-navy-700 border-navy-200">
            {fiche.regulation}
          </span>
          {fiche.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 mb-4 leading-tight">
          {fiche.title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gold-400 pl-4">
          {fiche.intro}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 mb-10">
        {fiche.sections.map((section, i) => (
          <div key={i}>
            <h2 className="font-serif-display text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold-500 flex-shrink-0" />
              {section.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Articles clés */}
      <div className="bg-navy-50 border border-navy-200 rounded-xl p-6 mb-8">
        <h2 className="font-serif-display text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
          <Scale className="w-5 h-5 text-gold-500" />
          Articles clés à connaître
        </h2>
        <ul className="space-y-3">
          {fiche.articles.map((art, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gold-600 font-semibold text-sm whitespace-nowrap mt-0.5">{art.ref}</span>
              <span className="text-navy-700 text-sm">{art.texte}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exemple concret */}
      <div className="bg-white border-l-4 border-gold-400 rounded-r-xl p-6 mb-8 shadow-sm">
        <h2 className="font-serif-display text-lg font-bold text-navy-900 mb-3">
          💡 Exemple concret
        </h2>
        <p className="text-gray-700 leading-relaxed">{fiche.exemple}</p>
      </div>

      {/* Pièges à éviter */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h2 className="font-serif-display text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Pièges à éviter à l&apos;examen
        </h2>
        <ul className="space-y-2">
          {fiche.pieges.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-red-700">
              <span className="mt-1 flex-shrink-0">⚠</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* À retenir */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h2 className="font-serif-display text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          L&apos;essentiel à retenir
        </h2>
        <ul className="space-y-2">
          {fiche.aRetenir.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-green-800">
              <span className="mt-1 flex-shrink-0">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
