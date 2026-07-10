import React from 'react';
import {
  CheckCircle,
  MonitorSmartphone,
  CloudSnow,
  Workflow,
  Cpu,
  Settings,
  BrainCircuit,
  Building2,
  HeartPulse,
  Truck,
  ShoppingCart,
  Factory,
  ShieldCheck,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  ServerCog
} from 'lucide-react';
import Link from 'next/link';
import BlogCTA from "@/components/BlogCTA";
import Testimonials from "@/components/Testimonials";
import Benefits from '@/components/Benefits';

export const metadata = {
  title: "Software Consulting Services | Global IT Consulting Company",
  description: "Expert software consulting services for businesses in USA, UK, UAE, Germany, Norway and Canada. Custom software, cloud consulting & digital transformation.",
  keywords: [
    "software consulting services",
    "IT consulting services",
    "custom software consulting",
    "enterprise software consulting",
    "software consulting company",
    "technology consulting services",
    "cloud consulting services",
    "digital transformation consulting"
  ]
};

const services = [
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Digital Transformation Consulting",
    description: "Digital transformation is essential for companies looking to remain competitive in a technology-driven economy. Our consultants help organizations modernize outdated systems and adopt advanced technologies.",
    features: [
      "Business process automation",
      "Cloud adoption strategy",
      "Legacy system modernization",
      "AI integration",
      "Data analytics implementation"
    ]
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Custom Software Development Consulting",
    description: "We provide expert consulting to design and build custom software solutions tailored to your business needs, ensuring software is secure, scalable, and high-performance.",
    features: [
      "Web application development",
      "Enterprise software systems",
      "SaaS platform development",
      "API integrations",
      "Mobile application solutions"
    ]
  },
  {
    icon: <CloudSnow className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Cloud Consulting Services",
    description: "Cloud computing enables businesses to improve flexibility, scalability, and cost efficiency. We help organizations build secure and optimized cloud infrastructure.",
    features: [
      "Cloud architecture design",
      "Cloud migration consulting",
      "AWS consulting services",
      "Microsoft Azure consulting",
      "Google Cloud integration",
      "Hybrid cloud solutions"
    ]
  },
  {
    icon: <Workflow className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Enterprise Software Consulting",
    description: "Our consultants help implement enterprise platforms to manage operations efficiently, improving collaboration, productivity, and decision making.",
    features: [
      "ERP systems",
      "CRM platforms",
      "Enterprise workflow automation",
      "Business intelligence systems",
      "Data management solutions"
    ]
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-600 mb-4" />,
    title: "IT Strategy Consulting",
    description: "Technology strategy is critical for long-term business success. We help organizations align technology investments with business goals.",
    features: [
      "Technology infrastructure planning",
      "Digital transformation strategy",
      "IT cost optimization",
      "Cybersecurity strategy",
      "Software architecture consulting"
    ]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-blue-600 mb-4" />,
    title: "AI and Automation Consulting",
    description: "Artificial intelligence is transforming industries worldwide. Our AI consulting services help companies implement intelligent technologies.",
    features: [
      "Machine learning integration",
      "Predictive analytics",
      "Intelligent automation systems",
      "Chatbot solutions",
      "AI-driven data analysis"
    ]
  }
];

const industries = [
  {
    title: "Finance & Banking",
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    desc: "Secure digital banking platforms, payment systems, and fraud detection technologies."
  },
  {
    title: "Healthcare",
    icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
    desc: "Healthcare management systems, telemedicine platforms, and patient data solutions."
  },
  {
    title: "Logistics & Transportation",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    desc: "Fleet management systems, tracking solutions, and logistics automation software."
  },
  {
    title: "Retail & eCommerce",
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    desc: "Digital commerce platforms, inventory management, and customer analytics solutions."
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    desc: "Industrial automation systems and smart manufacturing technologies."
  },
  {
    title: "Government & Smart Cities",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    desc: "Technology consulting for public safety systems, infrastructure monitoring, and security platforms."
  }
];

const processSteps = [
  { step: "Step 1", title: "Business Analysis", desc: "We analyze your business requirements and existing technology infrastructure." },
  { step: "Step 2", title: "Technology Strategy", desc: "Our consultants create a customized technology roadmap." },
  { step: "Step 3", title: "Architecture Design", desc: "We design secure and scalable software architecture." },
  { step: "Step 4", title: "Development & Implementation", desc: "Our development team builds and deploys the software solution." },
  { step: "Step 5", title: "Optimization & Support", desc: "We continuously monitor and improve the system for maximum performance." }
];

const technologies = {
  frontend: ["React", "Angular", "Vue.js"],
  backend: ["Node.js", "Python", "Java", ".NET"],
  cloud: ["AWS", "Microsoft Azure", "Google Cloud"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  devops: ["Docker", "Kubernetes", "CI/CD pipelines"]
};

// Replace with typical paths in the current Next.js structure
const SoftwareConsultingPage = () => {
  const phoneNumber = "919548255619";

  const message = encodeURIComponent(
    "Welcome to Housysit.com"
  );
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-10  overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Software Consulting Services
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-[1.1] tracking-tight">
                Global Software Consulting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modern Businesses</span>
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Houston Systems provides professional software consulting services that help businesses design, build, and optimize advanced digital solutions. Our consulting experts work with organizations across USA, UK, UAE, Germany, Norway, and Canada, delivering scalable technology solutions that improve efficiency and accelerate innovation.
              </p>

              {/* Highlighted Context Box */}
              <div className="relative pl-6 py-4 mb-10 border-l-4 border-blue-500 bg-linear-to-r from-blue-50/50 to-transparent rounded-r-xl">
                <p className="text-gray-600 leading-relaxed font-medium">
                  Whether your business needs <span className="text-blue-700 font-semibold">technology strategy</span>, <span className="text-blue-700 font-semibold">enterprise software development</span>, or <span className="text-blue-700 font-semibold">cloud migration</span>, our consultants deliver tailored solutions that align with your operational goals. We help startups, enterprises, and government organizations implement custom software solutions, cloud technologies, enterprise platforms, and AI-driven systems that support long-term growth.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </span>
                </Link>
                <a
  href={`https://wa.me/${phoneNumber}?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center shadow-xs"
>
  Talk to Our Experts
  <ChevronRight className="w-5 h-5 ml-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
</a>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="relative mt-10 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square max-w-[80%] mx-auto p-2 bg-white">
                <img
                  src="/software-development.jpg"
                  alt="Software Consulting"
                  className="rounded-2xl object-cover w-full h-full scale-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is Software Consulting? */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Consulting Approach</span>
              <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
                What is Software Consulting?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Software consulting helps organizations analyze their technology needs, design scalable systems, and implement software solutions that improve productivity and operational efficiency. Professional consultants guide businesses in selecting the right technologies, optimizing software architecture, and reducing development risks.
              </p>
              <p className="text-gray-600 text-lg font-medium mb-4">At Houston Systems, our consulting services help companies:</p>
              <ul className="space-y-3">
                {[
                  "modernize legacy systems",
                  "build custom enterprise software",
                  "integrate cloud platforms",
                  "implement AI and automation solutions",
                  "improve software performance and scalability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700 capitalize">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-800 font-semibold text-lg">
                Our goal is to ensure businesses adopt secure, scalable, and future-ready technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img
                src="/sd-about.jpg"
                alt="Development Process"
                className="rounded-2xl w-full h-[500px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Software Consulting Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Capabilities</span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">
              Our Software Consulting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-sm text-gray-900 mb-3 tracking-wide">SOLUTIONS INCLUDE:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-1 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Methodology</span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-2">
              Our Software Consulting Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 gap-y-12">
            {processSteps.map((process, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-6 ring-8 ring-white z-10 shadow-sm">
                  0{index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-100 -z-0"></div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Verticals</span>
              <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 text-lg">
                Houston Systems provides software consulting services for businesses across multiple industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-gray-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Why Choose Us */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
              <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-8">
                Why Choose Houston Systems
              </h2>
              <ul className="space-y-6">
                <li className="flex">
                  <Globe2 className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Global Technology Expertise</h4>
                    <p className="text-gray-600 mt-1">We deliver consulting services to organizations across North America, Europe, and the Middle East.</p>
                  </div>
                </li>
                <li className="flex">
                  <Database className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Customized Technology Solutions</h4>
                    <p className="text-gray-600 mt-1">Every consulting project is tailored to the specific needs of your business.</p>
                  </div>
                </li>
                <li className="flex">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Security-First Development</h4>
                    <p className="text-gray-600 mt-1">Our software solutions follow strict security standards and compliance requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <ServerCog className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Scalable Software Architecture</h4>
                    <p className="text-gray-600 mt-1">Our systems are designed to support long-term growth and evolving business needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <Cpu className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Experienced Consulting Team</h4>
                    <p className="text-gray-600 mt-1">Our experts bring extensive experience in enterprise software development and modern technologies.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                Technologies We Work With
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-3">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.frontend.map(t => (
                      <span key={t} className="px-4 py-2 bg-white rounded-md text-gray-700 shadow-xs border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-3">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.backend.map(t => (
                      <span key={t} className="px-4 py-2 bg-white rounded-md text-gray-700 shadow-xs border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-3">Cloud Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.cloud.map(t => (
                      <span key={t} className="px-4 py-2 bg-white rounded-md text-gray-700 shadow-xs border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-3">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.databases.map(t => (
                      <span key={t} className="px-4 py-2 bg-white rounded-md text-gray-700 shadow-xs border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-3">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.devops.map(t => (
                      <span key={t} className="px-4 py-2 bg-white rounded-md text-gray-700 shadow-xs border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Section */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-semibold tracking-wide mb-6">
            GLOBAL REACH
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
            Software Consulting Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Worldwide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Houston Systems provides global consulting services to businesses across major technology markets, helping organizations adopt innovative technologies and scale their operations efficiently.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "USA", flag: "https://flagcdn.com/us.svg", color: "from-blue-500/20 to-red-500/20" },
              { name: "UK", flag: "https://flagcdn.com/gb.svg", color: "from-blue-600/20 to-red-600/20" },
              { name: "UAE", flag: "https://flagcdn.com/ae.svg", color: "from-green-500/20 to-red-500/20" },
              { name: "Germany", flag: "https://flagcdn.com/de.svg", color: "from-yellow-500/20 to-red-500/20" },
              { name: "Norway", flag: "https://flagcdn.com/no.svg", color: "from-red-500/20 to-blue-500/20" },
              { name: "Canada", flag: "https://flagcdn.com/ca.svg", color: "from-red-500/20 to-red-600/20" }
            ].map((country, idx) => (
              <div
                key={country.name}
                className={`group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] cursor-default overflow-hidden`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out`} />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-12 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out drop-shadow-md rounded shadow-sm overflow-hidden bg-white/10 flex items-center justify-center">
                    <img src={country.flag} alt={`${country.name} flag`} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold text-gray-400 text-xs tracking-wider uppercase mb-1 group-hover:text-blue-300 transition-colors">
                    Consulting In
                  </span>
                  <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                    {country.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Common Questions</span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does a software consulting company do?</h3>
              <p className="text-gray-600">A software consulting company helps businesses design technology strategies, develop custom software, and implement scalable digital solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why do businesses need software consulting?</h3>
              <p className="text-gray-600">Software consulting helps organizations reduce risks, improve operational efficiency, and accelerate digital transformation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a consulting project take?</h3>
              <p className="text-gray-600">Project timelines vary depending on complexity, ranging from a few weeks for smaller projects to several months for enterprise implementations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Software Consulting Project Today</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            If your organization is planning digital transformation, cloud migration, or enterprise software development, Houston Systems can help. Our consultants provide strategic guidance and advanced software solutions to help your business succeed in a competitive digital environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center">
              Schedule a Consultation
            </Link>
            <Link href="/contact" className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center">
              Request a Custom Solution
            </Link>
            <Link href="/contact" className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center">
              Speak With a Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* Shared Components */}
      <Benefits />
      <BlogCTA />
      <Testimonials />
    </div>
  );
};

export default SoftwareConsultingPage;
