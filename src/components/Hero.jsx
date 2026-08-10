import Button from './Button';

const WHATSAPP_URL = 'https://wa.me/917048786234?text=Hi%20TYVICO%2C%20I%27d%20like%20to%20book%20a%20call%20to%20discuss%20a%20project.';

/*
 * Headline options (swap as needed):
 * 1. "We build websites, apps, and AI systems that actually work for your business."
 * 2. "Software and AI development, done right — from idea to launch."
 * 3. "Your business needs software that works. We build it."
 */

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <h1
              className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              We build websites, apps, and AI systems that actually work for your business.
            </h1>

            <p
              className="mt-5 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              TYVICO is an IT services company that uses AI across every project — not as a buzzword,
              but as a practical tool to build faster, automate more, and deliver software
              that does what it&apos;s supposed to do.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={WHATSAPP_URL} variant="primary" ariaLabel="Book a call via WhatsApp">
                Book a Call
              </Button>
              <a
                href="#services"
                className="text-sm font-medium no-underline transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                See our services →
              </a>
            </div>
          </div>

          {/* Right: Dashboard mockup in browser frame */}
          <div className="relative">
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: 'var(--border-color-strong)' }}
            >
              {/* Browser chrome bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500 opacity-40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500 opacity-40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500 opacity-40" />
                </div>
                <div
                  className="flex-1 mx-8 h-6 rounded-md text-xs flex items-center px-3"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  app.tyvico.com/dashboard
                </div>
              </div>
              {/* Mockup image */}
              <img
                src="/images/dashboard-mockup.png"
                alt="Example SaaS analytics dashboard built by TYVICO — showing revenue metrics, user analytics, and growth charts"
                className="w-full block"
                width="640"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
