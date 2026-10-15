"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { ProductCard } from "@/components/product-card";
import { categories, formatPrice, products } from "@/lib/store-data";

export default function ShopPage() {
  const params = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(params.get("search") ?? "");
  const [selectedCategory, setSelectedCategory] = useState(params.get("category") ?? "all");
  const [sortBy, setSortBy] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(320);

  useEffect(() => {
    setSearchTerm(params.get("search") ?? "");
    setSelectedCategory(params.get("category") ?? "all");
  }, [params]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const nextProducts = products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      const matchesSearch =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      return matchesCategory && matchesPrice && matchesSearch;
    });

    switch (sortBy) {
      case "low-to-high":
        return [...nextProducts].sort((a, b) => a.price - b.price);
      case "high-to-low":
        return [...nextProducts].sort((a, b) => b.price - a.price);
      case "newest":
        return [...nextProducts].sort((a, b) => (a.badge === "New" ? -1 : 1) - (b.badge === "New" ? -1 : 1));
      default:
        return [...nextProducts].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [maxPrice, searchTerm, selectedCategory, sortBy]);

  const categoryLabel =
    selectedCategory === "all"
      ? "All styles"
      : categories.find((category) => category.slug === selectedCategory)?.name ?? "Selected style";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Shop the collection</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">{categoryLabel}</h1>
        </div>
        <div className="text-sm text-[color:var(--brand-charcoal)]/70">
          Showing <span className="font-semibold text-[color:var(--brand-deep)]">{filteredProducts.length}</span> styles
        </div>
      </div>

      <div className="mb-8 rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-4 shadow-[0_12px_30px_rgba(91,64,50,0.04)]">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.7fr_0.6fr]">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Search products</span>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search suede, blazer, denim..."
              className="w-full rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="w-full rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)] outline-none transition focus:border-[color:var(--brand-primary)]"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="low-to-high">Price: low to high</option>
              <option value="high-to-low">Price: high to low</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">Max price</span>
            <div className="rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3 text-sm text-[color:var(--brand-charcoal)]">
              {formatPrice(maxPrice)}
              <input
                type="range"
                min="80"
                max="320"
                step="10"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="mt-2 w-full accent-[color:var(--brand-primary)]"
              />
            </div>
          </label>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("all");
            setSearchTerm("");
            setSortBy("featured");
            setMaxPrice(320);
          }}
          className="rounded-full border border-[color:var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]"
        >
          Reset filters
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setSelectedCategory(category.slug)}
            className={
              selectedCategory === category.slug
                ? "rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)]"
                : "rounded-full border border-[color:var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]"
            }
          >
            {category.name}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[30px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-10 text-center">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">No styles match your filters</h2>
          <p className="mt-3 text-[color:var(--brand-charcoal)]/70">
            Try a different category, lower your price cap, or clear the search to explore more pieces.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchTerm("");
              setSortBy("featured");
              setMaxPrice(320);
            }}
            className="mt-6 inline-flex rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]"
          >
            Reset filters
          </button>
        </div>
      )}

      <div className="mt-10 rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-soft)]/45 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Need inspiration?</p>
            <h3 className="mt-2 text-2xl font-semibold text-[color:var(--brand-deep)]">Build a capsule wardrobe around your essentials.</h3>
          </div>
          <Link href="/shop?category=essentials" className="inline-flex w-fit items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)]">
            Explore essentials
          </Link>
        </div>
      </div>
    </div>
  );
}
