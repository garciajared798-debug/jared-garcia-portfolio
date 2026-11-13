import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  MessagesSquare,
  Sparkles,
  Target,
} from 'lucide-react';
import { site } from '../data/site';
import SectionHeading from './SectionHeading';

const POINTS = [
  {
    icon: Target,
    title: 'Diseño con intención',
    text: 'Cada sección tiene un propósito: presentar tu negocio con claridad y facilitar que el cliente dé el siguiente paso.',
  },
  {
    icon: MessagesSquare,
    title: 'Trato directo',
    text: 'Hablas directamente conmigo durante todo el proyecto. Sin intermediarios y con comunicación clara en cada etapa.',
  },
  {
    icon: BookOpen,
    title: 'Aprendizaje constante',
    text: 'Me mantengo al día con herramientas y buenas prácticas para que tu página se sienta actual y funcione bien.',
  },
];

export default function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="container about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-card glass">
            <div className="about-card-glow" aria-hidden="true" />
            <span className="about-orbit" aria-hidden="true" />

            <div className="about-monogram">
              <span>JG</span>
            </div>

            <div className="about-identity">
              <strong>Jared García</strong>
              <span>{site.role}</span>
            </div>

            <span className="about-status">
              <span className="status-dot" aria-hidden="true" />
              Disponible para nuevos proyectos
            </span>

            <div className="about-chips" aria-label="Áreas de trabajo">
              <span>Diseño</span>
              <span>Desarrollo</span>
              <span>Detalle</span>
            </div>

            <a
              className="about-link"
              href={site.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto en vivo
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <span className="about-float about-float--top">
            <Sparkles aria-hidden="true" />
            Diseño personalizado
          </span>
          <span className="about-float about-float--bottom">
            <span className="about-float-dot" aria-hidden="true" />
            Enfoque en el detalle
          </span>
        </div>

        <div className="about-copy">
          <SectionHeading
            index="01"
            eyebrow="Sobre mí"
            title={
              <>
                Un enfoque joven,
                <br />
                <span className="gradient-text">con estándares altos.</span>
              </>
            }
          />

          <div className="about-text" data-reveal>
            <p>
              Soy <strong>Jared García</strong>, diseñador y desarrollador web. Me
              especializo en crear páginas modernas y personalizadas que ayuden a los
              negocios a mejorar su presencia digital.
            </p>
            <p>
              Llevo menos de un año construyendo proyectos web, y cada uno lo trabajo
              con la misma idea: que se vea bien, se entienda rápido y sea fácil de usar
              desde cualquier dispositivo.
            </p>
            <p>
              Escucho tu idea, la aterrizo en un diseño y la convierto en una página
              real. Mi objetivo es que tu negocio se vea tan profesional como lo que
              ofrece.
            </p>
          </div>

          <ul className="about-points" data-reveal>
            {POINTS.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="about-point-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="text-link" href="#servicios" data-reveal>
            Conoce lo que puedo hacer
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
