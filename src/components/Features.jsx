'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Zap, Layers, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Custom Software Development',
    tag: 'Scalable Architecture',
    desc: 'High-performance web and mobile ecosystems built with modern tech stacks like Next.js, Go, and Python.',
    icon: <Terminal className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-400',
    link: '/services/software-development',
  },
  {
    title: 'AI & Machine Learning',
    tag: 'Neural Networks',
    desc: 'Automate complex decision-making with custom LLMs and real-time data processing engines.',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-400',
    link: '/services/ai-machine-learning',
  },
  {
    title: 'Global Staff Augmentation',
    tag: 'Elite Talent',
    desc: 'Skip the recruitment lag. Access the top 1% of developers ready to integrate into your workflow.',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-400',
    link: '/services/staff-augmentation',
  },
  {
    title: 'Cloud & Cyber Security',
    tag: 'Zero Trust',
    desc: 'Fortify your enterprise infrastructure with SOC2 compliant security and cloud optimization.',
    icon: <Layers className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-400',
    link: '/services/cloud-cyber-security',
  },
]

export default function TechStackFeatures() {
  return (
    <section className="py-24 px-6 overflow-hidden text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              We build the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">future of IT</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Engineered solutions for companies that refuse to settle for "standard."
              Accelerate your roadmap with our specialized engineering pods.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap">
            View All Services
          </button>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
              <Link href={feature.link} className="block">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-4xl border border-gray-200 backdrop-blur-sm transition-all duration-500 bg-white group-hover:border-blue-500">

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                    {/* Icon & Index */}
                    <div className="relative">
                      <div className={`absolute inset-0 blur-2xl opacity-20 bg-linear-to-r ${feature.color}`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-r ${feature.color}  flex items-center justify-center text-white`}>
                        {feature.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 mb-2 block">
                        {feature.tag}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 max-w-md leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Element */}
                  <div className="mt-8 md:mt-0">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Hover Glow Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px] -z-10 bg-linear-to-r ${feature.color} pointer-events-none`}
                style={{ transform: 'scale(0.8)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
