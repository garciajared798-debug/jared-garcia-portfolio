export default function Logo({ className = '', onClick }) {
  return (
    <a
      className={`brand ${className}`.trim()}
      href="#inicio"
      aria-label="Jared García — volver al inicio"
      onClick={onClick}
    >
      <span className="brand-mark" aria-hidden="true">
        <span>JG</span>
        <i />
      </span>
      <span className="brand-copy">
        <strong>Jared García</strong>
        <small>Diseño &amp; desarrollo web</small>
      </span>
    </a>
  );
}
