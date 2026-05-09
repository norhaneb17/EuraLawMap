import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Tag, BookOpen, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import { HighlightedText } from "@/components/GlossaryHighlight";


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
          "Le DSA distingue selon la taille des plateformes. Pour les très grandes plateformes en ligne (TGPEL, désignées VLOP dans le règlement) et très grands moteurs de recherche en ligne (TGMRL) — ceux ayant plus de 45 millions d'utilisateurs actifs mensuels dans l'UE — c'est la Commission européenne qui est l'autorité principale de surveillance, en coordination avec les CSN. Pour les autres fournisseurs, le CSN de l'État membre d'établissement est compétent (principe du pays d'origine).",
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
      "Les VLOP/TGPEL (ex : Meta, TikTok, YouTube) relèvent principalement de la Commission européenne, pas du CSN national.",
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
          `Trois critères <strong>cumulatifs</strong> doivent être remplis simultanément :
<ul>
<li><strong>Taille significative</strong> : chiffre d'affaires annuel ≥ 7,5 milliards € dans l'EEE, ou capitalisation boursière ≥ 75 milliards €, et service actif dans au moins 3 États membres.</li>
<li><strong>Position de contrôle</strong> : service utilisé par ≥ 45 millions d'utilisateurs finaux actifs par mois dans l'UE, et ≥ 10 000 entreprises utilisatrices actives par an dans l'UE.</li>
<li><strong>Position durable</strong> : ces seuils atteints durant 3 des 5 dernières années.</li>
</ul>
La Commission peut également désigner un gatekeeper sans que ces seuils soient atteints, si elle constate directement une position de contrôle réelle sur le marché.`,
      },
      {
        heading: "Obligations des gatekeepers",
        content:
          `Le DMA impose des obligations directement applicables aux gatekeepers, sans qu'il faille démontrer un abus de position dominante.
<br/><br/><strong>Obligations positives (article 6) :</strong>
<ul>
<li>Permettre l'interopérabilité de ses services avec ceux de tiers.</li>
<li>Donner aux entreprises utilisatrices accès à leurs données générées sur la plateforme.</li>
<li>Permettre aux utilisateurs finaux de désinstaller les applications préinstallées.</li>
</ul>
<strong>Obligations négatives (article 5) :</strong>
<ul>
<li>Ne pas combiner les données personnelles provenant de différents services de plateforme essentiels sans consentement explicite.</li>
<li>Ne pas pratiquer l'auto-préférence (favoriser ses propres produits et services dans les résultats).</li>
<li>Ne pas empêcher les utilisateurs finaux de contacter directement les entreprises en dehors de la plateforme.</li>
</ul>`,
      },
      {
        heading: "Procédure de désignation",
        content:
          `La Commission européenne est seule compétente pour désigner les gatekeepers. La procédure se déroule ainsi :
<ul>
<li>Notification obligatoire par le fournisseur qui atteint les seuils quantitatifs (dans les 2 mois suivant le dépassement).</li>
<li>Ouverture d'une enquête de marché par la Commission (durée maximale : 12 mois).</li>
<li>Décision de désignation (ou non) par la Commission.</li>
<li>Le gatekeeper désigné dispose de 6 mois pour se mettre en conformité avec l'ensemble de ses obligations.</li>
</ul>
Premiers gatekeepers désignés en septembre 2023 : Alphabet (Google), Amazon, Apple, ByteDance (TikTok), Meta, Microsoft.`,
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
      "Les obligations s'appliquent directement, sans qu'il faille démontrer un abus de position dominante.",
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
          `L'article 37 RGPD impose la désignation d'un DPO dans trois hypothèses :
<ul>
<li>Le responsable du traitement ou le sous-traitant est une <strong>autorité ou un organisme public</strong> (à l'exception des juridictions dans l'exercice de leurs fonctions juridictionnelles).</li>
<li>Les activités de base consistent en des opérations de traitement exigeant un <strong>suivi régulier et systématique à grande échelle</strong> des personnes concernées (exemples : profilage publicitaire, surveillance des comportements en ligne).</li>
<li>Les activités de base consistent en un <strong>traitement à grande échelle de catégories particulières de données</strong> (article 9 RGPD : données de santé, biométriques, etc.) ou de données relatives à des condamnations pénales (article 10 RGPD).</li>
</ul>
En dehors de ces trois cas, la désignation reste possible mais facultative.`,
      },
      {
        heading: "Profil et statut du DPO",
        content:
          `Le DPO est désigné sur la base de ses qualités professionnelles, notamment une connaissance spécialisée du droit et des pratiques en matière de protection des données. Plusieurs modalités de désignation sont possibles :
<ul>
<li>Salarié interne de l'organisme.</li>
<li>Prestataire externe (DPO mutualisé ou externalisé), solution fréquente pour les PME.</li>
<li>DPO unique pour un groupe d'entreprises, si le DPO est facilement joignable depuis chaque établissement.</li>
</ul>
Le DPO bénéficie de garanties d'indépendance importantes : il ne peut être sanctionné ni relevé de ses fonctions pour l'exercice de ses missions, et rapporte directement au niveau le plus élevé de la direction.`,
      },
      {
        heading: "Missions du DPO",
        content:
          `L'article 39 RGPD énumère cinq missions minimales du DPO :
<ul>
<li><strong>Informer et conseiller</strong> le responsable du traitement, le sous-traitant et les employés sur leurs obligations au titre du RGPD.</li>
<li><strong>Contrôler le respect</strong> du RGPD et des politiques internes de l'organisme (sensibilisation, formation, audits).</li>
<li><strong>Conseiller sur les analyses d'impact</strong> relatives à la protection des données (AIPD) et vérifier leur bonne exécution.</li>
<li><strong>Coopérer avec l'autorité de contrôle</strong> (la CNIL en France).</li>
<li><strong>Faire office de point de contact</strong> avec la CNIL pour toute question relative aux traitements de données.</li>
</ul>`,
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
          `L'AI Act classe les systèmes d'IA en quatre niveaux de risque :
<ul>
<li><strong>Risque inacceptable (article 5)</strong> : pratiques interdites, dont la mise sur le marché est prohibée. Exemples : notation sociale par les pouvoirs publics, manipulation subliminale à l'insu de la personne, identification biométrique à distance en temps réel dans les espaces publics (sauf exceptions strictes).</li>
<li><strong>Haut risque (articles 6 à 49)</strong> : systèmes autorisés mais soumis aux obligations de conformité les plus strictes avant leur mise sur le marché.</li>
<li><strong>Risque limité (article 50)</strong> : obligations de transparence allégées. L'utilisateur doit être informé qu'il interagit avec une IA (exemple : chatbots, deep fakes).</li>
<li><strong>Risque minimal</strong> : aucune obligation spécifique. Exemples : filtres anti-spam, jeux vidéo intégrant de l'IA.</li>
</ul>
Les systèmes d'IA à usage général (GPAI), comme les grands modèles de langage (GPT, Claude…), font l'objet d'un régime particulier aux articles 51 à 56, distinct de la classification par risque.`,
      },
      {
        heading: "Définition des systèmes d'IA à haut risque",
        content:
          `Deux catégories de systèmes à haut risque (article 6 AI Act) :
<ul>
<li><strong>Systèmes listés à l'Annexe I</strong> — composants de sécurité de produits déjà réglementés : IA intégrée dans des jouets, véhicules, dispositifs médicaux, ascenseurs, équipements radio, etc. Ces systèmes sont soumis aux procédures de mise sur le marché existantes pour le produit concerné.</li>
<li><strong>Systèmes listés à l'Annexe III</strong> — domaines à haut risque autonomes : 8 catégories spécifiques identifiées comme présentant des risques pour les droits fondamentaux (identification biométrique, infrastructures critiques, éducation, emploi, services essentiels comme le crédit ou l'assurance, répression, migration, administration de la justice).</li>
</ul>`,
      },
      {
        heading: "Comprendre les Annexes I et III",
        content:
          `Les deux annexes jouent des rôles distincts dans la classification :
<br/><br/><strong>Annexe I — Produits réglementés intégrant de l'IA :</strong> elle liste les catégories de produits déjà soumis à une réglementation européenne de sécurité (directive jouets, règlement dispositifs médicaux, règlement véhicules à moteur, etc.). Lorsqu'un système d'IA est intégré à l'un de ces produits en tant que composant de sécurité, il est automatiquement classé à haut risque. L'objectif est d'éviter qu'une couche d'IA vienne affaiblir les garanties de sécurité de produits déjà encadrés.
<br/><br/><strong>Annexe III — Domaines sensibles autonomes :</strong> elle liste 8 catégories d'usages de l'IA qui sont considérés comme intrinsèquement risqués pour les droits fondamentaux, indépendamment de tout produit physique. L'objectif est de soumettre à un contrôle renforcé les applications d'IA susceptibles d'affecter des décisions importantes pour les individus (accès à l'emploi, au crédit, à la justice, contrôle aux frontières, etc.). Cette annexe peut être mise à jour par la Commission par actes délégués pour intégrer de nouveaux usages.`,
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
          `Le consentement doit être <strong>libre, spécifique, éclairé et univoque</strong> (article 4(11) RGPD). Il doit être donné par un acte positif clair. Concrètement :
<ul>
<li>Pas de cases précochées : la personne doit cocher elle-même.</li>
<li>Pas de déduction du silence : ne pas répondre à un email ne vaut pas consentement.</li>
<li>Retrait facile : la personne peut retirer son consentement à tout moment, aussi facilement qu'elle l'a donné.</li>
<li>Non adapté aux relations employeur/salarié, en raison du déséquilibre de pouvoir.</li>
<li>Pour les mineurs de moins de 15 ans en France : consentement des parents requis.</li>
</ul>
<strong>Exemple concret — le bandeau cookies :</strong> lorsque vous arrivez sur un site web, une fenêtre apparaît : « Acceptez-vous que nous utilisions des cookies publicitaires pour personnaliser votre expérience ? » avec les boutons « Accepter » et « Refuser ». C'est un mécanisme de recueil du consentement. Si le bouton « Refuser » est caché ou peu visible, si les cookies sont déjà cochés par défaut, ou si refuser est plus difficile qu'accepter, le consentement n'est pas valide au sens du RGPD — la CNIL a sanctionné plusieurs grandes entreprises pour ce motif.`,
      },
      {
        heading: "(b) Exécution d'un contrat",
        content:
          "Le traitement est licite s'il est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie, ou à l'exécution de mesures précontractuelles prises à sa demande. Le critère de nécessité est strict : le traitement doit être objectivement indispensable pour exécuter le contrat, pas simplement utile ou pratique. Exemple : traiter l'adresse de livraison d'un client pour exécuter une commande en ligne.",
      },
      {
        heading: "(c) Obligation légale",
        content:
          `Le traitement est licite s'il est nécessaire au respect d'une obligation légale à laquelle le responsable est soumis. La loi en question doit être suffisamment précise et prévisible. Cette base s'applique, par exemple :
<ul>
<li>À la conservation des bulletins de paie par un employeur (obligation issue du Code du travail).</li>
<li>À la transmission de données fiscales à l'administration (obligation issue du Code général des impôts).</li>
</ul>
Le critère de <em>nécessité</em> est important : le traitement doit être indispensable pour respecter l'obligation, pas simplement utile.`,
      },
      {
        heading: "(d) Sauvegarde des intérêts vitaux",
        content:
          "Base légale résiduelle, applicable uniquement dans des situations d'urgence où la personne est dans l'incapacité physique ou juridique de donner son consentement et où sa vie ou celle d'une autre personne est en danger immédiat. Exemple : un médecin urgentiste qui accède au dossier médical d'un patient inconscient. Cette base ne peut pas être utilisée si la personne est en mesure de consentir.",
      },
      {
        heading: "(e) Mission d'intérêt public",
        content:
          "Traitement nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement. C'est la base légale typique des administrations publiques, des organismes de sécurité sociale, des universités dans le cadre de leurs missions de service public. Cette base ne peut pas être invoquée par des organismes privés agissant dans un intérêt purement commercial.",
      },
      {
        heading: "(f) Intérêts légitimes",
        content:
          `Base la plus flexible, applicable aux organismes privés. Elle nécessite un <strong>test de mise en balance en trois étapes</strong>, que le responsable doit documenter :
<ul>
<li>Identifier un <strong>intérêt légitime</strong> du responsable ou d'un tiers (intérêt commercial, sécurité, prévention de la fraude…).</li>
<li>Démontrer que le traitement est <strong>nécessaire</strong> à cet intérêt (pas simplement utile ou pratique).</li>
<li>Vérifier que les intérêts ou droits fondamentaux des personnes concernées <strong>ne prévalent pas</strong> sur cet intérêt (test de proportionnalité).</li>
</ul>
Cette base ne s'applique pas aux autorités publiques dans l'exercice de leurs missions, ni au traitement de données de mineurs à des fins commerciales.`,
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
          `<strong>L'Annexe I de NIS2 liste les 11 secteurs hautement critiques</strong> dont relèvent les entités essentielles. L'objectif de cette annexe est d'identifier les secteurs dont la défaillance aurait des conséquences systémiques graves pour l'économie ou la société (coupures d'électricité, paralysie des transports, risques sanitaires majeurs). Les secteurs concernés sont :
<ul>
<li>Énergie (électricité, pétrole, gaz, hydrogène)</li>
<li>Transports (aérien, ferroviaire, maritime, routier)</li>
<li>Secteur bancaire</li>
<li>Infrastructures des marchés financiers</li>
<li>Santé</li>
<li>Eau potable</li>
<li>Eaux usées</li>
<li>Infrastructure numérique (points d'échange internet, DNS, registres TLD, cloud, centres de données, réseaux CDN, services de confiance qualifiés)</li>
<li>Gestion des services TIC (fournisseurs de services managés MSP/MSSP)</li>
<li>Administrations publiques centrales (et régionales dans certains États membres)</li>
<li>Espace</li>
</ul>
Sont automatiquement classées essentielles les <strong>grandes entreprises</strong> (plus de 250 salariés, ou CA annuel > 50 M€ et bilan > 43 M€) opérant dans ces secteurs.`,
      },
      {
        heading: "Entités importantes (EI) — Annexe II",
        content:
          `<strong>L'Annexe II de NIS2 liste 7 secteurs critiques supplémentaires</strong> dont relèvent les entités importantes. Ces secteurs présentent des risques moins systémiques que ceux de l'Annexe I, mais restent sensibles. L'objectif de cette annexe est d'étendre la réglementation à des acteurs économiques qui ne sont pas vitaux au sens strict mais dont la compromission pourrait avoir des effets significatifs. Les secteurs concernés sont :
<ul>
<li>Services postaux et d'expédition</li>
<li>Gestion des déchets</li>
<li>Production et distribution de produits chimiques</li>
<li>Production, transformation et distribution de denrées alimentaires</li>
<li>Fabrication (dispositifs médicaux, produits informatiques et électroniques, équipements électriques, machines, véhicules, autres moyens de transport)</li>
<li>Fournisseurs numériques (places de marché en ligne, moteurs de recherche en ligne, plateformes de réseaux sociaux)</li>
<li>Recherche</li>
</ul>
Sont également classées importantes les <strong>moyennes entreprises</strong> (plus de 50 salariés ou CA/bilan > 10 M€) des secteurs de l'Annexe I qui ne remplissent pas les critères pour être essentielles.`,
      },
      {
        heading: "Différences de régime entre EE et EI",
        content:
          `Les obligations de sécurité (article 21 NIS2) sont <strong>identiques</strong> pour les entités essentielles et les entités importantes. La différence porte uniquement sur le <strong>mode de supervision</strong> et le <strong>niveau de sanctions</strong>.
<br/><br/><strong>Entités essentielles — supervision proactive (ex ante) :</strong>
<ul>
<li>L'autorité nationale (ANSSI en France) peut réaliser des audits réguliers, des inspections sur place et des scans de sécurité <em>sans attendre qu'un incident survienne</em>.</li>
<li>Sanctions en cas de manquement : jusqu'à <strong>10 millions € ou 2 % du chiffre d'affaires mondial annuel</strong> (le montant le plus élevé est retenu).</li>
</ul>
<strong>Entités importantes — supervision réactive (ex post) :</strong>
<ul>
<li>L'autorité intervient <em>principalement en réaction</em> à un incident signalé ou à une plainte. Elle n'effectue pas d'audits réguliers sans raison particulière.</li>
<li>Sanctions en cas de manquement : jusqu'à <strong>7 millions € ou 1,4 % du chiffre d'affaires mondial annuel</strong> (le montant le plus élevé est retenu).</li>
</ul>
Dans les deux cas, la notification des incidents significatifs à l'ANSSI est obligatoire dans les délais suivants : alerte précoce dans les 24h, notification complète dans les 72h, rapport final dans le mois.`,
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

  "rgpd-droits-personnes": {
    slug: "rgpd-droits-personnes",
    title: "Les droits des personnes concernées (RGPD)",
    regulation: "RGPD",
    difficulty: "L3",
    tags: ["RGPD", "Droits", "Personnes concernées"],
    intro:
      "Le RGPD confère aux personnes physiques un ensemble de droits leur permettant de contrôler l'utilisation de leurs données personnelles. Ces droits, prévus aux articles 15 à 22 du règlement, s'exercent directement auprès du responsable du traitement, qui dispose en général d'un délai d'un mois pour y répondre.",
    sections: [
      {
        heading: "Vue d'ensemble des droits (articles 15 à 22)",
        content: `Le RGPD reconnaît sept droits principaux aux personnes concernées :
<ul>
<li><strong>Droit d'accès (article 15)</strong> : obtenir confirmation que ses données sont traitées et en recevoir une copie.</li>
<li><strong>Droit de rectification (article 16)</strong> : faire corriger des données inexactes ou compléter des données incomplètes.</li>
<li><strong>Droit à l'effacement (article 17)</strong> : obtenir la suppression de ses données dans certains cas (dit « droit à l'oubli »).</li>
<li><strong>Droit à la limitation du traitement (article 18)</strong> : faire « geler » le traitement sans supprimer les données.</li>
<li><strong>Droit à la portabilité (article 20)</strong> : recevoir ses données dans un format structuré et les transmettre à un autre responsable.</li>
<li><strong>Droit d'opposition (article 21)</strong> : s'opposer au traitement de ses données, notamment à des fins de prospection commerciale.</li>
<li><strong>Droit de ne pas faire l'objet d'une décision automatisée (article 22)</strong> : ne pas subir une décision fondée exclusivement sur un traitement automatisé ayant des effets juridiques significatifs.</li>
</ul>
Le responsable du traitement doit répondre dans un délai d'<strong>un mois</strong>, prorogeable de deux mois supplémentaires en cas de demande complexe.`,
      },
      {
        heading: "Le droit à l'effacement (article 17) — conditions et limites",
        content: `Le droit à l'effacement n'est pas absolu. Il s'applique lorsque l'une des conditions suivantes est remplie :
<ul>
<li>Les données ne sont plus nécessaires au regard des finalités pour lesquelles elles ont été collectées.</li>
<li>La personne retire son consentement et il n'existe pas d'autre base légale.</li>
<li>La personne s'oppose au traitement (article 21) et il n'existe pas de motif légitime impérieux.</li>
<li>Les données ont fait l'objet d'un traitement illicite.</li>
<li>L'effacement est nécessaire pour respecter une obligation légale.</li>
</ul>
Le droit à l'effacement <strong>ne s'applique pas</strong> notamment lorsque le traitement est nécessaire à l'exercice du droit à la liberté d'expression, au respect d'une obligation légale, à des fins archivistiques, de recherche scientifique, ou à la constatation et l'exercice de droits en justice.`,
      },
      {
        heading: "Le droit à la portabilité (article 20) — champ d'application restreint",
        content: `Contrairement au droit d'accès, le droit à la portabilité ne s'applique que dans des conditions précises :
<ul>
<li>Le traitement repose sur le <strong>consentement</strong> (article 6(1)(a)) ou sur l'<strong>exécution d'un contrat</strong> (article 6(1)(b)) — pas sur d'autres bases légales.</li>
<li>Le traitement est effectué à l'aide de <strong>procédés automatisés</strong> (exclut les fichiers papier).</li>
</ul>
La personne reçoit ses données dans un format <strong>structuré, couramment utilisé et lisible par machine</strong> (ex : CSV, JSON). Elle peut également demander leur transmission directe à un autre responsable, si cela est techniquement possible. Ce droit ne couvre pas les données déduites ou inférées par le responsable (ex : un score de crédit calculé à partir des données).`,
      },
      {
        heading: "Le droit d'opposition (article 21)",
        content: `Le droit d'opposition permet à la personne de s'opposer à tout moment au traitement de ses données. Deux régimes distincts :
<ul>
<li><strong>Opposition à la prospection commerciale</strong> : droit absolu, sans justification nécessaire. Le responsable doit cesser immédiatement le traitement à des fins de prospection.</li>
<li><strong>Opposition dans d'autres cas</strong> (notamment pour les traitements fondés sur l'intérêt légitime ou la mission d'intérêt public) : le responsable peut refuser si il démontre des motifs légitimes impérieux qui prévalent sur les intérêts de la personne.</li>
</ul>
Le droit d'opposition doit être explicitement porté à la connaissance de la personne concernée, au plus tard lors du premier contact.`,
      },
    ],
    articles: [
      { ref: "Article 15 RGPD", texte: "Droit d'accès : obtenir une copie des données traitées et des informations sur le traitement." },
      { ref: "Article 17 RGPD", texte: "Droit à l'effacement (droit à l'oubli) : suppression des données dans six cas limitativement énumérés." },
      { ref: "Article 20 RGPD", texte: "Droit à la portabilité : applicable uniquement aux traitements fondés sur le consentement ou le contrat, effectués automatiquement." },
      { ref: "Article 21 RGPD", texte: "Droit d'opposition : absolu pour la prospection commerciale, soumis à mise en balance pour les autres traitements." },
      { ref: "Article 22 RGPD", texte: "Droit de ne pas faire l'objet d'une décision automatisée produisant des effets juridiques significatifs." },
    ],
    exemple:
      "Une personne découvre qu'une banque lui a refusé un prêt suite à une décision entièrement automatisée (scoring). Elle peut : (1) invoquer l'article 22 pour obtenir une intervention humaine et contester la décision ; (2) exercer son droit d'accès (art. 15) pour connaître les données utilisées dans le calcul ; (3) demander la rectification (art. 16) si certaines données sont inexactes. Si la banque traite ses données à des fins de marketing, elle peut également s'y opposer immédiatement (art. 21) sans avoir à se justifier.",
    pieges: [
      "Le droit à l'effacement n'est pas absolu : il ne s'applique pas si le traitement est nécessaire à l'exercice d'un droit en justice ou au respect d'une obligation légale.",
      "Le droit à la portabilité est plus restreint que le droit d'accès : il ne couvre que les traitements fondés sur le consentement ou le contrat, pas sur l'intérêt légitime.",
      "Le responsable dispose d'un mois pour répondre — mais ce délai court à compter de la réception de la demande complète, pas d'une demande incomplète.",
      "Le droit d'opposition à la prospection est absolu, mais l'opposition à d'autres traitements peut être refusée si le responsable justifie de motifs légitimes impérieux.",
    ],
    aRetenir: [
      "7 droits principaux : accès (15), rectification (16), effacement (17), limitation (18), portabilité (20), opposition (21), décision automatisée (22).",
      "Délai de réponse : 1 mois, prorogeable à 3 mois pour les demandes complexes.",
      "Droit à l'effacement ≠ droit absolu : 6 exceptions limitativement énumérées.",
      "Portabilité : uniquement pour les traitements sur base consentement ou contrat, effectués automatiquement.",
      "Opposition à la prospection commerciale : droit absolu, sans justification.",
    ],
  },

  "rgpd-responsable-sous-traitant": {
    slug: "rgpd-responsable-sous-traitant",
    title: "Responsable de traitement et sous-traitant (RGPD)",
    regulation: "RGPD",
    difficulty: "L3",
    tags: ["RGPD", "Responsable", "Sous-traitant"],
    intro:
      "La distinction entre responsable de traitement et sous-traitant est l'une des plus fondamentales du RGPD. Elle détermine qui supporte les obligations principales, qui peut être sanctionné par les autorités de contrôle, et comment les parties doivent encadrer leur relation contractuelle.",
    sections: [
      {
        heading: "Le responsable de traitement (article 4(7))",
        content: `Le responsable de traitement est la personne physique ou morale, l'autorité publique, le service ou tout autre organisme qui, <strong>seul ou conjointement avec d'autres, détermine les finalités et les moyens du traitement</strong>. C'est la clé de la définition : celui qui décide <em>pourquoi</em> les données sont traitées et <em>comment</em> elles le sont.
<br/><br/>Exemples de responsables de traitement :
<ul>
<li>Une entreprise qui collecte les emails de ses clients pour leur envoyer une newsletter (elle décide la finalité : marketing).</li>
<li>Un hôpital qui traite les dossiers médicaux de ses patients (il décide la finalité : soins).</li>
<li>Une administration publique qui gère les déclarations fiscales des contribuables.</li>
</ul>
Le responsable de traitement est le <strong>débiteur principal</strong> des obligations du RGPD : il doit respecter les principes de l'article 5, choisir une base légale, informer les personnes concernées, répondre à leurs droits, et peut être directement sanctionné par la CNIL.`,
      },
      {
        heading: "Le sous-traitant (article 4(8))",
        content: `Le sous-traitant est la personne physique ou morale qui <strong>traite des données à caractère personnel pour le compte du responsable du traitement</strong>, selon les instructions de ce dernier. Il n'agit pas pour ses propres finalités mais pour celles du responsable.
<br/><br/>Exemples de sous-traitants :
<ul>
<li>Un prestataire de services cloud qui héberge les données d'une entreprise (ex : AWS, Microsoft Azure).</li>
<li>Un cabinet de paie qui traite les bulletins de salaire pour le compte d'une PME.</li>
<li>Un prestataire de routage d'emails qui envoie les newsletters d'un e-commerçant.</li>
</ul>
Le sous-traitant ne peut pas utiliser les données à des fins propres et doit <strong>agir uniquement sur instruction documentée</strong> du responsable. Depuis le RGPD, il est soumis directement à certaines obligations (notamment articles 28, 30, 32, 37) et peut être sanctionné directement par les autorités de contrôle.`,
      },
      {
        heading: "L'obligation de contrat de sous-traitance (article 28)",
        content: `Tout recours à un sous-traitant doit être encadré par un <strong>contrat ou acte juridique contraignant</strong> (article 28 RGPD), souvent appelé DPA (<em>Data Processing Agreement</em>). Ce contrat doit obligatoirement stipuler que le sous-traitant :
<ul>
<li>Ne traite les données que sur instruction documentée du responsable.</li>
<li>Garantit la confidentialité des données (obligations de confidentialité pour les personnes autorisées).</li>
<li>Prend toutes les mesures de sécurité requises (article 32).</li>
<li>Ne fait appel à un autre sous-traitant (sous-traitant ultérieur) qu'avec l'accord préalable du responsable.</li>
<li>Aide le responsable à répondre aux droits des personnes concernées.</li>
<li>Supprime ou restitue toutes les données au terme du contrat.</li>
<li>Met à disposition toute information nécessaire pour démontrer le respect de ces obligations.</li>
</ul>
L'absence de DPA est une violation directe du RGPD susceptible de sanction.`,
      },
      {
        heading: "La co-responsabilité (article 26)",
        content: `Lorsque deux responsables ou plus déterminent <strong>conjointement</strong> les finalités et les moyens d'un traitement, ils sont co-responsables du traitement. Cette situation est différente de la sous-traitance : ici, les deux parties décident ensemble des finalités.
<br/><br/>Exemples de co-responsabilité :
<ul>
<li>Une plateforme de réseaux sociaux et une entreprise qui utilise les données des fans de sa page (arrêt CJUE <em>Fashion ID</em>, 2019).</li>
<li>Deux entreprises qui gèrent conjointement une base de données clients partagée.</li>
</ul>
Les co-responsables doivent conclure un accord interne précisant leurs obligations respectives et désigner un point de contact pour les personnes concernées. La Cour de justice de l'UE a retenu une interprétation large de la co-responsabilité.`,
      },
    ],
    articles: [
      { ref: "Article 4(7) RGPD", texte: "Définition du responsable de traitement : détermine les finalités et les moyens du traitement." },
      { ref: "Article 4(8) RGPD", texte: "Définition du sous-traitant : traite des données pour le compte du responsable, selon ses instructions." },
      { ref: "Article 26 RGPD", texte: "Co-responsabilité : obligations des responsables conjoints, accord interne obligatoire, point de contact." },
      { ref: "Article 28 RGPD", texte: "Contrat de sous-traitance (DPA) : clauses obligatoires, encadrement des sous-traitants ultérieurs." },
      { ref: "Article 29 RGPD", texte: "Le sous-traitant et les personnes agissant sous son autorité ne traitent les données que sur instruction du responsable." },
    ],
    exemple:
      "Une PME (responsable de traitement) confie la gestion de sa paie à un cabinet comptable (sous-traitant). Obligations : (1) un DPA doit être signé entre les deux parties ; (2) le cabinet ne peut utiliser les données salariales qu'à la seule fin de produire les bulletins de paie ; (3) si le cabinet fait appel à un logiciel de paie en cloud (sous-traitant ultérieur), il doit en informer la PME et obtenir son accord. En cas de violation de données, c'est la PME (responsable) qui doit notifier la CNIL dans les 72h — même si la faille vient du cabinet.",
    pieges: [
      "Un hébergeur cloud n'est pas automatiquement sous-traitant : s'il détermine lui-même des finalités de traitement (ex : analyse des données pour ses propres besoins), il devient co-responsable ou responsable à part entière.",
      "Le sous-traitant peut être sanctionné directement par la CNIL depuis le RGPD — ne pas croire que seul le responsable de traitement est exposé.",
      "L'absence de DPA est une violation en soi, indépendamment de tout incident de sécurité.",
      "Ne pas confondre co-responsabilité (article 26) et sous-traitance (article 28) : dans la co-responsabilité, les deux parties décident des finalités ensemble.",
    ],
    aRetenir: [
      "Responsable de traitement : détermine les finalités et les moyens — débiteur principal des obligations RGPD.",
      "Sous-traitant : traite uniquement sur instruction documentée du responsable, pour ses finalités.",
      "DPA obligatoire pour tout recours à un sous-traitant (article 28) — son absence est une violation directe.",
      "Co-responsabilité (article 26) : les deux parties décident conjointement des finalités — accord interne obligatoire.",
      "Sous-traitants ultérieurs : autorisés uniquement avec l'accord préalable du responsable.",
    ],
  },

  "dsa-vlop-obligations": {
    slug: "dsa-vlop-obligations",
    title: "Les obligations des très grandes plateformes (VLOP)",
    regulation: "DSA",
    difficulty: "M1",
    tags: ["DSA", "VLOP", "Plateformes"],
    intro:
      "Le Règlement (UE) 2022/2065 (DSA) établit un régime asymétrique : plus la plateforme est grande, plus ses obligations sont strictes. Au sommet de cette pyramide se trouvent les très grandes plateformes en ligne (VLOP — Very Large Online Platforms) et les très grands moteurs de recherche en ligne (TGMRL), soumis aux obligations les plus contraignantes du règlement et supervisés directement par la Commission européenne.",
    sections: [
      {
        heading: "Qu'est-ce qu'une VLOP ?",
        content: `Une très grande plateforme en ligne (VLOP) est une plateforme d'hébergement désignée par la Commission européenne en raison de son audience massive : <strong>au moins 45 millions d'utilisateurs actifs mensuels dans l'UE</strong> (soit environ 10 % de la population de l'UE). Les fournisseurs atteignant ce seuil doivent le notifier à la Commission, qui procède à la désignation formelle.
<br/><br/>VLOP désignées à ce jour (liste non exhaustive) :
<ul>
<li>Réseaux sociaux : Facebook, Instagram, TikTok, X (ex-Twitter), LinkedIn, Pinterest, Snapchat</li>
<li>Plateformes vidéo : YouTube</li>
<li>Places de marché : Amazon Marketplace, Zalando</li>
<li>Moteurs de recherche (TGMRL) : Google Search, Bing</li>
<li>Autres : Wikipedia, AppStore d'Apple (contesté)</li>
</ul>
Le régime VLOP s'ajoute aux obligations applicables à toutes les plateformes d'hébergement — il ne les remplace pas.`,
      },
      {
        heading: "Évaluation et atténuation des risques systémiques (articles 34 et 35)",
        content: `C'est l'obligation phare des VLOP. Elles doivent identifier, analyser et évaluer chaque année les <strong>risques systémiques</strong> liés à leur fonctionnement, notamment :
<ul>
<li>La diffusion de contenus illicites (haine en ligne, désinformation, CSAM).</li>
<li>Les effets négatifs sur les droits fondamentaux (vie privée, liberté d'expression, non-discrimination).</li>
<li>Les risques pour les processus électoraux et le débat démocratique.</li>
<li>Les effets négatifs sur la santé mentale des utilisateurs, notamment des mineurs.</li>
</ul>
À cette évaluation doit succéder un plan d'<strong>atténuation des risques</strong> (article 35), comprenant des mesures raisonnables et proportionnées : adaptation des algorithmes de recommandation, renforcement des systèmes de modération, outils de protection spécifiques pour les mineurs.`,
      },
      {
        heading: "Transparence des systèmes de recommandation (article 38)",
        content: `Les VLOP qui utilisent des systèmes de recommandation algorithmique doivent proposer aux utilisateurs au moins <strong>une option de recommandation non fondée sur le profilage</strong>. Autrement dit, l'utilisateur doit pouvoir choisir de voir du contenu non personnalisé.
<br/><br/>Les VLOP doivent également publier, dans leurs conditions générales, une description claire et intelligible du fonctionnement de leurs systèmes de recommandation, notamment :
<ul>
<li>Les paramètres principaux utilisés.</li>
<li>La possibilité pour l'utilisateur de modifier ou désactiver ces paramètres.</li>
</ul>`,
      },
      {
        heading: "Audit indépendant et accès aux données (articles 37 et 40)",
        content: `<strong>Audit annuel obligatoire (article 37) :</strong> les VLOP doivent se soumettre à un audit indépendant annuel portant sur le respect de leurs obligations DSA, notamment l'évaluation des risques et les mesures d'atténuation. Le rapport d'audit est transmis à la Commission.
<br/><br/><strong>Accès aux données pour les chercheurs (article 40) :</strong> les VLOP doivent donner accès à leurs données aux chercheurs accrédités qui en font la demande, pour leur permettre d'étudier les risques systémiques. Cet accès est encadré (confidentialité, finalités de recherche) mais représente une rupture avec la pratique antérieure de cloisonnement des données.
<br/><br/><strong>Publicité ciblée (article 39) :</strong> les VLOP sont tenues de publier un registre accessible au public de toutes les publicités diffusées, incluant l'annonceur, la période de diffusion et les critères de ciblage utilisés. Le ciblage fondé sur des données sensibles ou ciblant les mineurs est interdit.`,
      },
      {
        heading: "Supervision par la Commission européenne",
        content: `Contrairement aux autres fournisseurs supervisés par les CSN nationaux, les VLOP relèvent directement de la <strong>Commission européenne</strong>, qui dispose de pouvoirs étendus :
<ul>
<li>Accès aux algorithmes, aux données internes et aux systèmes des VLOP.</li>
<li>Pouvoir de mener des enquêtes et d'imposer des mesures conservatoires en urgence.</li>
<li>Sanctions : jusqu'à <strong>6 % du chiffre d'affaires mondial annuel</strong> en cas de violation.</li>
<li>En cas de violation grave et répétée : possibilité d'interdire temporairement l'accès au service dans l'UE.</li>
</ul>
Les CSN nationaux conservent un rôle d'assistance et peuvent, en cas d'urgence, ordonner des mesures provisoires au niveau national.`,
      },
    ],
    articles: [
      { ref: "Article 33 DSA", texte: "Désignation des VLOP et TGMRL : seuil de 45 millions d'utilisateurs actifs mensuels dans l'UE." },
      { ref: "Article 34 DSA", texte: "Évaluation annuelle des risques systémiques : contenus illicites, droits fondamentaux, processus électoraux, mineurs." },
      { ref: "Article 35 DSA", texte: "Mesures d'atténuation des risques : proportionnées, raisonnables, documentées." },
      { ref: "Article 37 DSA", texte: "Audit indépendant annuel sur le respect des obligations DSA, transmis à la Commission." },
      { ref: "Article 38 DSA", texte: "Systèmes de recommandation : obligation d'offrir une option non fondée sur le profilage." },
      { ref: "Article 40 DSA", texte: "Accès aux données pour les chercheurs accrédités étudiant les risques systémiques." },
    ],
    exemple:
      "En 2023, la Commission européenne a ouvert une enquête formelle contre X (ex-Twitter) pour manquements au DSA. Reproches principaux : insuffisance de l'évaluation des risques liés à la désinformation, opacité des systèmes de recommandation, et non-respect des obligations de modération des contenus illicites. C'est également sous le DSA que TikTok a été contraint de déployer des protections renforcées pour les mineurs et de rendre ses algorithmes partiellement auditables par la Commission.",
    pieges: [
      "Les VLOP ne sont pas exemptées des obligations générales du DSA : elles s'y ajoutent, ne s'y substituent pas.",
      "Le seuil de 45 millions d'utilisateurs actifs mensuels dans l'UE est une moyenne sur 6 mois — pas une mesure ponctuelle.",
      "Ne pas confondre VLOP (plateformes d'hébergement) et TGMRL (moteurs de recherche) : même régime renforcé, mais désignations distinctes.",
      "L'obligation d'option non profilée (article 38) ne signifie pas que la personnalisation est interdite — seulement qu'une alternative doit exister.",
    ],
    aRetenir: [
      "VLOP : désignée par la Commission européenne dès 45 millions d'utilisateurs actifs/mois dans l'UE.",
      "Obligation phare : évaluation annuelle des risques systémiques (art. 34) + plan d'atténuation (art. 35).",
      "Audit indépendant annuel obligatoire (art. 37) + accès aux données pour les chercheurs (art. 40).",
      "Recommandation : option non fondée sur le profilage obligatoire (art. 38).",
      "Supervision directe par la Commission européenne — sanction jusqu'à 6 % du CA mondial.",
    ],
  },

  "ai-act-interdictions": {
    slug: "ai-act-interdictions",
    title: "Les pratiques d'IA interdites (article 5 AI Act)",
    regulation: "AI Act",
    difficulty: "M1",
    tags: ["AI Act", "Interdictions", "Droits fondamentaux"],
    intro:
      "L'article 5 du Règlement (UE) 2024/1689 (AI Act) pose l'interdit absolu : certaines pratiques d'intelligence artificielle sont incompatibles avec les valeurs fondamentales de l'Union européenne et sont purement et simplement prohibées, sans possibilité de dérogation. Contrairement aux systèmes à haut risque qui peuvent être mis sur le marché sous conditions, les systèmes visés à l'article 5 ne peuvent pas l'être du tout.",
    sections: [
      {
        heading: "Les 8 catégories de pratiques interdites (article 5)",
        content: `L'article 5 AI Act interdit les pratiques suivantes :
<ul>
<li><strong>Manipulation subliminale</strong> : systèmes d'IA qui utilisent des techniques subliminales agissant à l'insu de la personne, de nature à altérer son comportement de manière à lui causer ou à causer à un tiers un préjudice notable.</li>
<li><strong>Exploitation des vulnérabilités</strong> : systèmes exploitant les vulnérabilités liées à l'âge, au handicap ou à la situation sociale ou économique d'une personne pour influencer son comportement de manière préjudiciable.</li>
<li><strong>Notation sociale (social scoring)</strong> : systèmes d'évaluation ou de classification des personnes physiques par les pouvoirs publics sur la base de leur comportement social ou de caractéristiques personnelles, entraînant un traitement défavorable.</li>
<li><strong>Identification biométrique à distance en temps réel dans les espaces publics</strong> par les autorités répressives — sauf exceptions strictement encadrées (recherche d'une personne disparue, prévention d'une menace terroriste imminente, localisation d'un suspect).</li>
<li><strong>Identification biométrique à distance a posteriori</strong> dans les espaces publics par les autorités répressives, sauf autorisation judiciaire préalable pour des infractions graves.</li>
<li><strong>Inférence des émotions</strong> sur le lieu de travail et dans les établissements d'enseignement (sauf à des fins médicales ou de sécurité).</li>
<li><strong>Catégorisation biométrique</strong> déduisant des caractéristiques sensibles (opinion politique, appartenance syndicale, croyances religieuses, orientation sexuelle, origine raciale ou ethnique) à partir de données biométriques.</li>
<li><strong>Constitution de bases de données de reconnaissance faciale</strong> par aspiration non ciblée d'images faciales sur internet ou depuis des enregistrements de vidéosurveillance.</li>
</ul>`,
      },
      {
        heading: "L'identification biométrique à distance — focus sur les exceptions",
        content: `L'interdiction de l'identification biométrique à distance en temps réel dans les espaces publics est l'une des dispositions les plus débattues. Elle comporte des exceptions strictement encadrées permettant aux autorités répressives de l'utiliser :
<ul>
<li>Recherche ciblée d'une <strong>victime spécifique</strong> (enfant disparu, personne victime de traite).</li>
<li>Prévention d'une <strong>menace terroriste spécifique, réelle et imminente</strong>.</li>
<li>Localisation ou identification d'une personne soupçonnée d'avoir commis une <strong>infraction pénale grave</strong> (terrorisme, traite d'êtres humains, exploitation sexuelle, meurtre, enlèvement, etc.).</li>
</ul>
Dans tous les cas, une <strong>autorisation préalable d'une autorité judiciaire ou administrative indépendante</strong> est requise, sauf urgence absolue. L'utilisation doit être temporaire, géographiquement limitée et proportionnée.`,
      },
      {
        heading: "Sanctions en cas de violation de l'article 5",
        content: `Les violations des interdictions de l'article 5 sont sanctionnées par les amendes les plus élevées de l'AI Act :
<ul>
<li><strong>35 millions d'euros</strong> ou <strong>7 % du chiffre d'affaires mondial annuel</strong> total de l'exercice précédent (le montant le plus élevé est retenu).</li>
</ul>
Ces amendes sont applicables depuis le <strong>2 février 2025</strong> (les interdictions de l'article 5 sont les premières dispositions de l'AI Act à être devenues applicables, 6 mois après l'entrée en vigueur).`,
      },
    ],
    articles: [
      { ref: "Article 5 AI Act", texte: "Liste exhaustive des pratiques d'IA interdites : 8 catégories incompatibles avec les droits fondamentaux de l'UE." },
      { ref: "Article 5(1)(d) AI Act", texte: "Interdiction de l'identification biométrique à distance en temps réel dans les espaces publics, avec exceptions strictes pour les autorités répressives." },
      { ref: "Article 99(3) AI Act", texte: "Sanctions pour violation des interdictions de l'article 5 : jusqu'à 35 millions € ou 7 % du CA mondial annuel." },
    ],
    exemple:
      "Une entreprise déploie un système d'IA sur son lieu de travail qui analyse les expressions faciales de ses employés en temps réel pour évaluer leur engagement et leur satisfaction. Ce système entre dans la catégorie des interdictions de l'article 5 (inférence des émotions sur le lieu de travail). Son déploiement est illégal depuis le 2 février 2025, quelle que soit la performance technique du système ou le consentement des salariés. La sanction peut atteindre 35 millions d'euros ou 7 % du chiffre d'affaires mondial.",
    pieges: [
      "Les interdictions de l'article 5 sont les premières à s'appliquer (depuis le 2 février 2025), avant même les obligations sur les systèmes à haut risque.",
      "L'identification biométrique à distance en temps réel est interdite par principe — les exceptions ne concernent que les autorités répressives et non les entreprises privées.",
      "Le social scoring est interdit pour les pouvoirs publics — mais rien n'interdit explicitement des formes de notation sociale par des entreprises privées (ex : scores de crédit), sous réserve du RGPD.",
      "L'inférence des émotions est interdite au travail et à l'école — mais pas dans tous les contextes (ex : recherche médicale, sécurité).",
    ],
    aRetenir: [
      "8 catégories de pratiques interdites par l'article 5, sans possibilité de dérogation.",
      "Applicables depuis le 2 février 2025 — premières dispositions de l'AI Act en vigueur.",
      "Sanction maximale : 35 millions € ou 7 % du CA mondial (les amendes les plus élevées de l'AI Act).",
      "Identification biométrique à distance en temps réel dans les espaces publics : interdite sauf exceptions strictes réservées aux autorités répressives.",
      "Social scoring par les pouvoirs publics : interdit. Inférence des émotions au travail et à l'école : interdit.",
    ],
  },

  "ai-act-gpai": {
    slug: "ai-act-gpai",
    title: "Les modèles d'IA à usage général (GPAI)",
    regulation: "AI Act",
    difficulty: "M1",
    tags: ["AI Act", "GPAI", "LLM"],
    intro:
      "L'AI Act crée un régime spécifique pour les modèles d'IA à usage général (GPAI — General Purpose AI), aux articles 51 à 56. Ces modèles, entraînés sur de grandes quantités de données et capables de réaliser une très grande variété de tâches, posent des défis réglementaires particuliers car ils ne sont pas conçus pour un usage déterminé à l'avance. Les grands modèles de langage (LLM) comme GPT-4, Gemini ou Claude en sont les exemples les plus connus.",
    sections: [
      {
        heading: "Qu'est-ce qu'un modèle GPAI (article 3(63) AI Act) ?",
        content: `Un modèle d'IA à usage général est un modèle qui :
<ul>
<li>Est entraîné sur un <strong>grand volume de données</strong> à l'aide de l'auto-supervision à grande échelle.</li>
<li>Présente une <strong>généralité significative</strong> : il est capable de réaliser de manière compétente un large éventail de tâches distinctes.</li>
<li>Peut être <strong>intégré dans une variété de systèmes ou d'applications en aval</strong>.</li>
</ul>
La définition vise à capturer les grands modèles de fondation (foundation models) : GPT-4, Claude, Gemini, Llama, Mistral, etc. Un modèle GPAI n'est pas, en tant que tel, un système d'IA — c'est un <em>composant</em> qui peut être intégré dans des systèmes d'IA.
<br/><br/>Important : un modèle GPAI intégré dans un système d'IA à haut risque (ex : utilisé pour des décisions de crédit) est soumis <em>en plus</em> aux obligations applicables aux systèmes à haut risque.`,
      },
      {
        heading: "Deux niveaux d'obligations selon le risque systémique",
        content: `L'AI Act distingue deux catégories de fournisseurs de modèles GPAI selon leur puissance de calcul :
<br/><br/><strong>Tous les fournisseurs de modèles GPAI (article 53) :</strong>
<ul>
<li>Établir et tenir à jour une <strong>documentation technique</strong> sur le modèle (architecture, données d'entraînement, capacités, limitations).</li>
<li>Fournir aux intégrateurs (fournisseurs de systèmes en aval) les informations nécessaires pour respecter leurs propres obligations.</li>
<li>Mettre en place une <strong>politique de respect du droit d'auteur</strong> et publier un résumé des données d'entraînement utilisées.</li>
<li>S'enregistrer dans la base de données EU de l'IA (article 71).</li>
</ul>
<strong>Fournisseurs de modèles GPAI à risque systémique (article 55) :</strong> modèles dont la puissance de calcul d'entraînement dépasse <strong>10²⁵ FLOPs</strong> (présomption de risque systémique). Obligations supplémentaires :
<ul>
<li>Réaliser des <strong>évaluations de modèle</strong> (red-teaming, tests adversariaux).</li>
<li>Évaluer et atténuer les <strong>risques systémiques</strong> identifiés.</li>
<li>Notifier à la Commission tout <strong>incident grave</strong> lié au modèle.</li>
<li>Mettre en place des <strong>mesures de cybersécurité</strong> pour protéger le modèle.</li>
</ul>`,
      },
      {
        heading: "Obligations liées au droit d'auteur (article 53(1)(c))",
        content: `Les fournisseurs de modèles GPAI doivent respecter le droit de l'Union en matière de droit d'auteur, notamment la directive sur le droit d'auteur dans le marché unique numérique (2019/790). Concrètement :
<ul>
<li>Ils doivent <strong>identifier et respecter les réserves d'exploitation</strong> (<em>opt-out</em>) des titulaires de droits qui ont explicitement exclu leurs œuvres de la fouille de textes et de données.</li>
<li>Ils doivent publier un <strong>résumé suffisamment détaillé</strong> des données utilisées pour l'entraînement (sans obligation de divulgation exhaustive).</li>
</ul>
Cette obligation est particulièrement sensible car l'entraînement de grands modèles repose sur des corpus massifs incluant des œuvres protégées — des procédures judiciaires sont en cours dans plusieurs États membres.`,
      },
      {
        heading: "Gouvernance : le Bureau de l'IA",
        content: `La Commission européenne a créé un <strong>Bureau de l'IA</strong> (AI Office) chargé de la supervision des modèles GPAI à l'échelon européen. Ce bureau :
<ul>
<li>Est compétent pour surveiller les fournisseurs de modèles GPAI dans tous les États membres.</li>
<li>Peut mener des évaluations de modèles et exiger des mesures correctives.</li>
<li>Coordonne la coopération entre les autorités nationales compétentes pour l'AI Act.</li>
</ul>
Sanctions pour les fournisseurs de modèles GPAI : jusqu'à <strong>15 millions € ou 3 % du CA mondial annuel</strong> (montant le plus élevé).`,
      },
    ],
    articles: [
      { ref: "Article 3(63) AI Act", texte: "Définition du modèle d'IA à usage général (GPAI) : entraîné sur de grandes données, généralité significative, intégrable en aval." },
      { ref: "Article 51 AI Act", texte: "Classification des modèles GPAI à risque systémique : seuil de 10²⁵ FLOPs de puissance de calcul." },
      { ref: "Article 53 AI Act", texte: "Obligations de tous les fournisseurs GPAI : documentation technique, politique droit d'auteur, résumé données d'entraînement." },
      { ref: "Article 55 AI Act", texte: "Obligations supplémentaires pour les modèles GPAI à risque systémique : évaluations, atténuation des risques, notification des incidents." },
      { ref: "Article 99(5) AI Act", texte: "Sanctions GPAI : jusqu'à 15 millions € ou 3 % du CA mondial annuel." },
    ],
    exemple:
      "OpenAI, fournisseur de GPT-4, est soumis aux obligations GPAI de l'article 53 (documentation technique, politique droit d'auteur, résumé des données d'entraînement). GPT-4 dépasse vraisemblablement le seuil de 10²⁵ FLOPs, ce qui le place dans la catégorie GPAI à risque systémique → obligations supplémentaires : red-teaming, atténuation des risques systémiques, notification des incidents graves au Bureau de l'IA. Par contraste, un modèle open source de taille modeste (ex : un petit modèle de 7 milliards de paramètres entraîné sur corpus limité) pourrait ne pas atteindre ces seuils.",
    pieges: [
      "Un modèle GPAI n'est pas automatiquement un système d'IA à haut risque — c'est un composant. Ce sont les systèmes qui l'intègrent qui peuvent être à haut risque.",
      "Le seuil de 10²⁵ FLOPs est une présomption — la Commission peut désigner un modèle à risque systémique même sous ce seuil si elle constate des capacités à impact significatif.",
      "Les obligations GPAI s'appliquent au fournisseur du modèle, pas aux entreprises qui l'utilisent via une API — ces dernières sont des intégrateurs soumis à d'autres obligations.",
      "Les modèles open source bénéficient d'exemptions partielles si les paramètres sont publiquement accessibles — mais pas totales si le modèle présente un risque systémique.",
    ],
    aRetenir: [
      "GPAI = modèle entraîné sur de grandes données, généraliste, intégrable dans des systèmes variés (LLM, modèles multimodaux).",
      "Deux niveaux : GPAI standard (art. 53) et GPAI à risque systémique > 10²⁵ FLOPs (art. 55, obligations renforcées).",
      "Obligation universelle : documentation technique + politique droit d'auteur + résumé des données d'entraînement.",
      "Supervisé par le Bureau de l'IA de la Commission européenne (pas les autorités nationales).",
      "Sanctions : jusqu'à 15 millions € ou 3 % du CA mondial.",
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
        <h1 className="font-serif-display text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-4 leading-tight">
          {fiche.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-gold-400 pl-4">
          <HighlightedText text={fiche.intro} />
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 mb-10">
        {fiche.sections.map((section, i) => (
          <div key={i}>
            <h2 className="font-serif-display text-xl font-bold text-navy-900 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold-500 flex-shrink-0" />
              {section.heading}
            </h2>
            <div
              className="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm max-w-none dark:prose-invert [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-2 [&_li]:my-1"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
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
      <div className="bg-white dark:bg-gray-800 border-l-4 border-gold-400 rounded-r-xl p-6 mb-8 shadow-sm">
        <h2 className="font-serif-display text-lg font-bold text-navy-900 dark:text-white mb-3">
          💡 Exemple concret
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><HighlightedText text={fiche.exemple} /></p>
      </div>

      {/* Pièges à éviter */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
        <h2 className="font-serif-display text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Pièges à éviter
        </h2>
        <ul className="space-y-2">
          {fiche.pieges.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-red-700 dark:text-red-400">
              <span className="mt-1 flex-shrink-0">⚠</span>
              <span><HighlightedText text={p} /></span>
            </li>
          ))}
        </ul>
      </div>

      {/* À retenir */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
        <h2 className="font-serif-display text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          L&apos;essentiel à retenir
        </h2>
        <ul className="space-y-2">
          {fiche.aRetenir.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-green-800 dark:text-green-400">
              <span className="mt-1 flex-shrink-0">✓</span>
              <span><HighlightedText text={r} /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
