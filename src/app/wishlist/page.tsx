"use client";

import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";
import { products } from "@/lib/store-data";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useStore();
  const savedProducts = products.filter((product) => wishlist.includes(product.id));

  if (savedProducts.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-10 text-center shadow-[0_12px_30px_rgba(91,64,50,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Wishlist</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Your saved pieces are empty</h1>
          <p className="mt-3 text-base text-[color:var(--brand-charcoal)]/70">Keep a shortlist of styles you want to revisit later.</p>
          <Link href="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Browse the collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Wishlist</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Saved for later</h1>
        </div>
        <button type="button" onClick={() => wishlist.forEach((id) => toggleWishlist(id))} className="text-sm font-medium text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">
          Clear wishlist
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {savedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
