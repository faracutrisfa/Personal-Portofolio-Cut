import { Link } from "react-scroll";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/image/logoCut.svg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="flex justify-between items-center font-medium text-base text-primary-600 lg:px-20 px-4 py-4">
      <img src={Logo} alt="logo" />
      <ul className="gap-6 hidden md:flex">
        <Link
          spy={true}
          smooth={true}
          to="about">
          <li className="hover:border-secondary-900 hover:text-secondary-900">About</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="work">
          <li className="hover:border-secondary-900 hover:text-secondary-900">Work</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="testimonials">
          <li className="hover:border-secondary-900 hover:text-secondary-900">Testimonials</li>
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="contact">
          <li className="hover:border-secondary-900 hover:text-secondary-900">Contact</li>
        </Link>
        <li className="ml-6 font-bold text-primary-900">
          <a
            href="https://drive.google.com/drive/folders/1sP9alvtJpKOGglPtPbCgJfGnJly-9Ogf?usp=sharing"
            target="_blank"
            className="border bg-secondary-300 rounded-xl px-4 py-2 active:bg-secondary-900">
            Download CV
          </a>
        </li>
      </ul>

      <div className="block md:hidden relative">
        <button
          onClick={handleClick}>
          {click ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
        {click && <div className="fixed inset-0 bg-black opacity-50"></div>}

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform ${click ? 'translate-x-0 duration-500' : 'translate-x-full duration-500'}`}>
          <div className="flex justify-between items-center p-4">
            <img src={Logo} alt="logo" className="h-6" />
            <button onClick={handleClick}>
              <IoClose size={24} />
            </button>
          </div>
          <hr className="w-full border-t-2 border-primary-50"></hr>
          <ul className="flex flex-col gap-4 px-4 py-4 font-medium test-base items-center">
            <Link
              spy={true}
              smooth={true}
              to="about">
              <li className="hover:border-secondary-900 hover:text-secondary-900">About</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="work">
              <li className="hover:border-secondary-900 hover:text-secondary-900">Work</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="testimonials">
              <li className="hover:border-secondary-900 hover:text-secondary-900">Testimonials</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="contact">
              <li className="hover:border-secondary-900 hover:text-secondary-900">Contact</li>
            </Link>
            <hr className="w-full border-t-2 border-primary-50"></hr>
            <li className="font-bold text-primary-900 mt-4">
              <a
                href="https://drive.google.com/drive/folders/1sP9alvtJpKOGglPtPbCgJfGnJly-9Ogf?usp=sharing"
                target="_blank"
                className="border bg-secondary-300 rounded-xl px-7 py-2 active:bg-secondary-900">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
