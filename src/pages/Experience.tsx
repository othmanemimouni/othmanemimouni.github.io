import { motion } from 'framer-motion';
import { Calendar, Lightbulb, Target, Users } from 'lucide-react';

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
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Business Operations Intern</h2>
              <a 
                href="https://leddelivery.ma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold text-green-600 mb-4 hover:text-green-800 transition-colors inline-block"
              >
                Yadex - LedDelivery
              </a>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Spent 1 month learning the inner workings of a delivery agency, understanding marketing strategies, system operations, and business processes to gain comprehensive industry knowledge.
                </p>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Lightbulb size={18} />
                    Marketing Strategy
                  </h4>
                  <p className="text-gray-700">
                    Learned how the agency approaches marketing, customer acquisition, and promotional campaigns to grow their delivery business.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Target size={18} />
                    System Operations
                  </h4>
                  <p className="text-gray-700">
                    Gained hands-on experience with the delivery management system, including retour commands processing and workflow optimization.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users size={18} />
                    Business Insights
                  </h4>
                  <p className="text-gray-700">
                    Developed understanding of agency operations, client relationships, and the logistics industry to apply these insights to future projects.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Business Operations</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Marketing</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Logistics</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Agency Operations</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
