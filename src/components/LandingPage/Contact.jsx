import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="Contact" className="lg:px-20 px-4 py-24 h-auto">
            <div className="flex flex-col items-center gap-4">
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
                    Contact
                </motion.button>
                <h1 className="text-primary-600 font-normal text-lg lg:text-xl flex justify-center">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </h1>
            </div>
        </section>
    )
}