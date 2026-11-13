import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Info,
  MessageCircleMore,
  MousePointerClick,
  PackageSearch,
} from 'lucide-react';
import { benefits } from '../data/site';
import SectionHeading from './SectionHeading';

const ICONS = {
  globe: Globe2,
  badge: BadgeCheck,
  products: PackageSearch,
  info: Info,
  contact: MessageCircleMore,
};

export default function Benefits({ onRequest }) {
  return (
    <section className="section benefits" id="soluciones">
      <div className="container benefits-shell">
        <div className="benefits-copy">
          <SectionHeading
            index="03"
            eyebrow="Soluciones para negocios"
            title={
              <>
                Una página web no es un lujo.
                <br />
                <span className="gradient-text">Es tu mejor vendedor.</span>
              </>
            }
            description="Tus clientes buscan, comparan y deciden en Internet. Una página bien hecha trabaja por tu negocio las 24 horas."
          />

          <div className="benefits-highlight glass" data-reveal>
            <span className="benefits-highlight-icon">
              <MousePointerClick aria-hidden="true" />
            </span>
            <div>
              <strong>La primera impresión ahora es digital.</strong>
              <p>
                Antes de llamarte o visitarte, muchos clientes van a buscar tu negocio
                en Internet. Lo que encuentren marca la diferencia.
              </p>
            </div>
          </div>

          <button
            className="btn btn-primary benefits-cta"
            type="button"
            onClick={() => onRequest('Página para negocio', 'Quiero que mi negocio tenga una página web profesional.')}
            data-reveal
          >
            Quiero mi página web
            <ArrowRight aria-hidden="true" />
          </button>
        </div>

        <ul className="benefits-list">
          {benefits.map((benefit, index) => {
            const Icon = ICONS[benefit.icon];
            return (
              <li
                className="benefit-item"
                key={benefit.number}
                data-reveal
                style={{ '--delay': `${index * 60}ms` }}
              >
                <span className="benefit-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div className="benefit-copy">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
                <span className="benefit-number" aria-hidden="true">
                  {benefit.number}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
