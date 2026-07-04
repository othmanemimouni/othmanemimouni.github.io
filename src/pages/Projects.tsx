import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar, Globe, Database, Code, MessageSquare, ChevronDown, ChevronUp, Lock, Users, Award, HelpCircle, Settings, BarChart3, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Featured Projects</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">My projects and creative work</p>
        </motion.div>

        <div className="space-y-8">
          {/* XeraWork Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 md:p-8 border-2 border-green-500/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-1/3 max-w-xs"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border-2 border-green-500/30 group">
                  <div className="absolute -inset-2 border-2 border-green-500/50 rounded-2xl transform rotate-6 opacity-50 transition-transform duration-500 ease-out group-hover:rotate-0" />
                  <img
                    src="https://avatars.githubusercontent.com/u/243470657?s=200&v=4"
                    alt="XeraWork"
                    className="relative w-full h-full object-contain p-8"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full md:w-2/3 text-center md:text-left"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-green-600" />
                  <span className="text-green-600 font-medium">2025 - Present</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Full Stack Developer</h2>
                <h3 className="text-xl font-semibold text-green-600 mb-4">xerawork.ma</h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Building a comprehensive multi-language platform from scratch as my own project. Designed the entire system architecture, database schema, and user interface. Collaborating with IRCAM for Amazigh language correction and validation.
                  </p>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Globe size={18} />
                      Multi-Language Support
                    </h4>
                    <p className="text-gray-700">
                      Platform supports Amazigh, Arabic, French, and English languages, making tech education accessible to diverse communities across Morocco and beyond.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Database size={18} />
                      Full Stack Architecture
                    </h4>
                    <p className="text-gray-700">
                      Designed and implemented complete database architecture, backend APIs, and frontend interfaces. Built scalable system ready for large-scale deployment.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Code size={18} />
                      IRCAM Collaboration
                    </h4>
                    <p className="text-gray-700">
                      Partnering with IRCAM (Royal Institute of Amazigh Culture) to ensure accurate Amazigh language representation and cultural authenticity in the platform.
                    </p>
                  </div>

                  {/* Expandable Details */}
                  <div className="overflow-hidden">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="w-full flex items-center justify-center gap-2 text-green-600 font-medium hover:text-green-800 transition-colors py-2"
                    >
                      {showMore ? (
                        <>
                          <ChevronUp size={18} />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={18} />
                          See More Details
                        </>
                      )}
                    </button>
                    
                    {showMore && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4"
                      >
                        {/* Authentication */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Lock size={18} />
                            Authentication System
                          </h4>
                          <p className="text-gray-700">
                            Secure login with GitHub and Google OAuth, password reset functionality, email verification, and comprehensive user authentication management.
                          </p>
                        </div>

                        {/* Overview & Analytics */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <BarChart3 size={18} />
                            Overview & Analytics
                          </h4>
                          <p className="text-gray-700">
                            Platform dashboard with activity tracking, analytics overview, and roadmap visualization for users and administrators.
                          </p>
                        </div>

                        {/* Create & Publishing */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <FileText size={18} />
                            Create & Publishing
                          </h4>
                          <p className="text-gray-700">
                            Content creation tools for posts, articles, projects, and events with rich text editing, media uploads, and publishing workflows.
                          </p>
                        </div>

                        {/* Network */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Users size={18} />
                            Network & Social
                          </h4>
                          <p className="text-gray-700">
                            Contact management, search functionality, followers system, friends connections, and mentorship features for community building.
                          </p>
                        </div>

                        {/* Communication */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <MessageSquare size={18} />
                            Communication
                          </h4>
                          <p className="text-gray-700">
                            Real-time chat, discussion rooms, video meetings (coming soon), announcements, and notification system for seamless communication.
                          </p>
                        </div>

                        {/* Profile */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Award size={18} />
                            Profile & Achievements
                          </h4>
                          <p className="text-gray-700">
                            User posts, bookmarks, achievements system, reputation points, personal notes, and calendar integration for profile management.
                          </p>
                        </div>

                        {/* Support */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <HelpCircle size={18} />
                            Support System
                          </h4>
                          <p className="text-gray-700">
                            Email support, ticket management, and comprehensive help center with FAQs and documentation.
                          </p>
                        </div>

                        {/* Account */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Settings size={18} />
                            Account Management
                          </h4>
                          <p className="text-gray-700">
                            User certifications, subscription management, and comprehensive account settings for personalization and privacy control.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Full Stack</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Multi-Language</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Database Design</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">IRCAM Partnership</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Work in Progress</span>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-yellow-800 font-medium">
                    🚧 This project is currently under development. Check back soon for updates!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AliBest Travaux Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 md:p-8 border-2 border-orange-500/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full md:w-1/3 max-w-xs"
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
                transition={{ delay: 0.7 }}
                className="w-full md:w-2/3 text-center md:text-left"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-orange-600" />
                  <span className="text-orange-600 font-medium">2026</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Full Stack Developer</h2>
                <a 
                  href="https://alibest-travaux.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-orange-600 mb-4 hover:text-orange-800 transition-colors inline-flex items-center gap-2"
                >
                  alibbesttravaux.ma
                  <ExternalLink size={16} />
                </a>
                
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
    </div>
  );
}