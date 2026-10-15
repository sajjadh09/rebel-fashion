import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-white)] p-10 text-center shadow-[0_20px_50px_rgba(91,64,50,0.04)]">
        <span className="inline-flex rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
          Order review complete
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[color:var(--brand-deep)]">Ready for backend confirmation.</h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--brand-charcoal)]/75">
          This demo front end is prepared for the order-creation flow, payment handoff, and confirmation handling that the backend developer will connect.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-secondary)]">
            Continue shopping
          </Link>
          <Link href="/account" className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-soft)]">
            View account
          </Link>
        </div>
      </div>
    </div>
  );
}
