"use client";

import { FormEvent, useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalized = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for joining. We’ll share new edits and early access soon.");
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-8 shadow-[0_20px_50px_rgba(91,64,50,0.05)] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/80">Join the list</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)] sm:text-4xl">
              Early access to new drops and quiet luxury staples.
            </h2>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="w-full rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-5 py-3.5 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
                Subscribe
              </button>
              <span className="text-sm text-[color:var(--brand-charcoal)]/65">Front-end only. Real email signup needs backend integration.</span>
            </div>
            {status !== "idle" ? (
              <p
                aria-live="polite"
                className={status === "success" ? "text-sm font-medium text-[#276B49]" : "text-sm font-medium text-[#A13E3E]"}
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
