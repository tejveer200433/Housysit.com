import React from 'react';
import { CheckCircle } from 'lucide-react';
import BlogCTA from "@/components/BlogCTA"
import Testimonials from "@/components/Testimonials"
import Benefits from '@/components/Benefits';

export const metadata = {
    title: "Custom IoT Systems for Automation, Devices, and Monitoring",
    description: "IoT systems for industrial automation, smart homes, healthcare devices, automotive electronics, agriculture, consumer electronics, and energy monitoring.",
    alternates: { canonical: "/services/iot-systems" },
};

const CustomSoftwareDevelopment = () => {
    const phoneNumber = "919548255619"; // Replace with your WhatsApp number

    const message = encodeURIComponent(
        "Welcome to Housysit.com"
    );
    const services = [
        {
            title: "Industrial Automation",
            description: "Connected control systems that improve factory visibility, machine uptime, and operational efficiency.",
            features: ["PLC & sensor integration", "Predictive maintenance", "Production monitoring", "Remote equipment control"]
        },
        {
            title: "Smart Home",
            description: "Secure smart home ecosystems for automation, comfort, safety, and energy-aware living.",
            features: ["Lighting & climate control", "Smart security", "Voice/app integration", "Device automation"]
        },
        {
            title: "Healthcare Devices",
            description: "Reliable connected healthcare solutions for monitoring, diagnostics, and patient-focused device workflows.",
            features: ["Wearable monitoring", "Medical device connectivity", "Patient data capture", "Alerting dashboards"]
        },
        // {
        //     title: "Automotive Electronics",
        //     description: "Embedded and connected electronics for vehicle telemetry, safety systems, and smarter mobility experiences.",
        //     features: ["Vehicle telemetry", "CAN/LIN integration", "Fleet tracking", "Diagnostics systems"]
        // },
        {
            title: "Agriculture IoT",
            description: "Smart agriculture systems that help monitor crops, automate irrigation, and improve resource usage.",
            features: ["Soil & weather sensors", "Smart irrigation", "Crop monitoring", "Farm asset tracking"]
        },
        {
            title: "Consumer Electronics",
            description: "Connected product engineering for everyday devices with smooth user experiences and dependable performance.",
            features: ["Device apps", "Bluetooth/Wi-Fi products", "OTA updates", "Usage analytics"]
        },
        {
            title: "Energy Monitoring Systems",
            description: "Real-time energy monitoring platforms that track usage, detect anomalies, and support smarter consumption.",
            features: ["Smart meters", "Load monitoring", "Energy dashboards", "Usage optimization"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-[#F6F8FA1A] to-[#F6F8FA] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">IoT Systems</span>
                            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                                Connected IoT Systems for Smarter Industries and Devices
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We build IoT solutions for industrial automation, smart homes, healthcare devices, automotive electronics, agriculture, consumer electronics, and energy monitoring.
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
                                alt="IoT systems development"
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
                                Practical IoT Solutions Across Devices, Data, and Automation
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                From connected sensors to cloud dashboards, we help organizations design, develop, and deploy IoT systems that are secure, scalable, and easy to operate.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Device connectivity, telemetry, and real-time monitoring</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Automation workflows for homes, farms, factories, and vehicles</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Secure dashboards, alerts, analytics, and device management</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="/sd-about.jpg"
                                alt="IoT development process"
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
                            IoT Systems Built for Real-World Use Cases
                        </h2>
                        <p className="text-gray-600 text-lg mx-auto text-start">
                            We create connected solutions for automation, monitoring, control, and data-driven decision-making across multiple industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
