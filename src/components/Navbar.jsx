import Logo from "../assets/image/logoCut.svg"

export default function Navbar() {
    return (
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <a href="https://drive.google.com/drive/folders/1sP9alvtJpKOGglPtPbCgJfGnJly-9Ogf?usp=sharing" target="blank">Download CV</a>
      </nav>
    )
  }