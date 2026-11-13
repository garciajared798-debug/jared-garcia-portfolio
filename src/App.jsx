import { useCallback, useState } from 'react';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { plans } from './data/site';
import { useReveal } from './hooks/useReveal';
import { usePointerFx } from './hooks/usePointerFx';

export default function App() {
  const [inquiry, setInquiry] = useState({
    interest: plans[1].name,
    note: '',
    version: 0,
  });

  useReveal();
  usePointerFx();

  const requestQuote = useCallback((interest, note = '') => {
    setInquiry((previous) => ({
      interest,
      note,
      version: previous.version + 1,
    }));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.requestAnimationFrame(() => {
      document.getElementById('contacto')?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Background />
      <CursorGlow />
      <Navbar />

      <main id="contenido">
        <Hero />
        <Marquee />
        <About />
        <Services onRequest={requestQuote} />
        <Benefits onRequest={requestQuote} />
        <Portfolio onRequest={requestQuote} />
        <Pricing onRequest={requestQuote} />
        <Process onRequest={requestQuote} />
        <Contact inquiry={inquiry} key={inquiry.version} />
      </main>

      <Footer />
    </>
  );
}
