import Image from 'next/image';
import React from 'react'

const benefits = [
    {
        icon: "/Wrench.png",
        title: "Custom Built for You Needs",
        description: "Every solution is tailored specifically to your business requirements and objectives."
    },
    {
        icon: "/Positive Dynamic.png",
        title: "Reliable and Punctual",
        description: "We deliver projects on time with consistent quality and reliable performance."
    },
    {
        icon: "/Lightning Bolt.png",
        title: "Fast & Right Delivery",
        description: "Quick turnaround times without compromising on quality or functionality."
    },
    {
        icon: "/Sync.png",
        title: "Full Circle Support",
        description: "Complete support throughout the entire development lifecycle and beyond."
    },
    {
        icon: "/Brain.png",
        title: "Cross-Functional Expertise",
        description: "Our team brings diverse skills and experience across multiple technologies."
    },
    {
        icon: "/Lock.png",
        title: "Secure & Compliant",
        description: "Built with security best practices and compliance standards in mind."
    }
];

const Benefits = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center mb-16 max-w-3xl">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Service Benefits</span>
                    <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6 max-w-xl text-center">
                        Real Results. Reliable Tech. Remarkable Support.
                    </h2>
                    <p className="text-gray-600 text-lg mx-auto text-center max-w-xl">
                        We don't just build software — we solve problems, streamline processes, and help you grow with solutions that scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center bg-[#F8FAFB] p-4 rounded-2xl flex flex-col justify-between items-center gap-5">
                            <Image
                                src={benefit.icon}
                                alt="Blog 1"
                                width={66}
                                height={66}
                                className=""

                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits