// components/Recommendations.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Linkedin, ChevronRight, Award, ThumbsUp, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Recommendations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const testimonials = [
    {
      quote: "Navodya understands things quickly and consistently brings clear, practical ideas. He handles complex problems with maturity, stays calm under pressure, and thinks deeply from a user's point of view. His ability to break down data and communicate insights clearly reflects a strong product mindset and ownership.",
      author: "Vishakha Khokhar",
      role: "Analyst @ KPMG",
      company: "Senior (did not manage directly)",
      stars: 5,
      icon: Award,
      image: '/vishakha.png'
    },
    {
      quote: "Navodya is a strong problem solver who adapts quickly in high-pressure situations. He shows consistency, clarity in communication, and thoughtful decision-making. His mix of technical understanding and structured thinking makes him a reliable contributor.",
      author: "Piyush Kant",
      role: "Engineer at NAB",
      company: "Mentor | Former Creative Writing Society President",
      stars: 5,
      icon: ThumbsUp,
      image: '/piyush.png'
    },
    {
      quote: "Navodya demonstrated strong ownership, fast learning ability, and a structured approach to product execution. He translated requirements into usable interfaces and consistently delivered with clarity, responsibility, and a product-first mindset.",
      author: "Manit Ahuja",
      role: "Founder",
      company: "Fly Social Media",
      stars: 5,
      icon: MessageSquare,
      image: '/manit.png'
    }
  ];

  const linkedinUrl = "https://www.linkedin.com/in/navodya-jain-3163a2300/";

  return (
    <section ref={containerRef} className="py-24 bg-linear-to-b from-[#151515] to-[#0E0E0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Animated Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-[0.02]"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}></div>
        </motion.div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
              <span className="text-[#22C55E] font-semibold">Professional Trust</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
              People I've Worked With Trust My Work
            </h2>
            
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
              Feedback from seniors, mentors, and collaborators who have seen my approach to 
              problem-solving, ownership, and product thinking first-hand.
            </p>
          </motion.div>

          {/* Testimonials Grid - Updated to 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-linear-to-br from-[#1C1C1C] to-transparent rounded-3xl border border-[#2A2A2A] group-hover:border-[#22C55E]/30 transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ rotate: -10, scale: 0.9 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-[#151515] rounded-full flex items-center justify-center mb-8 border border-[#2A2A2A] group-hover:border-[#22C55E] transition-colors duration-300"
                  >
                    <Quote className="w-8 h-8 text-[#22C55E]" />
                  </motion.div>
                  
                  {/* Quote */}
                  <p className="text-[#A1A1A1] text-lg mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info with Image */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Image Container */}
                      <div className="w-12 h-12 bg-[#1C1C1C] rounded-full border border-[#2A2A2A] flex items-center justify-center overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <div className="text-[#EAEAEA] font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-[#A1A1A1]">{testimonial.role}</div>
                        <div className="text-[#666666] text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    {/* LinkedIn Badge */}
                    <motion.a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-12 h-12 bg-[#151515] rounded-full flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#0077B5] transition-colors duration-300 overflow-hidden cursor-pointer"
                    >
                      <Linkedin className="w-6 h-6 text-[#0077B5]" />
                    </motion.a>
                  </div>
                  
                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-px bg-linear-to-r from-transparent via-[#22C55E]/30 to-transparent mt-6"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-linear-to-r from-[#1C1C1C] to-transparent rounded-2xl p-8 border border-[#2A2A2A] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                Credibility Built Through Real Collaboration
              </h3>
              
              <p className="text-[#A1A1A1] mb-8 leading-relaxed">
                These recommendations reflect how I work with people — taking ownership, 
                thinking clearly under ambiguity, and contributing beyond my role.
              </p>
              
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#22C55E] text-white rounded-full font-semibold text-lg hover:bg-[#16A34A] transition-all duration-300 shadow-lg shadow-[#22C55E]/20 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={20} />
                  <span>View Verified LinkedIn Recommendations</span>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-white"
                >
                  <ChevronRight size={20} />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}