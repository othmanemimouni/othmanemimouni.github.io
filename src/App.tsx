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
import { useState, useEffect } from 'react';

const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true';
const maintenanceMessage = import.meta.env.VITE_MAINTENANCE_MESSAGE || 'COME BACK LATER';

function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold animate-pulse">
          {maintenanceMessage}
        </h1>
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