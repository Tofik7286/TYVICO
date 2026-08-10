import { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const WHATSAPP_URL = 'https://wa.me/917048786234?text=Hi%20TYVICO%2C%20I%27d%20like%20to%20book%20a%20call%20to%20discuss%20a%20project.';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-[1280px] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo size={32} />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium no-underline transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right: Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button href={WHATSAPP_URL} variant="primary" ariaLabel="Book a call via WhatsApp">
            Book a Call
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ color: 'var(--text-primary)', background: 'none', border: 'none' }}
          >
            {mobileOpen ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-40 flex flex-col px-6 pt-8 pb-8"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium no-underline py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-[var(--surface-hover)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-8 px-4">
            <Button
              href={WHATSAPP_URL}
              variant="primary"
              className="w-full text-base py-3"
              ariaLabel="Book a call via WhatsApp"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
