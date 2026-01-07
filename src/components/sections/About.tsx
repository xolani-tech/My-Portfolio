import { useState } from "react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

const tabs = ["Skills", "Experience", "Education", "Certificates"];

const content = {
  Skills: (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span> Data Analysis
        </h4>
        <p className="text-muted-foreground text-sm">Analysing data for Web Applications to ensure smooth data transitions and integrity.</p>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span> Full Stack Development
        </h4>
        <p className="text-muted-foreground text-sm">HTML, CSS, JavaScript, Vue.js, Node.js, Python, PHP, MySQL, Oracle, Oracle Apex, Bootstrap, Tailwind, Git.</p>
      </div>
    </div>
  ),
  Experience: (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex justify-between mb-1">
          <h4 className="text-white font-semibold">Junior Developer Intern</h4>
          <span className="text-primary text-xs">2024 - Present</span>
        </div>
        <p className="text-muted-foreground text-sm">Building responsive web applications and assisting with backend API development.</p>
      </div>
    </div>
  ),
  Education: (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h4 className="text-white font-semibold">Coding Bootcamp</h4>
        <p className="text-muted-foreground text-sm">Intensive Full Stack Web Development training covering modern technologies and agile methodologies.</p>
      </div>
    </div>
  ),
  Certificates: (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h4 className="text-white font-semibold">Full Stack Web Development</h4>
        <p className="text-muted-foreground text-sm">Certified proficiency in MERN stack and PHP development.</p>
      </div>
    </div>
  )
};

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted border border-white/10">
            </div>
            <div className="absolute bottom-6 right-6">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">Available for Work</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Hi, I'm Xolani, a passionate and resourceful Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. I recently completed an intensive coding bootcamp, where I gained hands-on experience building responsive, user-centered applications.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My journey into tech has been driven by curiosity, continuous learning, and a love for problem-solving. Now, I'm actively seeking a junior developer role or internship where I can grow and contribute.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
<button
  key={tab}
  onClick={() => setActiveTab(tab)}
  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    activeTab === tab
      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
      : "bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10"
  }`}
>

                  {tab}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {content[activeTab as keyof typeof content]}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
