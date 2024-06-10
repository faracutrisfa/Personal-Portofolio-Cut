import { motion } from "framer-motion";

export default function Work() {
    return (
        <section id="Work" className="lg:px-20 px-4 py-24 h-auto">
            <div className="flex flex-col items-center gap-4 mb-6 md:mb-12">
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
                    Work
                </motion.button>
                <h1 className="text-primary-600 font-normal text-lg lg:text-xl">Some of the noteworthy projects I have built</h1>
            </div>
            <h1 className="text-primary-600 font-semibold text-lg flex justify-center">coming soon....</h1>
        </section>
    )
}