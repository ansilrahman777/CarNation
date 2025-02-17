// pages/About.jsx
import { motion } from "framer-motion";
import pic7 from "./../assets/images/image/7.jpg";

export default function About() {
  return (
    <div>
      <section
        className="bg-zinc-50 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${pic7})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <img
                src="/images/garage-interior.jpg"
                alt="Garage Interior"
                className="rounded-xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About CNAR Garage
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Since 2008, CNAR Garage has been providing top-quality
                automotive services to the local community. Our state-of-the-art
                facility is equipped with the latest diagnostic tools and
                staffed by ASE-certified technicians.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">15+</span>
                  </div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">10K+</span>
                  </div>
                  <p className="text-gray-600">Vehicles Serviced</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
