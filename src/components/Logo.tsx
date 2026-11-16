import { useCallback, useEffect, useRef, useState } from 'react';

type LogoProps = {
  className?: string;
  animateOnMount?: boolean;
  animateOnHover?: boolean;
};

const easing = 'cubic-bezier(.65,0,.35,1)';

export default function Logo({
  className = '',
  animateOnMount = true,
  animateOnHover = true,
}: LogoProps) {
  const [on, setOn] = useState(false);
  const polylineRef = useRef<SVGPolylineElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const drawM = useCallback(() => {
    const line = polylineRef.current;
    if (!line || reducedMotion.current) return;

    line.animate(
      [
        { strokeDasharray: '437', strokeDashoffset: '437' },
        { strokeDasharray: '437', strokeDashoffset: '0' },
      ],
      { duration: 900, easing }
    );
  }, []);

  useEffect(() => {
    if (!animateOnMount) return;
    const timer = window.setTimeout(() => {
      setOn(true);
      drawM();
    }, 350);
    return () => window.clearTimeout(timer);
  }, [animateOnMount, drawM]);

  const handleEnter = () => {
    if (!animateOnHover) return;
    setOn(true);
    drawM();
  };

  const handleLeave = () => {
    if (!animateOnHover) return;
    setOn(false);
  };

  return (
    <span
      role="img"
      aria-label="Othmane Mimouni logo"
      className={`inline-flex shrink-0 ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <circle
          className="fill-none stroke-current"
          style={{
            strokeWidth: 5,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            transformOrigin: '200px 200px',
            transform: 'rotate(149deg)',
            strokeDasharray: on ? '760 1000' : '458.7 1000',
            transition: `stroke-dasharray 1.1s ${easing}`,
          }}
          cx="200"
          cy="200"
          r="120"
        />
        <circle
          className="fill-none stroke-current"
          style={{
            strokeWidth: 5,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            transformOrigin: '200px 200px',
            transform: 'rotate(31deg)',
            strokeDasharray: '186.4 1000',
          }}
          cx="200"
          cy="200"
          r="120"
        />
        <polyline
          ref={polylineRef}
          className="fill-none stroke-current"
          style={{
            strokeWidth: 5,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
          }}
          points="97,262 150,150 200,230 250,150 303,262"
        />
        <line
          className="fill-none stroke-current"
          style={{
            strokeWidth: 5,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            strokeDasharray: 57,
            strokeDashoffset: on ? 57 : 0,
            transition: `stroke-dashoffset .6s ${easing}`,
          }}
          x1="140"
          y1="303.9"
          x2="170"
          y2="255.9"
        />
      </svg>
    </span>
  );
}
