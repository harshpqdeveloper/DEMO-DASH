import React from "react";

// Generic "PQ Dash" wordmark used everywhere the app used to show the
// company's logo image. No image asset needed — pure CSS/SVG so it stays
// crisp at any size and carries no real branding.

const SIZES = {
  small: { icon: 22, font: 15, tagline: false },
  large: { icon: 40, font: 28, tagline: true },
  xl: { icon: 56, font: 38, tagline: true },
};

export function PQLogo({ size = "large", style }) {
  const s = SIZES[size] || SIZES.large;
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 4, ...style }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: s.icon / 3.5 }}>
        <svg width={s.icon} height={s.icon} viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="pq-dash-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7C3AED" />
              <stop offset=".55" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path d="M12 1.5 L21 12 L12 22.5 L3 12 Z" fill="url(#pq-dash-grad)" />
        </svg>
        <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: s.font, letterSpacing: "-.02em", display: "inline-flex" }}>
          <span style={{
            background: "linear-gradient(135deg,#7C3AED 0%,#4F46E5 55%,#3B82F6 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>PQ</span>
          <span style={{ color: "#000" }}>&nbsp;Dash</span>
        </span>
      </div>
      {s.tagline && (
        <span style={{ fontSize: 12, color: "#4F46E5", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>
          demo dashboard
        </span>
      )}
    </div>
  );
}
