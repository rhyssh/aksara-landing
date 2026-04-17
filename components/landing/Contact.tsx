import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-white dark:from-[#0a1929] dark:via-[#0F2A3F] dark:to-[#0a1929]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-full text-sm text-[#0F2A3F] dark:text-white border border-[#3EDBF0]/30">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#0F2A3F] dark:text-white">
            Let`&apos;`s Build Something
            <span className="bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent"> Amazing </span>
            Together
          </h2>
          <p className="text-lg text-[#0F2A3F]/70 dark:text-white/70 max-w-3xl mx-auto">Ready to transform your business? Contact us today for a free consultation and let&apos;s discuss how we can help you achieve your goals.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-1 space-y-6">
            <GlassCard className="p-6" delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-xl">
                  <Mail className="w-6 h-6 text-[#0F2A3F] dark:text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#0F2A3F] dark:text-white">Email</h3>
                  <p className="text-[#0F2A3F]/70 dark:text-white/70">contact@akarsa.com</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-xl">
                  <Phone className="w-6 h-6 text-[#0F2A3F] dark:text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#0F2A3F] dark:text-white">Phone</h3>
                  <p className="text-[#0F2A3F]/70 dark:text-white/70">+62 812 3456 7890</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#0F2A3F] dark:text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#0F2A3F] dark:text-white">Location</h3>
                  <p className="text-[#0F2A3F]/70 dark:text-white/70">Jakarta, Indonesia</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-2">
            <GlassCard className="p-8">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-full mb-4">
                    <CheckCircle className="w-12 h-12 text-[#2EC4B6] dark:text-[#3EDBF0]" />
                  </div>
                  <h3 className="text-2xl mb-2 text-[#0F2A3F] dark:text-white">Message Sent!</h3>
                  <p className="text-[#0F2A3F]/70 dark:text-white/70">We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[#0F2A3F] dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3EDBF0]/50 focus:border-[#3EDBF0] transition-all text-[#0F2A3F] dark:text-white placeholder-[#0F2A3F]/40 dark:placeholder-white/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#0F2A3F] dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3EDBF0]/50 focus:border-[#3EDBF0] transition-all text-[#0F2A3F] dark:text-white placeholder-[#0F2A3F]/40 dark:placeholder-white/40"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-[#0F2A3F] dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3EDBF0]/50 focus:border-[#3EDBF0] transition-all text-[#0F2A3F] dark:text-white placeholder-[#0F2A3F]/40 dark:placeholder-white/40 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-[#3EDBF0]/30 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
