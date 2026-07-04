import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar, Building2 } from 'lucide-react';

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
          className="glass-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200">
                <img
                  src="/assets/img/alibest-placeholder.jpg"
                  alt="AliBest Travaux"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-50">
                  <Building2 size={64} className="text-navy-300" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-2/3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-navy-600" />
                <span className="text-navy-600 font-medium">2026</span>
              </div>
              
              <h2 className="text-3xl font-bold text-navy-900 mb-2 tracking-tight">Full Stack Developer</h2>
              <h3 className="text-xl font-semibold text-navy-700 mb-4">alibbesttravaux.ma</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-navy-700 text-lg leading-relaxed">
                  Built a comprehensive construction management platform from scratch, developing both the public-facing website and a secure admin dashboard for internal operations.
                </p>
                
                <div className="bg-navy-50 rounded-xl p-4">
                  <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                    <Briefcase size={18} />
                    Main Website
                  </h4>
                  <p className="text-navy-700 mb-3">
                    Developed the primary platform showcasing services, projects, and company information with modern UI/UX design.
                  </p>
                  <a 
                    href="https://alibest-travaux.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Live Site
                  </a>
                </div>
                
                <div className="bg-navy-50 rounded-xl p-4">
                  <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                    <Briefcase size={18} />
                    Admin Dashboard
                    <span className="ml-2 px-2 py-0.5 bg-navy-200 text-navy-800 text-xs rounded-full">Private</span>
                  </h4>
                  <p className="text-navy-700 mb-3">
                    Engineered a secure admin system for internal team management, featuring project tracking, employee management, payment processing, and invoice generation.
                  </p>
                  <p className="text-navy-500 text-sm italic">
                    Access restricted to authorized personnel only
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">Full Stack</span>
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">Admin System</span>
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">Project Management</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
