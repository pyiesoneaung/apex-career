import Link from "next/link";
import { User, FileText, Search, TrendingUp } from "lucide-react";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={22} strokeWidth={1.2} className="text-gold" />,
  "file-text": <FileText size={22} strokeWidth={1.2} className="text-gold" />,
  search: <Search size={22} strokeWidth={1.2} className="text-gold" />,
  "trending-up": <TrendingUp size={22} strokeWidth={1.2} className="text-gold" />,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-dark-2 p-10 border-r border-b border-dark-4/40 hover:bg-dark-3 transition-colors duration-500 group">
      <div className="font-serif text-[3.5rem] font-light text-dark-4 leading-none mb-6">
        {service.number}
      </div>
      <div className="w-10 h-10 flex items-center justify-center mb-6">
        {iconMap[service.icon]}
      </div>
      <h3 className="font-serif text-2xl font-light text-white mb-4">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-[1.9] mb-6">
        {service.description}
      </p>
      <ul className="space-y-2 mb-8">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-xs text-muted/70">
            <span className="w-3 h-px bg-gold flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={`#contact`}
        className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-gold transition-all duration-300 group-hover:gap-3"
      >
        Learn More <span>→</span>
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-[5%] py-28">
      <p className="section-tag">What We Do</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.1] text-white max-w-md">
          Four pathways to<br />career excellence.
        </h2>
        <p className="text-muted text-sm leading-relaxed max-w-sm">
          Tailored consulting engagements designed for professionals who refuse
          to leave their career to chance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-dark-4/40">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
