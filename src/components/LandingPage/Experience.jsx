import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="Experience" className="lg:px-20 px-4 py-24 h-auto bg-primary-50">
      <div className="flex flex-col items-center gap-4">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
          Experience
        </motion.button>
        <h1 className="text-primary-600 font-normal text-lg lg:text-xl">Here is a quick summary of my most recent experiences</h1>
      </div>
    </section>
  )
}