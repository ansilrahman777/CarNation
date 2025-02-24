import { motion } from "framer-motion";
import pic11 from "./../assets/images/image/11.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section
        className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${pic11})` }}
      >
        <div className="flex items-center justify-center h-screen">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className="text-4xl text-white md:text-5xl font-bold text-center"
          >
            ABOUT US
          </motion.h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left">
          <h5 className="text-sm font-semibold uppercase text-gray-500">
            Our Mission
          </h5>
          <h2 className="text-4xl md:text-6xl font-bold text-black mt-2">
            Committed to Quality, Driven by Trust
          </h2>
          <p className="text-lg font-semibold text-black mt-4">
            Qadipiscing elit, sed do eiusmod tempor.
          </p>
          <p className="text-gray-600 mt-4">
            Our mission is to provide exceptional automotive services through
            skilled technicians, state-of-the-art equipment, and transparent
            communication.
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
            src={pic11}
            alt="Engine"
            className="w-[300px] md:w-[400px] shadow-lg rounded-lg relative z-10"
          />
          <img
            src={pic11}
            alt="Interior"
            className="w-[250px] md:w-[300px] shadow-lg rounded-lg absolute top-[-40px] right-[-20px] md:top-[-60px] md:right-[-50px] z-0"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-gray-50 z-20">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 pr-8 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-orange-500 mb-8" />
            <p className="text-gray-600 text-lg mb-8">
              Our mission is to provide exceptional automotive services through
              skilled technicians, state-of-the-art equipment, and transparent
              communication.
            </p>
            <ul className="space-y-4">
              {["Quality Service", "Certified Technicians", "Fair Pricing"].map(
                (item) => (
                  <li key={item} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-orange-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/mission-image.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gray-900 text-white py-20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "20k+", label: "Vehicles Serviced" },
              { number: "100%", label: "Satisfaction Guarantee" },
              { number: "50+", label: "Certified Experts" },
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-5xl font-bold mb-4">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-orange-500 text-white z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience Motorix?
          </h2>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Schedule Service
          </button>
        </div>
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
            src={pic11}
            alt="Engine"
            className="w-[300px] md:w-[400px] shadow-lg rounded-lg relative z-10"
          />
          <img
            src={pic11}
            alt="Interior"
            className="w-[250px] md:w-[300px] shadow-lg rounded-lg absolute top-[-40px] right-[-20px] md:top-[-60px] md:right-[-50px] z-0"
          />
        </div>
      </section>
    </div>
  );
}
