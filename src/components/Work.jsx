/**
 * Work / Capabilities Showcase — realistic UI mockups in device frames,
 * clearly labeled as concept/capability showcases (not fake client work).
 */

const PROJECTS = [
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics platform with data visualization, user management, and automated reporting.',
    image: '/images/dashboard-mockup.png',
    alt: 'SaaS analytics dashboard concept showing charts, metrics, and data tables',
  },
  {
    title: 'E-commerce Admin Panel',
    category: 'Custom Software',
    description: 'Product management, order tracking, and inventory system with built-in analytics.',
    image: '/images/ecommerce-mockup.png',
    alt: 'E-commerce admin panel concept showing product grid and order management',
  },
  {
    title: 'Booking App Interface',
    category: 'Mobile Application',
    description: 'Appointment scheduling with calendar integration, automated reminders, and client management.',
    image: '/images/booking-mockup.png',
    alt: 'Mobile booking app concept showing calendar, time slots, and appointment management',
  },
];

export default function Work() {
  return (
    <section
      id="work"
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
            Work
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Examples of what we build
          </h2>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Capability showcases illustrating the kind of software, apps, and
            dashboards we design and develop for our clients.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="fade-in-up group rounded-xl border overflow-hidden transition-colors duration-200"
              style={{ borderColor: 'var(--border-color-strong)' }}
            >
              {/* Image with device frame */}
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full block transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="400"
                  height="280"
                />
              </div>

              {/* Card content */}
              <div
                className="p-5"
                style={{ backgroundColor: 'var(--bg-elevated)' }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-1.5"
                  style={{ color: 'var(--color-accent-orange)' }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
