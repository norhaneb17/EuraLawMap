import { BookOpen } from "lucide-react";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary-terms";

const groupByLetter = (terms: GlossaryTerm[]) => {
  const grouped: Record<string, GlossaryTerm[]> = {};
  terms.forEach((t) => {
    if (!grouped[t.letter]) grouped[t.letter] = [];
    grouped[t.letter].push(t);
  });
  return grouped;
};

export default function GlossairePage() {
  const grouped = groupByLetter(glossaryTerms);
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
                  {concept.related_articles.length > 0 && (
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
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
