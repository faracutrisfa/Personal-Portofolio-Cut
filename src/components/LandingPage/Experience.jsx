import { motion } from "framer-motion";
import { experienceCut } from "../../assets/data/experienceCut";

export default function Experience() {
  return (
    <section id="Experience" className="lg:px-20 px-4 py-24 h-auto bg-primary-50"
    >
      <div className="flex flex-col items-center gap-4 mb-6 md:mb-12 text-center">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
          Experience
        </motion.button>
        <h1 className="text-primary-600 font-normal text-lg lg:text-xl flex text-center">Here is a quick summary of my most recent experiences</h1>
      </div>
      <div
        className="flex flex-col gap-5 border-b rounded-xl p-8 bg-white shadow-lg shadow-pink-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
        {experienceCut.map((d, index) => (
          <a href={d.link} target="blank">
            <ul>
              <li className="flex justify-between">
                <h1 className="text-purple-800 font-bold text-base">{d.company}</h1>
                <h2 className="hidden md:block font-semibold text-primary-900 text-lg md:text-xl">{d.position}</h2>
                <p className="text-primary-900 font-normal text-base">{d.date}</p>
              </li>
              <li>
                <h2 className="font-semibold text-primary-900 text-lg md:text-xl block md:hidden">{d.position}</h2>
                <p className="font-normal text-primary-600 text-base mt-4">{d.desc}</p>
              </li>
            </ul>
          </a>
        ))}
      </div>

      {/* <div className="gap-12 flex mt-6 md:mt-12 justify-center">
        {experienceCut.map((d, index) => (
          <a href={d.link} target="blank" className="items-center justify-center flex flex-col gap-6 border-b rounded-xl bg-white shadow px-12 py-12">
            <div className="px-2 py-2" >{d.company}</div>
            <p className="text-center text-primary-600 text-base font-normal">{d.position}</p>
            <p className="text-center text-primary-600 text-base font-normal">{d.desc}</p>
            <div>
              <h1 className="text-primary-900 text-lg md:text-xl font-semibold">{d.date}</h1>
            </div>
          </a>
        ))}
      </div> */}
    </section>
  )
}