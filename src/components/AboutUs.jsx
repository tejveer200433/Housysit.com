'use client'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="relative py-20 px-4 sm:px-12 md:px-24">
      <div className="text-center mb-12">
        <h4 className="text-sm font-semibold text-blue-400 mb-2">About Us</h4>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Who We Are, What We Build, <br className="hidden md:block" />
          and Why It Matters
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A closer look at Houston Systems — the minds, mission, and technology powering real-world transformation.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <div className="relative">
          {/* Circle with rotating text */}
          <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full flex items-center justify-center bg-white z-10">
            <div className="w-full h-full rounded-full animate-spin-slow relative">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50
                       m -35, 0
                       a 35,35 0 1,1 70,0
                       a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fontSize="12" fill="black">
                  <textPath xlinkHref="#circlePath">
                    About Us • About Us • About Us • About Us •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden max-w-md">
            <Image
              src="/about.png" // replace with your actual image
              alt="Team"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <p className="text-lg leading-relaxed">
            Houston Systems is a full-spectrum IT solutions company that partners with businesses to build smart,
            scalable, and high-impact technology. From powerful software and mobile apps to AI, IoT, and IoT systems —
            we engineer solutions that solve real-world challenges across industries. Our mission is to simplify complexity
            through tech that's intuitive, reliable, and future-ready. With a strong foundation in custom development and
            a focus on continuous innovation, we help companies grow faster, operate smarter, and stay ahead of change.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs
