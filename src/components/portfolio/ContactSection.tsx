import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbdrrwzq");

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-slate-400">
            I'm currently looking for junior developer roles or internship opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "jonathanmicah23@gmail.com" },
              { icon: Phone, label: "Phone", value: "+27 68 102 1014" },
              { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-red-500">
                  <item.icon />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <a className="w-12 h-12 rounded-xl border border-slate-800 flex items-center justify-center hover:bg-slate-800 text-slate-400 hover:text-white transition">
                <Linkedin />
              </a>
              <a className="w-12 h-12 rounded-xl border border-slate-800 flex items-center justify-center hover:bg-slate-800 text-slate-400 hover:text-white transition">
                <Github />
              </a>
              <a
                href=".\src\assets\Xolani Curriculum Vitae.pdf"
                download
                className="inline-flex items-center justify-center gap-2 mt-0 px-8 py-3 rounded-full 
                    border border-red-500/60 text-red-400 font-semibold
                   hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30
                   transition-all"
                >
                 Download CV
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl"
          >
            {state.succeeded ? (
              <div className="text-center py-16">
                <CheckCircle className="mx-auto mb-4 text-red-500 w-12 h-12" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-400">
                  Thank you for reaching out. I’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full h-12 rounded-xl bg-slate-900/60 border border-slate-800 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full h-12 rounded-xl bg-slate-900/60 border border-slate-800 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your opportunity..."
                    className="w-full rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3 text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-red-600 to-bl-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-black transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
