"use client";

import Image from "next/image";
import Link from "next/link";

import { useStore } from "@/components/store-provider";
import { formatPrice } from "@/lib/store-data";

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, subtotal, clearCart } = useStore();

  const shipping = subtotal > 150 ? 0 : 18;
  const tax = subtotal * 0.08;
  const estimatedTotal = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-10 text-center shadow-[0_12px_30px_rgba(91,64,50,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/70">Your bag</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Your bag is empty</h1>
          <p className="mt-3 text-base text-[color:var(--brand-charcoal)]/70">
            Add a few luxe staples and build your next wardrobe edit.
          </p>
          <Link href="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Shopping bag</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Your selected pieces</h1>
        </div>
        <button type="button" onClick={clearCart} className="text-sm font-medium text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">
          Clear bag
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-4 shadow-[0_14px_35px_rgba(91,64,50,0.04)] sm:flex-row">
              <div className="relative h-36 w-full overflow-hidden rounded-[22px] bg-[color:var(--brand-ivory)] sm:w-36">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 120px" className="object-cover" />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[color:var(--brand-deep)]">{item.name}</h2>
                    <p className="mt-1 text-sm text-[color:var(--brand-charcoal)]/70">
                      {item.color || "Default colour"} • {item.size || "One size"}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-[color:var(--brand-deep)]">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] p-1">
                    <button
                      type="button"
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center text-lg text-[color:var(--brand-deep)]"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-[color:var(--brand-deep)]">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center text-lg text-[color:var(--brand-deep)]"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button type="button" onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-[#A13E3E] hover:text-[#7D2E2E]">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-6 shadow-[0_16px_35px_rgba(91,64,50,0.04)]">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Order summary</h2>

          <div className="mt-6 space-y-4 text-sm text-[color:var(--brand-charcoal)]/75">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-[color:var(--brand-border)] pt-4 text-base font-semibold text-[color:var(--brand-deep)]">
              <span>Estimated total</span>
              <span>{formatPrice(estimatedTotal)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Link href="/checkout" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
              Proceed to checkout
            </Link>
            <Link href="/shop" className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]">
              Continue shopping
            </Link>
          </div>

          <p className="mt-5 text-xs leading-6 text-[color:var(--brand-charcoal)]/60">
            Shipping, tax, and final totals are placeholder values until the backend calculates real order rules.
          </p>
        </aside>
      </div>
    </div>
  );
}
