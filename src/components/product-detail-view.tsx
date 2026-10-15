"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";
import { formatPrice, getRelatedProducts, type Product } from "@/lib/store-data";

export function ProductDetailView({ product }: { product: Product }) {
  const { addToCart } = useStore();
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToBag = () => {
    if (product.colors.length > 0 && !selectedColor) {
      setError("Please select a colour before adding this item to your bag.");
      return;
    }

    if (product.sizes.length > 0 && !selectedSize) {
      setError("Please select a size before adding this item to your bag.");
      return;
    }

    addToCart({ product, color: selectedColor, size: selectedSize, quantity });
    setError("");
    setSuccess(`${product.name} has been added to your bag.`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-3 text-sm text-[color:var(--brand-charcoal)]/70">
        <Link href="/" className="hover:text-[color:var(--brand-deep)]">Home</Link>
        <span>•</span>
        <Link href="/shop" className="hover:text-[color:var(--brand-deep)]">Shop</Link>
        <span>•</span>
        <span className="text-[color:var(--brand-deep)]">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-ivory)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image, index) => (
              <div key={`${image}-${index}`} className="relative overflow-hidden rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-ivory)]">
                <div className="relative aspect-[3/4]">
                  <Image src={image} alt={`${product.name} view ${index + 1}`} fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center gap-2">
              {product.badge ? (
                <span className="rounded-full bg-[color:var(--brand-primary)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
                  {product.badge}
                </span>
              ) : null}
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">{product.name}</h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold text-[color:var(--brand-deep)]">{formatPrice(product.price)}</span>
              {product.compareAtPrice ? (
                <span className="text-lg text-[color:var(--brand-charcoal)]/60 line-through">{formatPrice(product.compareAtPrice)}</span>
              ) : null}
            </div>
          </div>

          <p className="text-base leading-7 text-[color:var(--brand-charcoal)]/75">{product.description}</p>

          {product.colors.length > 0 ? (
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-deep)]">Colour</span>
                <span className="text-sm text-[color:var(--brand-charcoal)]/70">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={
                      selectedColor === color
                        ? "rounded-full border-2 border-[color:var(--brand-deep)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)]"
                        : "rounded-full border border-[color:var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-charcoal)]"
                    }
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.sizes.length > 0 ? (
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-deep)]">Size</span>
                <span className="text-sm text-[color:var(--brand-charcoal)]/70">{selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={
                      selectedSize === size
                        ? "flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-semibold text-[color:var(--brand-deep)]"
                        : "flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white text-sm font-medium text-[color:var(--brand-charcoal)]"
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-1">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="flex h-11 w-11 items-center justify-center text-xl text-[color:var(--brand-deep)]"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="min-w-10 text-center text-sm font-semibold text-[color:var(--brand-deep)]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(9, value + 1))}
                className="flex h-11 w-11 items-center justify-center text-xl text-[color:var(--brand-deep)]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToBag}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-sm hover:bg-[color:var(--brand-secondary)]"
            >
              Add to bag
            </button>
          </div>

          {error ? <p className="text-sm font-medium text-[#A13E3E]">{error}</p> : null}
          {success ? <p className="text-sm font-medium text-[#276B49]">{success}</p> : null}

          <div className="grid gap-4 rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-soft)]/35 p-5 text-sm text-[color:var(--brand-charcoal)]/80 sm:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Material</p>
              <p className="mt-2">{product.material}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Fit</p>
              <p className="mt-2">{product.fit}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Care</p>
              <p className="mt-2">{product.care}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Shipping</p>
              <p className="mt-2">{product.shipping}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Recommended</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--brand-deep)]">Complete the look</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
