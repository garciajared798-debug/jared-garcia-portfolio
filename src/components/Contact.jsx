import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Globe2,
  Info,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react';
import { interestOptions, plans, site } from '../data/site';
import SectionHeading from './SectionHeading';

const DEFAULT_INTEREST = plans[1].name;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialValues = {
  name: '',
  business: '',
  email: '',
  interest: DEFAULT_INTEREST,
  message: '',
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Escribe tu nombre.';
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Escribe un correo electrónico válido.';
  }

  if (!values.interest) {
    errors.interest = 'Selecciona el tipo de proyecto.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Cuéntame un poco más sobre tu proyecto (mínimo 10 caracteres).';
  }

  return errors;
}

export default function Contact({ inquiry }) {
  const [values, setValues] = useState(() => ({
    ...initialValues,
    interest: inquiry.interest || DEFAULT_INTEREST,
    message: inquiry.note || '',
  }));
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));

    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });

    if (opened) setOpened(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = ['name', 'email', 'message'].find((field) => nextErrors[field]);
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid}`)?.focus();
      }
      return;
    }

    const subject = encodeURIComponent(`Nuevo proyecto web · ${values.interest}`);
    const body = encodeURIComponent(
      [
        `Hola Jared,`,
        '',
        `Mi nombre es ${values.name.trim()}.`,
        values.business.trim() ? `Mi negocio es ${values.business.trim()}.` : null,
        `Mi correo de contacto es ${values.email.trim()}.`,
        `Tipo de proyecto: ${values.interest}.`,
        '',
        'Detalles del proyecto:',
        values.message.trim(),
        '',
        '— Enviado desde tu portafolio web.',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = site.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
  };

  const renderError = (field) =>
    errors[field] ? (
      <span className="field-error" id={`contact-${field}-error`}>
        {errors[field]}
      </span>
    ) : null;

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-info">
            <SectionHeading
              index="07"
              eyebrow="Contacto"
              title={
                <>
                  Cuéntame sobre
                  <br />
                  <span className="gradient-text">tu próximo proyecto.</span>
                </>
              }
              description="Si tienes una idea, un negocio que necesita una página o un sitio que quieres renovar, escríbeme. Te responderé personalmente."
            />

            <div className="email-direct">
              <a
                className="email-card glass"
                href={`mailto:${site.email}`}
                aria-label={`Enviar un correo a ${site.email}`}
              >
                <span className="email-icon">
                  <Mail aria-hidden="true" />
                </span>
                <span className="email-copy">
                  <small>Escríbeme directamente</small>
                  <strong>{site.email}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <button
                className="copy-email"
                type="button"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                {copied ? 'Correo copiado' : 'Copiar correo'}
              </button>
            </div>

            <div className="contact-meta">
              <span className="contact-availability">
                <span className="status-dot" aria-hidden="true" />
                {site.availability}
              </span>
              <a href={site.portfolio} target="_blank" rel="noopener noreferrer">
                <Globe2 aria-hidden="true" />
                Proyecto en vivo
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <p className="contact-note">
              <Sparkles aria-hidden="true" />
              Trabajo de forma directa contigo: desde la primera idea hasta la publicación.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-head">
              <div>
                <span className="form-eyebrow">Cuéntame tu proyecto</span>
                <h3>Formulario de contacto</h3>
              </div>
              <span className="form-badge">Te lleva a tu correo</span>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  required
                />
                {renderError('name')}
              </div>

              <div className="field">
                <label htmlFor="contact-business">
                  Negocio <span className="field-optional">(opcional)</span>
                </label>
                <input
                  id="contact-business"
                  name="business"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nombre de tu negocio"
                  value={values.business}
                  onChange={handleChange}
                />
              </div>

              <div className="field field--full">
                <label htmlFor="contact-email">Correo</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  required
                />
                {renderError('email')}
              </div>

              <div className="field field--full">
                <label htmlFor="contact-interest">¿Qué necesitas?</label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={values.interest}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={errors.interest ? 'contact-interest-error' : undefined}
                  required
                >
                  {interestOptions.map((group) => (
                    <optgroup label={group.group} key={group.group}>
                      {group.options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {renderError('interest')}
              </div>

              <div className="field field--full">
                <label htmlFor="contact-message">Descripción del proyecto</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Cuéntame qué hace tu negocio, qué necesitas y qué te gustaría lograr con tu página."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  required
                />
                {renderError('message')}
              </div>
            </div>

            <button className="btn btn-primary btn-block contact-submit" type="submit">
              Preparar correo
              <Send aria-hidden="true" />
            </button>

            <p className="form-hint">
              <Info aria-hidden="true" />
              Este formulario no envía datos a un servidor: abre tu cliente de correo con
              la información lista para enviar.
            </p>

            <div className="form-status" aria-live="polite">
              {opened ? (
                <div className="form-success">
                  <CheckCircle2 aria-hidden="true" />
                  <div>
                    <strong>Listo, abrimos tu cliente de correo.</strong>
                    <p>
                      Revisa el mensaje y envíalo. Si no se abrió, escribe directamente a{' '}
                      <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
