import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

export default function Loader({ isLoading }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setHide(true), 1000);
    }
  }, [isLoading]);

  if (hide) return null;

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{
        opacity: isLoading ? 1 : 0,
        scale: isLoading ? 1 : 3,
        filter: isLoading ? "blur(0px)" : "blur(10px)", 
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-white"
    >
      <Lottie animationData={loaderAnimation} loop={true} className="w-40 h-50" />
    </motion.div>
  );
}
