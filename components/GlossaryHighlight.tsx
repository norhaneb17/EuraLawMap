"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary-terms";

/* ─── Tooltip ─────────────────────────────────────────────── */
function GlossaryTooltip({
  children,
  termData,
}: {
  children: string;
  termData: GlossaryTerm;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <span ref={ref} className="relative inline">
      <span
        className="text-gold-600 dark:text-gold-400 border-b border-dashed border-gold-400 dark:border-gold-500 cursor-help transition-colors hover:text-gold-700 dark:hover:text-gold-300"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={(e) => {
          // Don't close if mouse moved into the tooltip
          const related = e.relatedTarget as Node;
          if (ref.current?.contains(related)) return;
          setOpen(false);
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {children}
      </span>

      {open && (
        <span
          className="absolute bottom-full left-0 mb-2 z-50 w-72 bg-navy-950 dark:bg-gray-800 text-white rounded-xl p-4 shadow-xl border border-navy-800 dark:border-gray-600"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="block text-xs font-bold text-gold-400 mb-1 uppercase tracking-wide">
            {termData.term}
          </span>
          <span className="block text-navy-200 dark:text-gray-300 text-xs leading-relaxed mb-3">
            {termData.definition}
          </span>
          <Link
            href={`/glossaire#letter-${termData.letter}`}
            className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Voir dans le glossaire →
          </Link>
        </span>
      )}
    </span>
  );
}

/* ─── Text parser ──────────────────────────────────────────── */
// Splits plain text into segments, wrapping glossary term matches with tooltips.
export function HighlightedText({ text }: { text: string }) {
  // Build one regex from all variants, sorted longest-first to avoid partial matches
  const allVariants = glossaryTerms.flatMap((t) =>
    t.variants.map((v) => ({ variant: v, termData: t }))
  );
  allVariants.sort((a, b) => b.variant.length - a.variant.length);

  const escaped = allVariants.map(({ variant }) =>
    variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const match = allVariants.find(
          ({ variant }) => variant.toLowerCase() === part.toLowerCase()
        );
        if (match) {
          return (
            <GlossaryTooltip key={i} termData={match.termData}>
              {part}
            </GlossaryTooltip>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
