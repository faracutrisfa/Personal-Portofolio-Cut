import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    return (
        <section id="Contact" className="lg:px-20 px-4 py-24 h-auto">
            <div className="flex flex-col items-center gap-4">
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
                    Contact
                </motion.button>
                <h1 className="text-primary-600 font-normal text-lg lg:text-xl flex text-center">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </h1>
            </div>
            <div className="gap-12 flex flex-col mt-12 items-center ">
                <div className="flex flex-col gap-4">
                    <h1 className="flex text-primary-900 lg:text-4xl text-lg font-semibold lg:gap-5 gap-4 items-center">
                        <AiOutlineMail />
                        faracutrisfa@gmail.com
                    </h1>
                    <h1 className="flex text-primary-900 lg:text-4xl text-lg font-semibold lg:gap-5 gap-4 items-center">
                        <IoCallOutline />
                        +628 95331014513
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-primary-600 text-base font-normal">You may also find me on these platforms!</p>
                    <ul className="flex gap-2 justify-center">
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
            </div>
        </section>
    )
}