"use client";
import { useState } from "react";
import Button from "./Button";

export default function NewsletterForm({ id = "newsletter" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Placeholder – wire to API later
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl" aria-labelledby={`${id}-label`}>
      <div className="flex gap-2 bg-[var(--z-surface)]/70 border border-white/10 rounded-[12px] p-2">
        <label id={`${id}-label`} className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent outline-none px-3 py-2 text-sm placeholder:text-white/50"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
      <p className="mt-2 text-xs text-white/60">
        By subscribing, you agree to receive curated news by email.
      </p>
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-red-400">
          Please enter a valid email.
        </p>
      )}
      {status === "success" && (
        <p role="status" className="mt-2 text-xs text-emerald-400">
          You’re in! Check your inbox for a confirmation.
        </p>
      )}
    </form>
  );
}
