import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar, Globe, Code, Users, Award } from 'lucide-react';

export default function Projects() {
  const mesettFeatures = [
    { Icon: Globe, title: 'Discover', text: 'Get clarity about what drives you, where you shine, and what you want to build next.' },
    { Icon: Users, title: 'Connect', text: 'Meet students whose strengths complement yours and whose ambitions resonate.' },
    { Icon: Code, title: 'Collaborate', text: 'Work as a team with a shared purpose, clear goals and mutual trust.' },
    { Icon: Award, title: 'Create', text: 'Turn ideas into tangible projects and meaningful work, together.' },
    { Icon: Briefcase, title: 'The beginning', text: 'The idea started in 2025, before ULFQ existed. Development began that same year, shaping the exchange into a real platform.' },
  ];

  const ulfqFeatures = [
    { Icon: Briefcase, title: 'What we build', text: 'Custom websites, web applications, business management systems, workflow automation, integrations, and tailored digital solutions. Scoped from the real business process, not forced into a template.' },
    { Icon: Users, title: 'The team', text: 'A founder-led, hands-on company: around 16 people total, 15 developers and designers, plus a delivery lead. The people who scope the work write the code and support it after launch.' },
    { Icon: Globe, title: 'MΞSETT partnership', text: 'ULFQ is the technology partner of MΞSETT (Moroccan Exchange for Student Teams & Talent), mentoring student teams and helping them build and polish features for their projects.' },
  ];

  const intraFeatures = [
    { Icon: Globe, title: 'Shared identity', text: 'Shared database and authentication with the public MΞSETT site. One account, one profile.' },
    { Icon: Users, title: 'Team workspace', text: 'A private space for student teams to collaborate, plan, and ship projects together.' },
    { Icon: Code, title: 'Built with ULFQ', text: 'Engineered together with the ULFQ team and the other developers behind MΞSETT.' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="section-title">Crafted Projects</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">Selected projects and ventures I have built</p>
        </motion.div>

        <div className="space-y-10">

          {/* MΞSETT INTRA */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[320px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-amber-50 to-amber-100/60 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-amber-700/20">
                <div className="w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="https://www.useulfq.com/mesett/eevee.png"
                    alt="MΞSETT INTRA logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    <Calendar size={12} /> 2026 - Present
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-200/60 px-3 py-1 rounded-full">
                    Founder & Product Lead
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">MΞSETT INTRA</h2>
                <a
                  href="https://www.useulfq.com/mesett/intra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold mt-1 mb-4 hover:text-amber-900 transition-colors inline-flex items-center gap-2"
                >
                  useulfq.com/mesett/intra <ExternalLink size={14} />
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The collaboration workspace of MΞSETT, the place where student teams actually build together. I built it with the ULFQ team and the other developers, sharing one identity with the public MΞSETT site. Sign in, find your people, build the thing.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {intraFeatures.map((f) => (
                    <div key={f.title} className="bg-amber-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <f.Icon size={16} className="text-amber-800" />
                        <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 italic mt-6">
                  The platform is still turning live members and growing every day.
                </p>
              </div>
            </div>
          </motion.article>

          {/* MΞSETT OFFICE */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[320px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-red-50 to-red-100/60 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-red-500/20">
                <div className="w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/office-logo.png"
                    alt="MΞSETT OFFICE logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full">
                    <Calendar size={12} /> 2026 - Present
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-200/60 px-3 py-1 rounded-full">
                    Founder & Builder
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">MΞSETT OFFICE</h2>
                <a
                  href="https://office.mesett.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-semibold mt-1 mb-4 hover:text-red-900 transition-colors inline-flex items-center gap-2"
                >
                  office.mesett.com <ExternalLink size={14} />
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The support and report center for MΞSETT members. Report a member or share a concern, verify your email, submit your report, and the staff reviews it. Access restricted to trusted MΞSETT members only. Built with ULFQ.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Users size={16} className="text-red-700" />
                      <h4 className="font-semibold text-gray-900 text-sm">Report Center</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">Report a member or get in touch with the team. Every report is checked carefully to keep the community safe.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe size={16} className="text-red-700" />
                      <h4 className="font-semibold text-gray-900 text-sm">Restricted access</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">Access is restricted to trusted MΞSETT members only. Verify your email before submitting.</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Code size={16} className="text-red-700" />
                      <h4 className="font-semibold text-gray-900 text-sm">Built with ULFQ</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">Dashboard powered by ULFQ. Your account is secured by mesett.com.</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic mt-6">
                  The platform is still turning live members and growing every day.
                </p>
              </div>
            </div>
          </motion.article>

          {/* MΞSETT */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[320px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100/60 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-orange-500/20">
                <div className="w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="https://mesett.com/_next/image?url=%2Floooo.png&w=96&q=75"
                    alt="MΞSETT logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                    <Calendar size={12} /> 2025 - Present
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                    Chief Executive Officer (CEO)
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">MΞSETT</h2>
                <a
                  href="https://mesett.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold mt-1 mb-4 hover:text-orange-800 transition-colors inline-flex items-center gap-2"
                >
                  mesett.com <ExternalLink size={14} />
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  A student-oriented platform that helps people discover interests, connect with other students, find complementary skills, form teams, and develop meaningful projects. MΞSETT gives that exchange a clear, honest home. Built as founder and owner of the idea.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {mesettFeatures.map((f) => (
                    <div key={f.title} className="bg-orange-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <f.Icon size={16} className="text-orange-600" />
                        <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 italic mt-6">
                  The platform is still turning live members and growing every day.
                </p>
              </div>
            </div>
          </motion.article>

          {/* ULFQ */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[320px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-navy-500/5 to-navy-500/15 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-navy-500/20">
                <div className="w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="https://www.useulfq.com/_next/image?url=%2Fimages%2FLOGO.png&w=640&q=75"
                    alt="ULFQ logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600 bg-cream-200 px-3 py-1 rounded-full">
                    <Calendar size={12} /> 2026 - Present
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-navy-700 bg-navy-100/60 px-3 py-1 rounded-full">
                    Founder & Owner
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">ULFQ</h2>
                <a
                  href="https://www.useulfq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 font-semibold mt-1 mb-4 hover:text-navy-800 transition-colors inline-flex items-center gap-2"
                >
                  useulfq.com <ExternalLink size={14} />
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  ULFQ (Universal Fabrication & Quality) is my own software engineering company. I founded it with the idea of building custom digital systems shaped around how businesses actually work, websites, web applications, management systems, and workflow automation. Today we are a team of about 16 people, including 15 developers and designers.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {ulfqFeatures.map((f) => (
                    <div key={f.title} className="bg-cream-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <f.Icon size={16} className="text-navy-600" />
                        <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 italic mt-6">
                  The team is still working live. Contact us at contact@useulfq.com
                </p>
              </div>
            </div>
          </motion.article>
          {/* Ali Best Travaux */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[320px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100/60 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-yellow-500/20">
                <div className="w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="https://www.alibesttravaux.com/assets/png/Abtlogo-Cgk4YORS.png"
                    alt="Ali Best Travaux company logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                    <Calendar size={12} /> 2026
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                    Web Developer
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Ali Best Travaux</h2>
                <a
                  href="https://www.alibesttravaux.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-semibold mt-1 mb-4 hover:text-yellow-800 transition-colors inline-flex items-center gap-2"
                >
                  alibesttravaux.com <ExternalLink size={14} />
                </a>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Built a comprehensive construction management platform from scratch, developing both the public-facing website and a secure admin dashboard for internal operations.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase size={16} className="text-yellow-600" />
                      <h4 className="font-semibold text-gray-900 text-sm">Main Website</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">Developed the primary platform showcasing services, projects, and company information with modern UI/UX design.</p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase size={16} className="text-yellow-600" />
                      <h4 className="font-semibold text-gray-900 text-sm">Admin Dashboard</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">Engineered a secure admin system for internal team management, featuring project tracking, employee management, payment processing, and invoice generation.</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic mt-6">
                  The site is currently under maintenance. Check back soon.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}