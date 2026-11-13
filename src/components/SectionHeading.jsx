export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()} data-reveal>
      <span className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true" />
        {index ? <span className="eyebrow-index">{index}</span> : null}
        <span>{eyebrow}</span>
      </span>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
