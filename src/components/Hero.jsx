import { ArrowRight, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { site } from '../data/site';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="status-dot" aria-hidden="true" />
            {site.availability}
            <span className="hero-badge-divider" aria-hidden="true" />
            <span className="hero-badge-muted">Proyectos web</span>
          </span>

          <h1 className="hero-title">
            Tu negocio merece
            <span className="gradient-text">destacar en Internet.</span>
          </h1>

          <p className="hero-subtitle">
            Transformo ideas y negocios en experiencias digitales modernas.
          </p>

          <p className="hero-description">
            Diseño y desarrollo páginas web a medida para restaurantes, tiendas y
            emprendimientos que quieren verse profesionales y conectar con más clientes.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#portafolio">
              Ver mis proyectos
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Solicitar una página web
              <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-profile">
            <span className="hero-avatar">
              JG
              <span className="hero-avatar-dot" aria-hidden="true" />
            </span>
            <span className="hero-profile-copy">
              <strong>{site.name}</strong>
              <small>{site.role}</small>
            </span>
            <span className="hero-profile-divider" aria-hidden="true" />
            <span className="hero-profile-tags">
              <span>
                <Code2 aria-hidden="true" />
                Diseño + código
              </span>
              <span>
                <Sparkles aria-hidden="true" />
                Hecho a medida
              </span>
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>

      <a className="hero-scroll" href="#sobre-mi" aria-label="Bajar a la sección sobre mí">
        <span>Descubre más</span>
        <span className="hero-scroll-line" aria-hidden="true">
          <i />
        </span>
      </a>
    </section>
  );
}
