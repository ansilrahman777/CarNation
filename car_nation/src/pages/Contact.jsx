import { motion } from "framer-motion";
import pic78 from "./../assets/images/image/78.jpg";
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
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First name must only contain letters";
    }

    // Subject Validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Phone Number Validation (10 digits, no leading zeros)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[1-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number without leading zero";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    } else if (/\.\./.test(formData.email)) {
      newErrors.email = "Email cannot have consecutive dots";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    const response = await fetch(
      "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL", // Replace with your actual script URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        subject: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <section
        className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${pic78})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/10 via-gray-700/30 to-gray-700/80"></div>

        <div className="relative flex items-center justify-center h-screen">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl text-white md:text-5xl font-bold text-center"
          >
            CONTACT US
          </motion.h2>
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
              <p className="mb-3 font-medium text-justify">
                Have a question or need to book a service? We're here to help!
                Whether it's routine maintenance, repairs, or custom
                modifications, our team is ready to assist you.
              </p>
              <div className="space-y-2 font-medium text-lg text-black">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-black hover:text-red-700" />
                  <span>carnationauh@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-black hover:text-red-700" />
                  <span>+971 2517 5703 | +971 52 252 0955</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-black hover:text-red-700" />
                  <span>Car Nation Auto Garage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-100 " />
                  <span>Building No: 205, Musaffah - M11 </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-100 " />
                  <span>Abu Dhabi, United Arab Emirates</span>
                </div>
              </div>

              <div className="mt-10 flex space-x-6">
                <a
                  href="wahttps://wa.link/sikj7y"
                  className="text-black hover:text-red-700"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/carnationautogarage?igsh=MWlmeWc2eGRxODU4YQ=="
                  className="text-black hover:text-red-700"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@cnagcarnationautogarage?si=IbpqSOl5ydOx5n_N"
                  className="text-black hover:text-red-700"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@user1243615341681?_t=ZS-8u6X5UgpVdI&_r=1"
                  className="text-black hover:text-red-700"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/p/Car-Nation-Auto-Garage-100089364137242/"
                  className="text-black hover:text-red-700"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center w-full">
                    <AiOutlineUser
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-600">{errors.firstName}</p>
                  )}

                  <div className="relative flex items-center">
                    <MdSubject
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-600">{errors.subject}</p>
                  )}

                  <div className="relative flex items-center">
                    <BiPhone
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-600">{errors.phone}</p>
                  )}

                  <div className="relative flex items-center">
                    <AiOutlineMail
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}

                  <div className="relative flex items-center sm:col-span-2">
                    <FaRegCommentDots
                      className="absolute left-2 top-4 text-gray-500"
                      size={20}
                    />
                    <textarea
                      name="message"
                      placeholder="How can we help you? Feel free to contact"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="relative mt-12 justify-center lg:ml-auto max-lg:w-full rounded-lg inline-flex items-center px-9 py-3 overflow-hidden text-base font-medium text-gray-400 border border-gray-400 hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-black group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <LuSendHorizontal className="ml-2" size={18} />
                  </span>
                  <span className="relative">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
