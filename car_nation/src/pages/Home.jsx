// import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bg_vedio from "./../assets/videos/video1.mp4";
import logo_name from "./../assets/images/icons/logo_name.png";
import logo_icon from "./../assets/images/icons/logo_icon.png";

import pic20 from "./../assets/images/image/20.jpg";
import pic24 from "./../assets/images/image/24.jpg";

import bg123 from "./../assets/images/image/bg-image.png";

import { FaTools, FaCarBattery, FaBolt, FaDollarSign } from "react-icons/fa";

import { motion} from "framer-motion";
import MovingCar from "../components/ui/MovingCar";

const features = [
  {
    text: "Expert Technicians",
    icon: <FaTools className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    text: "Genuine Parts",
    icon: <FaCarBattery className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    text: "Fast & Reliable",
    icon: <FaBolt className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    text: "Affordable & Transparent",
    icon: <FaDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

const headlines = [
  "Your Trusted Auto Experts – Fast, Affordable, Reliable!",
  "Reliable Auto Repair, Exceptional Service!",
  "Drive Smooth, Stay Safe – We’ve Got You Covered!",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      <section className="relative h-screen w-full">
        <video
          className="absolute left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bg_vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          {/* Image with Animation and Responsiveness */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="mt-4"
          >
            {/* <motion.img
        src={logo1}
        alt="CAR NATION"
        className="object-contain h-32 sm:h-20 md:h-20 lg:h-32 xl:h-44"
        whileHover={{ scale: 1.1, rotate: 0 }} // Image scale and rotate on hover
        whileTap={{ scale: 0.95 }} // Image shrinks slightly on click
      /> */}
            <motion.img
              src={logo_name}
              alt="CAR NATION"
              className="object-contain h-32 sm:h-20 md:h-20 lg:h-32 xl:h-20"
              whileHover={{ scale: 1.1, rotate: 0 }} // Image scale and rotate on hover
              whileTap={{ scale: 0.95 }} // Image shrinks slightly on click
            />
          </motion.div>

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center text-white px-4 text-4xl font-bold"
          >
            {headlines[index]}
          </motion.div>
        </div>
      </section>

      <section
        className="bg-cover bg-top bg-no-repeat bg-black"
        style={{ backgroundImage: `url(${bg123})`, height: "400vh" }}
      >
        <div className="text-white">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:flex-row md:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
              <motion.img
                src={logo_icon}
                alt="CAR NATION"
                className="object-contain h-80"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>

            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left overflow-hidden">
              <motion.h1
                className="text-5xl font-bold leading-none sm:text-6xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                We don't just fix cars, we build
                <span className="dark:text-red-700"> trust </span>
                on every ride!
              </motion.h1>
              <motion.h1
                className="text-xl font-bold leading-none mt-5"
                initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                whileInView={{ opacity: 1, x: 0 }} // Transition to normal position when in view
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of element is in view
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                - delivering quality, reliability, and care in every service!
              </motion.h1>
            </div>
          </div>
        </div>

        <MovingCar />

        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 bg-opacity-10 rounded-md sm:m-20 py-6 sm:py-12">
          <div className="w-full items-center mx-auto max-w-screen-lg px-4 sm:px-6">
            <div className="group grid w-full grid-cols-2 max-md:grid-cols-1">
              <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg before:transition-all group-hover:before:bg-red-700 overflow-hidden max-md:flex-col">
                <div className="absolute bottom-0 right-0 w-4/6 overflow-hidden flex flex-col justify-center rounded-xl transition-all shadow-2xl max-md:relative max-md:w-full max-md:mb-4">
                  <motion.img
                    src={pic24}
                    alt="car nation"
                    className="w-full h-auto object-cover aspect-square"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="h-2/3 rounded-xl overflow-hidden max-md:h-64">
                  <motion.img
                    src={pic20}
                    alt="car nation"
                    className="h-full w-full object-cover"
                  />
                </div>
                <a className="absolute h-20 w-20 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-20 before:w-20 border-2 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-red-700 max-md:bottom-4 max-md:left-4 max-md:h-16 max-md:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 max-md:w-6 max-md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="max-md:mt-8">
                <div className="pl-12 max-md:pl-0">
                  <h2 className="text-4xl text-white font-semibold mb-6 max-md:text-3xl max-md:leading-tight">
                    Expert in Auto Care <span className="text-red-700">&</span>{" "}
                    Repair Services
                  </h2>

                  <p className="mb-6 text-white max-md:text-sm text-justify">
                    At{" "}
                    <span className="text-white font-semibold">
                      Car Nation Auto Garage
                    </span>
                    &nbsp;we provide top-quality automotive repair, maintenance,
                    and customization services to keep your vehicle in peak
                    condition. Whether it's routine servicing or major repairs,
                    our expert technicians ensure precision, reliability, and
                    efficiency in every job.
                  </p>

                  <h3 className="mb-4 font-semibold text-xl text-white max-md:text-lg">
                    Why Choose Car Nation Auto Garage?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                    {features.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg bg-opacity-10 bg-black 
                     hover:bg-opacity-20 transition-all duration-300 ease-in-out text-white"
                      >
                        <span className="p-1.5 sm:p-2 lg:p-2.5 bg-red-700 rounded-full flex-shrink-0">
                          {item.icon}
                        </span>
                        <span className="font-semibold text-xs sm:text-sm lg:text-base leading-tight break-words">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
