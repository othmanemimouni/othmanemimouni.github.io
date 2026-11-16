import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Works', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 border-cream-300/60 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-lg shadow-lg shadow-cream-300/30'
          : 'bg-cream-50/80 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            aria-label="Othmane Mimouni home"
            className="group flex items-center gap-2.5 text-navy-900"
          >
            <Logo
              className="h-14 w-14 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-110"
              animateOnMount
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-mono text-sm md:text-base font-semibold tracking-tight">
                Othmane Mimouni
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-navy-500">
                crafting the web
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-label={`Navigate to ${item.name}`}
                  className={`relative font-medium transition-colors duration-200 tracking-wide ${
                    location.pathname === item.path
                      ? 'text-navy-900'
                      : 'text-navy-600 hover:text-navy-900'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-500 to-navy-700"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg hover:bg-cream-200 transition-colors text-navy-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cream-300 bg-cream-50/95 backdrop-blur-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-label={`Navigate to ${item.name}`}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-navy-500/20 text-navy-900'
                      : 'text-navy-600 hover:bg-cream-200 hover:text-navy-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-navy-500 via-tan-400 to-navy-700"
      />
    </motion.nav>
  );
}