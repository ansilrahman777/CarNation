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

  const carX = useTransform(scrollYProgress, [0, 1], ["-120vw", "100vw"]);

  return (
    <div ref={scrollRef} className="bg-white relative w-full py-20 h-30 flex items-center overflow-hidden">
      <motion.img
        src={carImage}
        alt="Moving Car"
        className="w-96 h-auto absolute z-50 left-36"
        style={{ x: carX }}
      />
    </div>
  );
};
export default MovingCar;
