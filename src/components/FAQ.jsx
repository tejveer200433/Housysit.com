'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Globe from './Globe';

const FAQ = () => {
  // Store only the index of the open item. Use 'null' if all are closed.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    // If clicking the already open item, close it (set to null).
    // Otherwise, set the new index as the only open one.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What industries do you serve?",
      answer: "We work across multiple sectors including finance, healthcare, education, real estate, ecommerce, hospitality, logistics and startups. Our team adapts solutions to fit any domain through research driven planning."
    },
    {
      question: "Can you build custom solutions from scratch?",
      answer: "Yes. We specialize in end-to-end development from ideation and design to deployment and long-term support."
    },
    {
      question: "How do you ensure project quality and delivery timelines?",
      answer: "We follow structured workflows, code reviews, regular progress updates and strong QA processes. Every project gets a dedicated team, clear milestones and predictable timelines that we commit to delivering."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes. We provide ongoing maintenance, performance monitoring, feature upgrades and technical support to ensure your product continues to run smoothly after launch."
    },
    {
      question: "What does the onboarding process look like?",
      answer: "We start with a discovery phase to understand your goals, users and requirements. Then we create a project plan, wireframes and prototypes for your review before development begins."
    },
    {
      question: "Do you work with specific technology stacks?",
      answer: "While we are experts in modern frameworks like React, Next.js, and Node.js, we choose the technology based on your specific needs. Whether it's a high-performance web app, a scalable cloud architecture on AWS/GCP, or a mobile-first solution, we prioritize stability, security, and long-term scalability."
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-2">FAQ</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about our process and how we help businesses scale globally.
        </p>
      </div>

      {/* Main Container: Flex-stretch ensures both columns are equal height */}
      <div className='flex flex-col md:flex-row items-start gap-12'>

        {/* Left Column: Globe */}
        <div className="md:w-1/2 relative min-h-100 flex items-center justify-center overflow-hidden">
          <div className=" inset-0 w-full h-full">
            <Globe />
          </div>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="md:w-1/2 space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border transition-all duration-300 rounded-xl overflow-hidden ${isOpen ? "border-blue-200 bg-blue-50/30" : "border-gray-200 bg-white"
                  }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-blue-700" : "text-gray-900"}`}>
                    {item.question}
                  </span>
                  <div className="ml-4 shrink-0">
                    {isOpen ? (
                      <ChevronUpIcon className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;