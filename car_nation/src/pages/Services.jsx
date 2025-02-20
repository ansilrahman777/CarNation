// pages/Services.jsx
import { motion } from "framer-motion";

import pic1 from "./../assets/images/image/1.jpg";
import parts from "./../assets/images/icons/parts.png";
import fast from "./../assets/images/icons/fast.png";
import price from "./../assets/images/icons/price.png";
import technician from "./../assets/images/icons/technician.png";
import { Link } from "react-router-dom";

export default function Services() {

  return (
    <>
      <section
        className="bg-zinc-50 overflow-hidden bg-fixed bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="flex items-center justify-center h-screen">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className="text-4xl text-white md:text-5xl font-bold text-center"
          >
            OUR SERVICES
          </motion.h2>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="mx-auto w-full max-w-7xl px-5 py-5  md:px-10 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-black md:text-6xl">
                Complete Care for Your Vehicle
              </h1>
              {/* <h1 className="mb-3 pb-4 text-xl font-bold text-black md:text-xl">
            Drive with confidence—your car is in expert hands!
            </h1> */}
              <div className="flex items-center">
                <Link
                  to="/contact"
                  className="mr-5 inline-block rounded-full border-2 border-red-700 px-6 py-4 text-center font-bold text-black transition hover:bg-red-700 md:mr-6 lg:mr-8"
                >
                  Let's Talk
                </Link>
              </div>
            </div>

            <div className="items-start">
              <p class="text-lg font-normal text-justify leading-relaxed mt-4 mb-4">
                From minor repairs to complete transformations, we ensure every
                vehicle receives the highest level of care and craftsmanship.
                Our team uses advanced techniques and quality materials to
                restore, maintain, and enhance your car's performance and
                appearance.
              </p>
              <p class="text-lg font-normal text-justify leading-relaxed">
                With precision, expertise, and a commitment to excellence, we
                handle everything from routine servicing to complex repairs. No
                matter the job, we prioritize safety, efficiency, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="text-black body-font">
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
                    <h2 className="title-font font-regular text-2xl text-black">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="font-sans overflow-hidden">
          {/* CTA Section */}
          <section className="py-20 bg-orange-500 text-white">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 text-center"
            >
              <h2 className="text-4xl font-bold mb-8">
                Need Expert Vehicle Care?
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto">
                Schedule your appointment today and experience the Car nation
                difference
              </p>
              <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg">
                Contact Us Now
              </button>
            </motion.div>
          </section>
          

          <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-left">
              <h5 className="text-sm font-semibold uppercase text-gray-500">
                Our Contacts
              </h5>
              <h2 className="text-4xl font-bold text-black mt-2">
                Quality parts and excellent service
              </h2>
              <p className="text-lg font-semibold text-black mt-4">
                Qadipiscing elit, sed do eiusmod tempor.
              </p>
              <p className="text-gray-600 mt-4">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco.
              </p>
              <div className="mt-6 flex items-center">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold mr-4">
                  About Us
                </button>
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                    📞
                  </span>
                  <span className="text-black font-semibold text-lg">
                    0 800 555 44 33
                  </span>
                </div>
              </div>
              <button className="mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
                Presale Chat
              </button>
            </div>

            {/* Right Side - Overlapping Images */}
            <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <img
                src={pic1}
                alt="Engine"
                className="w-[300px] md:w-[400px] shadow-lg rounded-lg relative z-10"
              />
              <img
                src={pic1}
                alt="Interior"
                className="w-[250px] md:w-[300px] shadow-lg rounded-lg absolute top-[-40px] right-[-20px] md:top-[-60px] md:right-[-50px] z-0"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
