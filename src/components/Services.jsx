"use client"
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, LineChart, ShieldCheck, Cloud, Code2, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    description: "Engineering predictive engines that transform raw industrial data into actionable automation intelligence.",
    color: "blue"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "IoT Analytics",
    description: "Real-time telemetry insights directly integrated into your hardware interfaces and dashboards.",
    color: "indigo"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Access Control Systems",
    description: "Sophisticated software orchestration for physical security, from biometrics to high-speed turnstiles.",
    color: "emerald"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable, high-availability cloud environments built to support global automation networks.",
    color: "cyan"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Development",
    description: "Custom enterprise software designed to bridge the gap between business logic and physical operations.",
    color: "rose"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI & Robotics",
    description: "Autonomous decision-making systems for hardware control, reducing human error in high-security zones.",
    color: "amber"
  }
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative group h-full"
    >
      <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)]">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div style={{ transform: "translateZ(50px)" }} className="relative">
          <div className="mb-6 inline-flex p-3 rounded-2xl bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-500 leading-relaxed mb-8">
            {service.description}
          </p>
          
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0">
            Explore Solution <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]"
            >
              IT Services Built to <span className="text-blue-600">Solve & Scale.</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-slate-500 max-w-sm text-lg leading-relaxed border-l-2 border-blue-200 pl-6"
          >
            Bridge the gap between hardware precision and software intelligence with our specialized engineering.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;