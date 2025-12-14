// components/FooterCTA.js
'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, BookOpen, ArrowUpRight, Phone } from 'lucide-react';

export default function FooterCTA() {
  const socialLinks = [
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/navodya-jain-3163a2300", 
      color: "bg-blue-600 hover:bg-blue-700" 
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/Iamnavodya-jain", 
      color: "bg-gray-800 hover:bg-gray-700" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:jainnavodya@gmail.com",
      color: "bg-green-600 hover:bg-green-700" 
    },
    { 
      icon: Phone, 
      label: "Call", 
      href: "tel:+9190159892614",
      color: "bg-red-600 hover:bg-red-700" 
    },
    { 
      icon: BookOpen, 
      label: "Substack", 
      href: "https://substack.com/@theprodlens", 
      color: "bg-purple-600 hover:bg-purple-700" 
    }
  ];

  return (
    <footer className="bg-linear-to-b from-gray-950 to-black pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10"
          >
            From insight to impact
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto px-4"
          >
          Lets connect and explore how we can turn ideas into reality together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-12 md:mb-20 max-w-5xl mx-auto px-2"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.label === "Call" || link.label === "Email" ? "_self" : "_blank"}
                rel={link.label === "Call" || link.label === "Email" ? "" : "noopener noreferrer"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-3 sm:px-6 sm:py-4 ${link.color} text-white rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 transition-colors shadow-lg w-full min-h-[56px] sm:min-h-[64px]`}
              >
                <link.icon size={18} className="sm:w-5 sm:h-5" />
                <span className="truncate">{link.label}</span>
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>

          {/* Alternative: Stacked mobile layout with equal buttons */}
          <div className="block lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 max-w-md mx-auto mb-12"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.label === "Call" || link.label === "Email" ? "_self" : "_blank"}
                  rel={link.label === "Call" || link.label === "Email" ? "" : "noopener noreferrer"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-4 ${link.color} text-white rounded-full font-semibold text-base flex items-center justify-between transition-colors shadow-lg w-full`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-gray-900 text-center">
          <div className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
            © {new Date().getFullYear()} Navodya Jain. Independent product thinking.
          </div>
          <div className="text-gray-700 text-xs md:text-sm">
            Thanks for visiting my prodfolio! 
          </div>
        </div>
      </div>
    </footer>
  );
}