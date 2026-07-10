import React from 'react';

const techStack = [
  // Frontend
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'NextJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Vue', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  
  // Backend & Languages
  { name: 'NodeJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'DotNet', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  
  // Mobile & Cross-Platform
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Swift', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },

  // Cloud & DevOps
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },

  // Databases
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

export default function CoverflowSlider() {
  // Triple the array for extra width to avoid any visible "reset" jump on large screens
  const duplicatedIcons = [...techStack, ...techStack, ...techStack];

  return (
    <div className="relative flex overflow-x-hidden py-12">
      {/* Side Fades for that premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-linear-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-linear-to-l from-white to-transparent"></div>

      {/* Marquee Container */}
      <div className="animate-marquee flex whitespace-nowrap">
        {duplicatedIcons.map((tech, index) => (
          <div
            key={index}
            className="group mx-12 flex flex-col items-center justify-center space-y-4"
          >
            <div className="h-20 w-20 grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0">
              <img
                src={tech.url}
                alt={tech.name}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xs font-medium text-gray-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}