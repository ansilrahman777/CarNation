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
            <div className="flex text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              <span className="mx-0">Car Diagnostic ✷ Body Works & Painting ✷ Premium Service ✷ Fast Recovery ✷</span>
              <span className="mx-0">Car Diagnostic ✷ Body Works & Painting ✷ Premium Service ✷ Fast Recovery ✷</span>
            </div>
          </motion.div>

          <motion.div
            className="whitespace-nowrap text-[8vw] text-red-700 font-extrabold uppercase flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="flex  text-transparent" style={{ WebkitTextStroke: "2px #b91c1c" }}>
              <span className="mx-0">Expert Technicians ✷ Genuine Parts ✷ Fast & Reliable ✷ Affordable Prices ✷</span>
              <span className="mx-0">Expert Technicians ✷ Genuine Parts ✷ Fast & Reliable ✷ Affordable Prices ✷</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
