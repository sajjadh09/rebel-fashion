"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(!!mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(!!e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // A conservative dash length that covers the path length for the lightning stroke.
  const dash = 400;

  return (
    <div className={`rf-light flex items-center gap-2 ${className}`} aria-hidden={false}>
      <span className="sr-only">Rebel Fashion</span>
      <svg
        viewBox="0 0 340 48"
        className="h-8 sm:h-10 md:h-12 w-auto"
        role="img"
        aria-label="Rebel Fashion"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rf-grad" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-primary)" />
            <stop offset="100%" stopColor="var(--brand-deep)" />
          </linearGradient>
        </defs>

        <text x="0" y="36" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
              fontSize="28" fontWeight="700" fill="currentColor" style={{ letterSpacing: '0.08em' }}>
          Rebel
        </text>
        <text x="140" y="36" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
              fontSize="28" fontWeight="700" fill="currentColor" style={{ letterSpacing: '0.08em' }}>
          Fashion
        </text>

        {/* Zig-zag lightning path that animates across the text */}
        <path
          className="lightning"
          d="M8 4 L36 28 L66 2 L98 34 L130 6 L162 36 L196 8 L230 34 L268 6"
          fill="none"
          stroke="url(#rf-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.95"
          style={{ mixBlendMode: "screen" }}
        />
      </svg>

      <style>{`
        .rf-light { color: var(--brand-deep); }
        .rf-light .lightning { stroke-dasharray: ${dash}; stroke-dashoffset: ${dash}; }
        .rf-light .lightning { animation: rf-dash 900ms cubic-bezier(.2,.9,.2,1) forwards; animation-delay: 180ms; }
        @keyframes rf-dash { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .rf-light .lightning { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
