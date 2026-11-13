import { useEffect } from 'react';

const SPOT_SELECTOR =
  '.service-card, .price-card, .process-step, .project-card, .about-card, .future-project, .pricing-note, .process-cta';
const TILT_SELECTOR = '.service-card, .price-card, .process-step, .project-card, .about-card';
const MAGNET_SELECTOR = '.btn, .service-action, .menu-toggle';

const SPOT_VARS = ['--spot-x', '--spot-y'];
const TILT_VARS = ['--tilt-x', '--tilt-y'];
const MAGNET_VARS = ['--mag-x', '--mag-y'];

function clearVars(element, variables) {
  if (!element) return;
  variables.forEach((name) => element.style.removeProperty(name));
}

/**
 * Efectos globales con el puntero: parallax del fondo, foco de luz
 * dentro de las tarjetas, inclinación suave y botones magnéticos.
 * Solo se activa con puntero fino y sin movimiento reducido.
 */
export function usePointerFx() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return undefined;

    const bg = document.querySelector('.site-bg');
    let frame = 0;
    let pending = null;
    let spotElement = null;
    let tiltElement = null;
    let magnetElement = null;

    const render = () => {
      frame = 0;
      if (!pending) return;

      const { x, y, target } = pending;
      const rects = new Map();
      const rectFor = (element) => {
        let rect = rects.get(element);
        if (!rect) {
          rect = element.getBoundingClientRect();
          rects.set(element, rect);
        }
        return rect;
      };

      if (bg) {
        bg.style.setProperty('--px', (x / window.innerWidth - 0.5).toFixed(3));
        bg.style.setProperty('--py', (y / window.innerHeight - 0.5).toFixed(3));
      }

      const nextSpot = target.closest(SPOT_SELECTOR);
      if (nextSpot !== spotElement) {
        clearVars(spotElement, SPOT_VARS);
        spotElement = nextSpot;
      }

      if (spotElement) {
        const rect = rectFor(spotElement);
        spotElement.style.setProperty('--spot-x', `${Math.round(x - rect.left)}px`);
        spotElement.style.setProperty('--spot-y', `${Math.round(y - rect.top)}px`);
      }

      const nextTilt = target.closest(TILT_SELECTOR);
      if (nextTilt !== tiltElement) {
        clearVars(tiltElement, TILT_VARS);
        tiltElement = nextTilt;
      }

      if (tiltElement) {
        const rect = rectFor(tiltElement);
        const px = (x - rect.left) / rect.width - 0.5;
        const py = (y - rect.top) / rect.height - 0.5;
        tiltElement.style.setProperty('--tilt-x', `${(-py * 3.6).toFixed(2)}deg`);
        tiltElement.style.setProperty('--tilt-y', `${(px * 4.6).toFixed(2)}deg`);
      }

      const nextMagnet = target.closest(MAGNET_SELECTOR);
      if (nextMagnet !== magnetElement) {
        clearVars(magnetElement, MAGNET_VARS);
        magnetElement = nextMagnet;
      }

      if (magnetElement) {
        const rect = rectFor(magnetElement);
        const dx = x - (rect.left + rect.width / 2);
        const dy = y - (rect.top + rect.height / 2);
        magnetElement.style.setProperty(
          '--mag-x',
          `${Math.max(-6, Math.min(6, dx * 0.24)).toFixed(2)}px`,
        );
        magnetElement.style.setProperty(
          '--mag-y',
          `${Math.max(-4, Math.min(4, dy * 0.24)).toFixed(2)}px`,
        );
      }
    };

    const onMove = (event) => {
      if (!(event.target instanceof Element)) return;
      pending = { x: event.clientX, y: event.clientY, target: event.target };
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const reset = () => {
      if (bg) {
        bg.style.removeProperty('--px');
        bg.style.removeProperty('--py');
      }
      clearVars(spotElement, SPOT_VARS);
      clearVars(tiltElement, TILT_VARS);
      clearVars(magnetElement, MAGNET_VARS);
      spotElement = null;
      tiltElement = null;
      magnetElement = null;
      pending = null;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('pointerleave', reset);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('pointerleave', reset);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}
