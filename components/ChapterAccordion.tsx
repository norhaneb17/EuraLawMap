"use client";

import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import { Chapter } from "@/lib/types";

export default function ChapterAccordion({ chapters }: { chapters: Chapter[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!chapters.length) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        Les chapitres de ce règlement seront disponibles prochainement.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {chapters.map((chapter) => {
        const isOpen = openId === chapter.id;
        return (
          <div
            key={chapter.id}
            className={`border rounded-xl overflow-hidden transition-all ${
              isOpen ? "border-navy-300 shadow-sm" : "border-gray-200"
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenId(isOpen ? null : chapter.id)}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-100 text-navy-700 text-xs font-bold flex items-center justify-center">
                  {chapter.chapter_number}
                </span>
                <span className="font-medium text-navy-900 text-sm">{chapter.title}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 bg-navy-50/40 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed mt-3 mb-4">
                  {chapter.summary}
                </p>
                {chapter.key_articles.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <BookOpen className="w-3.5 h-3.5 text-navy-400" />
                    <span className="text-xs text-navy-500 font-medium">Articles clés :</span>
                    {chapter.key_articles.map((art) => (
                      <span
                        key={art}
                        className="text-xs bg-white border border-navy-200 text-navy-700 px-2 py-0.5 rounded font-mono"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
