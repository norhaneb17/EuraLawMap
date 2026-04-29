import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Calendar, Clock, Tag, ChevronLeft, MessageCircle, BookOpen } from "lucide-react";
import ChapterAccordion from "@/components/ChapterAccordion";
import { getRegulationBySlug, getChaptersBySlug, mockRegulations } from "@/lib/mock-data";

export async function generateStaticParams() {
  return mockRegulations.map((r) => ({ slug: r.slug }));
}

const statusLabels: Record<string, { label: string; color: string }> = {
  in_force: { label: "En vigueur", color: "bg-green-100 text-green-800 border-green-200" },
  partially_applicable: { label: "Application progressive", color: "bg-amber-100 text-amber-800 border-amber-200" },
  proposed: { label: "Proposé", color: "bg-blue-100 text-blue-800 border-blue-200" },
};

export default function RegulationPage({ params }: { params: { slug: string } }) {
  const regulation = getRegulationBySlug(params.slug);

  if (!regulation) {
    notFound();
  }

  const chapters = getChaptersBySlug(params.slug);
  const status = statusLabels[regulation.status] || statusLabels.in_force;

  return (
    <div>
      {/* Page header */}
      <div className="bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <Link
            href="/reglements"
            className="inline-flex items-center gap-1.5 text-navy-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Tous les règlements
          </Link>

          <div className="flex items-start gap-5">
            <span className="text-5xl flex-shrink-0">{regulation.icon_emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.color}`}>
                  {status.label}
                </span>
                <span className="text-xs text-navy-400 font-mono">{regulation.reference}</span>
              </div>
              <h1 className="font-serif-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                {regulation.title}
              </h1>
              <p className="text-navy-300 text-sm leading-relaxed max-w-3xl">
                {regulation.official_name}
              </p>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-navy-800 text-sm text-navy-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                Adoption :{" "}
                <span className="text-white">
                  {new Date(regulation.adoption_date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                Application :{" "}
                <span className="text-white">
                  {new Date(regulation.application_date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span className="text-white">{regulation.category}</span>
            </div>
            <a
              href={regulation.eurlex_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              Texte officiel EUR-Lex
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Summary */}
            <section>
              <h2 className="font-serif-display text-xl font-bold text-navy-950 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold-500" />
                Résumé
              </h2>
              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
                <p className="text-gray-700 leading-relaxed">{regulation.summary}</p>
              </div>
            </section>

            {/* Chapters */}
            <section>
              <h2 className="font-serif-display text-xl font-bold text-navy-950 mb-4">
                Structure du règlement
              </h2>
              <ChapterAccordion chapters={chapters} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Ask AI */}
            <div className="bg-navy-950 text-white rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-gold-400" />
                <h3 className="font-semibold text-sm">Poser une question à l&apos;IA</h3>
              </div>
              <p className="text-navy-300 text-xs leading-relaxed mb-4">
                Notre assistant IA peut répondre à vos questions sur le {regulation.title.split(" ")[0]}.
              </p>
              <Link
                href={`/assistant?context=${regulation.slug}`}
                className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm py-2.5 rounded-lg transition-colors"
              >
                Interroger l&apos;assistant
              </Link>
            </div>

            {/* EUR-Lex link */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-sm text-navy-900 mb-2">Texte officiel</h3>
              <p className="text-gray-500 text-xs mb-3">
                Consultez le texte intégral sur EUR-Lex, le portail du droit de l&apos;Union européenne.
              </p>
              <a
                href={regulation.eurlex_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-navy-200 hover:border-navy-400 text-navy-700 hover:text-navy-900 font-medium text-sm py-2.5 rounded-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Voir sur EUR-Lex
              </a>
            </div>

            {/* Info card */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-xs leading-relaxed">
                <strong>Note pédagogique :</strong> Ce résumé est destiné à des fins d&apos;apprentissage.
                Pour toute application pratique, référez-vous au texte officiel.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
