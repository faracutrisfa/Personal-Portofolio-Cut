import Headline from "../components/LandingPage/Headline"
import AboutMe from "../components/LandingPage/AboutMe"
import Skills from "../components/LandingPage/Skills"
import Education from "../components/LandingPage/Education"
import Experience from "../components/LandingPage/Experience"

export default function Home() {
  return (
    <div>
      <section id="Headline"><Headline/></section>
      <section id="AboutMe"><AboutMe/></section>
      <section id="Skills"><Skills/></section>
      <section id="Education"><Education/></section>
      <section id="Experience"><Experience/></section>
    </div>
  )
}