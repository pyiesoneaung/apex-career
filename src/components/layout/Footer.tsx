import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-dark-4/50 px-[5%] py-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark">
      <Link href="/" className="font-serif text-xl tracking-widest text-muted">
        Apex<span className="text-gold">Career</span>
      </Link>

      <div className="flex gap-6 flex-wrap justify-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs tracking-[0.12em] uppercase text-dark-4 hover:text-gold transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/privacy" className="text-xs tracking-[0.12em] uppercase text-dark-4 hover:text-gold transition-colors">
          Privacy
        </Link>
      </div>

      <p className="text-xs text-dark-4">
        © {new Date().getFullYear()} ApexCareer
      </p>
    </footer>
  );
}
