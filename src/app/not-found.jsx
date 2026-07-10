"use client";

import Link from "next/link";
import { Home, Compass, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Ghost className="h-10 w-10 text-white/80" />
          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-8xl font-black tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Lost in the void
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-md text-base md:text-lg text-gray-400 leading-relaxed">
            The page you’re trying to reach doesn’t exist, was moved, or never
            existed in this timeline.
          </p>

          {/* Decorative Box */}
          <div className="mt-8 w-full rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Compass className="h-5 w-5 text-blue-400" />
              <p className="text-sm">
                Try heading back to the homepage and exploring from there.
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            <Home className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Return Home
          </Link>

          {/* Footer */}
          <p className="mt-8 text-xs text-gray-500">
            Broken route • Missing page • Cosmic anomaly
          </p>
        </div>
      </div>
    </div>
  );
}