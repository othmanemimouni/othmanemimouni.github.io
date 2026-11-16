import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Get In Touch</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">Let's connect and build something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-12 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4 tracking-tight">Coming Soon</h2>
          <p className="text-navy-700 text-lg max-w-2xl mx-auto leading-relaxed">
            The contact form is on its way. If you really want to reach me, you can find me daily.
            And if you really, really want me... you probably can't find me. Try anyway.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://github.com/othmanemimouni" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Github size={18} />
              Find me on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}