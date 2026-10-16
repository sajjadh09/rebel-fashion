"use client";

import Image from "next/image";
import Link from "next/link";

import { useStore } from "@/components/store-provider";
import { formatPrice, type Product } from "@/lib/store-data";

export function ProductCard({ product }: { product: Product }) {
  const { isWishlisted, toggleWishlist } = useStore();

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] shadow-[0_18px_45px_rgba(91,64,50,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(91,64,50,0.12)]">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden rounded-t-[28px]">
         <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--brand-ivory)]">
  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>
        </Link>

        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[color:var(--brand-primary)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          aria-label={isWishlisted(product.id) ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 backdrop-blur-sm transition hover:bg-white"
        >
          <span className="text-lg text-[color:var(--brand-deep)] select-none">
            {isWishlisted(product.id) ? "♥" : "♡"}
          </span>
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <Link href={`/product/${product.slug}`} className="block flex-1 text-left">
              <h3 className="text-lg font-semibold text-[color:var(--brand-charcoal)]">{product.name}</h3>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-[color:var(--brand-deep)]">{formatPrice(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-sm text-[color:var(--brand-charcoal)]/60 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-full border border-[color:var(--brand-border)]"
                style={{ backgroundColor: color.toLowerCase() === "ivory" ? "#F3E7D7" : color.toLowerCase() === "sand" ? "#D9C1A3" : color.toLowerCase() === "mocha" ? "#7B5D49" : color.toLowerCase() === "cocoa" ? "#6E4F3C" : color.toLowerCase() === "black" ? "#1F1F1F" : "#D6C8B7" }}
                aria-label={color}
              />
            ))}
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="rounded-full border border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
