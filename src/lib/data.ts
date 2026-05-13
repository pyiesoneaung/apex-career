import type { Service, Testimonial, ProcessStep, Stat } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "career-coaching",
    number: "01",
    title: "Career Coaching",
    description:
      "One-on-one engagements to clarify your professional identity, unlock leadership potential, and build a career roadmap aligned to your ambitions.",
    features: [
      "Bi-weekly 60-minute coaching sessions",
      "Personalised career roadmap",
      "Leadership positioning strategy",
      "Accountability & milestone tracking",
    ],
    icon: "user",
  },
  {
    id: "resume-linkedin",
    number: "02",
    title: "Resume & LinkedIn",
    description:
      "Executive-grade personal branding — from ATS-optimised résumés to LinkedIn profiles that attract recruiters and decision-makers at top firms.",
    features: [
      "ATS-optimised résumé rewrite",
      "LinkedIn profile overhaul",
      "Personal brand narrative",
      "Two rounds of revisions",
    ],
    icon: "file-text",
  },
  {
    id: "job-search-strategy",
    number: "03",
    title: "Job Search Strategy",
    description:
      "A targeted, data-driven approach to identifying and accessing opportunities — including the hidden market, network activation, and offer negotiation.",
    features: [
      "Hidden job market access",
      "Network activation playbook",
      "Recruiter outreach templates",
      "Offer evaluation & negotiation",
    ],
    icon: "search",
  },
  {
    id: "career-transition",
    number: "04",
    title: "Career Transition",
    description:
      "Structured support for pivoting industries, re-entering the market, or stepping into entrepreneurship — with confidence and a clear strategic plan.",
    features: [
      "Industry pivot analysis",
      "Transferable skills mapping",
      "Transition timeline planning",
      "90-day onboarding support",
    ],
    icon: "trending-up",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Within eight weeks I had three executive offers on the table — two of which I would never have found on my own. The process completely changed how I think about my career.",
    author: "Sarah R.",
    role: "VP of Product",
    company: "Series B Startup",
    initials: "SR",
    result: "3 offers in 8 weeks",
  },
  {
    id: "2",
    quote:
      "I was stuck at the same level for four years. After working with ApexCareer I negotiated a 68% salary increase and moved into a Director role at a company I genuinely love.",
    author: "Marcus T.",
    role: "Director of Engineering",
    company: "Fortune 500",
    initials: "MT",
    result: "68% salary increase",
  },
  {
    id: "3",
    quote:
      "Transitioning from finance to tech felt impossible until they showed me exactly how to position my skills. I landed at a top-tier VC-backed company within 10 weeks.",
    author: "Priya K.",
    role: "Head of Strategy",
    company: "VC-backed Tech Co.",
    initials: "PK",
    result: "Industry pivot in 10 weeks",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Discovery Call",
    description:
      "We map your career history, goals, and blockers in a candid 45-minute conversation.",
  },
  {
    number: "2",
    title: "Strategy Design",
    description:
      "A tailored action plan built around your unique profile, market position, and timeline.",
  },
  {
    number: "3",
    title: "Execution",
    description:
      "Weekly coaching sessions, deliverables review, and real-time market feedback loops.",
  },
  {
    number: "4",
    title: "Placement & Beyond",
    description:
      "Offer negotiation, onboarding support, and 90-day check-ins after you land the role.",
  },
];

export const STATS: Stat[] = [
  { value: "94", suffix: "%", label: "Placement Rate" },
  { value: "3.2", suffix: "×", label: "Avg. Salary Increase" },
  { value: "1k", suffix: "+", label: "Careers Transformed" },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export const MARQUEE_ITEMS = [
  "Career Coaching",
  "Resume Strategy",
  "LinkedIn Optimization",
  "Job Search Strategy",
  "Career Transition",
  "Executive Placement",
  "Salary Negotiation",
  "Interview Mastery",
];

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}));
