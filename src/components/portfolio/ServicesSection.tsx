import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Server, GitBranch } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with Vue.js, React, HTML, CSS, and JavaScript.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications with Node.js, PHP, Python, and Express.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and managing databases using MySQL, Oracle, and implementing efficient data structures.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences with Figma, from wireframes to high-fidelity prototypes.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring seamless experiences across all devices with mobile-first development approach.'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Managing code efficiently with Git and GitHub, following best practices for collaboration.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-red-400">Profession</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Specialized in full-stack web development with expertise in modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}