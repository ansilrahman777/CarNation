import { motion } from "framer-motion";
import logo_ft from "./../assets/images/icons/logo_ft.png";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-red-700 text-white">
        <div className="relative ">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-red-700"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-8">
            <div>
              <div className="bg-transparent inline-block rounded">
                <img
                  src={logo_ft}
                  className="w-[100px] md:w-[800px] object-cover cursor-pointer "
                  alt="Car Garage Logo"
                />
              </div>
              {/* <p className="mt-4 text-white text-justify text-sm md:text-lg">
                  Your one-stop destination for top-notch Car Diagnostic Services,
                  Painting, Denting, and more!!
                </p> */}
            </div>

            <div>
              <h3 className="font-semibold text-lg">NAVIGATION</h3>
              <ul className="mt-4  space-y-2 text-white text-sm md:text-base">
                <li className="flex hover:underline items-center">
                  <IoMdArrowDropright />
                  <NavLink to="/" className="hover:text-white">
                    HOME
                  </NavLink>
                </li>
                <li className="flex hover:underline items-center">
                  <IoMdArrowDropright />
                  <NavLink to="/services" className="hover:text-white">
                    SERVICES
                  </NavLink>
                </li>
                <li className="flex hover:underline items-center">
                  <IoMdArrowDropright />
                  <NavLink to="/about" className="hover:text-white">
                    ABOUT
                  </NavLink>
                </li>
                <li className="flex hover:underline items-center">
                  <IoMdArrowDropright />
                  <NavLink to="/contact" className="hover:text-white">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">GET IN TOUCH</h3>
              <p className="mt-4 text-white text-sm md:text-base">
                <a href="tel:+7125175703" className="flex items-center gap-2">
                  <MdLocationOn className="text-xl text-white" />
                  <span className="text-white hover:underline text-sm md:text-base">
                    BUILDING NO:205 - Musaffah M11
                  </span>
                </a>
              </p>
              <p className="text-white text-sm md:text-base">
                <a href="tel:+7125175703" className="flex items-center gap-2">
                  <FaPhone className="text-xl text-transparent" />
                  <span className="text-white hover:underline text-sm md:text-base">
                    Abu Dhabi,UAE
                  </span>
                </a>
              </p>
              <p className="text-white text-sm">
                <a
                  href="mailto:carnationauh@gmail.com"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <IoMail className="text-xl text-white" />
                  <span className="text-white hover:underline text-sm md:text-base">
                    carnationauh@gmail.com
                  </span>
                </a>
              </p>
              <p className="text-white text-sm md:text-base">
                <a
                  href="tel:+7125175703"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaPhone className="text-md text-white" />
                  <span className="text-white hover:underline text-sm md:text-base">
                    +971 2517 5703
                  </span>
                </a>
              </p>
              <p className="text-white text-sm md:text-base">
                <a
                  href="tel:+7125175703"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaPhone className="text-md text-transparent" />
                  <span className="text-white hover:underline text-sm md:text-base">
                    +971 52 252 0955
                  </span>
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">SOCIAL MEDIA</h3>
              <div className="flex mt-4 gap-4 text-white">
                <a
                  href="wahttps://wa.link/sikj7y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl hover:scale-110 hover:underline transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/carnationautogarage?igsh=MWlmeWc2eGRxODU4YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/p/Car-Nation-Auto-Garage-100089364137242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-2xl hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@user1243615341681?_t=ZS-8u6X5UgpVdI&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-2xl hover:scale-110  transition-transform" />
                </a>
                <a
                  href="https://youtube.com/@cnagcarnationautogarage?si=IbpqSOl5ydOx5n_N"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl hover:scale-110  transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white mt-5 pt-5 text-center text-white">
            <p>&copy; Car Nation Auto Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
