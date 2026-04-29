"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

const mockQuiz = [
  {
    id: "1",
    question: "Quel est le seuil d'utilisateurs actifs mensuels dans l'UE à partir duquel une plateforme est désignée comme 'très grande plateforme en ligne' (VLOP) sous le DSA ?",
    options: ["A. 10 millions", "B. 25 millions", "C. 45 millions", "D. 100 millions"],
    correct_answer: 2,
    explanation: "L'article 33 du DSA fixe le seuil à 45 millions d'utilisateurs actifs mensuels dans l'Union européenne. Ce seuil correspond à environ 10% de la population de l'UE. Les VLOP désignées sont soumises aux obligations les plus strictes du règlement.",
    regulation: "DSA",
    difficulty: "M1",
  },
  {
    id: "2",
    question: "Parmi ces bases légales, laquelle N'EST PAS l'une des 6 bases légales du RGPD pour le traitement de données personnelles ?",
    options: ["A. Le consentement de la personne concernée", "B. L'intérêt commercial du responsable de traitement", "C. L'exécution d'un contrat", "D. L'intérêt légitime du responsable de traitement"],
    correct_answer: 1,
    explanation: "Les 6 bases légales de l'article 6 RGPD sont : le consentement, l'exécution d'un contrat, le respect d'une obligation légale, la sauvegarde des intérêts vitaux, la mission d'intérêt public, et les intérêts légitimes du responsable. L'intérêt commercial pur n'est pas une base légale en soi — il peut s'inscrire dans les intérêts légitimes, mais sous conditions strictes.",
    regulation: "RGPD",
    difficulty: "L3",
  },
  {
    id: "3",
    question: "Quelle est la sanction maximale prévue par le DMA pour un contrôleur d'accès (gatekeeper) qui violerait ses obligations ?",
    options: ["A. 5% du chiffre d'affaires mondial annuel", "B. 10% du chiffre d'affaires mondial annuel", "C. 20% du chiffre d'affaires mondial annuel", "D. 35 millions d'euros"],
    correct_answer: 1,
    explanation: "L'article 26 du DMA prévoit une amende pouvant aller jusqu'à 10% du chiffre d'affaires mondial annuel total du gatekeeper pour les violations des obligations des articles 5, 6 et 7. En cas de récidive (3 violations en 8 ans), ce plafond est porté à 20%. La Commission peut également imposer des remèdes comportementaux ou structurels.",
    regulation: "DMA",
    difficulty: "M1",
  },
  {
    id: "4",
    question: "Selon l'AI Act, quel seuil de FLOPs (opérations en virgule flottante) d'entraînement déclenche le régime renforcé pour les modèles d'IA à usage général (GPAI) à risque systémique ?",
    options: ["A. 10²³ FLOPs", "B. 10²⁵ FLOPs", "C. 10²⁷ FLOPs", "D. 10³⁰ FLOPs"],
    correct_answer: 1,
    explanation: "L'article 51 de l'AI Act fixe le seuil à 10²⁵ (10 puissance 25) FLOPs. Au-dessus de ce seuil, le modèle GPAI est présumé présenter un risque systémique et soumis à des obligations renforcées : évaluations contradictoires, rapport sur les incidents graves, mesures de cybersécurité. Ce seuil vise aujourd'hui des modèles comme GPT-4 ou Gemini Ultra.",
    regulation: "AI Act",
    difficulty: "M2",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  const question = mockQuiz[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correct_answer;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    if (current + 1 >= mockQuiz.length) {
      setAnswers(newAnswers);
      setFinished(true);
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

  const score = answers.filter((a, i) => a === mockQuiz[i].correct_answer).length;

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <Trophy className="w-16 h-16 text-gold-500 mx-auto mb-4" />
        <h1 className="font-serif-display text-3xl font-bold text-navy-950 mb-2">
          Quiz terminé !
        </h1>
        <p className="text-gray-600 mb-6">
          Vous avez obtenu{" "}
          <span className="font-bold text-navy-900 text-xl">
            {score}/{mockQuiz.length}
          </span>{" "}
          — {Math.round((score / mockQuiz.length) * 100)}%
        </p>
        <div className="space-y-3 mb-8">
          {mockQuiz.map((q, i) => (
            <div
              key={q.id}
              className={`flex items-center gap-3 text-left p-3 rounded-lg border ${
                answers[i] === q.correct_answer
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {answers[i] === q.correct_answer ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              )}
              <p className="text-sm text-gray-800">{q.question}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-serif-display text-2xl font-bold text-navy-950">Quiz</h1>
          <span className="text-sm text-gray-500">
            Question {current + 1}/{mockQuiz.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-navy-700 h-1.5 rounded-full transition-all"
            style={{ width: `${((current + 1) / mockQuiz.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium bg-navy-50 text-navy-700 border border-navy-200 px-2 py-0.5 rounded">
            {question.regulation}
          </span>
          <span className="text-xs text-gray-400">{question.difficulty}</span>
        </div>

        <p className="font-serif-display text-lg font-semibold text-navy-900 mb-6 leading-snug">
          {question.question}
        </p>

        <div className="space-y-3 mb-6">
          {question.options.map((option, idx) => {
            let style = "bg-white border-gray-200 text-gray-700 hover:border-navy-300";
            if (isAnswered) {
              if (idx === question.correct_answer) style = "bg-green-50 border-green-400 text-green-800";
              else if (idx === selected) style = "bg-red-50 border-red-400 text-red-800";
              else style = "bg-white border-gray-200 text-gray-400";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style}`}
              >
                {option}
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
          className="w-full bg-navy-950 hover:bg-navy-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {current + 1 >= mockQuiz.length ? "Voir les résultats" : "Question suivante"}
        </button>
      </div>
    </div>
  );
}
