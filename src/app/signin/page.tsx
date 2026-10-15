"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    window.location.href = "/account";
  };

  return (
    <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-8 shadow-[0_18px_40px_rgba(91,64,50,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Account</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Sign in</h1>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
            />
          </label>

          {error ? <p className="text-sm font-medium text-[#A13E3E]">{error}</p> : null}

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Sign in
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between gap-3 text-sm">
          <Link href="/signup" className="text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">Create account</Link>
          <Link href="/forgot-password" className="text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}
