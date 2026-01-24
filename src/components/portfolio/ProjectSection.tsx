import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product management, shopping cart, payment integration, and admin dashboard. Built with modern web technologies for seamless shopping experience. The prject is still under production',
    image: '/images/E-commerce.png',
    technologies: ['Php', 'PhpMyAdmin', 'Html', 'Css'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: ''
  },
  {
    id: 2,
    title: 'HR Management System',
    description: 'A fully functional, modern HR system for a Module One Project assignment. This application offers an intuitive, user-friendly platform to streamline employee management for modern workplaces. With features such as dynamic employee catalogs, leave request approvals, and absence tracking, it empowers organizations to manage their teams efficiently while providing a seamless experience for both administrators and staff.',
    image: '/images/hr-system.png',
    technologies: ['Vue.js', 'MySQL', 'Node,js'],
    category: 'fullstack',
    liveUrl: 'https://moderntechhrsystem.vercel.app',
    githubUrl: 'https://github.com/xolani-tech/HR-Management-System'
  },
  {
    id: 3,
    title: 'Webite Mockup',
    description: 'The goal was to replicate FrontEnd of the official website of VISIO. The goal was to demonstrate front-end development skills, attention to detail, and design accuracy in Design and UX.',
    image: '/images/Visio-site-replica.png',
    technologies: ['Html', 'Javascript', 'Css'],
    category: 'Frontend',
    liveUrl: 'https://visio-elemental-challenge-iota.vercel.app',
    githubUrl: 'https://github.com/xolani-tech/Visio-Elemental-challenge'
  }
];

const additionalProjects = [
  {
    id: 4,
    // title: 'Blog Landing page',
    description: 'A Blog page designed to improve skill in terms of User experience and interface as well. ',
    image: [ '/images/about-blog-page.png'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    liveUrl: 'https://xolani-tech.github.io/Blog-Landing-Page/index.html',
    githubUrl: 'https://github.com/xolani-tech/Blog-Landing-Page'
  },
  {
     id: 5,
    title: 'SplitSpark',
    description: 'SplitSpark – A multi-currency payment splitter built on Bitcoin Lightning. SplitSpark allows groups of people to contribute in different currencies toward any shared expense, product, or service, anywhere in the world. Each participant enters their share in their preferred currency, and the system instantly converts the total to Bitcoin and transfers it directly to the recipient in their desired currency via the MavaPay API. By using Bitcoin Lightning, payments are processed at high speed before market fluctuations occur, removing the need for traditional banking intermediaries like SWIFT. SplitSpark makes cross-border, multi-currency transactions seamless, fast, and reliable.. ',
    image: [ '/images/splitspark-2.png'],
    technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'Node.js', 'Mavapay API'],
    category: 'Frontend, Backend, Mavapay API integration',
    liveUrl: '',
    githubUrl: 'https://github.com/Shaun-Adams/SplitSpark'
  },
  
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-500/50 transition-all duration-500"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.liveUrl}
          className="p-3 bg-red-400 rounded-full text-white hover:bg-red-600 transition-colors transform -translate-y-4 group-hover:translate-y-0 duration-300"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
        <a
          href={project.githubUrl}
          className="p-3 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors transform -translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-slate-800 text-red-500 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-red-600">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of projects I've built during my internship and training, demonstrating my skills in full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* See More Section */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {additionalProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="group px-5 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full border border-slate-700 hover:border-red-500/50 transition-all duration-300"
          >
            <span>{showMore ? 'Show Less' : 'See More Projects'}</span>
            {showMore ? (
              <ChevronUp className="w-5 h-5 ml-8 group-hover:-translate-y-8 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-15 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}