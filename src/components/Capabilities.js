// components/Capabilities.js - Professional PM-focused version
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Target, Palette, Code, ChevronRight } from 'lucide-react';

export default function Capabilities() {
  const ref = useRef(null);

  const capabilities = [
    {
      icon: BarChart3,
      title: "Product Analytics",
      description: "Turning data into decisions",
      details: "I use product analytics to understand why users behave the way they do, not just what they do. My focus is on identifying friction, validating hypotheses, and supporting prioritization with evidence.",
      application: [
        "Define success metrics before analysis",
        "Segment users to avoid misleading averages",
        "Diagnose drop-offs across funnels and cohorts",
        "Translate insights into clear product recommendations"
      ],
      skills: ["Funnel & Cohort Analysis", "A/B Testing", "SQL & Python", "Mixpanel/Amplitude"]
    },
    {
      icon: Target,
      title: "Product Strategy",
      description: "Balancing vision with execution",
      details: "I approach product strategy by balancing user needs, business impact, and execution constraints. My focus is on clarity — defining what not to build is as important as what to build.",
      application: [
        "Frame problems before jumping to solutions",
        "Prioritize using impact vs effort, not intuition",
        "Break vision into milestones and learning goals",
        "Align decisions with long-term product direction"
      ],
      skills: ["OKRs & Outcome Alignment", "Roadmap Thinking", "Stakeholder Alignment", "Market Context"]
    },
    {
      icon: Palette,
      title: "UX & Product Design",
      description: "Designing for behavior, not aesthetics",
      details: "I design interfaces to reduce cognitive load and guide user behavior. My goal is clarity — helping users understand what to do next without friction.",
      application: [
        "Start with user intent, not screens",
        "Design flows before UI",
        "Validate assumptions with quick prototypes",
        "Iterate based on usability feedback"
      ],
      skills: ["User Research & Testing", "Prototyping", "Design Systems", "Accessibility Thinking"]
    },
    {
      icon: Code,
      title: "Product Development",
      description: "Collaborating on execution feasibility",
      details: "My development background helps me think realistically about scope, tradeoffs, and execution. I use this to write clearer requirements and reduce handoff friction.",
      application: [
        "Translate product ideas into feasible MVPs",
        "Consider performance and scalability early",
        "Collaborate closely with engineering during delivery",
        "Use implementation feedback to refine product decisions"
      ],
      skills: ["React/Next.js", "Technical Feasibility", "API & Data Thinking", "System Basics"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#151515] to-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
            <Target size={18} className="text-[#22C55E]" />
            <span className="text-[#22C55E] font-semibold">How I Approach Product</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Integrated Product Thinking
          </h2>
          
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
            A connected approach that combines analytical rigor, strategic clarity, user-centered design, 
            and technical understanding to build products that solve real problems.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] to-transparent rounded-3xl border border-[#2A2A2A] group-hover:border-[#22C55E]/30 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon and Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#151515] to-[#0E0E0E] rounded-2xl flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#22C55E] transition-colors duration-300"
                    >
                      <capability.icon className="w-8 h-8 text-[#22C55E]" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-[#EAEAEA] mb-1">
                        {capability.title}
                      </h3>
                      <p className="text-[#22C55E] font-semibold">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronRight size={20} className="text-[#22C55E]" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-[#A1A1A1] mb-8 leading-relaxed">
                  {capability.details}
                </p>

                {/* Application & Skills */}
                <div className="space-y-6">
                  {/* How I Apply This Capability */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#A1A1A1] mb-3 uppercase tracking-wider">
                      How I Apply This Capability
                    </h4>
                    <ul className="space-y-2">
                      {capability.application.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-[#A1A1A1] text-sm flex items-start gap-2"
                        >
                          <span className="text-[#22C55E] mt-1 text-xs">▸</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#A1A1A1] mb-3 uppercase tracking-wider">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 bg-[#151515] text-[#A1A1A1] rounded-full text-sm border border-[#2A2A2A] hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent mt-8"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}