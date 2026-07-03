import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Home() {
  const { text } = useTypingEffect(['Full-Stack Developer', 'Self-Taught Developer', 'Problem Solver', 'Tech Enthusiast'], 100);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-navy-600 font-medium text-lg tracking-wide">
                Hi, I'm
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Othmane</span>
                <span className="block text-navy-900">Mimouni</span>
              </motion.h1>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl sm:text-3xl text-navy-600 font-medium h-10 tracking-wide">
                {text}
                <span className="animate-pulse">|</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-navy-700 text-lg leading-relaxed max-w-xl tracking-wide">
                I'm passionate about building modern, responsive web applications and continuously expanding my skills through hands-on projects, real-world experience, and lifelong learning.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/othmanemimouni' },
                  { icon: Twitter, href: 'https://twitter.com/othmanemimouni' },
                  { icon: Instagram, href: 'https://www.instagram.com/othmanemimounii' },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex items-center justify-center text-navy-600 hover:text-navy-900 hover:border-navy-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-0 border-2 border-navy-500/50 rounded-3xl transform rotate-6 opacity-50" />
                <img
                  src="/assets/img/othmanemimounii.jpg"
                  alt="Othmane Mimouni"
                  className="relative w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-navy-700 text-lg leading-relaxed mb-4">
                  I'm a self-taught developer and Full-Stack Development student with over a year of hands-on learning and project experience.
                </p>
                <p className="text-navy-700 text-lg leading-relaxed">
                  I enjoy transforming ideas into modern, user-friendly web applications while continuously improving my skills through real-world projects and practical experience.
                </p>
              </div>
              <div className="border-l-2 border-navy-500/30 pl-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">My Journey</h3>
                  <p className="text-navy-700 leading-relaxed">
                    My programming journey began with curiosity and quickly grew into a genuine passion for software development. Since then, I've built personal and academic projects that have strengthened my understanding of frontend and backend development, problem-solving, and writing clean, maintainable code.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">Current Focus</h3>
                  <p className="text-navy-700 leading-relaxed">
                    I'm currently deepening my knowledge of <strong className="text-navy-900">React</strong>, <strong className="text-navy-900">TypeScript</strong>, <strong className="text-navy-900">Node.js</strong>, <strong className="text-navy-900">Express</strong>, <strong className="text-navy-900">Python</strong>, and databases while exploring software architecture, performance optimization, and AI-powered development tools. My goal is to become a well-rounded full-stack engineer capable of building scalable and impactful applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">Beyond Coding</h3>
                  <p className="text-navy-700 leading-relaxed">
                    Outside of development, I enjoy working on personal projects, exploring startup ideas, discovering new technologies, and continuously learning to become a better developer every day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}