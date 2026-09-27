"use client";

import { motion } from "motion/react";

export default function TestSection() {
  return (
    <motion.section initial={{ scale: 0 }}  whileInView={{ scale: 1 }} transition={{ ease: "easeOut", duration: 1 }}>
        <div className='min-h-svh flex flex-col items-center justify-center bg-section'>
            <p>Test</p>
        </div>
    </motion.section>
  )
}
