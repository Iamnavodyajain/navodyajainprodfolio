// components/Hero.js - Fixed to remove extra top space
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, Eye, BarChart3, Target, Palette, Code } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const avatarY = useTransform(scrollY, [0, 300], [0, 30]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.9]);

  const productIcons = [
    { icon: BarChart3, label: "Analytics", delay: 0.1 },
    { icon: Target, label: "Strategy", delay: 0.2 },
    { icon: Palette, label: "Design", delay: 0.3 },
    { icon: Code, label: "Development", delay: 0.4 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#151515] px-6 pb-16 md:pb-24 overflow-hidden">
      {/* Remove pt-24 and md:pt-32 from section className above */}
      
      <div className="max-w-7xl mx-auto relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #22C55E 1px, transparent 1px),
                            linear-gradient(to bottom, #22C55E 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 py-8 md:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#16A34A]/10 text-[#22C55E] rounded-full text-sm font-semibold mb-6 border border-[#16A34A]/20"
            >
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></div>
              Product Focused Professional
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] leading-tight mb-6">
              Turning insights into <span className="text-[#22C55E]">thoughtful</span> digital products
            </h1>
            
            <p className="text-lg text-[#A1A1A1] mb-8 leading-relaxed max-w-2xl">
              I work at the intersection of product analytics, user experience, and execution — translating user behaviour and business context into well-defined product decisions. My focus is on understanding how products are used, identifying friction, and shaping solutions that are practical, scalable, and user-centric.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#22C55E] text-white rounded-full font-semibold text-base flex items-center gap-2 hover:bg-[#16A34A] transition-all duration-300 shadow-lg shadow-[#22C55E]/20"
              >
                <Eye size={18} />
                Explore My Work
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown size={14} />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#1C1C1C] text-[#EAEAEA] border border-[#2A2A2A] rounded-full font-semibold text-base flex items-center gap-2 hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </div>
            
            {/* Product Capability Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {productIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#1C1C1C] rounded-lg flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#22C55E] transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#22C55E] transition-colors duration-300" />
                  </div>
                  <span className="text-[#A1A1A1] text-xs font-medium group-hover:text-[#EAEAEA] transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Avatar - Clean and concise */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
            style={{ y: avatarY }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Avatar Container */}
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-[#2A2A2A] group">
                <div className="w-full h-full relative">
                  {/* Author Image */}
                  <Image
                    src="/Authors'image.jpeg"
                    alt="Navodya Jain - Analytics & Product Professional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    quality={100}
                  />
                  
                  {/* Minimal name overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#EAEAEA]">Navodya Jain</h3>
                      <p className="text-[#22C55E] font-medium text-sm mt-0.5">Analyst & Product Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - Only show if there's enough content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-1 text-[#A1A1A1]"
          >
            <span className="text-xs">Explore</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}