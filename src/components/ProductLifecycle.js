// components/ProductLifecycle.js - Perfectly aligned with CSS Grid
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Target, Zap, RefreshCw, Eye, TrendingUp } from 'lucide-react';

export default function ProductLifecycle() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stages = [
    {
      step: "01",
      icon: Search,
      title: "Problem Framing",
      color: "border-blue-500/30",
      gradient: "from-blue-600/20 to-blue-600/5",
      questions: [
        "What's the real user need behind the request?",
        "Why do existing solutions fall short?",
        "What assumptions need to be tested first?"
      ],
      signals: ["Behavioral patterns vs stated needs", "Workarounds users create", "Gaps between expectation and reality"],
      thinking: "Separating symptoms from root causes before committing to solutions"
    },
    {
      step: "02",
      icon: Target,
      title: "Solution Shaping",
      color: "border-green-500/30",
      gradient: "from-green-600/20 to-green-600/5",
      questions: [
        "What's the smallest version that proves the value?",
        "How do we know if we're solving the right problem?",
        "What constraints should guide our decisions?"
      ],
      signals: ["User intent vs. actual usage", "Early adoption patterns", "Friction points in prototypes"],
      thinking: "Balancing user desirability, business viability, and technical feasibility"
    },
    {
      step: "03",
      icon: Zap,
      title: "Delivery with Intent",
      color: "border-purple-500/30",
      gradient: "from-purple-600/20 to-purple-600/5",
      questions: [
        "Are we building what we intended to build?",
        "How are we learning during delivery?",
        "What trade-offs are we making and why?"
      ],
      signals: ["Implementation vs. intent alignment", "Team velocity and morale", "Quality indicators beyond bugs"],
      thinking: "Maintaining focus on outcomes while managing execution complexity"
    },
    {
      step: "04",
      icon: RefreshCw,
      title: "Learning & Iteration",
      color: "border-orange-500/30",
      gradient: "from-orange-600/20 to-orange-600/5",
      questions: [
        "What did we learn that surprised us?",
        "How should this change our next decisions?",
        "When do we persist vs. when do we pivot?"
      ],
      signals: ["Behavior change vs. feature usage", "Unintended consequences", "Long-term retention patterns"],
      thinking: "Using evidence to inform what comes next, not just validate what we built"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-[#0E0E0E] to-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Animated Background Pattern */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22C55E 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
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
              <Eye size={18} className="text-[#22C55E]" />
              <span className="text-[#22C55E] font-semibold">Product Decision Journey</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
              From Problem to Product
            </h2>
            
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
              How I think through product challenges — focusing on judgment, trade-offs, 
              and continuous learning rather than just execution.
            </p>
          </motion.div>

          {/* Stages Timeline */}
          <div className="relative">
            {/* Connecting Line - Perfectly centered */}
            <div className="hidden lg:block absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent -translate-y-1/2"></div>
            
            {/* Stages Grid - Equal height columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative h-full"
                >
                  {/* Step Number - Perfectly aligned */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1C1C1C] border-2 border-[#2A2A2A] rounded-full flex items-center justify-center z-20">
                    <span className="text-[#EAEAEA] font-bold text-base">{stage.step}</span>
                  </div>

                  {/* Card - Using CSS Grid for perfect alignment */}
                  <div className={`
                    bg-gradient-to-br ${stage.gradient} to-transparent 
                    rounded-3xl border ${stage.color} 
                    hover:border-[#22C55E]/50 
                    transition-all duration-300 
                    grid grid-rows-[auto_auto_1fr_auto_auto_auto] 
                    gap-6 p-8 h-full
                    hover:shadow-xl hover:shadow-[#22C55E]/5
                  `}>
                    
                    {/* Icon - Fixed height, centered */}
                    <div className="w-16 h-16 bg-[#1C1C1C] rounded-2xl flex items-center justify-center mx-auto border border-[#2A2A2A]">
                      <stage.icon className="w-8 h-8 text-[#22C55E]" />
                    </div>
                    
                    {/* Title - Consistent across all */}
                    <h3 className="text-2xl font-bold text-[#EAEAEA] text-center">
                      {stage.title}
                    </h3>
                    
                    {/* How I Think - Fixed height container */}
                    <div className="min-h-[80px]">
                      <h4 className="text-sm font-semibold text-[#A1A1A1] mb-3 uppercase tracking-wider">
                        How I Think
                      </h4>
                      <p className="text-[#A1A1A1] text-sm leading-relaxed">
                        {stage.thinking}
                      </p>
                    </div>
                    
                    {/* Key Questions - Fixed height container */}
                    <div className="min-h-[140px]">
                      <h4 className="text-sm font-semibold text-[#A1A1A1] mb-3 uppercase tracking-wider">
                        Key Questions
                      </h4>
                      <ul className="space-y-3">
                        {stage.questions.map((question, i) => (
                          <li key={i} className="text-[#EAEAEA] text-sm flex items-start">
                            <span className="text-[#22C55E] mt-1 mr-2 text-xs flex-shrink-0">▸</span>
                            <span className="leading-relaxed">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Signals - Fixed height container */}
                    <div className="min-h-[80px]">
                      <h4 className="text-sm font-semibold text-[#A1A1A1] mb-3 uppercase tracking-wider">
                        Signals I Look At
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.signals.map((signal, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#151515] text-[#A1A1A1] rounded-full text-sm border border-[#2A2A2A] hover:border-[#22C55E]/30 transition-colors duration-300"
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom indicator */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connecting Arrows - Precisely positioned at card centers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute top-1/2 -translate-y-1/2"
                style={{ left: `${(i + 1) * 25}%` }}
              >
                <div className="w-10 h-10 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#22C55E]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}