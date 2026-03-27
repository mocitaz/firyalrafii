"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Skills() {
    const categories = [
        {
            title: "Data.Analytics",
            skills: ["Microsoft Excel", "VLOOKUP / XLOOKUP", "Pivot Tables", "Data Cleaning", "Data Query", "Reporting"],
            hex: "0xDA"
        },
        {
            title: "Development.Stack",
            skills: ["HTML5", "CSS3 / Tailwind", "MySQL", "PHP", "TypeScript", "React", "Next.js"],
            hex: "0xDEV"
        },
        {
            title: "Sys.Operations",
            skills: ["IT Support", "Hardware Troubleshooting", "Functional Testing", "UAT", "Cross-Functional Collaboration"],
            hex: "0xSYS"
        }
    ];

    return (
        <section id="skills" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 text-center items-center"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <Terminal className="w-4 h-4" />
                        <span>04. System Dependencies</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Technical Stack</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col border border-border bg-card hover:bg-foreground hover:text-background transition-colors duration-500 shadow-[10px_10px_0_0_rgba(100,100,100,0.1)] group"
                        >
                            <div className="p-4 border-b border-border bg-muted flex items-center justify-between group-hover:bg-foreground group-hover:border-background/20 transition-colors">
                                <span className="font-mono text-xs uppercase font-bold tracking-widest text-foreground group-hover:text-background">
                                    {category.title}
                                </span>
                                <span className="font-mono text-xs text-muted-foreground group-hover:text-background/50">
                                    [ {category.hex} ]
                                </span>
                            </div>

                            <div className="p-8 flex flex-col gap-4">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between font-mono text-sm uppercase tracking-widest font-semibold border-b border-border/30 pb-2 last:border-0 last:pb-0 group-hover:border-background/20 text-muted-foreground group-hover:text-background/90"
                                    >
                                        <span>{skill}</span>
                                        <span className="text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">OK</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
