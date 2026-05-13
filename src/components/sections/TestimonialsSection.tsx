"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section id="results" className="px-[5%] py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Quote card */}
        <div className="bg-dark-3 border border-dark-4/50 p-12 relative overflow-hidden">
          <span className="absolute top-[-2rem] left-4 font-serif text-[12rem] text-dark-4/60 leading-none select-none pointer-events-none">
            "
          </span>
          <p className="font-serif text-2xl font-light italic leading-[1.7] text-text relative z-10">
            {t.quote}
          </p>
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-dark-4/50">
            <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center font-serif text-sm text-dark font-semibold flex-shrink-0">
              {t.initials}
            </div>
            <div>
              <div className="text-white text-sm font-medium">{t.author}</div>
              <div className="text-muted text-xs mt-0.5">
                {t.role} — {t.company}
              </div>
            </div>
            <div className="ml-auto">
              <span className="text-xs tracking-[0.14em] uppercase text-gold border border-gold/30 px-3 py-1">
                {t.result}
              </span>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-0.5 transition-all duration-300 ${
                  i === active ? "w-9 bg-gold" : "w-5 bg-dark-4"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <p className="section-tag">Client Results</p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.1] text-white mb-6">
            Real outcomes,<br />measurable impact.
          </h2>
          <p className="text-muted text-sm leading-[1.9] mb-4">
            Our clients don't just find jobs — they land roles that change their
            lives. From mid-career pivots to C-suite placements, every
            engagement is built around a single outcome: your success.
          </p>
          <p className="text-muted text-sm leading-[1.9] mb-10">
            94% of our clients receive at least one offer within 90 days. The
            average salary increase across our portfolio is 3.2×.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
