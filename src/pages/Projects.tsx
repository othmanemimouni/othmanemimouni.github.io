import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar, Globe, Database, Code, MessageSquare, ChevronDown, ChevronUp, Lock, Users, Award, HelpCircle, Settings, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Featured Projects</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">My projects and creative work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* XeraWork Project */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="group"
          >
            <div className="glass-card p-6 h-full border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 rounded-3xl overflow-hidden relative">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  animate={{
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white border-2 border-green-500/30 flex items-center justify-center p-4 shadow-lg"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/243470657?s=200&v=4"
                    alt="XeraWork"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Content */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={16} className="text-green-600" />
                    <span className="text-green-600 font-medium text-sm">2025 - Present</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Full Stack Developer</h2>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">xerawork.ma</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Building a comprehensive multi-language platform from scratch as my own project.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={16} className="text-green-600" />
                    <span className="text-gray-700">Multi-Language Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database size={16} className="text-green-600" />
                    <span className="text-gray-700">Full Stack Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code size={16} className="text-green-600" />
                    <span className="text-gray-700">IRCAM Collaboration</span>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className="border-t border-green-200 pt-4">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="w-full flex items-center justify-center gap-2 text-green-600 font-medium hover:text-green-800 transition-colors py-2 text-sm"
                  >
                    {showMore ? (
                      <>
                        <ChevronUp size={16} />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        See More Details
                      </>
                    )}
                  </button>
                  
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 pt-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Lock size={14} className="text-green-600" />
                        <span className="text-gray-600">Authentication System</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 size={14} className="text-green-600" />
                        <span className="text-gray-600">Overview & Analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-green-600" />
                        <span className="text-gray-600">Create & Publishing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-green-600" />
                        <span className="text-gray-600">Network & Social</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={14} className="text-green-600" />
                        <span className="text-gray-600">Communication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={14} className="text-green-600" />
                        <span className="text-gray-600">Profile & Achievements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HelpCircle size={14} className="text-green-600" />
                        <span className="text-gray-600">Support System</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings size={14} className="text-green-600" />
                        <span className="text-gray-600">Account Management</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Full Stack</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Multi-Language</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">WIP</span>
                </div>

                {/* Work in Progress Badge */}
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full text-xs text-yellow-800">
                    🚧 Under Development
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AliBest Travaux Project */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="group"
          >
            <div className="glass-card p-6 h-full border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl overflow-hidden relative">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  animate={{
                    rotate: [0, -2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white border-2 border-orange-500/30 flex items-center justify-center p-4 shadow-lg"
                >
                  <img
                    src="https://alibest-travaux.vercel.app/assets/Abtlogo-Cgk4YORS.png"
                    alt="alibbesttravaux.ma"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Content */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={16} className="text-orange-600" />
                    <span className="text-orange-600 font-medium text-sm">2026</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Full Stack Developer</h2>
                  <a 
                    href="https://alibest-travaux.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-orange-600 mb-3 hover:text-orange-800 transition-colors inline-flex items-center gap-1"
                  >
                    alibbesttravaux.ma
                    <ExternalLink size={14} />
                  </a>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Built a comprehensive construction management platform from scratch.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase size={16} className="text-orange-600" />
                    <span className="text-gray-700">Main Website</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase size={16} className="text-orange-600" />
                    <span className="text-gray-700">Admin Dashboard</span>
                    <span className="px-2 py-0.5 bg-orange-200 text-orange-800 text-xs rounded-full">Private</span>
                  </div>
                </div>

                {/* View Live Site Button */}
                <motion.a
                  href="https://alibest-travaux.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-xl transition-colors text-center text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Live Site
                    <ArrowRight size={16} />
                  </span>
                </motion.a>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Full Stack</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">React</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Admin</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}