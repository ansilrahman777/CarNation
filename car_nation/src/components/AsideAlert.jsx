import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AsideAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show alert after 5 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 5000);

    // Hide alert after 10 seconds (5s delay + 10s visible)
    const hideTimer = setTimeout(() => setIsVisible(false), 20000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    isVisible && (
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="fixed z-50 flex items-center justify-center px-5 py-1 text-red-800 bg-white rounded-lg bottom-4 right-8 shadow-lg"
      >
        <a href="tel:+7125175703" className="text-base font-medium">
          Hey! Contact us and get a free quotation.
        </a>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 ml-3 rounded bg-white/20 hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.aside>
    )
  );
}
