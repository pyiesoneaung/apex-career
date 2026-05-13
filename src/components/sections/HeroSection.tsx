"use client";

import Link from "next/link";
import { STATS } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[5%] pt-32 pb-20 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br from-[#1a1505] to-dark opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        {/* Tag */}
        <p className="section-tag animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Executive Career Consulting
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[1.04] text-white mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Navigate your career
          <br />
          with <em className="text-gold not-italic">intention</em>
          <br />
          and precision.
        </h1>

        {/* Subheadline */}
        <p
          className="text-muted text-lg font-light leading-relaxed max-w-xl mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Strategic guidance for ambitious professionals ready to accelerate
          their trajectory, command higher compensation, and step into
          leadership roles.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-5 items-center animate-fade-up opacity-0"
          style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
        >
          <Link href="#contact" className="btn-primary">
            Book a Strategy Session
          </Link>
          <Link
            href="#results"
            className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-text hover:text-gold transition-colors group"
          >
            See Our Results
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-dark-4/60 animate-fade-up opacity-0"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[2.6rem] font-light text-white leading-none">
                {stat.value}
                <span className="text-gold">{stat.suffix}</span>
              </div>
              <div className="text-xs tracking-[0.14em] uppercase text-muted mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
