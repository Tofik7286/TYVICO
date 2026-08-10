/**
 * WhyAI — short positioning section explaining what "AI-first" practically
 * means for the client. Grounded, specific, no vague claims.
 */

const BENEFITS = [
  {
    title: 'Faster development cycles',
    description:
      'AI-assisted coding and automated testing mean we ship working software faster — without cutting corners on quality.',
  },
  {
    title: 'Smarter products for your users',
    description:
      'Where it makes sense, we build intelligent features directly into your product — search that actually works, recommendations that are relevant, automation that saves your team time.',
  },
  {
    title: 'Automation where it matters',
    description:
      'Repetitive business processes — data entry, report generation, customer routing — can often be automated. We identify and build those automations as part of the project, not as a separate upsell.',
  },
];

export default function WhyAI() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Title area */}
          <div className="lg:col-span-4 fade-in-up">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-3"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Our Approach
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              What <span className="accent-gradient-text">AI-first</span> actually means
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              It doesn&apos;t mean we slap &ldquo;AI&rdquo; on everything. It means AI
              is a practical tool in how we build and what we deliver — where it genuinely
              helps, not where it sounds impressive.
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="fade-in-up flex gap-5"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-tertiary)',
                      border: '1px solid var(--border-color-strong)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-xl"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
