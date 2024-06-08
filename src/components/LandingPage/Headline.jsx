import Hero from "../../assets/image/Hero.svg";
import { GoLocation } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Headline() {
  return (
    <section id="Headline" className="lg:px-20 px-4 py-24">
      <div className="h-screen flex md:flex-row md:justify-between gap-12 flex-col items-center md:items-start">
        <div className="order-2 md:order-1">
          <h1 className="text-primary-900 text-4xl lg:text-5xl xl:text-6xl font-bold">Hi, I'm Cut Risfa Zuhra 👋</h1>
          <p className="text-primary-600 text-base font-normal mt-2 xl:w-172 w-85 sm:w-142 md:w-125">
            I'm a beginner front-end developer, working primarily with React.js. My goal is to create great digital experiences that are fast,
            accessible, visually appealing, and responsive. Although I'm new to the field,
            I'm passionate about web development and eager to learn more every day 🦋
          </p>
          <p className="flex items-center gap-2 text-primary-600 text-base font-normal mt-12">
            <GoLocation />
            Malang, Indonesia
          </p>
          <p className="flex items-center gap-3 ml-1 text-primary-600 text-base font-normal mt-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new projects
          </p>
          <ul className="flex gap-2 mt-12">
            <li>
              <a href="https://github.com/faracutrisfa" target="blank"><LuGithub size={36} /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cut-risfa-zuhra-5b2788289/" target="blank"><CiLinkedin size={36} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/cutrisfz_" target="blank"><FaInstagram size={36} /></a>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img src={Hero} alt="image" className="w-60"/>
        </div>
      </div>
    </section>
  )
}