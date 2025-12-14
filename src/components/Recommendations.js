// components/Recommendations.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Linkedin, ChevronRight, Award, ThumbsUp, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Recommendations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const testimonials = [
    {
      quote:
        "Navodya understands things quickly and consistently brings clear, practical ideas. He handles complex problems with maturity, stays calm under pressure, and thinks deeply from a user's point of view. His ability to break down data and communicate insights clearly reflects a strong product mindset and ownership.",
      author: 'Vishakha Khokhar',
      role: 'Analyst @ KPMG',
      company: 'Senior',
      icon: Award,
      image: '/vishakha.png',
    },
    {
      quote:
        'Navodya is a strong problem solver who adapts quickly in high-pressure situations. He shows consistency, clarity in communication, and thoughtful decision-making. His mix of technical understanding and structured thinking makes him a reliable contributor.',
      author: 'Piyush Kant',
      role: 'Engineer @ NAB',
      company: 'Mentor',
      icon: ThumbsUp,
      image: '/piyush.png',
    },
    {
      quote:
        'Navodya demonstrated strong ownership, fast learning ability, and a structured approach to product execution. He translated requirements into usable interfaces and consistently delivered with clarity, responsibility, and a product-first mindset.',
      author: 'Manit Ahuja',
      role: 'Founder',
      company: 'Fly Social Media',
      icon: MessageSquare,
      image: '/manit.png',
    },
  ];

  const linkedinUrl = 'https://www.linkedin.com/in/navodya-jain-3163a2300/';

  return (
    <section
      ref={containerRef}
      className="py-24 bg-linear-to-b from-[#151515] to-[#0E0E0E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Background */}
        <motion.div style={{ y }} className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, #22C55E 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
              <span className="text-[#22C55E] font-semibold">
                Professional Trust
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
              People I&apos;ve Worked With Trust My Work
            </h2>

            <p className="text-lg md:text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
              Feedback from seniors, mentors, and collaborators who have seen my
              approach to problem-solving and product thinking first-hand.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#1C1C1C] to-transparent rounded-3xl border border-[#2A2A2A] group-hover:border-[#22C55E]/30 transition-all" />

                <div className="relative p-8">
                  <div className="w-16 h-16 bg-[#151515] rounded-full flex items-center justify-center mb-8 border border-[#2A2A2A]">
                    <Quote className="w-8 h-8 text-[#22C55E]" />
                  </div>

                  <p className="text-[#A1A1A1] text-lg mb-8 leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-[#2A2A2A]">
                        <Image
                          src={t.image}
                          alt={t.author}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="text-[#EAEAEA] font-semibold">
                          {t.author}
                        </div>
                        <div className="text-[#A1A1A1] text-sm">
                          {t.role}
                        </div>
                        <div className="text-[#666] text-sm">
                          {t.company}
                        </div>
                      </div>
                    </div>

                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2A2A]"
                    >
                      <Linkedin className="w-5 h-5 text-[#0077B5]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ MOBILE-OPTIMIZED CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto rounded-2xl border border-[#2A2A2A] bg-linear-to-r from-[#1C1C1C] to-transparent p-5 sm:p-8">
              <h3 className="text-lg sm:text-2xl font-bold text-[#EAEAEA] mb-2 sm:mb-4">
                Credibility Built Through Collaboration
              </h3>

              <p className="text-sm sm:text-base text-[#A1A1A1] mb-6">
                Real feedback from people I&apos;ve worked closely with.
              </p>

              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 
                           px-6 py-3 sm:px-8 sm:py-4 
                           bg-[#22C55E] text-white rounded-full 
                           font-semibold text-sm sm:text-lg
                           hover:bg-[#16A34A] transition-all"
              >
                <Linkedin size={18} />
                <span className="sm:hidden">View on LinkedIn</span>
                <span className="hidden sm:inline">
                  View Verified LinkedIn Recommendations
                </span>
                <ChevronRight className="hidden sm:block" size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
