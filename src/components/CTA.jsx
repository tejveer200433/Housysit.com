"use client"
import React from 'react';
import ActionButton from './ui/ActionButton';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative w-full px-6 py-20 overflow-hidden bg-blue-500">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
            
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
                        <Sparkles size={14} /> Ready to deploy?
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                        Have an Idea? We’ll Help <br />
                            You Build the Future.
                        
                    </h2>

                    <p className="mb-8 text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join 300+ enterprise partners and scaling startups already 
                        accelerating their roadmap with HOUSYS technical pods.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <ActionButton 
                            label="Start Your Project" 
                            variant="secondary" 
                            className="w-full sm:w-auto py-5! px-10! text-lg rounded-4xl! border-none" 
                        />
                    </div>

                    {/* Social Proof Row */}
                    <div className="mt-12 pt-10 border-t border-white flex flex-col items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img 
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="Client"
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-[10px] font-bold text-black">
                                +300
                            </div>
                        </div>
                        <p className="text-white text-sm font-medium italic">
                            Trusted by CTOs and Product Owners worldwide
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;