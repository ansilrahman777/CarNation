// pages/Contact.jsx
import { motion } from "framer-motion";
import pic2 from "./../assets/images/image/2.jpg";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { FaCircleArrowDown } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section
        className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${pic2})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container justify-center mx-auto px-4 h-full flex items-center z-10">
          <div className="max-w-2xl items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-6">CONTACT US</h1>
            {/* <FaCircleArrowDown className="animate-bounce" size={20} /> */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-20 items-start">
            <div className="md:col-span-2">
              <h2 className="font-bold text-black">Contact us</h2>
              <h1 className="mb-3 pb-4 text-3xl font-bold text-black md:text-5xl">
                Have questions?
                <br />
                Get in touch!
              </h1>
              <p className="mb-3 text-justify">
                Have a question or need to book a service? We're here to help!
                Whether it's routine maintenance, repairs, or custom
                modifications, our team is ready to assist you.
              </p>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-black hover:text-red-700" />
                  <span>carnation@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-black hover:text-red-700" />
                  <span>+971 000 000 000 | +971 000 000 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-black hover:text-red-700" />
                  <span>Car Nation auto garage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-100 " />
                  <span>musafa m11 </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-100 " />
                  <span>Abu Dhabi UAE</span>
                </div>
              </div>

              <div className="mt-10 flex space-x-6">
                <a href="#" className="text-black hover:text-red-700">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-red-700">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-red-700">
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-red-700">
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-red-700">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center w-full">
                    <AiOutlineUser
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <MdSubject
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <BiPhone
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Phone No."
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <AiOutlineMail
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>

                  <div className="relative flex items-center sm:col-span-2">
                    <FaRegCommentDots
                      className="absolute left-2 top-4 text-gray-500"
                      size={20}
                    />
                    <textarea
                      placeholder="How can we help you? Feel Free to contact"
                      rows="5"
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="button"
                  class="relative mt-12  justify-center  lg:ml-auto max-lg:w-full rounded-lg  inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-gray-400 border border-gray-400 hover:text-white group hover:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-red-700  group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <LuSendHorizontal className="ml-2" size={18} />
                  </span>
                  <span class="relative">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
