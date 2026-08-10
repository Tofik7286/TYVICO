/**
 * Reusable Button component with primary (accent gradient) and secondary variants.
 * Primary is used for "Book a Call" CTAs, secondary for less-prominent actions.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ariaLabel,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold text-sm rounded-lg transition-all duration-200 cursor-pointer no-underline';

  const variants = {
    primary:
      'accent-gradient text-white px-5 py-2.5 hover:opacity-90 hover:-translate-y-px active:translate-y-0',
    secondary:
      'px-5 py-2.5 border hover:bg-[var(--surface-hover)]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  // Style overrides for secondary variant border
  const style =
    variant === 'secondary'
      ? { borderColor: 'var(--border-color-strong)', color: 'var(--text-primary)' }
      : {};

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
