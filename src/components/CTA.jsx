import Button from './Button';

const WHATSAPP_URL = 'https://wa.me/917048786234?text=Hi%20TYVICO%2C%20I%27d%20like%20to%20book%20a%20call%20to%20discuss%20a%20project.';

/**
 * CTA section — focused closing call-to-action.
 * Low clutter, one clear action.
 */
export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="fade-in-up max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Have a project in mind?
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Tell us what you&apos;re building. We&apos;ll have a quick call to understand
            your needs and let you know how we can help — no sales pitch, just a
            straightforward conversation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={WHATSAPP_URL} variant="primary" className="text-base px-7 py-3" ariaLabel="Book a call via WhatsApp">
              Book a Call
            </Button>
            <a
              href="mailto:info@tyvico.com"
              className="text-sm font-medium no-underline transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              or email us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
