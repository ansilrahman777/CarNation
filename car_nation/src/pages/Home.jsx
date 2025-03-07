import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import bg_video from "./../assets/videos/video1.mp4";
import logo_name from "./../assets/images/icons/logo_name.png";
import logo_icon from "./../assets/images/icons/logo_icon.png";
import img_4567 from "./../assets/images/icons/img_4567.png";
import img_345 from "./../assets/images/icons/img345.png";
import home_123 from "./../assets/images/icons/home_123.png";

import pic24 from "./../assets/images/image/24.jpg";

import bg123 from "./../assets/images/image/bg-image.png";

import pic22 from "./../assets/images/image/22.jpg";
import pic23 from "./../assets/images/image/23.jpg";
import pic16 from "./../assets/images/image/16.jpg";

import before_image from "./../assets/images/image/before.png";
import after_image from "./../assets/images/image/after.png";

import { FaTools, FaCarBattery, FaBolt, FaDollarSign } from "react-icons/fa";

import { BeforeAfterSlider } from "../components/ui/BeforeAfter";
import MovingCar from "../components/ui/MovingCar";
import MovingText from "../components/ui/MovingText";

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
          <source src={bg_video} type="video/mp4" />
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
        className="bg-cover bg-center bg-fixed bg-no-repeat bg-black min-h-screen"
        style={{ backgroundImage: `url(${bg123})` }}
      >
        <div className="text-white">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:flex-row md:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
              <motion.img
                src={logo_icon}
                alt="CAR NATION"
                className="object-contain h-80"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
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
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                - delivering quality, reliability, and care in every service!
              </motion.h1>
            </div>
          </div>
        </div>

        <MovingText />

        <div className="text-white">
          <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 md:flex-row md:justify-start">
            <div className="flex flex-col justify-center p-6 text-left rounded-sm  md:w-3/5">
              <motion.h1
                className="text-3xl font-bold leading-none sm:text-4xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Expert in Auto Care <span className="text-red-700">&</span>{" "}
                <br />
                Repair Services
              </motion.h1>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                At Car Nation Auto Garage, we provide comprehensive repair,
                maintenance, and customization services to keep your vehicle
                running smoothly and looking its best. Whether it's a routine
                oil change, dent removal, engine repair, or a full modification,
                our experienced technicians deliver precision, reliability, and
                top-quality workmanship every time.
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-2 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                🚗 Trusted Repairs | 🔧 Skilled Technicians | ✅ Unmatched
                Quality & Service
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-2 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Drive in with confidence—leave with perfection!
              </motion.p>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:w-2/5">
              <motion.img
                src={img_4567}
                alt="CAR NATION"
                className="object-contain"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 md:flex-row md:justify-start overflow-hidden">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:w-2/5">
              <motion.img
                src={home_123}
                alt="CAR NATION"
                className="object-contain"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-left rounded-sm  md:w-3/5">
              <motion.h1
                className="text-3xl font-bold leading-none sm:text-4xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Beyond Repairs<span className="text-red-700"> :</span> <br />{" "}
                Comprehensive Care for Your Car
              </motion.h1>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                We don't just repair vehicles—we ensure they stay in top
                condition for years to come. From preventive maintenance that
                keeps your engine running smoothly to deep interior and exterior
                detailing that restores its showroom shine, we provide complete
                care for your car. Our skilled professionals use advanced tools
                and premium products to deliver unmatched quality and
                long-lasting protection.{" "}
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                🛠️ Expert Maintenance | ✨ Superior Detailing | 🚗 Long-Term
                Vehicle Care
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Give your car the care it deserves—because a well-maintained car
                is a reliable one!
              </motion.p>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 md:flex-row md:justify-start overflow-hidden">
            <div className="flex flex-col justify-center p-6 text-left rounded-sm  md:w-3/5 overflow-hidden">
              <motion.h1
                className="text-3xl font-bold leading-none sm:text-4xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Reliable Vehicle Recovery{" "}
                <span className="text-red-700">&</span> <br />
                Pickup Service
              </motion.h1>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Stuck with a non-starting or broken-down vehicle? Car Nation
                Auto Garage offers professional recovery and pickup services at
                an affordable rate. Whether your car has suffered a breakdown,
                an accident, or won’t start, our team will safely transport it
                to our workshop for expert repairs. Once fixed, we also provide
                delivery options to get your vehicle back to you in top
                condition.
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-2 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                🚛 Secure Pickup | 🛠️ Expert Repairs | 🚗 Convenient Delivery
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-2 font-light leading-none"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Call us today for a reliable recovery service—fast, secure, and
                affordable!
              </motion.p>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:w-2/5">
              <motion.img
                src={img_345}
                alt="CAR NATION"
                className="object-contain"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: -0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 md:flex-row md:justify-start overflow-hidden">
            <motion.div
              className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:w-2/5"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              <BeforeAfterSlider
                beforeImg={before_image}
                afterImg={after_image}

              />
            </motion.div>
            <div className="flex flex-col justify-center p-6 text-left rounded-sm  md:w-3/5 overflow-hidden">
              <motion.h1
                className="text-3xl font-bold leading-none sm:text-4xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Restoring Cars<span className="text-red-700"> &</span> <br />
                Rebuilding Confidence
              </motion.h1>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Our expert, certified auto body technicians bring precision,
                craftsmanship, and attention to detail to every repair. From
                minor dents and scratches to major collision damage, we ensure
                your vehicle is restored to its original beauty and peak
                performance—swiftly and skillfully.
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                🚗 Flawless Restorations | 🔧 Expert Workmanship | 🎨 Factory-Finish Quality
              </motion.p>
              <motion.p
                className="text-xl text-justify mt-5 font-light leading-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                Drive in today and experience the art of automotive restoration!
              </motion.p>
            </div>
          </div>
        </div>

        <div className=" min-h-screen px-6 md:px-12 mt-10 ">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {[
                {
                  src: pic22,
                  label: "",
                },
                {
                  src: pic23,
                  label: "",
                  span: "md:col-span-2",
                },
                {
                  src: pic24,
                  label: "",
                  span: "md:col-span-2",
                },
                {
                  src: pic16,
                  label: "",
                  span: "",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span || ""
                    }`}
                >
                  <img
                    src={item.src}
                    loading="lazy"
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <MovingCar />
      </section>
    </>
  );
}
