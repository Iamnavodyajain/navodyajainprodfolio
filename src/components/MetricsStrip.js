// components/MetricsStrip.js - Fixed for SSR compatibility
'use client';

import { motion } from 'framer-motion';
import { Target, LineChart, Layers, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MetricsStrip() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Only run client-side code after component mounts
  useEffect(() => {
    setIsClient(true);
    
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

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
      color: "from-orange-600/20 to-orange-600/5",
      mobileValue: "✓"
    },
  ];

  // Helper function to get display value safely
  const getDisplayValue = (metric) => {
    if (!isClient) {
      // During SSR, use a safe default
      return metric.value === "Trusted" ? "✓" : metric.value;
    }
    
    if (metric.mobileValue && window.innerWidth < 640) {
      return metric.mobileValue;
    }
    
    return metric.value;
  };

  return (
    <section className="py-12 md:py-24 bg-linear-to-b from-[#151515] to-[#0E0E0E] border-y border-[#2A2A2A] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const displayValue = getDisplayValue(metric);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ 
                  once: true, 
                  margin: "-50px"
                }}
                whileHover={!isTouchDevice && isClient ? { 
                  y: -8, 
                  scale: 1.02 
                } : undefined}
                className={`
                  bg-linear-to-br ${metric.color} to-transparent 
                  rounded-2xl sm:rounded-3xl 
                  p-6 sm:p-8 
                  border border-[#2A2A2A] 
                  ${!isTouchDevice && isClient ? 'hover:border-[#22C55E]/30' : ''}
                  transition-all duration-300
                  min-h-[220px] sm:min-h-0
                  flex flex-col
                `}
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={!isTouchDevice && isClient ? { scale: 1.1, rotate: 5 } : undefined}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#1C1C1C] rounded-xl sm:rounded-2xl border border-[#2A2A2A]"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#22C55E]" />
                  </motion.div>
                  
                  {/* Mobile-only badge for "Trusted" - only show on client */}
                  {isClient && metric.mobileValue && window.innerWidth < 640 && (
                    <span className="text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full">
                      Trusted
                    </span>
                  )}
                </div>
                
                <div className="text-4xl sm:text-5xl font-bold text-[#EAEAEA] mb-2 font-mono leading-tight">
                  {displayValue}
                </div>
                
                <div className="text-base sm:text-lg font-semibold text-[#EAEAEA] mb-1 line-clamp-2">
                  {metric.label}
                </div>
                
                <div className="text-[#A1A1A1] text-sm sm:text-sm mt-auto">
                  {metric.description}
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-px bg-linear-to-r from-transparent via-[#22C55E]/50 to-transparent mt-4 hidden xs:block"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}