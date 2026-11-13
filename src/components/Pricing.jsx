import { ArrowRight, Check, Info, Sparkles } from 'lucide-react';
import { plans } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Pricing({ onRequest }) {
  return (
    <section className="section pricing" id="precios">
      <div className="container">
        <SectionHeading
          align="center"
          index="05"
          eyebrow="Precios"
          title={
            <>
              Paquetes claros,
              <br />
              <span className="gradient-text">presupuestos sin sorpresas.</span>
            </>
          }
          description="Elige el punto de partida que mejor se adapte a tu negocio. Estos son valores iniciales; el presupuesto final depende de las características de cada proyecto."
        />

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article
              className={`price-card ${plan.featured ? 'is-featured' : ''}`.trim()}
              key={plan.id}
              data-reveal
              style={{ '--delay': `${index * 70}ms` }}
            >
              {plan.badge ? (
                <span className="price-badge">
                  <Sparkles aria-hidden="true" />
                  {plan.badge}
                </span>
              ) : null}

              <div className="price-card-head">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>

              <div className="price-amount">
                <strong>{plan.price}</strong>
                <span>Precio inicial · USD</span>
              </div>

              <ul className="price-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="price-check">
                      <Check aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn btn-sm ${plan.featured ? 'btn-primary' : 'btn-ghost'} price-cta`}
                type="button"
                onClick={() => onRequest(plan.name)}
              >
                Elegir este paquete
                <ArrowRight aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <div className="pricing-note glass" data-reveal>
          <span className="pricing-note-icon">
            <Info aria-hidden="true" />
          </span>
          <p>
            <strong>Importante:</strong> los precios son orientativos y pueden variar
            según las secciones, funcionalidades y contenido de tu proyecto. El dominio y
            el alojamiento se cotizan por separado.
          </p>
          <a className="text-link" href="#contacto">
            Pedir una cotización
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
