import React from 'react';
import { CheckCircle } from 'lucide-react';
import BlogCTA from "@/components/BlogCTA"
import Testimonials from "@/components/Testimonials"
import Image from 'next/image';
import Benefits from '@/components/Benefits';

export const metadata = {
    title: "Reliable and Secure Cloud Services to Boost Your Business",
    description: "Delivering secure, scalable cloud services that enhance efficiency, streamline operations, and drive digital growth for your business.",
    alternates: { canonical: "/services/cloud-services" },
};

const CustomSoftwareDevelopment = () => {
     const phoneNumber = "919548255619"; // Replace with your WhatsApp number

    const message = encodeURIComponent(
        "Welcome to Housysit.com"
    );
    const services = [
        {
            title: "Cloud Architecture & Migration",
            description: "Assess, design, and migrate workloads to AWS, Azure, or GCP with minimal downtime.",
            features: ["Discovery & TCO", "Landing Zones", "Cutover Plans", "Hybrid Connectivity"]
        },
        {
            title: "Containerization & Kubernetes",
            description: "Reliable, scalable platforms using Docker and managed K8s (EKS/AKS/GKE).",
            features: ["Helm/IaC", "GitOps (ArgoCD)", "Autoscaling", "Observability"]
        },
        {
            title: "Serverless & Modernization",
            description: "Reduce ops overhead with serverless architectures and event-driven design.",
            features: ["Lambda/Functions", "Event Buses", "Queues & Streams", "API Gateways"]
        },
        {
            title: "Cloud Security & Cost Optimization",
            description: "Governance, guardrails, and FinOps to keep your cloud secure and efficient.",
            features: ["CIS Benchmarks", "IAM Hardening", "Budgets & Anomaly Detection", "Backup/DR"]
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

                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Cloud Services</span>
                            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                                Build, Migrate, and Scale Confidently in the Cloud
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We design secure, cost-efficient cloud architectures and modernize legacy systems using best practices across AWS, Azure, and GCP.
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
                                Cloud Foundations, Platform Engineering, and Operations
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Whether you are migrating, modernizing, or optimizing, we provide architecture blueprints, infrastructure as code, and 24/7-ready observability.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Well-Architected reviews and landing zones</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Infrastructure as Code: Terraform/Pulumi/CloudFormation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Kubernetes platform ops and FinOps optimization</span>
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
                            End-to-End Cloud Transformation and Operations
                        </h2>
                        <p className="text-gray-600 text-lg mx-auto text-start">
                            We plan and execute migrations, build reliable platforms, implement guardrails, and enable teams with CI/CD, SRE practices, and cost visibility.
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