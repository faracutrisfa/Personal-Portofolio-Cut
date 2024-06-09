import { motion } from "framer-motion";
import gojo from "../../assets/image/gojo_tumbal.svg"

export default function AboutMe() {
  return (
    <section id="AboutMe" className="lg:px-20 px-4 py-24 bg-primary-50 h-auto">
      <div className="flex items-center justify-center">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm mb-3 md:mb-12">
          About Me
        </motion.button>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:justify-between items-center text-center md:text-start">
        <img src={gojo} alt="image" className="w-72 xl:w-auto"/>
        <div className="lg:w-180 flex flex-col gap-4">
          <h1 className="text-primary-900 font-semibold text-2xl xl:text-3xl mb-2 ">Curious about me? Here you have it</h1>
          <p className="text-primary-600 text-base font-normal">
            I’m an enthusiastic beginner in frontend development, focusing on React.js.
            I love combining the technical and visual parts of digital products. I'm passionate about creating great user experiences,
            achieving pixel-perfect designs, and writing clean, readable, and efficient code
          </p>
          <p className="text-primary-600 text-base font-normal">
            I started learning web development in 2024. At 19 years old, I want to start my journey in the world of web development,
            facing new challenges and learning the latest technologies. My ambition is to build cutting-edge web applications using modern technologies
            such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="text-primary-600 text-base font-normal">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉🦋
          </p>
        </div>
      </div>
    </section>
  )
}