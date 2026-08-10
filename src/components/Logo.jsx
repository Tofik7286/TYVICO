/**
 * TYVICO Logo — inline SVG recreation of the geometric T+V mark
 * with the navy-to-orange/red gradient brand colors.
 */
export default function Logo({ className = '', size = 40 }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 no-underline ${className}`} aria-label="TYVICO Home">
      {/* Logo Mark SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        {/* T-stroke (navy) */}
        <path
          d="M15 15 H55 V30 H42 V75 H28 V30 H15 Z"
          fill="var(--text-primary)"
          opacity="0.9"
        />
        {/* V-stroke (gradient) */}
        <path
          d="M50 25 L70 80 L75 80 L58 25 Z M62 25 L79 80 L85 80 L68 25 Z"
          fill="url(#logo-gradient)"
        />
        {/* Small accent tick on top-right */}
        <rect x="72" y="15" width="13" height="5" rx="1" fill="url(#logo-gradient)" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="text-xl font-extrabold tracking-[0.08em]"
          style={{ color: 'var(--text-primary)' }}
        >
          TY<span className="accent-gradient-text">V</span>ICO
        </span>
        <span
          className="text-[0.5rem] font-medium tracking-[0.25em] mt-0.5"
          style={{ color: 'var(--text-tertiary)' }}
        >
          BUILD • INNOVATE • SCALE
        </span>
      </div>
    </a>
  );
}
