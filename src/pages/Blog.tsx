import { motion } from 'framer-motion';

export default function Blog() {

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Blog</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">Thoughts, tutorials, and insights from my journey</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full h-80 md:h-96 mb-8"
          >
            <div className="absolute inset-0 border-2 border-navy-500/50 rounded-3xl transform rotate-2 opacity-50" />
            <img
              src="/assets/img/IMG_1065.jpg"
              alt="Essaouira"
              className="relative w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Essaouira: A Journey of Creativity</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              This year, I visited Essaouira, a coastal city in Morocco. The beaches there are really clean and the medina has these amazing colors everywhere. It's a pretty special place.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Walking around the streets, I got inspired by the local artisans and their work. Seeing the Atlantic ocean meet the sky was something else. Essaouira showed me that creativity is about how you see things, not just what you make.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              The mix of old traditions and modern vibes there gave me some new ideas that I still think about when I'm coding.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
