"use client";

import { useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/data";
import type { ContactFormData, ApiResponse } from "@/types";

const INITIAL: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: ApiResponse = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative px-[5%] py-28 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="section-tag justify-center before:hidden">Get Started</p>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-white mb-4">
          Your next move<br />starts{" "}
          <em className="text-gold not-italic italic">here.</em>
        </h2>
        <p className="text-muted text-sm leading-relaxed mb-14 max-w-md mx-auto">
          Tell us about your goals and we'll be in touch within 24 hours to
          schedule a complimentary discovery call.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs tracking-[0.1em] uppercase text-muted">
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className="bg-transparent border border-dark-4 text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-dark-4"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs tracking-[0.1em] uppercase text-muted">
            Email *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            className="bg-transparent border border-dark-4 text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-dark-4"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs tracking-[0.1em] uppercase text-muted">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="bg-transparent border border-dark-4 text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-dark-4"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs tracking-[0.1em] uppercase text-muted">
            Service *
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="bg-dark-2 border border-dark-4 text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-1">
          <label className="text-xs tracking-[0.1em] uppercase text-muted">
            Tell us about your goals *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Where are you now and where do you want to be?"
            className="bg-transparent border border-dark-4 text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-dark-4 resize-none"
          />
        </div>

        {status === "error" && (
          <p className="sm:col-span-2 text-xs text-red-400">{errorMsg}</p>
        )}

        {status === "success" && (
          <p className="sm:col-span-2 text-xs text-green-400 tracking-wide">
            ✓ Thank you! We'll be in touch within 24 hours.
          </p>
        )}

        <div className="sm:col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[220px]"
          >
            {status === "loading" ? "Sending..." : "Request a Discovery Call"}
          </button>
        </div>
      </form>
    </section>
  );
}
