'use client'

import React from 'react'

const GridPattern = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>

                    <pattern
                        id="grid-pattern"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 60 0 L 0 0 0 60"
                            fill="none"
                            stroke="rgba(59, 130, 246, 0.1)"
                            strokeWidth="1"
                        />
                    </pattern>

                    {/* Gradient overlay */}
                    <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.02)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                    </linearGradient>

                </defs>

                {/* Base grid */}
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid-pattern)"
                />

                {/* Gradient overlay */}
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid-gradient)"
                />

                <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                    <line
                        x1="0"
                        y1="60%"
                        x2="100%"
                        y2="60%"
                        stroke="rgba(59, 130, 246, 0.15)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                    />
                </g>
            </svg>
        </div>
    )
}

export default GridPattern
