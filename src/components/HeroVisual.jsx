import { useEffect, useRef } from 'react';
import { Code2, LockKeyhole, Smartphone, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  const frameRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return undefined;

    const canTilt =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canTilt) return undefined;

    let raf = 0;

    const onMove = (event) => {
      const rect = frame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (raf) window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        stage.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
        stage.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
        stage.style.setProperty('--tx', `${(x * 10).toFixed(2)}px`);
        stage.style.setProperty('--ty', `${(y * 8).toFixed(2)}px`);
      });
    };

    const onLeave = () => {
      if (raf) window.cancelAnimationFrame(raf);
      stage.style.setProperty('--rx', '0deg');
      stage.style.setProperty('--ry', '0deg');
      stage.style.setProperty('--tx', '0px');
      stage.style.setProperty('--ty', '0px');
    };

    frame.addEventListener('pointermove', onMove);
    frame.addEventListener('pointerleave', onLeave);

    return () => {
      frame.removeEventListener('pointermove', onMove);
      frame.removeEventListener('pointerleave', onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual" ref={frameRef}>
      <div className="hv-glow hv-glow--one" aria-hidden="true" />
      <div className="hv-glow hv-glow--two" aria-hidden="true" />
      <div className="hv-orbit hv-orbit--outer" aria-hidden="true">
        <i />
      </div>
      <div className="hv-orbit hv-orbit--inner" aria-hidden="true" />

      <div className="hv-enter">
        <div className="hv-stage" ref={stageRef}>
          <div className="hv-browser">
            <div className="mock-chrome">
              <span className="mock-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="mock-url">
                <LockKeyhole aria-hidden="true" />
                tunegocio.com
              </span>
              <span className="mock-live">
                <i aria-hidden="true" />
                En vivo
              </span>
            </div>

            <div className="mock-site">
              <div className="mock-nav" aria-hidden="true">
                <span className="mock-brand">
                  <span className="mock-brand-mark" />
                  TU MARCA
                </span>
                <span className="mock-links">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="mock-nav-cta">Contacto</span>
              </div>

              <div className="mock-hero" aria-hidden="true">
                <span className="mock-kicker">DISEÑO WEB PARA NEGOCIOS</span>
                <span className="mock-headline">
                  Tu negocio,
                  <br />
                  <em>a otro nivel.</em>
                </span>
                <span className="mock-copy">
                  <i />
                  <i />
                  <i className="short" />
                </span>
                <span className="mock-actions">
                  <span className="mock-btn">Ver más</span>
                  <span className="mock-btn mock-btn--ghost">Contacto</span>
                </span>
              </div>

              <div className="mock-cards" aria-hidden="true">
                <div className="mock-card">
                  <span className="mock-thumb mock-thumb--one" />
                  <i />
                  <i className="short" />
                </div>
                <div className="mock-card">
                  <span className="mock-thumb mock-thumb--two" />
                  <i />
                  <i className="short" />
                </div>
                <div className="mock-card">
                  <span className="mock-thumb mock-thumb--three" />
                  <i />
                  <i className="short" />
                </div>
              </div>
            </div>
          </div>

          <div className="hv-phone" aria-hidden="true">
            <span className="phone-notch" />
            <div className="phone-screen">
              <span className="phone-brand">TU MARCA</span>
              <span className="phone-title">
                Reserva
                <br />
                tu mesa.
              </span>
              <span className="phone-copy">
                <i />
                <i />
              </span>
              <span className="phone-cta" />
              <span className="phone-list">
                <span>
                  <i />
                  <b />
                </span>
                <span>
                  <i />
                  <b />
                </span>
                <span>
                  <i />
                  <b />
                </span>
              </span>
            </div>
          </div>

          <div className="hv-chip hv-chip--design">
            <span className="hv-chip-icon">
              <Sparkles aria-hidden="true" />
            </span>
            <span>
              <strong>Diseño a medida</strong>
              <small>Pensado para tu marca</small>
            </span>
          </div>

          <div className="hv-chip hv-chip--responsive">
            <span className="hv-chip-icon">
              <Smartphone aria-hidden="true" />
            </span>
            <span>
              <strong>100% responsive</strong>
              <small>Móvil, tablet y desktop</small>
            </span>
          </div>

          <div className="hv-chip hv-chip--code">
            <span className="hv-chip-icon">
              <Code2 aria-hidden="true" />
            </span>
            <span>
              <strong>Código limpio</strong>
              <small>Rápido y mantenible</small>
            </span>
          </div>
        </div>
      </div>

      <p className="hv-caption">
        <span aria-hidden="true" />
        Vista conceptual de una página para negocio
      </p>
    </div>
  );
}
