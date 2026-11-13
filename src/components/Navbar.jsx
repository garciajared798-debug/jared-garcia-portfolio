import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import Logo from './Logo';

const SECTION_IDS = [...navLinks.map((link) => link.href.slice(1)), 'contacto'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="container header-inner">
        <Logo onClick={closeMenu} />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm header-cta" href="#contacto">
            Hablemos
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`.trim()}
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-overlay ${menuOpen ? 'is-open' : ''}`.trim()}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`.trim()}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegación móvil">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={activeId === link.href.slice(1) ? 'is-active' : ''}
              style={{ '--menu-delay': `${60 + index * 45}ms` }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-link-index">0{index + 1}</span>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <div>
            <span className="mobile-menu-status">
              <span className="status-dot" aria-hidden="true" />
              {site.availability}
            </span>
            <a href={`mailto:${site.email}`} className="mobile-menu-email" tabIndex={menuOpen ? 0 : -1}>
              {site.email}
            </a>
          </div>
          <a
            className="btn btn-primary btn-sm"
            href="#contacto"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Solicitar una página
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
