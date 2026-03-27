"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SystemHUD() {
    const [time, setTime] = useState("");
    const [memory, setMemory] = useState(0);
    const [load, setLoad] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setTime(date.toISOString().split('T')[1].split('.')[0]);
            setMemory(Math.floor(Math.random() * 20 + 40)); // Fake memory 40-60%
            setLoad(Math.floor(Math.random() * 15 + 5));    // Fake load 5-20%
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {/* Top Left - System Status */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute top-6 left-6 hidden md:flex flex-col gap-1 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase"
            >
                <span>SYS.STATUS // ONLINE</span>
                <span>KERNEL // v1.0.0</span>
                <span>DATA.STREAM // ACTIVE</span>
            </motion.div>

            {/* Top Right - Live Telemetry */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2, duration: 1 }}
                className="absolute top-6 right-6 hidden md:flex flex-col items-end gap-1 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase"
            >
                <span>T-MINUS // {time}</span>
                <span>MEM.ALLOC // {memory}%</span>
                <span>CPU.LOAD // {load}%</span>
            </motion.div>

            {/* Bottom Left - Coordinate System */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.4, duration: 1 }}
                className="absolute bottom-6 left-6 hidden md:flex flex-col gap-1 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase"
            >
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-foreground animate-pulse"></span>
                    <span>CONNECTION SECURE</span>
                </div>
            </motion.div>

            {/* Bottom Right - Build Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.6, duration: 1 }}
                className="absolute bottom-6 right-6 hidden md:flex flex-col items-end gap-1 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase"
            >
                <span>BUILD // FIRYAL.RAFII.2026</span>
                <span>LOC // BDG.ID</span>
            </motion.div>

            {/* Screen Borders / Crosshairs */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20 m-4"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/20 m-4"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/20 m-4"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20 m-4"></div>
        </div>
    );
}
