import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-dark-2 px-[5%] py-28">
      <p className="section-tag">How It Works</p>
      <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.1] text-white mb-20 max-w-md">
        A proven four-step engagement model.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
        {/* Connector line (desktop) */}
        <div className="absolute top-6 left-12 right-12 h-px bg-dark-4/60 hidden lg:block" />

        {PROCESS_STEPS.map((step, i) => (
          <div key={step.number} className="p-8 relative">
            <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-8 bg-dark-2 relative z-10">
              <span className="font-serif text-lg text-gold">{step.number}</span>
            </div>
            <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
            <p className="text-sm text-muted leading-[1.85]">{step.description}</p>
            {i < PROCESS_STEPS.length - 1 && (
              <div className="absolute top-6 right-0 text-dark-4 text-2xl hidden lg:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
