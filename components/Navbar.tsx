"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/reglements", label: "Règlements" },
  { href: "/cartographie", label: "Cartographie" },
  { href: "/fiches", label: "Fiches" },
  { href: "/glossaire", label: "Glossaire" },
  { href: "/quiz", label: "Quiz" },
  { href: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-widest text-sm uppercase">EuraLex<span className="text-gold-400">Map</span></span>
            <span className="text-navy-400 text-[10px] tracking-widest uppercase font-medium">Droit du numérique européen</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy-800 text-gold-400"
                      : "text-navy-200 hover:text-white hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="text-navy-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-navy-800"
            aria-label="Basculer le mode sombre"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-navy-800 text-gold-400"
                    : "text-navy-200 hover:text-white hover:bg-navy-800"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
