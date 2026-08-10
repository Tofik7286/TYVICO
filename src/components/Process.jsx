/**
 * Process section — "How We Work" — replaces testimonials with
 * a concrete, numbered step-by-step process that builds trust.
 * Vertical timeline layout.
 */

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a conversation. Understand your business, your goals, who your users are, and what problem the software needs to solve.',
  },
  {
    number: '02',
    title: 'Proposal & Plan',
    description:
      'You get a clear scope document — what we\'ll build, how long it takes, and what it costs. No surprises later.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'Iterative development with regular check-ins. You see progress weekly, not just at the end. AI-assisted workflows keep things moving faster.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Thorough testing, deployment to your infrastructure, documentation, and a proper handover — not a code dump.',
  },
  {
    number: '05',
    title: 'Support',
    description:
      'Post-launch support and improvements. We don\'t disappear after delivery.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="fade-in-up max-w-2xl">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-3"
            style={{ color: 'var(--text-tertiary)' }}
          >
            How We Work
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            A clear process, from start to finish
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical line — hidden on mobile */}
          <div
            className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--border-color-strong)' }}
          />

          <div className="space-y-10 md:space-y-0">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="fade-in-up relative flex gap-6 md:gap-10 md:pb-12 last:pb-0"
              >
                {/* Step number circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-sm font-bold border"
                    style={{
                      borderColor: index === 0 ? 'var(--color-accent-orange)' : 'var(--border-color-strong)',
                      color: index === 0 ? 'var(--color-accent-orange)' : 'var(--text-tertiary)',
                      backgroundColor: 'var(--bg-secondary)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3
                    className="text-lg font-semibold mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-lg"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
