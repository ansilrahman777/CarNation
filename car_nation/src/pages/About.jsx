import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pic11 from "./../assets/images/image/11.jpg";
import parts from "./../assets/images/icons/parts.png";
import fast from "./../assets/images/icons/fast.png";
import price from "./../assets/images/icons/price.png";
import technician from "./../assets/images/icons/technician.png";

import cn from "./../assets/images/image/cn.png";
import cn1 from "./../assets/images/image/cn1.png";
import bg_img_1 from "./../assets/images/image/bg_img_1.png";

export default function About() {
  return (
    <>
      <section
        className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${pic11})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/10 via-gray-700/30 to-gray-700/80"></div>

        <div className="relative flex items-center justify-center h-screen">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl text-white md:text-5xl font-bold text-center"
          >
            ABOUT US
          </motion.h2>
        </div>
      </section>

      <section
        className="bg-black/90 overflow-hidden bg-fixed bg-cover bg-center min-h-screen "
        style={{ backgroundImage: `url(${bg_img_1})` }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-5  md:px-10 md:py-10">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">
                Committed to <span className="text-red-700">Quality</span>,
                <br className="hidden md:flex" />
                Driven by <span className="text-red-700">Trust</span>
              </h1>
              <div className="flex items-center">
                <Link
                  to="/services"
                  className="mr-5 inline-block border-2 border-red-700 px-6 py-2 text-center font-bold text-white transition hover:bg-red-700 md:mr-6 lg:mr-8"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="items-start text-white">
              <p className="text-lg font-normal text-justify leading-relaxed mt-4 mb-4">
                At Car Nation Auto Garage, we believe every vehicle deserves the
                highest level of care and attention. Driven by our passion for
                automobiles, we provide exceptional service, expertise, and
                reliable solutions for all your automotive needs, whether it’s
                routine maintenance, accident repairs, or full-scale
                modifications.
              </p>
              <p className="text-lg font-normal text-justify leading-relaxed">
                Our skilled technicians use state-of-the-art tools and a
                customer-first approach to ensure your vehicle receives the best
                care. We are dedicated to restoring, enhancing, and protecting
                your vehicle, always striving to exceed your expectations with
                every service.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 py-5  md:px-10 md:py-10">
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="items-start">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Vision <br className="hidden md:flex" />
                <span className="text-red-700">& </span>Mission
              </h1>
              <p className="text-md mb-4 mt-2 text-justify  text-white justify-center">
                Our Vision is to redefine automotive care by providing
                superior-quality services, cutting-edge solutions, and a
                customer experience that sets us apart as the most trusted auto
                garage.
              </p>
              <p className="text-md mb-4 mt-2 text-justify  text-white justify-center">
                Our mission is to keep every vehicle in top condition by
                delivering expert repair, maintenance, and customization
                services with precision, efficiency, and care. We strive to
                exceed customer expectations through excellence in craftsmanship
                and service.{" "}
              </p>
            </div>
            <div className="max-w-[720px]">
              <div className="flex items-center justify-center mt-8 lg:mt-0 ">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    className="w-[272px] h-[378px] object-cover rounded-lg"
                    src={cn1}
                    alt="Car Nation"
                  />
                  <img
                    className="mt-4 w-[272px] h-[378px] object-cover lg:mt-10 rounded-lg"
                    src={cn}
                    alt="Car Nation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white body-font mb-12">
          <div className="container py-5 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              {[
                {
                  img: parts,
                  title: "Genuine Parts",
                },
                {
                  img: fast,
                  title: "Fast & Reliable",
                },
                {
                  img: technician,
                  title: "Expert Technicians",
                },
                {
                  img: price,
                  title: "Affordable & Transparent",
                },
              ].map((item, index) => (
                <div key={index} className="p-2 md:w-1/4 sm:w-1/2">
                  <div className="px-2 py-4 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-32 mb-3"
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
