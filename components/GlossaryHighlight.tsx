"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary-terms";

/* ─── Normalize apostrophes (straight vs typographic) ─────── */
const normalize = (s: string) =>
  s.toLowerCase().replace(/[’‘‛`´]/g, "'");

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
        className="font-medium text-blue-600 dark:text-blue-400 underline decoration-dashed decoration-blue-400 underline-offset-2 cursor-help hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={(e) => {
          const related = e.relatedTarget as Node;
          if (ref.current?.contains(related)) return;
          setOpen(false);
        }}
        onClick={(e) => { e.preventDefault(); setOpen((v) => !v); }}
      >
        {children}
      </span>

      {open && (
        <span
          className="absolute bottom-full left-0 mb-2 z-50 w-72 bg-navy-950 dark:bg-gray-800 text-white rounded-xl p-4 shadow-xl border border-navy-800 dark:border-gray-600 block"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="block text-xs font-bold text-blue-400 mb-1 uppercase tracking-wide">
            {termData.term}
          </span>
          <span className="block text-navy-200 dark:text-gray-300 text-xs leading-relaxed mb-3">
            {termData.definition}
          </span>
          <Link
            href={`/glossaire#letter-${termData.letter}`}
            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
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
export function HighlightedText({ text }: { text: string }) {
  const segments = useMemo(() => {
    if (!text) return [{ type: "text" as const, value: "" }];

    // All variants sorted longest-first to avoid partial matches
    const allVariants = glossaryTerms
      .flatMap((t) => t.variants.map((v) => ({ variant: v, termData: t })))
      .sort((a, b) => b.variant.length - a.variant.length);

    // Build regex with escaped variants
    const escaped = allVariants.map(({ variant }) =>
      normalize(variant).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");

    // Normalize text for matching but keep original for display
    const normalizedText = normalize(text);
    const parts: Array<{ type: "text" | "term"; value: string; termData?: GlossaryTerm }> = [];

    let lastIndex = 0;
    let match: RegExpExecArray | null;
    regex.lastIndex = 0;

    while ((match = regex.exec(normalizedText)) !== null) {
      // Text before match
      if (match.index > lastIndex) {
        parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
      }
      // Find which term matched
      const matchedNorm = normalize(match[0]);
      const found = allVariants.find(
        ({ variant }) => normalize(variant) === matchedNorm
      );
      if (found) {
        parts.push({
          type: "term",
          value: text.slice(match.index, match.index + match[0].length),
          termData: found.termData,
        });
      } else {
        parts.push({ type: "text", value: text.slice(match.index, match.index + match[0].length) });
      }
      lastIndex = match.index + match[0].length;
    }

    // Remaining text
    if (lastIndex < text.length) {
      parts.push({ type: "text", value: text.slice(lastIndex) });
    }

    return parts;
  }, [text]);

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "term" && seg.termData ? (
          <GlossaryTooltip key={i} termData={seg.termData}>
            {seg.value}
          </GlossaryTooltip>
        ) : (
          <span key={i}>{seg.value}</span>
        )
      )}
    </>
  );
}
