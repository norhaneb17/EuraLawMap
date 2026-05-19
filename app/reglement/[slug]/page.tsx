import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import RegulationTabs from "@/components/RegulationTabs";
import { regulationsData, getRegulationById } from "@/lib/regulations-data";

export async function generateStaticParams() {
  return regulationsData.map((r) => ({ slug: r.id }));
}

export default function RegulationPage({ params }: { params: { slug: string } }) {
  const regulation = getRegulationById(params.slug);

  if (!regulation) {
    notFound();
  }

  return (
    <div>
      <div className="bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link
            href="/reglements"
            className="inline-flex items-center gap-1.5 text-navy-400 hover:text-white text-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Tous les textes
          </Link>
        </div>
      </div>
      <RegulationTabs regulation={regulation} />
    </div>
  );
}
