"use client";

import { useState } from "react";
import Button from "./Button";
import Loader from "./Loader";

export default function SignupForm({ onSubmit }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password || !form.firstName) {
      setError("Please fill in email, password, and first name.");
      return;
    }
    try {
      setLoading(true);
      if (onSubmit) {
        await onSubmit(form);
      } else {
        await new Promise((r) => setTimeout(r, 1400));
      }
    } catch (e) {
      setError(e?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {error && (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label htmlFor="firstName" className="text-sm text-white/80">First name<span className="text-red-400">*</span></label>
          <input
            id="firstName"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full rounded-[10px] bg-[var(--z-muted)]/60 border border-white/10 px-3 py-2 text-sm focus-ring placeholder:text-white/40"
            placeholder="Jane"
            autoComplete="given-name"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName" className="text-sm text-white/80">Last name <span className="text-white/40">(optional)</span></label>
          <input
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full rounded-[10px] bg-[var(--z-muted)]/60 border border-white/10 px-3 py-2 text-sm focus-ring placeholder:text-white/40"
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm text-white/80">Email<span className="text-red-400">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-[10px] bg-[var(--z-muted)]/60 border border-white/10 px-3 py-2 text-sm focus-ring placeholder:text-white/40"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm text-white/80">Password<span className="text-red-400">*</span></label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-[10px] bg-[var(--z-muted)]/60 border border-white/10 px-3 py-2 text-sm focus-ring placeholder:text-white/40"
          placeholder="Create a password"
          autoComplete="new-password"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="text-white/80">
          Already have an account? <a href="/login" className="underline hover:text-white">Log in</a>
        </div>
      </div>

      <div className="pt-1">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader size={18} />
              Creating account…
            </span>
          ) : (
            "Create account"
          )}
        </Button>
      </div>
    </form>
  );
}
