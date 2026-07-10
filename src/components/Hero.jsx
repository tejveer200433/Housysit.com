'use client'

import Link from 'next/link'
import GridPattern from './GridPattern'
import ActionButton from './ui/ActionButton'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/hero-video.mp4"
        poster='/hero-thumbnail.png'
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Dark overlay for contrast {chnaged for dark mode} */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition-colors duration-300 z-10" />

      {/* Optional Grid Pattern */}
      <GridPattern className="absolute inset-0 z-20 opacity-30" />

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-10">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Delivering End-to-End IT Solutions <br className="hidden md:block" />
          for a Digital-First World
        </h1>

        <p className="text-white/80 dark:text-gray-200 max-w-2xl mx-auto text-base md:text-lg mb-8">
          We specialize in custom software development, enterprise solutions, cloud services, and
          IT consulting to help organizations drive innovation, optimize operations, and achieve scalable digital transformation.
        </p>

        <div className="flex justify-center space-x-4">
          <ActionButton label="Get in Touch" variant='primary' className='rounded-4xl!'   />

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-4xl text-sm font-medium hover:bg-white hover:text-black dark:hover:bg-gray-100 dark:hover:text-black transition flex items-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
