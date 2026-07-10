import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Milestone = () => {
    const stats = [
        {
            number: "300+",
            description: "Projects delivered, across software, IoT systems, and enterprise platforms."
        },
        {
            number: "10+",
            description: "Countries served, successfully delivered solutions to clients across the globe."
        },
        {
            number: "50+",
            description: "Technologies mastered, from frontend frameworks to IoT firmware and AI."
        }
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="lg:pr-8">
                        {/* Milestone Label */}
                        <p className="text-blue-500 font-medium mb-4 tracking-wide">Milestone</p>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Numbers That Reflect Our Impact
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            From startups to enterprises, our work speaks through results.
                            Here are a few highlights from our journey of delivering smart IT solutions.
                        </p>

                        {/* CTA Button */}
                         <Link
            href="/contact"className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-4xl transition-colors duration-200">
                            Get Started
                        </Link>
                    </div>

                    {/* Right Content - Image and Stats */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        {/* Trophy Illustration */}
                        <Image 
                            src="/milestone.png"
                            alt="Trophy"
                            width={500}
                            height={1000}
                            className="w-full h-full"
                        />
                        {/* Statistics */}
                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="shrink-0 mr-4">
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {stat.number}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed pt-2">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestone;