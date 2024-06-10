import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/image/logoCut.svg";
import LogoDua from "/Logo.svg";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (to) => {
    setClick(false);
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full flex justify-between py-6 px-4 lg:px-20 fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-opacity-90 bg-primary-50 text-primary-900 shadow-lg" : "bg-transparent text-primary-600"}`}>
      <img src={Logo} alt="logo" />
      <ul className="gap-6 hidden md:flex">
        <Link
          spy={true}
          smooth={true}
          to="AboutMe"
          onClick={() => handleLinkClick("AboutMe")}
        >
          <li className="hover:border-secondary-900 hover:text-secondary-900">About</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="Work"
          onClick={() => handleLinkClick("Work")}
        >
          <li className="hover:border-secondary-900 hover:text-secondary-900">Work</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="Testimonials"
          onClick={() => handleLinkClick("Testimonials")}
        >
          <li className="hover:border-secondary-900 hover:text-secondary-900">Testimonials</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="Contact"
          onClick={() => handleLinkClick("Contact")}
        >
          <li className="hover:border-secondary-900 hover:text-secondary-900">Contact</li>
        </Link>
        <li className="ml-6 font-bold text-primary-900 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
          <a
            href="https://drive.google.com/drive/folders/1sP9alvtJpKOGglPtPbCgJfGnJly-9Ogf?usp=sharing"
            target="_blank"
            className="border bg-secondary-300 rounded-xl px-4 py-2 active:bg-secondary-900 border-secondary-300">
            View CV
          </a>
        </li>
      </ul>

      <div className="block md:hidden relative">
        <button onClick={handleClick}>
          {click ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
        {click && <div className="fixed inset-0 bg-black opacity-50"></div>}

        <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform ${click ? 'translate-x-0 duration-500' : 'translate-x-full duration-500'}`}>
          <div className="flex justify-between items-center p-4">
            <img src={LogoDua} alt="logo" className="h-11" />
            <button onClick={handleClick}>
              <IoClose size={24} />
            </button>
          </div>
          <hr className="w-full border-t-2 border-primary-50"></hr>
          <ul className="flex flex-col gap-4 px-4 py-4 font-medium text-base items-center">
            <Link
              spy={true}
              smooth={true}
              to="AboutMe"
              onClick={() => handleLinkClick("AboutMe")}
            >
              <li className="hover:border-secondary-900 hover:text-secondary-900">About</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Work"
              onClick={() => handleLinkClick("Work")}
            >
              <li className="hover:border-secondary-900 hover:text-secondary-900">Work</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Testimonials"
              onClick={() => handleLinkClick("Testimonials")}
            >
              <li className="hover:border-secondary-900 hover:text-secondary-900">Testimonials</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Contact"
              onClick={() => handleLinkClick("Contact")}
            >
              <li className="hover:border-secondary-900 hover:text-secondary-900">Contact</li>
            </Link>
            <hr className="w-full border-t-2 border-primary-50"></hr>
            <li className="font-bold text-primary-900 mt-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
              <a
                href="https://drive.google.com/drive/folders/1sP9alvtJpKOGglPtPbCgJfGnJly-9Ogf?usp=sharing"
                target="_blank"
                className="border bg-secondary-300 rounded-xl px-7 py-2 active:bg-secondary-900 border-secondary-300">
                View CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}