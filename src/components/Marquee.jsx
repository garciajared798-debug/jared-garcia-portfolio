import { Sparkle } from 'lucide-react';

const ITEMS = [
  'Diseño web desde cero',
  'Rediseño de sitios',
  'Restaurantes y cafeterías',
  'Tiendas y emprendimientos',
  'Diseño responsive',
  'Interfaces modernas',
  'Código limpio',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {ITEMS.map((item) => (
              <span className="marquee-item" key={`${group}-${item}`}>
                {item}
                <Sparkle />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
