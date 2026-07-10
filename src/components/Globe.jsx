"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const hexToRgb = (hex) => {
    const h = hex.replace("#", "")
    const bigint = parseInt(h, 16)
    return [
        ((bigint >> 16) & 255) / 255,
        ((bigint >> 8) & 255) / 255,
        (bigint & 255) / 255,
    ]
}

export default function Globe({ className }) {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
        if (!canvasRef.current) return;

        // Get the dimensions of the parent wrapper
        const container = canvasRef.current.parentElement;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            // We use the container size to make it fill the flex-stretched area
            width: container.offsetWidth * 2,
            height: container.offsetHeight * 2,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 12,
            baseColor: hexToRgb("#ffffff"),
            markerColor: hexToRgb("#f97316"),
            glowColor: hexToRgb("#ffffff"),
            opacity: 0.5,

            markers: [
                // California (San Francisco)
                { location: [37.7749, -122.4194], size: 0.1 },

                // New York City
                { location: [40.7128, -74.0060], size: 0.1 },

                // South Africa (Johannesburg)
                { location: [-26.2041, 28.0473], size: 0.1 },

                // United Kingdom (London)
                { location: [51.5074, -0.1278], size: 0.1 },

                // India (New Delhi)
                { location: [28.6139, 77.2090], size: 0.1 },

                // Australia (Sydney)
                { location: [-33.8688, 151.2093], size: 0.1 },

                // UAE (Dubai)
                { location: [25.2048, 55.2708], size: 0.1 },

                // Saudi Arabia (Riyadh)
                { location: [24.7136, 46.6753], size: 0.1 },

                // France (Paris)
                { location: [48.8566, 2.3522], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
                // Keep the internal canvas size in sync with the stretched parent
                state.width = container.offsetWidth * 2;
                state.height = container.offsetHeight * 2;
            },
        });

        setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
        return () => globe.destroy();
    }, []);

    return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
            <canvas
                ref={canvasRef}
                className="opacity-0 transition-opacity duration-1000"
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: '1/1', // Keep it spherical
                    objectFit: 'contain'
                }}
            />
        </div>
    );
}