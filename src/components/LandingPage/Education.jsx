import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="Education" className="lg:px-32 px-10 py-24 h-auto bg-primary-50">
      <div className="flex flex-col items-center gap-4 mb-6 md:mb-12 text-center">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
          Education
        </motion.button>
        <h1 className="text-primary-600 font-normal text-lg lg:text-xl">A Journey Through Learning</h1>
      </div>
      <div className="flex flex-col gap-5 border-b rounded-xl p-8 bg-white shadow-lg shadow-pink-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
        <ul className="flex justify-between gap-1 flex-col md:flex-row">
          <li>
            <h1 className="font-semibold text-primary-900 text-lg md:text-xl">Universitas Brawijaya</h1>
            <p className="font-normal text-primary-600 text-base">Information System Major</p>
          </li>
          <li>
            <h2 className="text-primary-900 font-normal text-base">Aug 2023 - present</h2>
          </li>
        </ul>
        <ul className="flex justify-between gap-1 flex-col md:flex-row">
          <li>
            <h1 className="font-semibold text-primary-900 text-lg md:text-xl">Man 2 Kota Pekanbaru</h1>
            <p className="font-normal text-primary-600 text-base">Math and Science Major</p>
          </li>
          <li>
            <h2 className="text-primary-900 font-normal text-base">July 2020 - June 2023</h2>
          </li>
        </ul>
      </div>
    </section>
  )
}