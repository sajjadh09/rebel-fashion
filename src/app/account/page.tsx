import Link from "next/link";

const accountSummary = [
  { label: "Saved items", value: "12" },
  { label: "Orders placed", value: "03" },
  { label: "Shipping address", value: "2 saved" },
];

const recentOrders = [
  { id: "RF-1024", status: "Processing", total: "$196" },
  { id: "RF-0891", status: "Shipped", total: "$240" },
  { id: "RF-0714", status: "Delivered", total: "$142" },
];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]/75">Account</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Welcome back, Maya</h1>
        </div>
        <Link href="/signin" className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]">
          Sign out
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {accountSummary.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-6 shadow-[0_12px_30px_rgba(91,64,50,0.04)]">
            <p className="text-sm text-[color:var(--brand-charcoal)]/70">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--brand-deep)]">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-6 shadow-[0_16px_35px_rgba(91,64,50,0.04)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Recent orders</h2>
            <Link href="/shop" className="text-sm font-medium text-[color:var(--brand-deep)] hover:text-[color:var(--brand-primary)]">
              Shop again
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-cream)] px-4 py-3">
                <div>
                  <p className="font-medium text-[color:var(--brand-deep)]">{order.id}</p>
                  <p className="text-sm text-[color:var(--brand-charcoal)]/70">Status: {order.status}</p>
                </div>
                <span className="text-sm font-semibold text-[color:var(--brand-deep)]">{order.total}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-soft)]/40 p-6 shadow-[0_16px_35px_rgba(91,64,50,0.04)]">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-deep)]">Profile</h2>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--brand-charcoal)]/75">
            <li className="flex items-center justify-between"><span>Name</span><span>Maya West</span></li>
            <li className="flex items-center justify-between"><span>Email</span><span>maya@rebelfashion.demo</span></li>
            <li className="flex items-center justify-between"><span>Wishlist</span><span>12 saved</span></li>
            <li className="flex items-center justify-between"><span>Delivery</span><span>Brooklyn, NY</span></li>
          </ul>
          <div className="mt-6">
            <Link href="/wishlist" className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
              View wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
