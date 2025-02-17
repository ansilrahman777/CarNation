import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
  } from "react-icons/fa6";
  
function Aside() {
  return (
    <aside className="fixed top-1/2 right-10 transform -translate-y-1/2 z-50 flex flex-col items-center">
        {/* White Vertical Line with a Break in the Middle */}
        <div className="w-[2px] h-24 bg-white mb-2"></div>
        {/* Social Icons */}
        <div className="flex flex-col gap-4 text-white">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
        </div>
        {/* White Vertical Line Below Icons */}
        <div className="w-[2px] h-24 bg-white mt-2"></div>
      </aside>
  )
}

export default Aside