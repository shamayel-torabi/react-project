import * as motion from "motion/react-client"

export default function EnterAnimation() {
    return (
        <motion.div
            className="h-svh w-full grid place-content-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
            <h1 className="text-9xl">Test</h1>
        </motion.div>
    )
}

