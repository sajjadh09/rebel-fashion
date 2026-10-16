import Image from "next/image";
import Link from "next/link";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { ProductCard } from "@/components/product-card";
import { announcement, categories, featuredProducts, products } from "@/lib/store-data";

export default function HomePage() {
  return (
    <>
      <div className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-primary)]/20">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm font-medium text-[color:var(--brand-deep)] sm:px-6 lg:px-8">
          {announcement}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="overflow-hidden rounded-[36px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] shadow-[0_28px_80px_rgba(91,64,50,0.08)]">
          <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
              <span className="mb-5 inline-flex w-fit rounded-full border border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[...]
                Everyday luxury
              </span>
              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)] sm:text-5xl lg:text-6xl">
                Style the city in soft power.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[color:var(--brand-charcoal)]/75 sm:text-lg">
                Thoughtful essentials and statement pieces for a wardrobe that moves effortlessly from sunrise meetings to late dinners.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] sh[...]">
                  Shop now
                </Link>
                <Link href="/shop?category=new-arrivals" className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white px-6 py-3 text-sm font-s[...]">
                  Explore collections
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-[color:var(--brand-charcoal)]/70">
                <div>
                  <div className="text-2xl font-semibold text-[color:var(--brand-deep)]">240+</div>
                  <div>Curated edits</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[color:var(--brand-deep)]">4.9/5</div>
                  <div>Client experience</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[color:var(--brand-deep)]">2–4d</div>
                  <div>Dispatch window</div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] bg-[linear-gradient(135deg,_rgba(196,154,120,0.28),_rgba(248,243,236,1))]">
              <div className="absolute inset-0 p-5">
                <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-[color:var(--brand-ivory)]">
                </div>
              </div>
              <div className="absolute bottom-6 left-6 rounded-[24px] border border-white/50 bg-white/65 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">Featured look</p>
                <p className="mt-2 text-xl font-semibold text-[color:var(--brand-deep)]">The City Edit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Shop by category</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--brand-deep)]">Curated collections</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${encodeURIComponent(category.slug)}`}
              className="group relative overflow-hidden rounded-[28px] border border-[color:var(--brand-border)] bg-white"
            >
              <div className="relative h-72 overflow-hidden">
+                <Image src={category.image} alt={category.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,17,0.28)] via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">{category.slug === "new-arrivals" ? "Fresh drop" : "Featured"}</p>
                <h3 className="mt-2 text-2xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">New arrivals</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--brand-deep)]">Designed to wear now</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">
            View all styles
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--brand-soft)]/55 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--brand-border)] bg-white">
            <div className="relative h-[420px]">

            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-8 shadow-[0_18px_40px_rgba(91,64,50,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/80">Campaign feature</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--brand-deep)]">The soft structure edit.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--brand-charcoal)]/75">
              Precision tailoring meets relaxed texture for a calmer wardrobe. Built around timeless staples, elevated layers, and elegant movement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[color:var(--brand-primary)]/15 px-3 py-2 text-sm font-medium text-[color:var(--brand-deep)]">Minimal layers</span>
              <span className="rounded-full bg-[color:var(--brand-primary)]/15 px-3 py-2 text-sm font-medium text-[color:var(--brand-deep)]">Premium fabric</span>
              <span className="rounded-full bg-[color:var(--brand-primary)]/15 px-3 py-2 text-sm font-medium text-[color:var(--brand-deep)]">Modern tailoring</span>
            </div>
            <Link href="/shop?category=women" className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[colo[...]">
              Shop the edit
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Trending now</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--brand-deep)]">Best-loved pieces</h2>
          </div>
        </div>

      <NewsletterSignup />
    </>
  );
}
