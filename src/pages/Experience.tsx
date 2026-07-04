import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar } from 'lucide-react';

export default function Experience() {

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Experience</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">My professional journey and work experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 border-2 border-orange-500/20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border-2 border-orange-500/30 group">
                <div className="absolute inset-0 border-2 border-orange-500/50 rounded-2xl transform rotate-6 opacity-50 transition-transform duration-500 ease-out group-hover:rotate-0" />
                <img
                  src="https://alibest-travaux.vercel.app/assets/Abtlogo-Cgk4YORS.png"
                  alt="alibbesttravaux.ma"
                  className="relative w-full h-full object-contain p-8 z-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-2/3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-orange-600" />
                <span className="text-orange-600 font-medium">2026</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Full Stack Developer</h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-4">alibbesttravaux.ma</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Built a comprehensive construction management platform from scratch, developing both the public-facing website and a secure admin dashboard for internal operations.
                </p>
                
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase size={18} />
                    Main Website
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Developed the primary platform showcasing services, projects, and company information with modern UI/UX design.
                  </p>
                  <a 
                    href="https://alibest-travaux.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Live Site
                  </a>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase size={18} />
                    Admin Dashboard
                    <span className="ml-2 px-2 py-0.5 bg-orange-200 text-orange-800 text-xs rounded-full">Private</span>
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Engineered a secure admin system for internal team management, featuring project tracking, employee management, payment processing, and invoice generation.
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Access restricted to authorized personnel only
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Full Stack</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Admin System</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Project Management</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
