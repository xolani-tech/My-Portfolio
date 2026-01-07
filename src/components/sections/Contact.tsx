import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            I'm currently looking for junior developer roles or internship
            opportunities. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-white font-medium">xolanisodam@gmail.com</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-white font-medium">+27 123 456 789</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-white font-medium">
                  Cape Town, South Africa
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4 mb-8">
                {/* LinkedIn */}

                <button className="border border-white/10 hover:bg-white/10 text-muted-foreground hover:text-white rounded-xl w-12 h-12 flex items-center justify-center">
                  <Linkedin />
                </button>

                {/* GitHub */}
                    <a

  ></a>

                <button className="border border-white/10 hover:bg-white/10 text-muted-foreground hover:text-white rounded-xl w-12 h-12 flex items-center justify-center">
                  <Github />
                </button>
              </div>

              <button className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 h-12 px-6">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Name</label>
                <input
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-white h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Email</label>
                <input
                  placeholder="your@gmail.com"
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-white h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea
                  placeholder="Tell me about your opportunity..."
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-white min-h-[150px] rounded-xl resize-none"
                />
              </div>

              <button className="w-full rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 h-12 text-base flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
