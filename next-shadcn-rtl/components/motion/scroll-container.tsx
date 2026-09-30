"use client";

import { motion, useInView } from "motion/react"
import { useRef } from "react"

export default function ScrollContainer() {
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef);

    return (
        <div className="h-96 w-full overflow-scroll grid place-content-center mt-16 bg-amber-50" ref={scrollRef}>
            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 3 }}
            >
                <div className="h-32 w-32 bg-amber-800">
                     {isInView ? "Hello!" : "Bye..."}
                </div>
            </motion.div>
        </div>
    )
}

