import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section id="Testimonials" className="lg:px-20 px-4 py-24 h-auto bg-primary-50">
            <div className="flex flex-col items-center gap-4">
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
                    Testimonials
                </motion.button>
                <h1 className="text-primary-600 font-normal text-lg lg:text-xl">Nice things people have said about me</h1>
            </div>
        </section>
    )
}