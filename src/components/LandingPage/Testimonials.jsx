import { motion } from "framer-motion";
import { testimoni } from "../../assets/data/Testimoni";

export default function Testimonials() {
    return (
        <section id="Testimonials" className="lg:px-20 px-4 py-24 h-auto bg-primary-50">
            <div className="flex flex-col items-center gap-4 mb-12 text-center">
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="px-5 py-1 bg-secondary-300 rounded-xl text-primary-600 font-bold text-sm">
                    Testimonials
                </motion.button>
                <h1 className="text-primary-600 font-normal text-lg lg:text-xl">Nice things people have said about me</h1>
            </div>
            <div className="gap-12 flex mt-6 md:mt-12 justify-center">
                {testimoni.map((d, index) => (
                    <a href={d.link} target="blank" className="items-center justify-center flex flex-col gap-6 border-b rounded-xl bg-white shadow px-12 py-12">
                        <img src={d.profile} alt="icon" className="border rounded-full px-2 py-2 bg-pink-50 border-pink-50" />
                        <p className="text-center text-primary-600 text-base font-normal">{d.content}</p>
                        <div>
                            <h1 className="text-primary-900 text-lg md:text-xl font-semibold">{d.name}</h1>
                            <h2 className="text-center text-primary-600 text-sm font-normal">{d.work}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}