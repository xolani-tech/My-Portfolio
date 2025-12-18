import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' }
];

const tabContent = {
  skills: [
    {
      title: 'UI/UX Design',
      details: 'Designing Low-fidelity and High-fidelity designs for web applications, UI/UX design principles'
    },
    {
      title: 'Data Analysis',
      details: 'Analysing data for Web Applications to ensure smooth data transitions'
    },
    {
      title: 'Full Stack Development',
      details: 'HTML, CSS, JavaScript, Vue.js, Node.js, Python, PHP, MySQL, Oracle, Oracle Apex, Bootstrap, Figma, WordPress, API development, Scrum/Agile, Git'
    },
    {
      title: 'Soft Skills',
      details: 'Collaboration, Continuous Learning, Problem-Solving, Time Management, Adaptability, Attention to Detail'
    }
  ],
  experience: [
    {
      period: '2025 - Current',
      title: 'Intern at LC Studio',
      details: 'Built E-commerce and HR management systems. Developed real-time staff monitoring with Raspberry Pi and RFID. Used Vue.js, Node.js, PHP, MySQL, and Python following Scrum/Agile methodologies.'
    },
    {
      period: '2023 - 2024',
      title: 'Fashion Assistant at TFG',
      details: 'Developed strong customer service and problem-solving skills. Excelled in understanding customer needs, managing transactions, and maintaining stock.'
    }
  ],
  education: [
    { period: '2025', title: 'StellieTech', details: 'Trained in Data Science and Data analysis '},
    { period: '2025', title: 'LC Studio', details: 'Continued advanced development training' },
    { period: '2024', title: 'LC Academy', details: 'Fullstack Web Developer Certificate' },
    { period: '2022', title: 'Valhalla Secondary High School', details: 'Matric Certificate' }
  ],
  certificates: [
    
    { title: 'Cybersecurity Certification', issuer: 'Cisco Academy' },
    { title:  'Data Science Certificate', issuer: 'StellieTech'},
    { title: 'Data Science Certification', issuer: 'Cisco Academy' },
    { title: 'IBM Cloud Essentials', issuer: 'IBM' },
    { title: 'Scrum Fundamentals', issuer: 'Professional Badge' }
  ]
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-teal-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-slate-800 rounded-3xl overflow-hidden">
                <img
                  src="./src\assets\professional photo.jpg"
                  alt="Xolani Sodam"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-red-600 to-bl-500 rounded-2xl shadow-lg">
                <span className="text-white font-semibold">Available for Work</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-red-400">Me</span>
            </h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              Hi, I'm Xolani, a passionate and resourceful Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. I recently completed an intensive coding bootcamp, where I gained hands-on experience building responsive, user-centered applications.
            </p>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              My journey into tech has been driven by curiosity, continuous learning, and a love for problem-solving. Now, I'm actively seeking a junior developer role or internship where I can grow and contribute.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-red-500 to-bl-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar"
            >
              {tabContent[activeTab].map((item, index) => (
                <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300 font-medium">
                        {item.period && <span className="text-red-400 mr-2">{item.period}</span>}
                        {item.title}
                        {item.issuer && <span className="text-slate-500 ml-2">• {item.issuer}</span>}
                      </p>
                      {item.details && (
                        <p className="text-slate-500 text-sm mt-1">{item.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}