"use client";

import { motion } from "framer-motion";
import { User, Code2, Database, TerminalSquare } from "lucide-react";

export function About() {
    const highlights = [
        { icon: <Database className="w-5 h-5 text-foreground" />, title: "Data Engineering" },
        { icon: <TerminalSquare className="w-5 h-5 text-foreground" />, title: "Systems Optimization" },
        { icon: <Code2 className="w-5 h-5 text-foreground" />, title: "Full-Stack Dev" },
    ];

    return (
        <section id="about" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-16 border-l-4 border-foreground pl-6"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <User className="w-4 h-4" />
                        <span>01. Insight</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">The Architect</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-8 text-muted-foreground text-lg md:text-xl font-light leading-relaxed"
                    >
                        <p>
                            I am <strong className="text-foreground font-semibold">Firyal Rafii Muzakki</strong>, an Informatics graduate from <strong className="text-foreground font-semibold">Telkom University</strong> based in Bandung, Indonesia. I specialize in making raw data intelligible and systems uncompromisingly resilient.
                        </p>
                        <p>
                            My expertise is firmly rooted in Data Analytics, Engineering, and IT Support. I have a proven track record of executing comprehensive functional tests, immediately resolving technical anomalies, and heavily optimizing operational workflows.
                        </p>
                        <p>
                            Whether I am leveraging advanced Excel paradigms or constructing clean, production-ready web architectures, my approach remains singular: translating complex requirements into striking, brutalist, and highly functional technical realities.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                            {highlights.map((item, i) => (
                                <div key={i} className="flex flex-col items-start gap-3 p-6 border border-border bg-card/10 hover:bg-foreground hover:text-background transition-colors duration-300 group cursor-pointer">
                                    <div className="group-hover:text-background transition-colors">{item.icon}</div>
                                    <span className="text-sm font-semibold uppercase tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
                            <img
                                src="/image.png"
                                alt="Firyal profile"
                                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Graphic overlay to enhance the minimalist tech feel */}
                            <div className="absolute inset-0 border-[12px] border-background mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute bottom-4 right-4 bg-background text-foreground font-mono text-xs px-2 py-1 uppercase tracking-widest font-bold">
                                IMG_SRC_01
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
