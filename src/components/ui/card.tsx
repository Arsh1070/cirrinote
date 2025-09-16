import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* h-80 w-97 */

const AnimatedCard = () => {
  return (
    <motion.div
      whileHover="hovered"
      initial="initial"
      className="group relative h-65 w-full min-w-70 overflow-hidden rounded-xl border-2 border-[#1c1c1c] bg-[#1c1c1c] transition-all duration-300 hover:border-[#00bb77] sm:h-80 sm:min-w-97"
    >
      {/* Card Content */}
      <motion.div
        variants={{
          initial: { x: 0 },
          hovered: { x: 10 }, // small shift to right
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="font-mono-500 flex h-full w-full items-end justify-start p-10 text-3xl text-[#FFFFFF]/80 hover:text-white"
      >
        <div>
          <h1>Feature</h1>
          <h1>Name</h1>
        </div>
      </motion.div>

      {/* Arrow animation */}
      <motion.div
        variants={{
          initial: {
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            opacity: 0,
          },
          hovered: {
            left: "80%",
            top: "25%",
            x: "-50%",
            y: "-50%",
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 200, // controls "speed"
          damping: 15,
        }}
        className="absolute text-2xl text-[#00bb77]"
      >
        <ArrowUpRight size={70} />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;

{
  /* <div className="group relative h-80 w-97 overflow-hidden rounded-xl border-2 border-[#1c1c1c] bg-[#1c1c1c] transition-all duration-300 hover:border-green-500">
  <div className="flex h-full w-full items-center justify-center font-semibold text-white">
    Hover Me
  </div>

  <motion.div
    initial={{ x: "-50%", y: "-50%", opacity: 0 }}
    whileHover={{ x: "120%", y: "-120%", opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="absolute top-1/2 left-1/2 text-2xl text-green-500"
  >
    →
  </motion.div>
</div>; */
}
