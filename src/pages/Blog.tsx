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
            className="mb-8"
          >
            <img
              src="/assets/img/IMG_1065.jpg"
              alt="Essaouira"
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Essaouira: A Journey of Creativity</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              This year, I had the incredible opportunity to visit Essaouira, a beautiful coastal city in Morocco. 
              The experience was truly transformative - the clean beaches, the vibrant colors of the medina, 
              and the creative energy that fills every corner of this magical place.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              Walking through the winding streets, I found inspiration everywhere - from the intricate craftsmanship 
              of local artisans to the endless horizon where the Atlantic meets the sky. Essaouira taught me that 
              creativity isn't just about what we create, but about how we see the world around us. 
              The city's unique blend of tradition and modernity sparked new ideas and perspectives that 
              I carry with me in my work as a developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
