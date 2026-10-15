import Link from "next/link";

const footerGroups = [
  {
    title: "Shop",
    items: [
      { href: "/shop", label: "All styles" },
      { href: "/shop?category=women", label: "Women" },
      { href: "/shop?category=men", label: "Men" },
      { href: "/shop?category=new-arrivals", label: "New arrivals" },
    ],
  },
  {
    title: "Support",
    items: [
      { href: "/account", label: "Account" },
      { href: "/cart", label: "Shopping bag" },
      { href: "/checkout", label: "Checkout" },
      { href: "/signin", label: "Sign in" },
    ],
  },
  {
    title: "Policies",
    items: [
      { href: "/account", label: "Shipping & returns" },
      { href: "/account", label: "Privacy policy" },
      { href: "/account", label: "Terms of service" },
      { href: "/account", label: "Care guide" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[color:var(--brand-border)] bg-[color:var(--brand-white)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-bold text-[color:var(--brand-deep)]">
                RF
              </span>
              <span className="text-xl font-semibold tracking-[0.2em] text-[color:var(--brand-deep)]">REBEL</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[color:var(--brand-charcoal)]/70">
              Elevated everyday fashion for city life, travel, and softly confident expression.
            </p>
            <div className="flex gap-3 text-sm text-[color:var(--brand-deep)]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-[color:var(--brand-border)] px-3 py-2">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="rounded-full border border-[color:var(--brand-border)] px-3 py-2">PI</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="rounded-full border border-[color:var(--brand-border)] px-3 py-2">X</a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">{group.title}</h3>
              <ul className="space-y-3 text-sm text-[color:var(--brand-charcoal)]/75">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[color:var(--brand-deep)]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--brand-border)] pt-6 text-sm text-[color:var(--brand-charcoal)]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rebel Fashion. Sample storefront demo.</p>
          <p>Designed for future backend integration.</p>
        </div>
      </div>
    </footer>
  );
}
