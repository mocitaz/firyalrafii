"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
    const education = [
        {
            id: 1,
            degree: "Bachelor of Informatics",
            institution: "Telkom University",
            location: "Bandung, Indonesia",
            period: "2019 – 2023",
            details: [
                "Focused on Data Analytics, Information Systems, and Software Engineering methodologies.",
                "Completed major capstone project in database optimization.",
                "Active member of the programming and robotics club."
            ]
        }
    ];

    return (
        <section id="education" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12 max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 text-center items-center"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <GraduationCap className="w-4 h-4" />
                        <span>05. Academia</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Academic Foundation</h2>
                </motion.div>

                <div className="flex flex-col gap-10">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group flex flex-col p-10 lg:p-14 border border-foreground bg-card hover:bg-foreground hover:text-background transition-colors duration-500 shadow-[10px_10px_0_0_rgba(100,100,100,0.1)] hover:shadow-none"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
                                <div>
                                    <h3 className="text-3xl font-heading font-extrabold uppercase tracking-tight mb-2">
                                        {edu.degree}
                                    </h3>
                                    <div className="font-mono text-sm tracking-widest uppercase text-muted-foreground group-hover:text-background/70 font-bold mb-2">
                                        {edu.institution}
                                    </div>
                                    <div className="font-mono text-xs tracking-widest uppercase text-foreground group-hover:text-background bg-muted group-hover:bg-background/20 inline-block px-3 py-1">
                                        {edu.location}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 items-start md:items-end">
                                    <div className="border border-border group-hover:border-background/30 px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest">
                                        {edu.period}
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-3 text-muted-foreground group-hover:text-background/90 text-sm md:text-base leading-relaxed tracking-wide font-light">
                                {edu.details.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="text-foreground group-hover:text-background shrink-0 mt-1 font-mono font-bold">/</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
