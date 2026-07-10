import React from 'react';
import { CheckCircle, Users, Clock, Shield, Award, Target, Zap } from 'lucide-react';
import BlogCTA from "@/components/BlogCTA"
import Testimonials from "@/components/Testimonials"
import Image from 'next/image';
import Benefits from '@/components/Benefits';

export const metadata = {
    title: "AI & ML Development Solutions to Transform Your Business Operations",
    description: "Advanced AI and ML solutions to automate processes, provide insights, and enhance decision-making for better business outcomes.",
    alternates: { canonical: "/services/ai-ml-development" },
};

const CustomSoftwareDevelopment = () => {
    const phoneNumber = "919548255619"; // Replace with your WhatsApp number

    const message = encodeURIComponent(
        "Welcome to Housysit.com"
    );
    const services = [
        {
            title: "Predictive Analytics & Forecasting",
            description: "Time-series and regression models that turn historical data into accurate, actionable forecasts.",
            features: ["ARIMA/Prophet", "XGBoost/CatBoost", "Feature Engineering", "Model Monitoring"]
        },
        {
            title: "Computer Vision",
            description: "Image/video understanding for detection, classification, OCR, and quality inspection.",
            features: ["CNN/Transformers", "YOLO/Detectron2", "OCR Pipelines", "Edge Deployment"]
        },
        {
            title: "NLP & Generative AI",
            description: "LLM-powered assistants, summarization, RAG, and text analytics tailored to your domain.",
            features: ["OpenAI/LLama/Claude", "RAG over your data", "Prompt/Tooling", "Safety & Guardrails"]
        },
        {
            title: "MLOps & Model Lifecycle",
            description: "Reliable training-to-production workflows with automated evaluation, deployment, and observability.",
            features: ["MLflow/Weights & Biases", "CI/CD for ML", "Feature Stores", "Model Monitoring/A/B"]
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

                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">AI & Machine Learning</span>
                            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                                Intelligent Systems That Learn From Your Data
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We design, train, and deploy ML solutions—vision, NLP, and predictive analytics—that automate decisions and unlock new revenue.
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
                                Machine Learning Built Around Your Business Objectives
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                From data strategy to production-grade MLOps, we deliver measurable impact with robust, explainable models and responsible AI practices.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Use-case discovery and model selection</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Data pipelines and feature engineering</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                    <span className="text-gray-700">Model deployment, APIs, and observability</span>
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
                            End-to-End AI/ML Solutions, From Data to Production
                        </h2>
                        <p className="text-gray-600 text-lg mx-auto text-start">
                            We partner across the ML lifecycle—data readiness, model training, evaluation, deployment, and continuous monitoring—to ensure reliable outcomes and real ROI.
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