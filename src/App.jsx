import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Process from './components/Process';
import WhyAI from './components/WhyAI';
import Work from './components/Work';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

/**
 * TYVICO Landing Page
 * Single-page with anchor-link navigation between sections.
 * Scroll animation handled via Intersection Observer.
 */
export default function App() {
  useEffect(() => {
    // Intersection Observer for fade-in-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with the fade-in-up class
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <WhyAI />
        <Work />
        <About />
        <CTA />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
