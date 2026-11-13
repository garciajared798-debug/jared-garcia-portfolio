import { ArrowRight, MessageSquareText, PenTool, Rocket, SlidersHorizontal } from 'lucide-react';
import { processSteps } from '../data/site';
import SectionHeading from './SectionHeading';

const ICONS = {
  chat: MessageSquareText,
  pen: PenTool,
  sliders: SlidersHorizontal,
  rocket: Rocket,
};

export default function Process({ onRequest }) {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <SectionHeading
          align="center"
          index="06"
          eyebrow="Proceso de trabajo"
          title={
            <>
              De la primera conversación
              <br />
              a tu página <span className="gradient-text">en línea.</span>
            </>
          }
          description="Un proceso simple y transparente, con cuatro pasos claros para que sepas en todo momento cómo avanza tu proyecto."
        />

        <ol className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = ICONS[step.icon];
            return (
              <li
                className="process-step"
                key={step.number}
                data-reveal
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="process-step-head">
                  <span className="process-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="process-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="process-cta" data-reveal>
          <div>
            <span className="process-cta-eyebrow">¿Listo para dar el primer paso?</span>
            <h3>Conversemos sobre tu negocio.</h3>
            <p>Sin compromiso. Cuéntame tu idea y te digo cómo puedo ayudarte.</p>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onRequest('Aún no lo tengo claro', 'Me gustaría conversar sobre mi negocio y qué tipo de página necesito.')}
          >
            Empezar mi proyecto
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
