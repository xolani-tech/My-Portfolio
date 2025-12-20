import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const skills = ["Vue.js", "Node.js", "PHP", "MySQL", "Python"];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-primary font-medium tracking-wide mb-4">Full Stack Web Developer</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-primary">Xolani</span><br />
          <span className="text-white">Sodam from Cape Town</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-300 backdrop-blur-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
