"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { useStore } from "@/components/store-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=new-arrivals", label: "New Arrivals" },
  { href: "/shop?category=women", label: "Women" },
  { href: "/shop?category=men", label: "Men" },
  { href: "/shop?category=streetwear", label: "Collections" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = search.trim();
    if (!trimmed) {
      router.push("/shop");
      return;
    }

    router.push(`/shop?search=${encodeURIComponent(trimmed)}`);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--brand-border)] bg-[color:var(--brand-cream)]/85 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white text-xl text-[color:var(--brand-deep)] lg:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>

            <Link href="/" className="flex items-center gap-2" aria-label="Rebel Fashion home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-base font-bold text-[color:var(--brand-deep)]">
                RF
              </span>
              <span className="text-xl font-semibold tracking-[0.18em] text-[color:var(--brand-deep)]">REBEL</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("/shop") && pathname.startsWith("/shop"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)]"
                      : "rounded-full px-4 py-2 text-sm font-medium text-[color:var(--brand-charcoal)]/80 hover:bg-[color:var(--brand-soft)]"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden flex-1 justify-center md:flex">
            <form onSubmit={onSearch} className="w-full max-w-md">
              <label className="sr-only" htmlFor="header-search">
                Search products
              </label>
              <div className="flex items-center gap-2 rounded-full border border-[color:var(--brand-border)] bg-white px-3 py-2 shadow-sm">
                <span className="text-base text-[color:var(--brand-deep)]">⌕</span>
                <input
                  id="header-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search styles"
                  className="w-full border-none bg-transparent text-sm text-[color:var(--brand-charcoal)] placeholder:text-[color:var(--brand-charcoal)]/50 focus:outline-none"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/signin" className="hidden rounded-full border border-[color:var(--brand-border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-charcoal)] md:inline-flex">
              Sign in
            </Link>
            <Link href="/wishlist" className="hidden rounded-full border border-[color:var(--brand-border)] bg-white px-3 py-2 text-sm font-medium text-[color:var(--brand-charcoal)] sm:inline-flex">
              Wishlist
            </Link>
            <Link href="/cart" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-lg text-[color:var(--brand-deep)] shadow-sm">
              👜
              {itemCount > 0 ? (
                <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--brand-deep)] px-1 text-[10px] font-semibold text-white">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-[color:var(--brand-border)] py-4 lg:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-3 py-2 text-sm font-medium text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <form onSubmit={onSearch} className="mt-4">
              <label className="sr-only" htmlFor="mobile-search">
                Search products
              </label>
              <div className="flex items-center gap-2 rounded-full border border-[color:var(--brand-border)] bg-white px-3 py-2">
                <span className="text-base text-[color:var(--brand-deep)]">⌕</span>
                <input
                  id="mobile-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search styles"
                  className="w-full border-none bg-transparent text-sm text-[color:var(--brand-charcoal)] placeholder:text-[color:var(--brand-charcoal)]/50 focus:outline-none"
                />
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </header>
  );
}
