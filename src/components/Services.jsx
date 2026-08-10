/**
 * Services section — AI Solutions leads with a featured card layout,
 * remaining 5 services in a clean list layout. Not a uniform icon grid.
 */

const OTHER_SERVICES = [
  {
    name: 'Website Development',
    description: 'Marketing sites, landing pages, and web platforms — fast, responsive, built to convert.',
  },
  {
    name: 'Application Development',
    description: 'Web and mobile applications with clean architecture and reliable performance.',
  },
  {
    name: 'Custom Software Development',
    description: 'Business-specific software designed around your operations, not generic templates.',
  },
  {
    name: 'Custom SaaS Development',
    description: 'Subscription-based software products — from MVP to production-ready platforms.',
  },
  {
    name: 'Digital Marketing',
    description: 'SEO, paid campaigns, and content strategy grounded in data, not guesswork.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="fade-in-up max-w-2xl">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-3"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Services
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            What we build
          </h2>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Six core service areas, all informed by an AI-first approach to development and delivery.
          </p>
        </div>

        {/* Featured: AI Solutions */}
        <div
          className="fade-in-up mt-12 rounded-xl border p-6 md:p-8 lg:p-10"
          style={{
            borderColor: 'var(--border-color-strong)',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full accent-gradient" />
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  AI Solutions
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                AI isn&apos;t just another line item in our services list — it&apos;s how we
                approach every project. We build AI automation, integrate intelligent
                features into client products, and use AI-assisted development to deliver
                faster and more reliably.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'AI-powered automation for business processes',
                  'Intelligent features embedded into your products',
                  'AI-assisted development for faster delivery',
                  'Custom model training and integration',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-orange flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-orange)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Small code snippet visual */}
            <div
              className="rounded-lg border overflow-hidden text-sm"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div
                className="px-4 py-2.5 border-b text-xs font-medium"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-tertiary)',
                }}
              >
                ai-workflow.config
              </div>
              <pre
                className="p-4 m-0 overflow-x-auto leading-relaxed"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
                  fontSize: '0.8125rem',
                }}
              >
{`{
  "pipeline": "ai-augmented",
  "automation": {
    "code_review": true,
    "testing": "automated",
    "deployment": "continuous"
  },
  "features": {
    "smart_search": true,
    "recommendations": true,
    "analytics": "real-time"
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Other services: Clean list layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border-color)' }}>
          {OTHER_SERVICES.map((service) => (
            <div
              key={service.name}
              className="fade-in-up p-6 md:p-8"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
          {/* Empty cell to complete the grid on desktop */}
          <div className="hidden lg:block" style={{ backgroundColor: 'var(--bg-primary)' }} />
        </div>
      </div>
    </section>
  );
}
