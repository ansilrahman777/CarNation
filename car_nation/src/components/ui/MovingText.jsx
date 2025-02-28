import { motion } from "framer-motion";

export default function MovingText() {
  return (
    <div className="overflow-hidden bg-black text-white w-full relative py-6">
      {/* Rotated Inner Wrapper to Prevent White Space */}
      <div className="rotate-[-5deg] w-full">
        <div className="flex flex-col gap-2">
          
          {/* First Line */}
          <motion.div
            className="whitespace-nowrap text-[8vw] font-extrabold uppercase flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="flex">
              <span className="mx-0">Cleaning ✷ Car Wash ✷ Premium Service ✷ Eco-Friendly ✷</span>
              <span className="mx-0">Cleaning ✷ Car Wash ✷ Premium Service ✷ Eco-Friendly ✷</span>
            </div>
          </motion.div>

          {/* Second Line */}
          <motion.div
            className="whitespace-nowrap text-[8vw] font-extrabold uppercase flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="flex">
              <span className="mx-0">Fast Service ✷ Shiny Finish ✷ Best Equipment ✷ Affordable Prices ✷</span>
              <span className="mx-0">Fast Service ✷ Shiny Finish ✷ Best Equipment ✷ Affordable Prices ✷</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
