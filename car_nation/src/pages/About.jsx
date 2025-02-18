import { motion } from "framer-motion";
import pic11 from "./../assets/images/image/11.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="font-sans">
      {/* Hero Section with Fixed Background */}
      <section 
        className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${pic11})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="hover:text-red-700">CAR NATION</span> AUTO GARAGE
            </h1>
            <p className="text-xl">
              We are a full-service automotive repair shop committed to providing
              quality service and maintenance for all vehicle makes and models.
            </p>
          </div>
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
              {["Quality Service", "Certified Technicians", "Fair Pricing"].map((item) => (
                <li key={item} className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/mission-image.jpg" alt="Our Mission" className="rounded-lg shadow-xl" />
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
          <h2 className="text-4xl font-bold mb-8">Ready to Experience Motorix?</h2>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Schedule Service
          </button>
        </div>
      </section>
    </div>
  );
}
