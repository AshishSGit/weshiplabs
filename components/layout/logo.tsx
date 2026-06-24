import { SITE } from "@/lib/constants";

/**
 * WeShipLabs brand mark + wordmark.
 * The mark is a dimensional paper plane (ship / send) inside a glossy gradient
 * squircle, with a soft outer glow halo and a short speed contrail behind it
 * (the "ship fast" cue). The wordmark emphasizes the verb "Ship".
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
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        {/* soft constant glow halo */}
        <span className="absolute -inset-1.5 rounded-[14px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-40 blur-md" />
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
        >
          <defs>
            <linearGradient id="wsl-badge" x1="3" y1="2" x2="37" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="wsl-sheen" x1="20" y1="1" x2="20" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.34" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wsl-plane" x1="14" y1="9" x2="24" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#E9E3FF" />
            </linearGradient>
          </defs>
          {/* squircle badge + glossy sheen + crisp inner light edge */}
          <rect x="1" y="1" width="38" height="38" rx="12" fill="url(#wsl-badge)" />
          <rect x="1" y="1" width="38" height="38" rx="12" fill="url(#wsl-sheen)" />
          <rect x="1.5" y="1.5" width="37" height="37" rx="11.5" fill="none" stroke="#fff" strokeOpacity="0.22" />
          {/* speed contrail behind the plane (lower-left), motion streaks */}
          <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1.7" strokeLinecap="round">
            <path d="M6.5 23.5 L11 21.7" />
            <path d="M8.5 28 L13.5 25.9" />
          </g>
          {/* paper plane: bright right facet + dimmer left fold for 3D depth */}
          <path d="M30.5 9.5 L18.5 21 L22 30.5 Z" fill="url(#wsl-plane)" />
          <path d="M30.5 9.5 L9.5 18 L18.5 21 Z" fill="#fff" fillOpacity="0.72" />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-heading font-bold tracking-tight leading-none">
          <span className="text-text-primary">We</span>
          <span className="gradient-text">Ship</span>
          <span className="text-slate-300">{SITE.name.replace("WeShip", "")}</span>
        </span>
      )}
    </span>
  );
}
