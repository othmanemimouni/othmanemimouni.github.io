'use client';

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';

interface JapaneseTowerLandscapeProps {
  country?: 'japan' | 'china' | 'vietnam' | 'thailand' | 'cambodia' | 'turkey';
  className?: string;
}

interface JapaneseTowerLandscapeRef {
  requestPointerLock: () => void;
}

export const JapaneseTowerLandscape = forwardRef<JapaneseTowerLandscapeRef, JapaneseTowerLandscapeProps>(
  ({ country = 'vietnam', className = '' }, ref) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [loaded, setLoaded] = useState(false);

    useImperativeHandle(ref, () => ({
      requestPointerLock: () => {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentDocument) {
          // Try to request pointer lock on the canvas inside the iframe
          const canvas = iframe.contentDocument.getElementById('stage') as HTMLCanvasElement;
          if (canvas) {
            canvas.requestPointerLock?.();
            canvas.focus();
          } else {
            // Fallback to document element
            iframe.contentDocument.documentElement.requestPointerLock?.();
            iframe.focus();
          }
        }
      },
    }));

    useEffect(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const handleLoad = () => {
        setLoaded(true);
      };

      iframe.addEventListener('load', handleLoad);
      return () => iframe.removeEventListener('load', handleLoad);
    }, []);

    const sourceUrl = `/japanese-tower.html#country=${country}`;

    return (
      <div className={`japanese-tower-landscape ${className}`} style={{ width: '100%', height: '100%' }}>
        <iframe
          ref={iframeRef}
          className={`japanese-tower-landscape__frame ${loaded ? 'is-ready' : ''}`}
          title={`Vietnamese tháp in a procedural landscape`}
          src={sourceUrl}
          sandbox="allow-scripts allow-pointer-lock allow-same-origin"
          loading="eager"
          style={{ width: '100%', height: '100%', border: 'none', background: '#ecdcbc' }}
        />
      </div>
    );
  }
);

JapaneseTowerLandscape.displayName = 'JapaneseTowerLandscape';