'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ActionButton from '@/components/ui/ActionButton'
import {
    Users,
    Zap,
    ShieldCheck,
    Code2,
    Globe2,
    Clock,
    CheckCircle2,
    ArrowRight,
    Cpu,
    LineChart,
    Code,
    Users2,
    ChevronDown
} from 'lucide-react'

const stats = [
    { label: 'Vetted Developers', value: '500+' },
    { label: 'Average Match Time', value: '48h' },
    { label: 'Client Retention', value: '98%' },
    { label: 'Timezone Coverage', value: '24/7' },
]

const expertise = [
    "React / Next.js", "Python / Django", "Node.js", "Mobile (iOS/Android)",
    "Cloud & DevOps", "AI & ML Engineers", "IoT Systems", "QA Automation"
]

// --- NEW DATA ---

const comparisonData = [
    { feature: "Time to Hire", internal: "3-6 Months", freelancers: "1-2 Weeks", us: "48-72 Hours" },
    { feature: "Vetting Process", internal: "In-house HR", freelancers: "Unverified", us: "Elite Technical Assessment" },
    { feature: "Tech Stack Expertise", internal: "Fixed", freelancers: "Hit or Miss", us: "Specialized (HW + SW)" },
    { feature: "Administrative Burden", internal: "High (Payroll/Tax)", freelancers: "High (Management)", us: "Zero (We handle all)" },
    { feature: "Replacement Guarantee", internal: "None", freelancers: "None", us: "Immediate Replacement" },
]

const faqs = [
    {
        question: "How do you vet your developers?",
        answer: "Our vetting process is a 4-stage gauntlet. It includes a soft-skills screening, a live coding challenge, a system design interview with our senior architects, and a background check. For hardware-specific roles, we test for firmware and I/O integration proficiency."
    },
    {
        question: "What happens if a developer isn't a good fit?",
        answer: "We offer a 14-day risk-free trial. If the developer doesn't meet your expectations within the first two weeks, we replace them immediately at no extra cost to you."
    },
    {
        question: "How do you handle IP and Security?",
        answer: "All our developers sign strict NDAs and IP assignment agreements. We also follow SOC2 compliance standards and can work within your secure VPN/VDI environments to ensure zero data leakage."
    },
    {
        question: "Can I hire a single developer or do I need a full team?",
        answer: "Our model is flexible. You can hire a single 'plug-and-play' engineer to bridge a gap, or a full 'pod' consisting of a PM, Developers, and QA Engineers."
    },
]

// --- NEW COMPONENTS ---

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left"
                aria-label='Open or Close FAQ Item'
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <ChevronDown className={`text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function StaffAugmentation() {
    return (
        <div className="bg-white min-h-screen">
            {/* --- Hero Section --- */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#eff6ff_0%,transparent_70%)] -z-10" />

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                            Scale Your Engineering Capacity
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                            Elite Tech Talent, <br />
                            <span className="text-blue-600">Integrated in 48 Hours.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
                            Skip the 3-month recruitment cycle. Access our pre-vetted pool of top 1% software engineers,
                            architects, and automation specialists ready to join your sprint today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <ActionButton label="Hire Dedicated Developers" variant="primary" />
                            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
                                View Talent Stack
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Stats Strip --- */}
            <section className="border-y border-slate-100 bg-slate-50/50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Bento Grid) --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Global Leaders Choose Us</h2>
                    <p className="text-slate-500">We don't just provide resumes; we provide mission-critical talent.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-blue-600 rounded-4xl p-10 text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <Zap className="w-12 h-12 mb-6 text-blue-200" />
                            <h3 className="text-3xl font-bold mb-4">Rapid Integration</h3>
                            <p className="text-blue-100 max-w-md text-lg">
                                Our engineers are trained to adapt to your culture, tools, and workflows from day one.
                                Zero friction, maximum output.
                            </p>
                        </div>
                        <div className="absolute top-10 right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Users size={200} />
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-4xl p-10 text-white">
                        <ShieldCheck className="w-12 h-12 mb-6 text-emerald-400" />
                        <h3 className="text-2xl font-bold mb-4">Strict Vetting</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Technical Rigor Test</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Soft Skills Evaluation</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Security Clearance</li>
                        </ul>
                    </div>

                    <div className="bg-slate-100 rounded-4xl p-10">
                        <Globe2 className="w-12 h-12 mb-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Timezone Aligned</h3>
                        <p className="text-slate-600">
                            Our teams work in your timezone, ensuring seamless communication and real-time collaboration.
                        </p>
                    </div>

                    <div className="md:col-span-2 bg-white border border-slate-200 rounded-4xl p-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Technology Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {expertise.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-semibold text-slate-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square bg-blue-50 rounded-2xl flex items-center justify-center">
                            <Code2 size={60} className="text-blue-600 opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Hiring Process Section --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
                            <p className="text-slate-400">Our streamlined 4-step process to get your project moving.</p>
                        </div>
                        <ActionButton label="Request a Consultation" variant="primary" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { step: '01', title: 'Consultation', desc: 'We analyze your project goals and tech stack requirements.' },
                            { step: '02', title: 'Talent Match', desc: 'We present the top 2-3 pre-vetted candidates for your review.' },
                            { step: '03', title: 'Interview', desc: 'You interview the talent to ensure a perfect culture & technical fit.' },
                            { step: '04', title: 'Onboarding', desc: 'Talent joins your Slack/Jira and starts contributing immediately.' },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <span className="text-6xl font-black text-white/5 mb-6 block leading-none">{item.step}</span>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 1: Comparison Table --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 tracking-tight">
                        How We Beat Traditional Hiring
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-3xl overflow-hidden shadow-xl">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="p-6 text-lg">Key Metric</th>
                                    <th className="p-6 text-lg opacity-50">Internal Hiring</th>
                                    <th className="p-6 text-lg opacity-50">Freelance Market</th>
                                    <th className="p-6 text-lg text-blue-400 font-black">Our Team</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-bold">{row.feature}</td>
                                        <td className="p-6">{row.internal}</td>
                                        <td className="p-6">{row.freelancers}</td>
                                        <td className="p-6 font-bold text-blue-600">{row.us}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: Specialized Roles --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                            Specialized Expertise for <span className="text-blue-600">Hardware-Software</span> Challenges
                        </h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                            Standard web agencies don't understand latency, port communication, or sensor polling. We provide developers who thrive in the "Physical Tech" world.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            {[
                                { icon: <Cpu />, title: "IoT Firmware", desc: "C/C++, Rust, RTOS expertize for controllers." },
                                { icon: <LineChart />, title: "Computer Vision", desc: "OpenCV, Python, and AI for barrier automation." },
                                { icon: <Code />, title: "Full Stack Sync", desc: "Node.js/Go for high-speed hardware polling." },
                                { icon: <Users2 />, title: "VMS/ERP Logic", desc: "Large scale enterprise architecture." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-blue-600">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-3" />
                        <div className="relative bg-white border border-slate-100 p-8 rounded-[3rem] shadow-2xl">
                            <div className="space-y-4">
                                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-slate-100 rounded animate-pulse" />
                                <div className="flex gap-2">
                                    <div className="h-8 w-20 bg-blue-100 rounded-full" />
                                    <div className="h-8 w-24 bg-blue-100 rounded-full" />
                                </div>
                                <div className="p-4 border border-blue-200 bg-blue-50 rounded-2xl flex items-center justify-between">
                                    <span className="font-bold text-blue-800">Match Found: Sr. Systems Architect</span>
                                    <Zap size={20} className="text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col md:flex-row justify-between items-center'>

                {/* --- SECTION 3: FAQ --- */}
                <section className="py-24 px-6 w-full mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Common Questions</h2>
                        <p className="text-slate-500">Everything you need to know about our augmentation model.</p>
                    </div>
                    <div className="bg-white px-8 rounded-4xl border border-slate-100 shadow-sm">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-24 px-6 w-full mx-auto">
                    <div className="max-w-4xl mx-auto bg-blue-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Clock size={150} className="text-blue-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 relative z-10">
                            Stop Searching. <br /> Start Building.
                        </h2>
                        <p className="text-slate-600 mb-10 text-lg relative z-10">
                            Join 50+ companies that have scaled their engineering teams with our staff augmentation services.
                        </p>
                        <ActionButton label="Talk to an Expert" variant="primary" />
                    </div>
                </section>

            </div>
        </div>
    )
}