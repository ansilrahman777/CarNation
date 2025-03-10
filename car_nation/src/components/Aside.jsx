import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
  } from "react-icons/fa6";
  
function Aside() {
  return (
    <aside className="fixed top-1/2 right-10 transform -translate-y-1/2 z-50 flex flex-col items-center">
        <div className="w-[2px] h-24 bg-white mb-2"></div>
        <div className="flex flex-col gap-4 text-white">
          <a href="wahttps://wa.link/sikj7y" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/carnationautogarage?igsh=MWlmeWc2eGRxODU4YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com/p/Car-Nation-Auto-Garage-100089364137242"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://www.tiktok.com/@user1243615341681?_t=ZS-8u6X5UgpVdI&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
          <a
            href="https://youtube.com/@cnagcarnationautogarage?si=IbpqSOl5ydOx5n_N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl hover:scale-110 hover:text-red-700 transition-transform" />
          </a>
        </div>
        <div className="w-[2px] h-24 bg-white mt-2"></div>
      </aside>
  )
}

export default Aside