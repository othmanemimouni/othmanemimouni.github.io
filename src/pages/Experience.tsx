import { motion } from 'framer-motion';
import { Calendar, Bug, Truck, Megaphone } from 'lucide-react';

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
          className="glass-card p-8 md:p-12 border-2 border-green-500/20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border-2 border-green-500/30 group">
                <div className="absolute inset-0 border-2 border-green-500/50 rounded-2xl transform rotate-6 opacity-50 transition-transform duration-500 ease-out group-hover:rotate-0" />
                <img
                  src="https://cdn.leddelivery.ma/images/company/1736534556-197-logo_yadex.png"
                  alt="Yadex"
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
                <Calendar size={18} className="text-green-600" />
                <span className="text-green-600 font-medium">2026</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Full Stack Developer</h2>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Yadex - LedDelivery</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Developed and maintained the delivery management system, focusing on retour commands processing, bug tracking, and system optimization for seamless logistics operations.
                </p>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Bug size={18} />
                    Bug Tracking & System Debugging
                  </h4>
                  <p className="text-gray-700">
                    Identified and resolved critical issues in the retour commands system, ensuring error-free processing and improved system reliability.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Truck size={18} />
                    Delivery Operations
                  </h4>
                  <p className="text-gray-700">
                    Optimized the delivery workflow and retour commands system to streamline logistics and enhance customer experience.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Megaphone size={18} />
                    Marketing Integration
                  </h4>
                  <p className="text-gray-700">
                    Collaborated on marketing features and promotional campaigns within the delivery platform to drive user engagement.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Full Stack</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Delivery System</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Bug Fixing</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Logistics</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
