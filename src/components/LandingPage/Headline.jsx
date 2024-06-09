import Hero from "../../assets/image/Hero.svg";
import { GoLocation } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Headline() {
  return (
    <section id="Headline" className="lg:px-20 px-4 py-32"> 
      <div className="flex flex-col md:flex-row items-center gap-12 md:justify-between text-center md:items-start md:text-start">
        <div className="order-2 md:order-1">
          <h1 className="text-primary-900 text-4xl lg:text-5xl xl:text-6xl font-bold">Hi, I'm Cut Risfa Zuhra 👋</h1>
          <p className="text-primary-600 text-base font-normal mt-2 xl:w-192 sm:w-142 md:w-125">
            I'm a beginner front-end developer, working primarily with React.js. My goal is to create great digital experiences that are fast,
            accessible, visually appealing, and responsive. Although I'm new to the field,
            I'm passionate about web development and eager to learn more every day 🦋
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-primary-600 text-base font-normal mt-12">
            <GoLocation />
            Malang, Indonesia
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 ml-1 text-primary-600 text-base font-normal mt-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new projects
          </p>
          <ul className="flex gap-2 mt-12 justify-center md:justify-start">
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