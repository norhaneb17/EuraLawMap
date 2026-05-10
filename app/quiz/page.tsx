"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Star } from "lucide-react";

const mockQuiz = [
  {
    id: "1",
    question: "Quel est le seuil d'utilisateurs actifs mensuels dans l'UE à partir duquel une plateforme est désignée comme très grande plateforme en ligne (VLOP) sous le DSA ?",
    options: ["A. 10 millions", "B. 25 millions", "C. 45 millions", "D. 100 millions"],
    correct_answer: 2,
    explanation: "L'article 33 du DSA fixe le seuil à 45 millions d'utilisateurs actifs mensuels dans l'UE, soit environ 10 % de la population. Les VLOP désignées sont soumises aux obligations les plus strictes du règlement.",
    regulation: "DSA",
  },
  {
    id: "2",
    question: "Parmi ces bases légales, laquelle N'EST PAS l'une des 6 bases légales du RGPD pour le traitement de données personnelles ?",
    options: ["A. Le consentement de la personne concernée", "B. L'intérêt commercial du responsable de traitement", "C. L'exécution d'un contrat", "D. L'intérêt légitime du responsable de traitement"],
    correct_answer: 1,
    explanation: "Les 6 bases légales de l'article 6 RGPD sont : consentement, exécution d'un contrat, obligation légale, intérêts vitaux, mission d'intérêt public, et intérêts légitimes. L'intérêt commercial pur n'est pas une base légale en soi.",
    regulation: "RGPD",
  },
  {
    id: "3",
    question: "Quelle est la sanction maximale prévue par le DMA pour un contrôleur d'accès (gatekeeper) qui violerait ses obligations ?",
    options: ["A. 5 % du CA mondial annuel", "B. 10 % du CA mondial annuel", "C. 20 % du CA mondial annuel", "D. 35 millions d'euros"],
    correct_answer: 1,
    explanation: "L'article 26 du DMA prévoit une amende jusqu'à 10 % du CA mondial annuel. En cas de récidive (3 violations en 8 ans), ce plafond est porté à 20 %.",
    regulation: "DMA",
  },
  {
    id: "4",
    question: "Selon l'AI Act, quel seuil de FLOPs d'entraînement déclenche le régime renforcé pour les modèles d'IA à usage général (GPAI) à risque systémique ?",
    options: ["A. 10²³ FLOPs", "B. 10²⁵ FLOPs", "C. 10²⁷ FLOPs", "D. 10³⁰ FLOPs"],
    correct_answer: 1,
    explanation: "L'article 51 de l'AI Act fixe le seuil à 10²⁵ FLOPs. Au-dessus de ce seuil, le modèle GPAI est présumé présenter un risque systémique et soumis à des obligations renforcées.",
    regulation: "AI Act",
  },
  {
    id: "5",
    question: "Dans quel délai une entité essentielle au sens de NIS 2 doit-elle envoyer une notification complète à l'autorité compétente après la découverte d'un incident significatif ?",
    options: ["A. 24 heures", "B. 48 heures", "C. 72 heures", "D. 7 jours"],
    correct_answer: 2,
    explanation: "L'article 23 de NIS 2 prévoit une alerte initiale dans les 24 heures, puis une notification complète dans les 72 heures, et enfin un rapport final dans le mois.",
    regulation: "NIS 2",
  },
  {
    id: "6",
    question: "Qu'est-ce que le principe de « privacy by default » imposé par l'article 25 du RGPD ?",
    options: [
      "A. Le responsable doit chiffrer toutes les données par défaut",
      "B. Seules les données strictement nécessaires sont collectées, avec la durée de conservation minimale et un accès restreint",
      "C. Le consentement doit être donné par défaut lors de la première visite",
      "D. Les données doivent être stockées sur des serveurs européens par défaut",
    ],
    correct_answer: 1,
    explanation: "Le privacy by default signifie que les paramètres par défaut d'un traitement doivent être les plus protecteurs possibles : seules les données nécessaires sont collectées, conservées le temps minimum, et accessibles uniquement aux personnes autorisées.",
    regulation: "RGPD",
  },
  {
    id: "7",
    question: "Parmi les pratiques suivantes, laquelle est explicitement INTERDITE par l'article 5 de l'AI Act ?",
    options: [
      "A. Un chatbot qui informe l'utilisateur qu'il parle à une IA",
      "B. Un système de recommandation de contenus sur une plateforme",
      "C. Un système de notation sociale des citoyens par les pouvoirs publics",
      "D. Un système d'IA à haut risque avec supervision humaine",
    ],
    correct_answer: 2,
    explanation: "L'article 5 de l'AI Act interdit les pratiques d'IA à risque inacceptable, dont la notation sociale des personnes par les autorités publiques, car elle porte atteinte à la dignité humaine et aux droits fondamentaux.",
    regulation: "AI Act",
  },
  {
    id: "8",
    question: "Depuis quelle date les dispositions du règlement MiCA sur les stablecoins (jetons référencés à des actifs — ART) sont-elles applicables ?",
    options: ["A. 30 décembre 2023", "B. 30 juin 2024", "C. 30 décembre 2024", "D. 30 juin 2025"],
    correct_answer: 1,
    explanation: "Les titres III et IV de MiCA (ART et EMT — stablecoins) sont applicables depuis le 30 juin 2024. L'ensemble du règlement, incluant les CASP, est applicable depuis le 30 décembre 2024.",
    regulation: "MiCA",
  },
  {
    id: "9",
    question: "Quel est le délai minimum de préavis qu'une plateforme d'intermédiation doit respecter avant de modifier ses conditions générales, selon le règlement P2B ?",
    options: ["A. 7 jours", "B. 15 jours", "C. 30 jours", "D. 60 jours"],
    correct_answer: 1,
    explanation: "L'article 3 du règlement P2B impose un préavis d'au moins 15 jours avant toute modification des conditions générales. Ce délai permet aux entreprises utilisatrices de s'adapter ou de résilier la relation commerciale.",
    regulation: "P2B",
  },
  {
    id: "10",
    question: "Dans le cadre du Data Act (Règlement (UE) 2023/2854), qui peut demander l'accès aux données générées par un produit connecté (IoT) ?",
    options: [
      "A. Uniquement le fabricant du produit",
      "B. L'utilisateur du produit, qui peut aussi les partager avec des tiers",
      "C. Uniquement les autorités publiques",
      "D. Tout tiers qui en fait la demande au fabricant",
    ],
    correct_answer: 1,
    explanation: "Le chapitre II du Data Act crée un droit d'accès pour l'utilisateur du produit connecté. L'utilisateur peut également demander que ces données soient partagées avec un tiers de son choix. Le fabricant ne peut pas conserver l'exclusivité d'accès.",
    regulation: "Data Act",
  },
  {
    id: "11",
    question: "Parmi les principes suivants, lequel impose que les données personnelles ne soient pas conservées au-delà de ce qui est nécessaire à la finalité du traitement ?",
    options: [
      "A. La minimisation des données",
      "B. La limitation de la conservation",
      "C. L'exactitude",
      "D. L'intégrité et la confidentialité",
    ],
    correct_answer: 1,
    explanation: "L'article 5(1)(e) du RGPD consacre le principe de limitation de la conservation : les données ne doivent pas être conservées sous une forme permettant l'identification des personnes au-delà de ce qui est nécessaire. À distinguer de la minimisation (art. 5(1)(c)), qui porte sur la quantité de données collectées.",
    regulation: "RGPD",
  },
  {
    id: "12",
    question: "En cas de violation de données personnelles présentant un risque pour les droits et libertés des personnes, dans quel délai le responsable de traitement doit-il notifier l'autorité de contrôle (ex. CNIL) ?",
    options: ["A. 24 heures", "B. 48 heures", "C. 72 heures", "D. 7 jours"],
    correct_answer: 2,
    explanation: "L'article 33 du RGPD impose une notification à l'autorité de contrôle dans les 72 heures suivant la prise de connaissance de la violation. Si la notification est tardive, elle doit être accompagnée d'une justification du retard. La notification aux personnes concernées (art. 34) est distincte et intervient sans délai si le risque est élevé.",
    regulation: "RGPD",
  },
  {
    id: "13",
    question: "Parmi les secteurs suivants, lequel N'est PAS listé à l'Annexe III de l'AI Act comme domaine d'application des systèmes d'IA à haut risque ?",
    options: [
      "A. L'infrastructure critique (eau, énergie, transport)",
      "B. L'éducation et la formation professionnelle",
      "C. Les plateformes de réseaux sociaux",
      "D. La gestion de la migration et le contrôle aux frontières",
    ],
    correct_answer: 2,
    explanation: "L'Annexe III de l'AI Act liste 8 domaines d'application des IA à haut risque : infrastructure critique, éducation, emploi, accès aux services essentiels, répression, migration/frontières, administration de la justice, et processus démocratiques. Les plateformes de réseaux sociaux ne figurent pas dans cette liste en tant que telles.",
    regulation: "AI Act",
  },
  {
    id: "14",
    question: "Quelle obligation de transparence l'AI Act impose-t-il aux fournisseurs de modèles d'IA à usage général (GPAI) concernant leurs données d'entraînement ?",
    options: [
      "A. Aucune, les données d'entraînement sont couvertes par le secret commercial",
      "B. Publier une synthèse suffisamment détaillée des données utilisées pour l'entraînement",
      "C. Transmettre l'intégralité des jeux de données à la Commission européenne",
      "D. Obtenir le consentement explicite de tous les détenteurs de données avant entraînement",
    ],
    correct_answer: 1,
    explanation: "L'article 53(1)(d) de l'AI Act impose aux fournisseurs de modèles GPAI de publier une synthèse suffisamment détaillée des données d'entraînement. Cette obligation vise notamment à permettre aux titulaires de droits d'auteur de vérifier si leurs œuvres ont été utilisées sans licence.",
    regulation: "AI Act",
  },
  {
    id: "15",
    question: "À quelles entités le règlement DORA (résilience opérationnelle numérique) s'applique-t-il ?",
    options: [
      "A. Uniquement aux banques d'importance systémique mondiale",
      "B. À toutes les entreprises qui traitent des données personnelles dans l'UE",
      "C. Aux entités financières régulées et à leurs prestataires TIC critiques",
      "D. Uniquement aux fintechs et néobanques",
    ],
    correct_answer: 2,
    explanation: "Le règlement DORA (Règlement (UE) 2022/2554) s'applique aux entités financières définies à l'article 2 : banques, assurances, établissements de paiement, prestataires de services de crypto-actifs, plateformes de négociation, etc. Il s'étend également aux prestataires tiers critiques de services TIC (cloud, data analytics) qui les servent, soumis à une surveillance directe par les ESA.",
    regulation: "DORA",
  },
  {
    id: "16",
    question: "Qu'est-ce que le portefeuille européen d'identité numérique (EUDI Wallet) introduit par le règlement eIDAS 2 ?",
    options: [
      "A. Un système de paiement électronique européen unifié",
      "B. Un outil permettant aux citoyens de stocker et présenter des attributs d'identité vérifiables en ligne et hors ligne",
      "C. Une base de données centralisée des identités nationales gérée par l'UE",
      "D. Un format standardisé pour les passeports électroniques européens",
    ],
    correct_answer: 1,
    explanation: "Le règlement eIDAS 2 (Règlement (UE) 2024/1183) crée le cadre de l'EUDI Wallet, un outil à la disposition des citoyens et résidents de l'UE pour stocker des attributs d'identité (permis de conduire, diplômes, ordonnances médicales) et les présenter de façon sélective — sans communiquer plus d'informations que nécessaire — à des services en ligne ou physiques.",
    regulation: "eIDAS 2",
  },
  {
    id: "17",
    question: "Selon le DSA, quelle pratique publicitaire est expressément interdite à l'égard des mineurs ?",
    options: [
      "A. Toute publicité commerciale, quelle qu'en soit la nature",
      "B. La publicité ciblée fondée sur le profilage à partir de données personnelles du mineur",
      "C. La publicité pour des produits alimentaires non bio",
      "D. La publicité politique pendant les campagnes électorales",
    ],
    correct_answer: 1,
    explanation: "L'article 28(2) du DSA interdit aux plateformes de présenter des publicités fondées sur le profilage à partir de données personnelles de l'utilisateur lorsque ce dernier est mineur. Cette règle s'inscrit dans un ensemble d'obligations de protection des mineurs en ligne (conception d'interface, accès aux contenus, etc.).",
    regulation: "DSA",
  },
  {
    id: "18",
    question: "Qu'est-ce qu'un service d'intermédiation de données au sens du règlement sur la gouvernance des données (DGA) ?",
    options: [
      "A. Un registre public de jeux de données gouvernementaux",
      "B. Un service facilitant le partage volontaire de données entre détenteurs et utilisateurs",
      "C. Une infrastructure technique de stockage de données en nuage",
      "D. Un service de pseudonymisation de données personnelles",
    ],
    correct_answer: 1,
    explanation: "L'article 2(11) du DGA définit les services d'intermédiation de données comme des services visant à établir des relations commerciales pour le partage de données entre un nombre indéterminé de détenteurs et d'utilisateurs de données. Ils incluent les espaces de données sectoriels, les coopératives de données et les plateformes de partage. Ces services sont soumis à une obligation de notification et doivent respecter un régime de neutralité.",
    regulation: "DGA",
  },
  {
    id: "19",
    question: "Le droit à l'effacement (« droit à l'oubli ») prévu à l'article 17 du RGPD est-il absolu ?",
    options: [
      "A. Oui, il s'applique sans exception dès lors que la personne en fait la demande",
      "B. Non, il peut notamment être écarté pour l'exercice de la liberté d'expression, des fins archivistiques ou la défense de droits en justice",
      "C. Non, il ne s'applique qu'aux données collectées sur la base du consentement",
      "D. Oui, mais uniquement dans les 30 jours suivant la collecte initiale",
    ],
    correct_answer: 1,
    explanation: "L'article 17(3) du RGPD prévoit plusieurs exceptions au droit à l'effacement : exercice de la liberté d'expression et d'information, respect d'une obligation légale, motifs d'intérêt public dans le domaine de la santé, fins archivistiques, de recherche scientifique ou statistiques, ou constatation, exercice et défense de droits en justice. Ce droit est donc important mais non absolu.",
    regulation: "RGPD",
  },
  {
    id: "20",
    question: "Selon le règlement P2B, quel préavis minimum une plateforme d'intermédiation doit-elle respecter avant de modifier ses conditions générales vis-à-vis des entreprises utilisatrices ?",
    options: ["A. 7 jours", "B. 15 jours", "C. 30 jours", "D. 60 jours"],
    correct_answer: 1,
    explanation: "L'article 3 du règlement P2B (Règlement (UE) 2019/1150) impose un préavis d'au moins 15 jours avant toute modification des conditions générales. Ce délai permet aux entreprises utilisatrices de s'adapter ou, le cas échéant, de résilier la relation commerciale avant l'entrée en vigueur des nouvelles conditions.",
    regulation: "P2B",
  },
];

function getScoreLabel(pct: number) {
  if (pct === 100) return { label: "Parfait ! 🏆", color: "text-yellow-600" };
  if (pct >= 80) return { label: "Excellent ! 🥇", color: "text-green-700" };
  if (pct >= 60) return { label: "Bien joué ! 🥈", color: "text-blue-700" };
  if (pct >= 40) return { label: "Peut mieux faire 🥉", color: "text-orange-600" };
  return { label: "À retravailler 📚", color: "text-red-600" };
}

const STORAGE_KEY = "euralexmap_quiz_best";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setBestScore(parseInt(stored));
  }, []);

  const question = mockQuiz[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correct_answer;
  const score = answers.filter((a, i) => a === mockQuiz[i]?.correct_answer).length;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    if (current + 1 >= mockQuiz.length) {
      setAnswers(newAnswers);
      setFinished(true);
      const finalScore = newAnswers.filter((a, i) => a === mockQuiz[i].correct_answer).length;
      if (bestScore === null || finalScore > bestScore) {
        setBestScore(finalScore);
        localStorage.setItem(STORAGE_KEY, String(finalScore));
      }
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const finalScore = answers.filter((a, i) => a === mockQuiz[i].correct_answer).length;
    const pct = Math.round((finalScore / mockQuiz.length) * 100);
    const { label, color } = getScoreLabel(pct);

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Score card */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 text-center mb-8">
          <Trophy className="w-14 h-14 text-gold-400 mx-auto mb-4" />
          <h1 className="font-serif-display text-3xl font-bold mb-1">Quiz terminé !</h1>
          <p className={`text-lg font-semibold mb-4 ${color.replace("text-", "text-")}`}
            style={{ color: pct >= 80 ? "#4ade80" : pct >= 60 ? "#60a5fa" : pct >= 40 ? "#fb923c" : "#f87171" }}>
            {label}
          </p>

          {/* Score circle */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-white">{finalScore}<span className="text-2xl text-navy-400">/{mockQuiz.length}</span></div>
              <div className="text-navy-400 text-sm mt-1">Score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">{pct}<span className="text-2xl text-navy-400">%</span></div>
              <div className="text-navy-400 text-sm mt-1">Réussite</div>
            </div>
            {bestScore !== null && (
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-400">{bestScore}<span className="text-2xl text-navy-400">/{mockQuiz.length}</span></div>
                <div className="text-navy-400 text-sm mt-1">Meilleur score</div>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-navy-800 rounded-full h-3 mb-2">
            <div
              className="h-3 rounded-full transition-all duration-1000"
              style={{
                width: `${pct}%`,
                backgroundColor: pct >= 80 ? "#4ade80" : pct >= 60 ? "#60a5fa" : pct >= 40 ? "#fb923c" : "#f87171",
              }}
            />
          </div>
          <p className="text-navy-400 text-xs">{finalScore} bonne{finalScore > 1 ? "s" : ""} réponse{finalScore > 1 ? "s" : ""} sur {mockQuiz.length}</p>
        </div>

        {/* Review */}
        <div className="space-y-2 mb-8">
          <h2 className="font-serif-display font-bold text-navy-950 mb-3">Récapitulatif</h2>
          {mockQuiz.map((q, i) => (
            <div
              key={q.id}
              className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
                answers[i] === q.correct_answer
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {answers[i] === q.correct_answer ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-gray-500 mr-2">{q.regulation}</span>
                <span className="text-gray-800">{q.question.slice(0, 80)}…</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="w-full inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header + progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-serif-display text-2xl font-bold text-navy-950">Quiz</h1>
          <div className="flex items-center gap-3">
            {bestScore !== null && (
              <span className="text-xs text-gold-600 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                Meilleur : {bestScore}/{mockQuiz.length}
              </span>
            )}
            <span className="text-sm font-semibold text-navy-700 bg-navy-50 border border-navy-200 px-3 py-1 rounded-full">
              {current + 1} / {mockQuiz.length}
            </span>
          </div>
        </div>

        {/* Segment progress bar */}
        <div className="flex gap-1">
          {mockQuiz.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                i < current
                  ? answers[i] === mockQuiz[i].correct_answer
                    ? "bg-green-500"
                    : "bg-red-400"
                  : i === current
                  ? "bg-navy-950"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Score en cours */}
        {answers.length > 0 && (
          <div className="flex justify-end mt-2">
            <span className="text-xs text-gray-500">
              {score} correcte{score > 1 ? "s" : ""} sur {answers.length} répondue{answers.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold bg-navy-50 text-navy-700 border border-navy-200 px-2.5 py-1 rounded-full">
            {question.regulation}
          </span>
        </div>

        <p className="font-serif-display text-lg font-semibold text-navy-900 dark:text-white mb-6 leading-snug">
          {question.question}
        </p>

        <div className="space-y-3 mb-6">
          {question.options.map((option, idx) => {
            let style = "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-navy-400 cursor-pointer";
            let icon = null;
            if (isAnswered) {
              if (idx === question.correct_answer) {
                style = "bg-green-50 border-green-400 text-green-800";
                icon = <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />;
              } else if (idx === selected) {
                style = "bg-red-50 border-red-400 text-red-800";
                icon = <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />;
              } else {
                style = "bg-white dark:bg-gray-700/50 border-gray-100 dark:border-gray-600 text-gray-400 cursor-default";
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${style}`}
              >
                {icon && icon}
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`rounded-xl p-4 mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <XCircle className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-semibold ${isCorrect ? "text-green-800" : "text-red-700"}`}>
                {isCorrect ? "Bonne réponse !" : "Mauvaise réponse"}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="w-full bg-navy-950 hover:bg-navy-800 disabled:bg-gray-100 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {current + 1 >= mockQuiz.length ? "Voir mes résultats" : "Question suivante →"}
        </button>
      </div>
    </div>
  );
}
