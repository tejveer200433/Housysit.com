import React from 'react';
import { CheckCircle } from 'lucide-react';
import BlogCTA from "@/components/BlogCTA"
import Testimonials from "@/components/Testimonials"
import Benefits from '@/components/Benefits';

export const metadata = {
  title: "Custom Software Development Solutions for Your Business ",
  description:
    "Expert software development company providing custom solutions, AI, cloud services, and mobile apps to grow your business",
};


const CustomSoftwareDevelopment = () => {
    const phoneNumber = "919548255619"; // Replace with your WhatsApp number

    const message = encodeURIComponent(
        "Welcome to Housysit.com"
    );
    const services = [
        {
            title: "Web Application Development",
            description: "Custom web applications built with modern technologies for optimal performance and user experience.",
            features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"]
        },
        {
            title: "Enterprise Software Solutions",
            description: "Scalable enterprise solutions designed to streamline your business operations and boost productivity.",
            features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Data Analytics"]
        },
        {
            title: "SaaS Product Development",
            description: "End-to-end SaaS product development from concept to deployment with ongoing support.",
            features: ["Multi-tenant Architecture", "Payment Integration", "User Management", "Analytics Dashboard"]
        },
        {
            title: "DevOps",
            description: "Streamline your development process with automated testing, deployment, and monitoring solutions.",
            features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring Tools", "Security Implementation"]
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

                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Custom Software Development</span>
                            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                                Tailored Software Solutions That Drive Business Growth
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                From web applications to enterprise systems, we build custom software that helps businesses grow, automate, and scale efficiently.
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
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
                            <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
                                Services Designed to Make You Stand Out
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We build custom software solutions using modern technologies and best practices to help your business achieve its goals and stand out from the competition.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Custom software development</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Enterprise solution architecture</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">API development and integration</span>
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
                            End-to-End Custom Software Development, Tailored for Your Business
                        </h2>
                        <p className="text-gray-600 text-lg mx-auto text-start">
                            From requirements analysis to deployment and ongoing support, we provide comprehensive software development services that align with your business objectives and drive growth.
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