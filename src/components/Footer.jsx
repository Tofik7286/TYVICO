import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Footer — logo, repeated nav links, contact info, copyright.
 * Visually calm and functional.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12 md:py-16"
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <Logo size={28} />
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--text-tertiary)' }}
            >
              AI-first IT services — websites, apps, software, and digital marketing
              for businesses that need things built right.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm no-underline transition-colors duration-200 hover:opacity-80"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-5">
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Contact
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <a
                  href="mailto:tyvico.tech@gmail.com"
                  className="text-sm no-underline transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  tyvico.tech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917048786234"
                  className="text-sm no-underline transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7048786234 (WhatsApp)
                </a>
              </li>
              <li
                className="text-sm"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Ahmedabad, India
              </li>
            </ul>

            {/* Social links placeholder — uncomment when URLs are available */}
            {/*
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="...">...</a>
              <a href="#" aria-label="Twitter" className="...">...</a>
              <a href="#" aria-label="Instagram" className="...">...</a>
            </div>
            */}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-10 pt-6 border-t text-xs"
          style={{
            borderColor: 'var(--border-color)',
            color: 'var(--text-tertiary)',
          }}
        >
          © {currentYear} TYVICO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
