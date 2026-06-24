import { SITE } from "@/lib/constants";

/**
 * WeShipLabs brand mark + wordmark.
 * The mark is an upward "launch/ship" arrow inside a gradient badge — momentum,
 * shipping fast. The wordmark emphasizes the verb "Ship" with the brand gradient.
 */
export default function Logo({
  size = 30,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="relative shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wsl-mark" x1="4" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="0.5" stopColor="#7C3AED" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#wsl-mark)" />
          {/* upward launch arrow */}
          <path
            d="M20 8.5 L30 28.5 L20 23.2 L10 28.5 Z"
            fill="#fff"
          />
          {/* motion spark beneath */}
          <circle cx="20" cy="31.5" r="1.7" fill="#fff" opacity="0.9" />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-heading font-bold tracking-tight leading-none">
          <span className="text-text-primary">We</span>
          <span className="gradient-text">Ship</span>
          <span className="text-text-primary">{SITE.name.replace("WeShip", "")}</span>
        </span>
      )}
    </span>
  );
}
