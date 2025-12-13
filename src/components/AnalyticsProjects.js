'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  FileText,
} from 'lucide-react';

export default function AnalyticsProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Duolingo — AARRR Funnel & Retention Analysis',
      icon: TrendingUp,
      logo: '/duolingo logo.png',
      type: 'Product Analytics Case Study',
      color: 'border-blue-500/30',
      bgColor: 'from-blue-600/10 to-blue-600/5',
      analyses: [
        {
          icon: Users,
          label: 'Acquisition & Activation',
          value: 'Funnel breakdown',
          insight:
            'Early lesson completion strongly correlates with week-one retention, highlighting the importance of onboarding momentum.',
        },
        {
          icon: TrendingUp,
          label: 'Retention Patterns',
          value: 'Cohort analysis',
          insight:
            'Day 7 engagement emerged as a meaningful proxy for long-term learning commitment.',
        },
        {
          icon: BarChart3,
          label: 'Experiment Design',
          value: 'Hypothesis-driven',
          insight:
            'Evaluated how streaks and reminders influence repeat usage without over-optimizing for superficial engagement.',
        },
      ],
      description:
        "Analyzed Duolingo's user journey using the AARRR framework to understand where learners drop off, what drives habit formation, and how engagement mechanics influence long-term retention.",
      outcomes: [
        'Retention-sensitive moments identified',
        'Onboarding improvement insights',
        'Clear experiment prioritization',
      ],
    },
    {
      title: 'Canva — Product Metrics & Lifecycle Analysis',
      icon: DollarSign,
      logo: '/canvas_logo.png',
      type: 'Product Metrics & Dashboarding',
      color: 'border-green-500/30',
      bgColor: 'from-green-600/10 to-green-600/5',
      analyses: [
        {
          icon: Users,
          label: 'Activation Signals',
          value: 'Behavioral analysis',
          insight:
            'Template interaction frequency acts as an early indicator of successful activation.',
        },
        {
          icon: DollarSign,
          label: 'Monetization Drivers',
          value: 'Usage-to-value mapping',
          insight:
            'Users engaging with collaboration and export features show higher readiness for paid plans.',
        },
        {
          icon: BarChart3,
          label: 'Drop-off Analysis',
          value: 'Funnel review',
          insight:
            'Friction during feature discovery contributes more to churn than pricing itself.',
        },
      ],
      description:
        "Studied Canva's end-to-end funnel to connect activation, feature discovery, and monetization signals to real product decisions.",
      outcomes: [
        'Activation levers identified',
        'Revenue-intent behavior mapped',
        'Feature discovery priorities clarified',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#151515] to-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
            <BarChart3 size={18} className="text-[#22C55E]" />
            <span className="text-[#22C55E] font-semibold">
              Analytical Thinking
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Data-Informed Product Analysis
          </h2>

          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Structured analyses that connect user behavior to product decisions —
            focused on understanding, not just reporting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: Project selector */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProject(index)}
                whileHover={{ x: 8 }}
                className={`w-full text-left p-6 rounded-2xl border transition-all ${
                  activeProject === index
                    ? 'border-[#22C55E] bg-[#1C1C1C]'
                    : 'border-[#2A2A2A] bg-transparent hover:border-[#22C55E]/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* ✅ FIXED LOGO */}
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#1C1C1C] border border-[#2A2A2A]">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain"
                      sizes="48px"
                      priority={index === activeProject}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-[#EAEAEA] mb-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-[#22C55E]">
                      {project.type}
                    </span>
                  </div>

                  {activeProject === index && (
                    <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-black" />
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: Active project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2"
            >
              <div
                className={`bg-gradient-to-br ${projects[activeProject].bgColor} rounded-3xl p-8 border ${projects[activeProject].color}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* ✅ FIXED BIG LOGO */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#1C1C1C] border border-[#2A2A2A]">
                    <Image
                      src={projects[activeProject].logo}
                      alt={`${projects[activeProject].title} logo`}
                      fill
                      className="object-contain"
                      sizes="64px"
                      priority
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#EAEAEA]">
                      {projects[activeProject].title}
                    </h3>
                    <span className="text-[#22C55E] font-medium">
                      {projects[activeProject].type}
                    </span>
                  </div>
                </div>

                <p className="text-[#A1A1A1] mb-8 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {projects[activeProject].analyses.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="bg-[#1C1C1C] rounded-xl p-4 border border-[#2A2A2A]"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-[#22C55E]" />
                          <span className="text-[#EAEAEA] font-medium">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-[#22C55E] font-semibold mb-2">
                          {item.value}
                        </div>
                        <p className="text-[#A1A1A1] text-sm">
                          {item.insight}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {projects[activeProject].outcomes.map((outcome, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#22C55E]/10 text-[#22C55E] rounded-full text-sm border border-[#22C55E]/20"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                <button className="w-full py-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:border-[#22C55E] transition">
                  <FileText size={20} className="text-[#22C55E]" />
                  <span className="text-[#EAEAEA]">
                    View Analysis Details
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
