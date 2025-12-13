// components/FooterCTA.js
'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, BookOpen, ArrowUpRight } from 'lucide-react';

export default function FooterCTA() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Github, label: "GitHub", href: "#", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: Mail, label: "Email", href: "#", color: "bg-green-600 hover:bg-green-700" },
    { icon: BookOpen, label: "Substack", href: "#", color: "bg-purple-600 hover:bg-purple-700" }
  ];

  return (
    <footer className="bg-linear-to-b from-gray-950 to-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-10"
          >
            From insight to impact
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto"
          >
            I help teams move beyond surface-level solutions by first defining the real problem, then using data and design to build products that create meaningful outcomes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${link.color} text-white rounded-full font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg`}
              >
                <link.icon size={20} />
                {link.label}
                <ArrowUpRight size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="pt-12 border-t border-gray-900 text-center">
          <div className="text-gray-500 mb-4">
            © {new Date().getFullYear()} Navodya Jain. Independent product thinking.
          </div>
          <div className="text-gray-700 text-sm">
            Designed and built with modern tools for precision.
          </div>
        </div>
      </div>
    </footer>
  );
}