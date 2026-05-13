"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-6 transition-all duration-500",
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-4/60 py-4"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/" className="font-serif text-2xl font-light tracking-widest text-white">
        Apex<span className="text-gold">Career</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted hover:text-gold text-xs tracking-[0.14em] uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contact"
        className="hidden md:inline-block bg-transparent border border-gold text-gold px-6 py-2.5 text-xs tracking-[0.14em] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
      >
        Book a Call
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-text"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-2 border-b border-dark-4 flex flex-col px-[5%] py-8 gap-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-gold text-sm tracking-[0.14em] uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
