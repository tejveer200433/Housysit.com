"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Droplets, Code, TestTube, Headphones, Sparkles } from 'lucide-react';

const Process = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const steps = [
        { id: 1, title: "Discovery", icon: <Lightbulb />, color: "from-rose-500 to-orange-400", desc: "Mapping your hardware-software landscape.", orbit: 'inner', delay: 0 },
        { id: 2, title: "Prototyping", icon: <Droplets />, color: "from-amber-400 to-yellow-300", desc: "Simulating automation flows & UX.", orbit: 'inner', delay: 2 },
        { id: 3, title: "Engineering", icon: <Code />, color: "from-emerald-500 to-teal-400", desc: "Building core logic & API integrations.", orbit: 'middle', delay: 1 },
        { id: 4, title: "Validation", icon: <TestTube />, color: "from-blue-500 to-cyan-400", desc: "Stress testing hardware compatibility.", orbit: 'middle', delay: 3 },
        { id: 5, title: "Launch", icon: <Headphones />, color: "from-violet-600 to-purple-400", desc: "Deployment & 24/7 infrastructure support.", orbit: 'outer', delay: 4 }
    ];

    const getOrbitStyle = (type) => {
        switch (type) {
            case 'inner': return { size: 'clamp(180px, 35vw, 280px)', duration: 20 };
            case 'middle': return { size: 'clamp(280px, 50vw, 400px)', duration: 30 };
            case 'outer': return { size: 'clamp(380px, 65vw, 520px)', duration: 40 };
            default: return { size: '300px', duration: 20 };
        }
    };

    return (
        <section className="relative flex items-center flex-col min-h-screen bg-slate-50 py-24 px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-6 uppercase">
                    <Sparkles size={14} /> Our Methodology
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                    Precision Engineered <span className="text-blue-600 italic">Evolution.</span>
                </h2>
            </motion.div>

            <div className="w-full flex flex-col md:flex-row justify-evenly items-center  z-10">



                {/* The Orbital System */}
                <div className="md:w-1/2 relative h-137.5 flex items-center justify-center">

                    {/* Central Core */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative z-30 w-32 h-32 md:w-44 md:h-44 rounded-full bg-white shadow-2xl border border-slate-100 flex flex-col items-center justify-center group cursor-help"
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 animate-pulse" />
                        <AnimatePresence mode="wait">
                            {hoveredElement ? (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-center p-4"
                                >
                                    <div className={`w-10 h-10 mx-auto rounded-xl bg-linear-to-br ${hoveredElement.color} flex items-center justify-center text-white mb-2 shadow-lg`}>
                                        {React.cloneElement(hoveredElement.icon, { size: 20 })}
                                    </div>
                                    <p className="text-xs font-bold text-slate-800 uppercase leading-tight">{hoveredElement.title}</p>
                                </motion.div>
                            ) : (
                                <motion.div key="default" className="text-center">
                                    <span className="text-4xl font-black text-blue-600 leading-none">15</span>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of<br />Expertise</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Rings and Orbs */}
                    {['inner', 'middle', 'outer'].map((orbitType) => {
                        const style = getOrbitStyle(orbitType);
                        return (
                            <div
                                key={orbitType}
                                className="absolute border border-slate-200 rounded-full pointer-events-none"
                                style={{ width: style.size, height: style.size }}
                            >
                                {steps.filter(s => s.orbit === orbitType).map((step, i) => (
                                    <div
                                        key={step.id}
                                        className="absolute inset-0"
                                        style={{
                                            animation: `orbit ${style.duration}s linear infinite`,
                                            animationDelay: `-${step.delay * 2}s`
                                        }}
                                    >
                                        <motion.div
                                            onMouseEnter={() => setHoveredElement(step)}
                                            onMouseLeave={() => setHoveredElement(null)}
                                            whileHover={{ scale: 1.4 }}
                                            className={`absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-linear-to-br ${step.color} shadow-lg shadow-blue-200 flex items-center justify-center text-white cursor-pointer pointer-events-auto transition-transform`}
                                            style={{ animation: `counter-orbit ${style.duration}s linear infinite`, animationDelay: `-${step.delay * 2}s` }}
                                        >
                                            {React.cloneElement(step.icon, { size: 18 })}
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Grid Summary */}
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            whileHover={{ y: -5 }}
                            className={`p-6 rounded-3xl border border-white bg-white backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-500/10 ${hoveredElement?.id === step.id ? 'ring-2 ring-blue-500 bg-white' : ''}`}
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                                {step.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>

            <style jsx>{`
                @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes counter-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
            `}</style>
        </section>
    );
};

export default Process;