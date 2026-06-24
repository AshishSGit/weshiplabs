import { SITE } from "@/lib/constants";

/**
 * WeShipLabs brand mark + wordmark.
 * The mark is a faceted paper plane (ship / send) inside a gradient squircle:
 * two folded-paper facets give it depth, a top sheen + inner light edge make it
 * read as a crafted app icon. The wordmark emphasizes the verb "Ship".
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
            <linearGradient id="wsl-badge" x1="3" y1="2" x2="37" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="0.55" stopColor="#6D28D9" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="wsl-sheen" x1="20" y1="1" x2="20" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.28" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* squircle badge + sheen + crisp inner edge */}
          <rect x="1" y="1" width="38" height="38" rx="12" fill="url(#wsl-badge)" />
          <rect x="1" y="1" width="38" height="38" rx="12" fill="url(#wsl-sheen)" />
          <rect x="1.5" y="1.5" width="37" height="37" rx="11.5" fill="none" stroke="#fff" strokeOpacity="0.18" />
          {/* paper plane: bright right facet + dimmer left fold for 3D depth */}
          <path d="M30.5 9.5 L18.5 21 L22 30.5 Z" fill="#fff" />
          <path d="M30.5 9.5 L9.5 18 L18.5 21 Z" fill="#fff" fillOpacity="0.78" />
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
