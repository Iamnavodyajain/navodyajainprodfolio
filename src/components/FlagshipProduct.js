// components/FlagshipProduct.js - Professional PM-focused version
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Target, Zap, BarChart, Users, ExternalLink, FileText, Github } from 'lucide-react';
import Image from 'next/image';

export default function FlagshipProduct() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const productPhases = [
    {
      phase: "Problem Framing",
      content: "Clearly defined the core problem by separating surface symptoms (poor matches) from root causes (ambiguous intent, weak signals, and misaligned incentives). User interviews and competitive analysis were used to understand where existing platforms break down.",
      icon: Target,
      color: "border-blue-500/30"
    },
    {
      phase: "Solution Exploration",
      content: "Explored multiple solution paths and validated assumptions around structured onboarding, signal-based matching, and workflow automation. Prioritized approaches that balanced user value, technical feasibility, and long-term extensibility.",
      icon: Zap,
      color: "border-green-500/30"
    },
    {
      phase: "MVP Definition",
      content: "Scoped a focused MVP around intent structuring, intelligent recommendations, and trust signals. Defined success metrics, trade-offs, and non-goals to avoid over-engineering while maintaining a clear product direction.",
      icon: Users,
      color: "border-purple-500/30"
    },
    {
      phase: "Expected Outcomes & Learnings",
      content: "Designed the product to reduce decision time, improve match relevance, and increase trust on both sides of the marketplace. Clarified how small design decisions compound into large behavioral outcomes in two-sided platforms.",
      icon: BarChart,
      color: "border-orange-500/30"
    }
  ];

  const projectLinks = [
    {
      label: "Live Product",
      icon: ExternalLink,
      href: "https://devin-out.vercel.app/",
      description: "Interactive prototype"
    },
    {
      label: "GitHub Repository",
      icon: Github,
      href: "https://github.com/Iamnavodyajain/Devign",
      description: "Code & documentation"
    },
    {
      label: "Product Requirements",
      icon: FileText,
      href: "https://drive.google.com/file/d/1Vxgp8poloX7mr5-XMMrMY_Sd7KxZy8GV/view?usp=sharing",
      description: "Full PRD"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#0E0E0E] to-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Background Pattern */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-[0.02]"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22C55E 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </motion.div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
              <Target size={18} className="text-[#22C55E]" />
              <span className="text-[#22C55E] font-semibold">From idea to execution — how I think about building products</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
              DEVIGN 
            </h2>
             <h5 className="text-1xl md:text-3xl font-bold text-[#EAEAEA] mb-6">
            AI Powered Budget Guidance and Trust-Graph Based Freelancing Team Recommendation Platform
            </h5>
            
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
              A product concept focused on reducing decision friction in freelance hiring by translating vague client intent into structured requirements and meaningful matches.
            </p>
            <p className="text-lg text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed mt-4">
              This project represents how I approach ambiguous problems, define product scope, and design systems that balance user needs, feasibility, and long-term scalability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4 flex items-center gap-3">
                  <Target size={24} className="text-[#22C55E]" />
                  The Problem Space
                </h3>
                <p className="text-[#A1A1A1] leading-relaxed mb-4">
                  Freelance marketplaces struggle with a fundamental mismatch:
                  clients often don't know how to articulate their requirements, while freelancers waste time evaluating poorly defined projects.
                </p>
                <p className="text-[#A1A1A1] leading-relaxed">
                  Existing platforms optimize for volume, not clarity, leading to low match quality, rework, and trust issues on both sides. This problem is not about more freelancers or more listings — it's about better problem definition upfront.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4 flex items-center gap-3">
                  <Users size={24} className="text-[#22C55E]" />
                  Product Approach
                </h3>
                <p className="text-[#A1A1A1] leading-relaxed mb-4">
                  Instead of treating matching as a keyword problem, the product reframes onboarding as a thinking exercise.
                  Client inputs are progressively structured into clear briefs, while freelancers are evaluated on relevance, reliability, and past collaboration signals.
                </p>
                <p className="text-[#A1A1A1] leading-relaxed">
                  The focus is on reducing ambiguity early, improving decision confidence, and designing workflows that scale without increasing cognitive load.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full hover:border-[#22C55E] transition-all duration-300"
              >
                <span className="text-[#EAEAEA] font-semibold text-lg">View Full Product Case Study</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center"
                >
                  <ArrowRight size={18} className="text-white" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Right Visual - Updated image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Updated Image Container */}
              <div className="aspect-[1901/901] rounded-[2.5rem] overflow-hidden border border-[#2A2A2A] shadow-2xl mb-8 p-0 m-0">
                <Image
                  src="/DEVIGN_ui.png"
                  alt="DEVIGN Platform Interface"
                  width={1901}
                  height={901}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>

              {/* Project Links */}
              <div className="space-y-3">
                {projectLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-[#1C1C1C] rounded-xl border border-[#2A2A2A] hover:border-[#22C55E]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#151515] rounded-lg flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#22C55E] transition-colors duration-300">
                        <link.icon size={18} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <div className="text-[#EAEAEA] font-medium">{link.label}</div>
                        <div className="text-[#A1A1A1] text-sm">{link.description}</div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-[#A1A1A1] group-hover:text-[#22C55E] transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Phases */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={`bg-[#1C1C1C] rounded-2xl p-6 border ${phase.color} hover:border-[#22C55E]/50 transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#151515] rounded-lg flex items-center justify-center border border-[#2A2A2A]">
                      <Icon size={18} className="text-[#22C55E]" />
                    </div>
                    <span className="text-[#EAEAEA] font-semibold">{phase.phase}</span>
                  </div>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{phase.content}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}