"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error?.message || "An unexpected error happened"}
      </p>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 rounded-md text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Try again
        </button>

        <Link
          href="/"
          className="px-6 py-3 bg-gray-700 rounded-md text-white text-sm font-medium hover:bg-gray-600 transition"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
