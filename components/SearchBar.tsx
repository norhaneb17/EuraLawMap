"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { mockRegulations } from "@/lib/mock-data";
import Link from "next/link";

export default function SearchBar({ fullWidth = false }: { fullWidth?: boolean }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof mockRegulations>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }
    const q = query.toLowerCase();
    const filtered = mockRegulations.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.slug.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.reference.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q)
    );
    setResults(filtered);
    setOpen(true);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && results.length === 1) {
      router.push(`/reglement/${results[0].slug}`);
      setQuery("");
      setOpen(false);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className={`relative ${fullWidth ? "w-full" : "w-full max-w-lg"}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Rechercher un règlement, concept..."
          className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100 transition-all shadow-sm"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); }}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500">Aucun résultat pour « {query} »</div>
          ) : (
            <ul>
              {results.map((reg) => (
                <li key={reg.slug}>
                  <Link
                    href={`/reglement/${reg.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-navy-50 transition-colors"
                    onClick={() => { setQuery(""); setOpen(false); }}
                  >
                    <span className="text-xl">{reg.icon_emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-navy-900">{reg.title}</p>
                      <p className="text-xs text-gray-400">{reg.reference}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
