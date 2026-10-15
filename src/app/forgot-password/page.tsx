"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sanitized = email.trim();

    if (!sanitized) {
      setMessage("Please enter the email linked to your account.");
      return;
    }

    setMessage("A reset link is ready for backend email delivery integration.");
    setEmail("");
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-8 shadow-[0_18px_40px_rgba(91,64,50,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Account access</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Forgot password</h1>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none focus:border-[color:var(--brand-primary)]"
              placeholder="you@example.com"
            />
          </label>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Send reset link
          </button>

          {message ? <p className="text-sm font-medium text-[color:var(--brand-deep)]">{message}</p> : null}
        </form>

        <p className="mt-6 text-center text-sm text-[color:var(--brand-charcoal)]/70">
          Back to <Link href="/signin" className="font-semibold text-[color:var(--brand-deep)]">sign in</Link>
        </p>
      </div>
    </div>
  );
}
