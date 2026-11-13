import { ArrowRight, ArrowUpRight, ExternalLink, Plus, Sparkles } from 'lucide-react';
import { projects } from '../data/site';
import SectionHeading from './SectionHeading';

function ProjectCard({ project, onRequest }) {
  const cover = (
    <>
      {project.image ? (
        <img src={project.image} alt={project.imageAlt || `${project.title} — vista previa`} loading="lazy" />
      ) : (
        <div className="project-cover-fallback" aria-hidden="true">
          {project.title.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="project-live">
        <i aria-hidden="true" />
        Proyecto en vivo
      </span>
      <span className="project-open" aria-hidden="true">
        <ArrowUpRight />
      </span>
    </>
  );

  return (
    <article className="project-card glass" data-reveal>
      {project.link ? (
        <a
          className="project-cover"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${project.title} en una nueva pestaña`}
        >
          {cover}
        </a>
      ) : (
        <div className="project-cover">{cover}</div>
      )}

      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-tags" aria-label="Características del proyecto">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.link ? (
            <a
              className="btn btn-primary btn-sm"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel || 'Ver proyecto'}
              <ExternalLink aria-hidden="true" />
            </a>
          ) : null}
          <button
            className="btn btn-ghost btn-sm"
            type="button"
            onClick={() =>
              onRequest(
                'Página completa',
                `Me interesa un proyecto con un enfoque similar a ${project.title}.`,
              )
            }
          >
            Quiero algo similar
            <Sparkles aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio({ onRequest }) {
  return (
    <section className="section portfolio" id="portafolio">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Portafolio"
          title={
            <>
              Proyectos reales,
              <br />
              <span className="gradient-text">no plantillas genéricas.</span>
            </>
          }
          description="Una selección de mi trabajo. Cada proyecto se construye con código propio, atención al detalle y una interfaz pensada para su público."
        />

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onRequest={onRequest} />
          ))}
        </div>

        <article className="future-project" data-reveal>
          <div className="future-grid" aria-hidden="true" />
          <div className="future-content">
            <span className="future-icon">
              <Plus aria-hidden="true" />
            </span>
            <span className="project-category">Próximo proyecto</span>
            <h3>Tu negocio podría ocupar este espacio.</h3>
            <p>
              Estoy aceptando nuevos proyectos. Si tienes una idea, conversemos y
              construyamos juntos una página que haga destacar tu negocio.
            </p>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => onRequest('Página para negocio', 'Me gustaría que mi proyecto aparezca en tu portafolio.')}
            >
              Empezar mi proyecto
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
