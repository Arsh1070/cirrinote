import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="relative hidden w-full scroll-mt-22 bg-black md:block"
      >
        <img
          src="/Octopus.jpg"
          alt="Hero"
          className="h-auto w-full object-cover pb-20 shadow-lg"
        />

        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="font-mono-500 absolute top-1/4 left-10 text-5xl text-white lg:left-30 xl:text-7xl"
        >
          Note Taking
        </motion.h1>

        {/* Arsh text from right */}
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="font-mono-500 absolute top-1/2 right-12 text-5xl text-[#00BB77] lg:right-22 xl:text-7xl"
        >
          Redefined
        </motion.h1>
      </section>
      <section className="bg-black md:hidden">
        <div className="flex flex-col items-center justify-start pb-25">
          <div>
            <h1 className="text-5xl text-white">Note Taking</h1>
            <span className="text-5xl text-[#00bb77]">Redefined</span>
          </div>
        </div>
        <img
          src="/Octopus-half.jpg"
          alt="Hero"
          className="ml-auto pb-20 pl-12 shadow-lg"
        />
      </section>
    </>
  );
};

export default HeroSection;
