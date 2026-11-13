import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, input, select, textarea, label, [role="button"], [data-magnetic]';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return undefined;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return undefined;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let glowX = 0;
    let glowY = 0;
    let ringX = 0;
    let ringY = 0;
    let visible = false;
    let active = false;

    const render = () => {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      ringX += (targetX - ringX) * 0.42;
      ringY += (targetY - ringY) * 0.42;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      const glowMoving = Math.abs(targetX - glowX) > 0.5 || Math.abs(targetY - glowY) > 0.5;
      const ringMoving = Math.abs(targetX - ringX) > 0.5 || Math.abs(targetY - ringY) > 0.5;

      if (glowMoving || ringMoving) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const setActive = (event) => {
      const isActive =
        event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      if (isActive === active) return;
      active = isActive;
      ring.classList.toggle('is-active', isActive);
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        glow.style.opacity = '1';
        ring.style.opacity = '1';
        visible = true;
      }
      setActive(event);
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const onDown = () => ring.classList.add('is-pressed');
    const onUp = () => ring.classList.remove('is-pressed');

    const onLeave = () => {
      if (visible) {
        glow.style.opacity = '0';
        ring.style.opacity = '0';
        visible = false;
      }
      active = false;
      ring.classList.remove('is-active', 'is-pressed');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
