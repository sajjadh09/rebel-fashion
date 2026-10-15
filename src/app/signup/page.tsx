"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.password.trim()) {
      setError("Please complete every field before creating your account.");
      return;
    }

    setError("");
    window.location.href = "/account";
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-8 shadow-[0_18px_40px_rgba(91,64,50,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">New here</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Create account</h1>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">First name</span>
              <input
                value={form.firstName}
                onChange={(event) => setForm({ ...form, firstName: event.target.value })}
                className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Last name</span>
              <input
                value={form.lastName}
                onChange={(event) => setForm({ ...form, lastName: event.target.value })}
                className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Password</span>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
            />
          </label>

          {error ? <p className="text-sm font-medium text-[#A13E3E]">{error}</p> : null}

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[color:var(--brand-charcoal)]/70">
          Already have an account? <Link href="/signin" className="font-semibold text-[color:var(--brand-deep)]">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
