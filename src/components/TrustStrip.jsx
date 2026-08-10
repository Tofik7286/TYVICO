/**
 * TrustStrip — replaces fake client logos/stats with honest,
 * verifiable capability markers for an early-stage company.
 */
const MARKERS = [
  { text: 'AI-first workflow' },
  { text: 'Direct communication, no middlemen' },
  { text: 'Based in Ahmedabad, working globally' },
  { text: 'End-to-end delivery' },
];

export default function TrustStrip() {
  return (
    <section
      className="border-y"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-5">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {MARKERS.map((marker) => (
            <div
              key={marker.text}
              className="flex items-center gap-2.5 text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              {/* Small accent dot */}
              <span className="w-1.5 h-1.5 rounded-full accent-gradient flex-shrink-0" />
              {marker.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
