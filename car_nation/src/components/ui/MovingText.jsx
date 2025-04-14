import { motion } from "framer-motion";

export default function MovingText() {
  return (
    <div className="overflow-hidden bg-transparent text-white w-full relative">
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <motion.div
            className="whitespace-nowrap text-[5vw] font-extrabold uppercase flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="flex text-white">
              <span className="mx-0">
                Car Diagnostic Body Works & Painting Premium Service Fast
                Recovery
              </span>
              <span className="mx-0">
                Car Diagnostic Body Works & Painting Premium Service Fast
                Recovery
              </span>
            </div>
          </motion.div>

          <motion.div
            className="whitespace-nowrap text-[5vw] text-red-700 font-extrabold uppercase flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="flex  text-red-700">
              <span className="mx-0">
                Expert Technicians Genuine Parts Fast & Reliable Affordable
                Prices
              </span>
              <span className="mx-0">
                Expert Technicians Genuine Parts Fast & Reliable Affordable
                Prices
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
