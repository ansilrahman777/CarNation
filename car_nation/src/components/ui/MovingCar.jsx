import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import carImage from "./../../assets/images/image/car_ride.png";

// Car Component
const MovingCar = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Move the car from left (-20vw) to right (100vw)
  const carX = useTransform(scrollYProgress, [0, 1], ["-20vw", "100vw"]);

  return (
    <div ref={scrollRef} className="relative w-full h-40 flex items-center overflow-hidden">
      <motion.img
        src={carImage}
        alt="Moving Car"
        className="w-1/2 h-auto absolute left-0"
        style={{ x: carX }}
      />
    </div>
  );
};
export default MovingCar;
