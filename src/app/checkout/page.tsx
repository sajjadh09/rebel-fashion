"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { useStore } from "@/components/store-provider";
import { formatPrice } from "@/lib/store-data";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal } = useStore();
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States",
    payment: "Credit card",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shipping = subtotal > 150 ? 0 : 18;
  const tax = subtotal * 0.08;
  const estimatedTotal = subtotal + shipping + tax;

  const orderItemCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    Object.entries({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      city: form.city,
      postalCode: form.postalCode,
    }).forEach(([key, value]) => {
      if (!value.trim()) {
        nextErrors[key] = "This field is required.";
      }
    });

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (form.email && !emailValid) {
      nextErrors.email = "Please use a valid email address.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      router.push("/checkout/success");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-10 text-center shadow-[0_12px_30px_rgba(91,64,50,0.04)]">
          <h1 className="text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Checkout is ready</h1>
          <p className="mt-3 text-base text-[color:var(--brand-charcoal)]/70">Your bag is currently empty. Add a few pieces before continuing.</p>
          <Link href="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Browse styles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Checkout</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Review your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form onSubmit={onSubmit} className="space-y-8 rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-6 shadow-[0_16px_35px_rgba(91,64,50,0.04)]">
          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.email ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.email}</span> : null}
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Delivery</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">First name</span>
                <input
                  value={form.firstName}
                  onChange={(event) => setForm({ ...form, firstName: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.firstName ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.firstName}</span> : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Last name</span>
                <input
                  value={form.lastName}
                  onChange={(event) => setForm({ ...form, lastName: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.lastName ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.lastName}</span> : null}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Address</span>
                <input
                  value={form.address}
                  onChange={(event) => setForm({ ...form, address: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.address ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.address}</span> : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">City</span>
                <input
                  value={form.city}
                  onChange={(event) => setForm({ ...form, city: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.city ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.city}</span> : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Postal code</span>
                <input
                  value={form.postalCode}
                  onChange={(event) => setForm({ ...form, postalCode: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
                {errors.postalCode ? <span className="mt-2 block text-sm text-[#A13E3E]">{errors.postalCode}</span> : null}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[color:var(--brand-charcoal)]">Country</span>
                <input
                  value={form.country}
                  onChange={(event) => setForm({ ...form, country: event.target.value })}
                  className="w-full rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
                />
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Payment</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {['Credit card', 'PayPal', 'Bank transfer'].map((payment) => (
                <button
                  key={payment}
                  type="button"
                  onClick={() => setForm({ ...form, payment })}
                  className={
                    form.payment === payment
                      ? "rounded-2xl border-2 border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/10 px-4 py-3 text-sm font-medium text-[color:var(--brand-deep)]"
                      : "rounded-2xl border border-[color:var(--brand-border)] bg-white px-4 py-3 text-sm font-medium text-[color:var(--brand-charcoal)]"
                  }
                >
                  {payment}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-[color:var(--brand-charcoal)]/65">
              This frontend intentionally does not collect or store real card details. Payment processing is reserved for backend integration.
            </p>
          </div>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Review order
          </button>
        </form>

        <aside className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-6 shadow-[0_16px_35px_rgba(91,64,50,0.04)]">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Order summary</h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-[color:var(--brand-cream)] p-3">
                <div className="flex gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-[color:var(--brand-ivory)]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-[color:var(--brand-deep)]">{item.name}</p>
                    <p className="text-xs text-[color:var(--brand-charcoal)]/70">Qty {item.quantity}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-[color:var(--brand-deep)]">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm text-[color:var(--brand-charcoal)]/75">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
            <div className="flex justify-between"><span>Estimated tax</span><span>{formatPrice(tax)}</span></div>
            <div className="flex justify-between border-t border-[color:var(--brand-border)] pt-3 text-base font-semibold text-[color:var(--brand-deep)]"><span>Total</span><span>{formatPrice(estimatedTotal)}</span></div>
          </div>

          <p className="mt-5 text-xs leading-6 text-[color:var(--brand-charcoal)]/60">
            {orderItemCount} item{orderItemCount > 1 ? "s" : ""} in bag • Final pricing and shipping will be calculated after backend integration.
          </p>
        </aside>
      </div>
    </div>
  );
}
