import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { useState, useEffect, useRef } from 'react';
import { JapaneseTowerLandscape } from './components/JapaneseTowerLandscape';
import '@designcodeio/threeui/style.css';

const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function MaintenancePage() {
  const [pointerLocked, setPointerLocked] = useState(false);
  const towerRef = useRef<{ requestPointerLock: () => void }>(null);

  const activateControls = () => {
    towerRef.current?.requestPointerLock();
    setPointerLocked(true);
  };

  useEffect(() => {
    const handlePointerLockChange = () => {
      setPointerLocked(document.pointerLockElement !== null);
    };
    document.addEventListener('pointerlockchange', handlePointerLockChange);
    return () => document.removeEventListener('pointerlockchange', handlePointerLockChange);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="japanese-tower-landscape w-full h-full">
          <JapaneseTowerLandscape ref={towerRef} country="vietnam" />
        </div>
        <div className={`absolute inset-0 bg-black/40 transition-opacity ${pointerLocked ? 'opacity-0 pointer-events-none' : ''}`} />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-bold tracking-tight font-mono text-white/90 animate-pulse">
            ERROR 418
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 font-light">
            I'm a teapot. Come back later.
          </p>
        </div>
        {!pointerLocked && (
          <button
            onClick={activateControls}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium text-lg transition-all backdrop-blur-sm"
          >
            Enable 360° View
          </button>
        )}
        {pointerLocked && (
          <p className="mt-8 text-gray-500 text-sm font-mono">
            Press ESC to exit 360° view
          </p>
        )}
      </div>
    </div>
  );
}

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }

    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  if (isMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <Router>
      {!isMobile && <Background3D />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg" role="dialog" aria-label="Cookie consent">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
              This site uses cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
            </p>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors whitespace-nowrap"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;