import React from 'react';
import { CheckCircle } from 'lucide-react';
import BlogCTA from "@/components/BlogCTA"
import Testimonials from "@/components/Testimonials"
import Benefits from '@/components/Benefits';

export const metadata = {
    title: "Expert UX/UI Design to Boost Usability and Customer Satisfaction",
    description: "Creating intuitive, engaging, and visually appealing UX/UI designs that improve usability, user experience, and customer satisfaction.",
    alternates: { canonical: "/services/ux-ui-designing" },
};

const CustomSoftwareDevelopment = () => {
     const phoneNumber = "919548255619"; // Replace with your WhatsApp number

    const message = encodeURIComponent(
        "Welcome to Housysit.com"
    );
    const services = [
        {
            title: "Product Discovery & UX Research",
            description: "Evidence-driven insights via user interviews, surveys, and usability testing.",
            features: ["Personas & JTBD", "User Journeys", "Card Sorting", "Usability Studies"]
        },
        {
            title: "Information Architecture & Wireframing",
            description: "Clear navigation, content hierarchy, and low-fidelity flows to validate concepts early.",
            features: ["Sitemaps", "User Flows", "Wireframes", "Prototyping"]
        },
        {
            title: "UI Design & Design Systems",
            description: "Pixel-perfect interfaces and scalable systems aligned with your brand.",
            features: ["Figma Libraries", "Tokens", "Components", "Accessibility (WCAG)"]
        },
        {
            title: "UX Writing & Handoff",
            description: "Clear, concise product copy and dev-ready specs for smooth implementation.",
            features: ["Microcopy", "Empty States", "Error UX", "Redlines/Specs"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation would go here */}

            {/* Hero Section */}
            <section className="bg-linear-to-br from-[#F6F8FA1A] to-[#F6F8FA] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>

                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">UX/UI Designing</span>
                            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                                Design That Converts and Delights Users
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We craft user-centered experiences—from discovery and IA to design systems—that improve adoption, retention, and ROI.
                            </p>
                            <a
                             href={`https://wa.me/${phoneNumber}?text=${message}`}
                             target="_blank"
                             rel="noopener noreferrer"
>
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Talk To Experts
                           </button>
                            </a>
                        </div>
                        <div className="relative">
                            <img
                                src="/software-development.jpg"
                                alt="Software Development"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Capabilities</span>
                            <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
                                Research-Led UX and Scalable UI Systems
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We align user needs with business goals through iterative research, prototyping, and accessible visual design.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">User research and hypothesis-driven discovery</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Design systems and component libraries</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Prototyping, usability testing, and dev handoff</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="/sd-about.jpg"
                                alt="Development Process"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Development Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col mb-16 max-w-3xl">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
                        <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
                            End-to-End UX/UI—from Discovery to Delivery
                        </h2>
                        <p className="text-gray-600 text-lg mx-auto text-start">
                            We run discovery, map journeys, build systems, and validate with users—so engineering can ship with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* From here downwards, everything will be common in all the services */}

            {/* Benefits Section */}
            <Benefits />

            {/* Blog Section */}
            <BlogCTA />

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
};

export default CustomSoftwareDevelopment;