import { MARQUEE_ITEMS } from "@/lib/data";

export default function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-y border-dark-4/50 py-4 bg-dark-2 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="text-xs tracking-[0.22em] uppercase text-muted">
              {item}
            </span>
            <span className="text-gold text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
