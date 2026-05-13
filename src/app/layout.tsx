import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexCareer — Executive Career Consulting",
  description:
    "Strategic career consulting for ambitious professionals. Career coaching, resume optimization, job search strategy, and career transition support.",
  keywords:
    "career consulting, executive coaching, resume optimization, LinkedIn, job search, career transition",
  openGraph: {
    title: "ApexCareer — Executive Career Consulting",
    description:
      "Navigate your career with intention and precision. Strategic guidance for ambitious professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
