import {
  ArrowUpRight,
  LayoutTemplate,
  RefreshCcw,
  Smartphone,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { services } from '../data/site';
import SectionHeading from './SectionHeading';

const ICONS = {
  layout: LayoutTemplate,
  refresh: RefreshCcw,
  utensils: UtensilsCrossed,
  store: Store,
  smartphone: Smartphone,
};

export default function Services({ onRequest }) {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            index="02"
            eyebrow="Servicios"
            title={
              <>
                Todo lo que tu negocio necesita
                <br />
                para <span className="gradient-text">verse y funcionar mejor.</span>
              </>
            }
            description="Diseño cada página desde cero, pensando en la identidad de tu negocio y en la experiencia de tus clientes."
          />
          <a className="text-link section-head-link" href="#contacto" data-reveal>
            ¿No sabes qué necesitas?
            <span>Hablemos</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                className="service-card glass"
                key={service.id}
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="service-top">
                  <span className="service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-tags" aria-label="Incluye">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <button
                  className="service-action"
                  type="button"
                  onClick={() => onRequest(service.title)}
                >
                  Cotizar este servicio
                  <ArrowUpRight aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
