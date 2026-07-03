import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-cream-100/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-navy-600 tracking-wide">© 2026 Othmane Mimouni. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/othmanemimouni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/othmanemimouni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/othmanemimounii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:utrshall@gmail.com"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}