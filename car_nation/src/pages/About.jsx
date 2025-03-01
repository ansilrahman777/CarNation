import { motion } from "framer-motion";
import pic11 from "./../assets/images/image/11.jpg";
import parts from "./../assets/images/icons/parts.png";
import fast from "./../assets/images/icons/fast.png";
import price from "./../assets/images/icons/price.png";
import technician from "./../assets/images/icons/technician.png";
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

      <section className="bg-gray-200">
        <div className="mx-auto w-full max-w-7xl px-5 py-5  md:px-10 md:py-10">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-black md:text-6xl">
                Committed to Quality, Driven by Trust
              </h1>
              <div className="flex items-center">
                <Link
                  to="/contact"
                  className="mr-5 inline-block rounded-full border-2 border-red-700 px-6 py-2 text-center font-bold text-black transition hover:bg-red-700 md:mr-6 lg:mr-8"
                >
                  Let's Talk
                </Link>
              </div>
            </div>

            <div className="items-start">
              <p class="text-lg font-normal text-justify leading-relaxed mt-4 mb-4">
                At Car Nation Auto Garage, we believe that every vehicle
                deserves the highest level of care and attention. Our passion
                for automobiles drives us to deliver exceptional service,
                unmatched expertise, and reliable solutions for all your
                automotive needs.
              </p>
              <p class="text-lg font-normal text-justify leading-relaxed">
                With a team of skilled technicians, state-of-the-art tools, and
                a customer-first approach, we ensure that your car receives
                nothing but the best. Whether it's routine maintenance, accident
                repairs, or full-scale modifications, we are dedicated to
                restoring, enhancing, and protecting your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="w-full flex flex-col md:flex-row mx-auto max-w-7xl px-5 py-5 md:px-10 md:py-10">
          <div className="flex flex-col md:flex-row mx-auto">
            <div className="w-full px-4 md:px-0 md:w-8/12 flex flex-col">
              <div className="flex flex-col md:flex-row w-full items-center">
                <img
                  src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="flex-auto w-full md:w-1/3 md:pr-4"
                  alt="Feature Image 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1628745750131-e5cfc5e70ced?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="hidden md:inline flex-auto md:w-1/3 md:pr-4"
                  alt="Feature Image 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1628744876525-f2678d8af47f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="hidden md:inline flex-auto md:w-1/3 md:pr-4"
                  alt="Feature Image 3"
                />
              </div>
              <div className="w-[90%] md:w-full mx-auto flex flex-col mt-4 md:mt-0 md:flex-row">
                <div className="w-full my-6 pr-4">
                  <h1 className="text-3xl mt-2 md:text-4xl font-bold text-black">
                    Our <span className="text-red-700">Mission</span>
                  </h1>
                  <p className="text-md mb-4 mt-2 text-justify  text-black justify-center">
                    Our mission is to keep every vehicle in top condition by
                    delivering expert repair, maintenance, and customization
                    services with precision, efficiency, and care. We strive to
                    exceed customer expectations through excellence in
                    craftsmanship and service.
                  </p>
                  <Link
                    to="/services"
                    className="mr-5 inline-block border-2 border-red-700 px-6 py-2 text-center font-bold text-black transition hover:bg-red-700 md:mr-6 lg:mr-8"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-0 md:w-4/12 flex-col md:pl-8">
              <h1 className="text-4xl mt-2 font-bold text-black">
                Our <span className="text-red-700">Vision</span>
              </h1>
              {/* <h3 className="text-xl mt-3 text-gray-800 dark:text-white">
            Use this component as a feature or showcase.
          </h3> */}
              <p className="text-md mt-2 text-black text-justify ">
                To redefine automotive care by providing superior-quality
                services, cutting-edge solutions, and a customer experience that
                sets us apart as the most trusted auto garage.{" "}
              </p>
              <img
                src="https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full my-4 rounded-sm"
                alt="Feature Preview"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
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
      </section>

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
    </div>
  );
}
