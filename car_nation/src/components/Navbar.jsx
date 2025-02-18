import React, { useState, useEffect } from "react";
import { FaBars, FaPhone } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo_name from "./../assets/images/icons/logo_2.png";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div className="flex items-center justify-between">
      {/* Header Navigation */}
      <div
        className={`fixed inset-x-0 top-0 z-30 transition-transform duration-500 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full mt-0"
        }`}
        style={{ height: "100px" }}
      >
        <header className="w-full fixed top-0 left-0 z-30 py-3 px-6 shadow backdrop-blur-md ">
          <div className="px-4">
            <div className="flex items-center justify-between w-full min-h-[50px]">
              {/* Left Section: Logo */}
              <div className="flex shrink-0">
                <Link className="flex items-center" to="/">
                  <img
                    src={logo_name}
                    className="w-[100px] md:w-[220px] object-cover cursor-pointer mr-5"
                    alt="Car Garage Logo"
                  />
                </Link>
              </div>

              {/* Center Section: Navigation */}
              <div className="hidden md:flex md:items-center md:gap-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-white hover:text-red-700 relative ${
                      isActive
                        ? "font-bold text-red-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-700"
                        : ""
                    }`
                  }
                >
                  HOME
                </NavLink>
                
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-white hover:text-red-700 relative ${
                      isActive
                        ? "font-bold text-red-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-700"
                        : ""
                    }`
                  }
                >
                  SERVICES
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-white hover:text-red-700 relative ${
                      isActive
                        ? "font-bold text-red-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-700"
                        : ""
                    }`
                  }
                >
                  ABOUT
                </NavLink>
                
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-white hover:text-red-700 relative ${
                      isActive
                        ? "font-bold text-red-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-700"
                        : ""
                    }`
                  }
                >
                  CONTACT
                </NavLink>
              </div>

              {/* Right Section: Social Media Icons */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:+7125175703"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="text-white font-semibold hover:text-red-700 text-lg">
                    +971 2517 5703
                  </span>
                  <FaPhone className="text-xl text-white hover:text-red-700" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleSidebar} className="text-white">
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <NavLink
            to="/"
            className="block py-2 px-4 text-black hover:text-gray-500"
            onClick={toggleSidebar}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 px-4 text-black hover:text-gray-500"
            onClick={toggleSidebar}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            className="block py-2 px-4 text-black hover:text-gray-500"
            onClick={toggleSidebar}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 text-black hover:text-gray-500"
            onClick={toggleSidebar}
          >
            CONTACT
          </NavLink>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
