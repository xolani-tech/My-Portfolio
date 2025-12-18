import { motion } from "framer-motion";
import { Code2, Server, Database, Palette, Smartphone, GitBranch } from "lucide-react";

const professions = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, interactive user interfaces with Vue.js, React, HTML, CSS, and JavaScript."
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Creating robust APIs and server-side applications with Node.js, PHP, Python, and Express."
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Designing and managing databases using MySQL, Oracle, and implementing efficient data structures."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Crafting intuitive user experiences with Figma and design principles."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Ensuring seamless experiences across all devices and screen sizes."
  },
  {
    icon: GitBranch,
    title: "Version Control",
    desc: "Managing code efficiently with Git and collaborating via GitHub."
  }
];

export default function Profession() {
  return (
    <section id="profession" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-primary">Profession</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in full-stack web development with expertise in modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card hover:bg-white/5 border border-white/5 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
