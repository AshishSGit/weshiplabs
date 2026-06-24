import { ImageResponse } from "next/og";

export const alt = "WeShipLabs: Software that ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(1000px 600px at 15% 10%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(900px 600px at 95% 100%, rgba(34,211,238,0.22), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "38px",
            fontWeight: 800,
            marginBottom: "28px",
          }}
        >
          <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="og-mark" x1="4" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A78BFA" />
                <stop offset="0.5" stopColor="#7C3AED" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#og-mark)" />
            <path d="M20 8.5 L30 28.5 L20 23.2 L10 28.5 Z" fill="#fff" />
            <circle cx="20" cy="31.5" r="1.7" fill="#fff" fillOpacity="0.9" />
          </svg>
          <span>
            <span style={{ color: "#F1F5F9" }}>We</span>
            <span style={{ color: "#A78BFA" }}>Ship</span>
            <span style={{ color: "#F1F5F9" }}>Labs</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "104px",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            color: "#F1F5F9",
          }}
        >
          Your idea.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "104px",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            background: "linear-gradient(135deg, #8B5CF6, #3B82F6, #22D3EE)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "36px",
          }}
        >
          Live in weeks.
        </div>
        <div style={{ display: "flex", fontSize: "32px", color: "#C1CCDB", maxWidth: "900px" }}>
          Websites, mobile apps, and smart features. Fixed price, delivered in weeks.
        </div>
      </div>
    ),
    { ...size }
  );
}
