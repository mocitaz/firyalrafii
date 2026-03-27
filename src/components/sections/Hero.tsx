"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background"
        >
            <div className="bg-noise absolute inset-0 z-0"></div>

            {/* Extreme Massive Marquee Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200vw] h-[60vh] flex flex-col justify-center pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05] overflow-hidden -rotate-6 scale-110">
                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="text-[15rem] md:text-[25rem] font-heading font-extrabold whitespace-nowrap leading-none uppercase"
                >
                    FIRYAL RAFII MUZAKKI FIRYAL RAFII MUZAKKI
                </motion.div>
                <motion.div
                    animate={{ x: [-2000, 0] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    className="text-[15rem] md:text-[25rem] font-heading font-extrabold whitespace-nowrap leading-none uppercase text-transparent"
                    style={{ WebkitTextStroke: "2px currentColor" }}
                >
                    INFORMATICS ENGINEER INFORMATICS ENGINEER
                </motion.div>
            </div>

            <div className="container relative z-20 px-6 md:px-12 w-full mx-auto md:ml-12 lg:ml-24">
                <div className="w-full flex flex-col items-start gap-8 max-w-5xl">

                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                            className="border-l-4 border-foreground pl-4 text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-muted-foreground font-bold"
                        >
                            Creative & Full-Stack Developer
                        </motion.div>
                    </div>

                    <div className="flex flex-col">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ opacity: 0, y: "100%", skewY: 5 }}
                                animate={{ opacity: 1, y: 0, skewY: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                                className="text-6xl md:text-8xl lg:text-[11rem] font-heading font-extrabold tracking-tighter leading-[0.85] text-foreground uppercase"
                            >
                                FIRYAL
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ opacity: 0, y: "100%", skewY: 5 }}
                                animate={{ opacity: 1, y: 0, skewY: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                className="text-6xl md:text-8xl lg:text-[11rem] font-heading font-extrabold tracking-tighter leading-[0.85] text-transparent uppercase"
                                style={{ WebkitTextStroke: "2px var(--foreground)" }}
                            >
                                RAFII.
                            </motion.h1>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl font-sans text-muted-foreground font-light max-w-2xl mt-4 leading-relaxed mix-blend-difference"
                    >
                        Engineering scalable systems. Designing uncompromising aesthetics. Building the future of digital interaction.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mt-10 group"
                    >
                        <Button
                            size="lg"
                            className="relative overflow-hidden w-full sm:w-auto bg-transparent text-foreground hover:text-background border border-foreground transition-colors duration-500 font-mono font-bold text-sm tracking-[0.2em] h-16 px-12 uppercase rounded-none"
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="absolute inset-0 bg-foreground translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0"></div>
                            <span className="relative z-10 flex items-center">
                                Acknowledge Work
                                <ArrowDownRight className="ml-4 w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-500" />
                            </span>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
