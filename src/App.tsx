import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load 3D background
const Background3D = lazy(() => import('./components/Background3D'));

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }

    // Check if mobile
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  return (
    <Router>
      {!isMobile && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
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