import { ArrowRight, ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { navLinks, site } from '../data/site';
import Logo from './Logo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">{site.tagline}</p>
            <span className="footer-role">Diseño y desarrollo web</span>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <h4>Navegación</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4>Hablemos</h4>
            <a className="footer-email" href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.portfolio} target="_blank" rel="noopener noreferrer">
              Proyecto en vivo
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="footer-cta" href="#contacto">
              Solicitar una página web
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} Jared García. Todos los derechos reservados.</p>
          <p className="footer-made">Diseñado y desarrollado con atención al detalle.</p>
          <button className="back-to-top" type="button" onClick={scrollToTop}>
            Volver arriba
            <ArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
