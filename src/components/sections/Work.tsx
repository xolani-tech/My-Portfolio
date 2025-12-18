import { motion } from "framer-motion";
// import ecommerceImg from "@assets/generated_images/e-commerce_website_interface.png";
// import hrImg from "@assets/generated_images/hr_management_dashboard.png";
// import monitoringImg from "@assets/generated_images/analytics_dashboard_dark_mode.png";

const projects = [
  {
    title: "E-Commerce Platform",
    // image: ecommerceImg,
    stack: ["Vue.js", "Node.js", "MySQL", "Express"],
    desc: "A full-stack e-commerce solution with product management, shopping cart, payment integration, and admin dashboard."
  },
  {
    title: "HR Management System",
    // image: hrImg,
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Comprehensive HR solution for managing employees, attendance, payroll, and performance reviews."
  },
  {
    title: "Staff Monitoring App",
    // image: monitoringImg,
    stack: ["Python", "Raspberry Pi", "Data Analysis"],
    desc: "Real-time staff tracking with IoT technology. Monitors clock-ins, admin authentication, and reports."
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-primary">Work</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects I've built during my internship and training, demonstrating my skills in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  // src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-primary border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
