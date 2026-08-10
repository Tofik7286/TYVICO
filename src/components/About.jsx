/**
 * About section — short, human, plain-language description
 * of who TYVICO is. No mission-statement fluff.
 */
export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="fade-in-up max-w-2xl">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-3"
            style={{ color: 'var(--text-tertiary)' }}
          >
            About
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Who we are
          </h2>
        </div>

        <div className="fade-in-up mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              TYVICO is an IT services company based in Ahmedabad, India. We work with
              businesses — from small companies to established organizations — that need
              software, websites, apps, or AI systems built properly.
            </p>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              We&apos;re not a large agency with layers of project managers between you
              and the people doing the work. When you work with TYVICO, you talk directly
              to the team building your product. That&apos;s by design — it&apos;s faster,
              clearer, and it leads to better results.
            </p>
          </div>
          <div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our approach leans on AI — not as a marketing label, but as a practical set
              of tools that makes development faster and the software we build smarter.
              If AI can genuinely improve a part of your project, we&apos;ll recommend it.
              If it can&apos;t, we won&apos;t pretend otherwise.
            </p>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              We cover the full range — websites, web and mobile applications, custom
              software, SaaS products, and digital marketing — all under one roof,
              with one team that understands the full picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
