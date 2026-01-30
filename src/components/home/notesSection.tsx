import { motion } from "framer-motion";

const NotesSection = () => {
  test();
  const test = () => {};

  return (
    <>
      <section
        id="about"
        className="relative hidden h-screen w-full items-center justify-center bg-[#1c1c1c] sm:flex"
      >
        <motion.img
          src="/icons/Group.svg"
          alt="groupIcon"
          initial={{ y: 0, opacity: 0 }} // start above section
          whileInView={{ top: "43%", opacity: 1 }} // land in middle
          transition={{
            type: "spring",
            stiffness: 300, // controls "speed"
            damping: 15, // controls "bounciness"
          }}
          className="absolute top-0 left-1/2 h-32 w-32 -translate-x-1/2"
        />

        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          //  viewport={{ once: true, amount: 0.1 }}
          className="font-mono-500 absolute top-1/5 flex flex-col items-center text-5xl text-white"
        >
          An extraordinary note for{" "}
          <div className="text-[#00BB77]">makers, creators..</div>
        </motion.h1>

        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          //  viewport={{ once: true, amount: 0.2 }}
          className="font-mono-500 absolute bottom-1/5 flex flex-col items-center text-xl text-white"
        >
          Creators around the planet use this app{" "}
          <div>
            for creating <span className="text-[#00BB77]">magic</span>
          </div>
        </motion.h1>
      </section>
      <section
        id="about"
        className="flex flex-col items-center justify-between bg-[#1c1c1c] px-6 py-30 sm:hidden"
      >
        <h2 className="text-center text-2xl text-white">
          An extraordinary note for{" "}
          <div className="text-[#00BB77]">makers, creators..</div>
        </h2>
        <img
          src="/icons/Group.svg"
          width={160}
          height={160}
          alt="group"
          className="py-12"
        />

        <h4 className="text-center text-xl text-white">
          Creators around the planet use this app for creating{" "}
          <span className="text-[#00BB77]">magic</span>
        </h4>
      </section>
    </>
  );
};

export default NotesSection;
