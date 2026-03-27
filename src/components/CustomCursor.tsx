"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check if device has a touch screen
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Don't render cursor on touch devices or before hydration
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-neon-cyan mix-blend-difference pointer-events-none z-[999] hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-neon-cyan/50 pointer-events-none z-[998] hidden md:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            />
        </>
    );
}
