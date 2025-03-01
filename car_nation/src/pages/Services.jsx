import { motion } from "framer-motion";

import pic1 from "./../assets/images/image/1.jpg";
import pic23 from "./../assets/images/image/23.jpg";


import { Link } from "react-router-dom";
import ServiceList from "../components/ServiceList";

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
        <div className="mx-auto w-full max-w-7xl px-5 py-5  md:px-10 md:py-10">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-black md:text-6xl">
                Complete Care for Your Vehicle
              </h1>
              <h1 className="mb-3 pb-4 text-xl font-bold text-black md:text-xl">
            Drive with confidence—your car is in expert hands!
            </h1>
              <div className="flex items-center">
                <Link
                  to="/contact"
                  className="mr-5 inline-block rounded-full border-2 border-red-700 px-6 py-1 text-center font-bold text-black transition hover:bg-red-700 md:mr-6 lg:mr-8"
                >
                  About Us
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

        <ServiceList />

        {/* <div className="font-sans overflow-hidden">
          <section className="py-20 bg-red-700 text-white">
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
              <button className="bg-white text-red-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg">
                Contact Us Now
              </button>
            </motion.div>
          </section>
        </div> */}
      </section>
    </>
  );
}
