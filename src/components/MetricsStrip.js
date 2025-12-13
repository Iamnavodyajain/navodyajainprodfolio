// components/MetricsStrip.js - Enhanced
'use client';

import { motion } from 'framer-motion';
import { Target, LineChart, Layers, Users } from 'lucide-react';

export default function MetricsStrip() {
  const metrics = [
  { 
    icon: Layers, 
    value: "3", 
    label: "Product Case Studies", 
    description: "Strategy, analytics & execution",
    color: "from-blue-600/20 to-blue-600/5"
  },
  { 
    icon: LineChart, 
    value: "2", 
    label: "Deep Analytics Projects", 
    description: "Lifecycle & AARRR analysis",
    color: "from-green-600/20 to-green-600/5"
  },
  { 
    icon: Target, 
    value: "1", 
    label: "End-to-End Product", 
    description: "Problem → solution → prototype",
    color: "from-purple-600/20 to-purple-600/5"
  },
  { 
    icon: Users, 
    value: "Trusted", 
    label: "Peer Validation", 
    description: "Mentor & senior feedback",
    color: "from-orange-600/20 to-orange-600/5"
  },
];


  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-[#151515] to-[#0E0E0E] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-linear-to-br ${metric.color} to-transparent rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#22C55E]/30 transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-2xl mb-6 border border-[#2A2A2A]"
                >
                  <Icon className="w-8 h-8 text-[#22C55E]" />
                </motion.div>
                
                <div className="text-5xl font-bold text-[#EAEAEA] mb-2 font-mono">
                  {metric.value}
                </div>
                
                <div className="text-lg font-semibold text-[#EAEAEA] mb-1">
                  {metric.label}
                </div>
                
                <div className="text-[#A1A1A1] text-sm">
                  {metric.description}
                </div>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-px bg-linear-to-r from-transparent via-[#22C55E]/50 to-transparent mt-4"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}