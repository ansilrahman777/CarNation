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
import SlideInNotifications from "../components/ui/SlideInNotifications";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const [notifications, setNotifications] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // Add Notification
  const addNotification = (message) => {
    setNotifications((prev) => [{ id: Math.random(), text: message }, ...prev]);
  };

  // Remove Notification
  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    if (!formData.name.trim()) {
      addNotification("Name is required.");
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      addNotification("Name must contain only letters.");
      return false;
    }
    if (!formData.subject.trim()) {
      addNotification("Subject is required.");
      return false;
    }
    if (!formData.phone.trim() || !/^\d{9,12}$/.test(formData.phone)) {
      addNotification("Enter a valid phone number (9-12 digits).");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      addNotification("Enter a valid email address.");
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      addNotification("Message must be at least 10 characters long.");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true); // Show loading

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmFDP5C5bAdpVw20sPIhV3grnCv1F_d3AnkODueynF8ZfXzDPWFVR68SocIjGO-oAPTQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const text = await response.text();
      console.log("Raw Response:", text);

      if (!text) throw new Error("Empty response from server");

      const result = JSON.parse(text);
      console.log("Parsed Response:", result);

      if (result.result === "success") {
        addNotification("Message sent successfully!");
        setFormData({
          name: "",
          subject: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        addNotification("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      addNotification("Network error. Please try again later.");
    } finally {
      setSubmitting(false); // Hide loading
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
              <SlideInNotifications
                notifications={notifications}
                removeNotif={removeNotif}
              />

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center w-full">
                    <AiOutlineUser
                      className="absolute left-2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
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
                      name="phone"
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={handleChange}
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
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-black border-b border-gray-400 focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500"
                    />
                  </div>

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
                </div>

                <button
                  type="submit"
                  disabled={submitting} // ✅ Disable when submitting
                  className={`relative mt-12 justify-center lg:ml-auto max-lg:w-full rounded-lg inline-flex items-center px-9 py-3 overflow-hidden text-base font-medium border ${
                    submitting
                      ? "bg-gray-300 text-black cursor-not-allowed"
                      : "text-black border-gray-400 hover:text-white hover:bg-black"
                  }`}
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-black  group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <LuSendHorizontal className="ml-2" size={18} />
                  </span>
                  <span className="relative">
                    {submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
