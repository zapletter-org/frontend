"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./Icons";

export default function FAQ({ items }) {
  const faqs =
    items || [
      {
        q: "What is Zapletter?",
        a: "A fast way to turn any topic into a comprehensive briefing using curated sources and human‑style summaries.",
      },
      {
        q: "Can I trust the summaries?",
        a: "Yes—each brief links back to sources, uses neutral prompts, and is built for transparency and verification.",
      },
      {
        q: "How do I get access?",
        a: "Join the waitlist. We’ll notify you when it’s ready and share early access details.",
      },
    ];

  return (
    <div className="space-y-2">
      {faqs.map((item, idx) => (
        <FAQItem key={idx} q={item.q} a={item.a} defaultOpen={idx === 0} />
      ))}
    </div>
  );
}

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[12px] bg-[var(--z-surface)]/80 border border-white/10">
      <button
        type="button"
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
        >
          <ArrowRightIcon size={16} className="text-[#ff4500]" />
        </span>
        <span className="font-medium">{q}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 text-sm text-white/80">
          {a}
        </div>
      )}
    </div>
  );
}
