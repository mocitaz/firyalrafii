"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function OpeningAnimation() {
    const [complete, setComplete] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        // Fast counting sequence
        let current = 0;
        const interval = setInterval(() => {
            current += Math.floor(Math.random() * 15) + 5;
            if (current >= 100) {
                current = 100;
                clearInterval(interval);
            }
            setProgress(current);
        }, 80);

        const timer = setTimeout(() => {
            setComplete(true);
            document.body.style.overflow = "auto";
        }, 4200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    if (complete) return null;

    return (
        <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,1)", opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
        >
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">

                {/* The Loader Percentage */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                    className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-6xl md:text-8xl font-mono font-bold text-white z-30 mix-blend-difference"
                >
                    {progress}%
                </motion.div>

                {/* Layer 1: Stark CRT flash */}
                <motion.div
                    animate={{ scaleY: [0, 1, 0, 1], scaleX: [0.005, 0.005, 1, 1], opacity: [0, 1, 0, 1] }}
                    transition={{ times: [0, 0.2, 0.3, 0.5], duration: 1.2, delay: 2.0, ease: "linear" }}
                    className="absolute w-screen h-screen bg-white z-0"
                />

                <motion.div
                    animate={{ opacity: [1, 1, 0], backgroundColor: ["rgba(255,255,255,1)", "rgba(0,0,0,1)", "rgba(0,0,0,1)"] }}
                    transition={{ times: [0, 0.6, 1], duration: 1.2, delay: 3.2 }}
                    className="absolute inset-0 z-10"
                />

                {/* Layer 2: Main typography scale-in */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, letterSpacing: "2em" }}
                    animate={{
                        scale: [0.8, 1, 1, 250],
                        opacity: [0, 1, 1, 0],
                        letterSpacing: ["2em", "0.05em", "0.05em", "0.05em"]
                    }}
                    transition={{
                        times: [0, 0.2, 0.7, 1],
                        duration: 2.5,
                        delay: 1.6,
                        ease: "circIn",
                    }}
                    className="relative text-5xl md:text-[8rem] font-heading font-extrabold text-white z-20 mix-blend-difference uppercase"
                >
                    FIRYAL
                </motion.div>

                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            </div>
        </motion.div>
    );
}
