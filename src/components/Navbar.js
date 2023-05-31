import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Breadcrumb from "./Breadcrumb";
import logo from "../assests/images/logo.jpg";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const routes = [
    { to: "/", label: "UI/UX" },
    { to: "/", label: "Refer and Earn" },
    { to: "/uiux/referEarn/friendRefer", label: "Friends Referred" },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-[83px] w-[160px]" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-3 relative">
              <div>
                <button
                  className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={handleDropdownToggle}
                >
                  <FaUserCircle className="h-4 w-4 rounded-full text-purple-800" />

                  <span className="ml-2 text-purple-500 text-sm font-medium">
                    Profile Name
                  </span>
                  <FiChevronDown
                    className={`ml-1 text-black transition-transform duration-300 ease-in-out ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {/* Profile dropdown */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Router>
        <div className="container mx-auto px-4 md:flex md:justify-between md:items-center md:space-x-4">
          <div className="flex ml-2 mt-4 md:mt-0 lg:ml-[187px] lg:mt-[20px]">
            <Breadcrumb links={routes} />
          </div>
        </div>
      </Router>
    </nav>
  );
};

export default Navbar;
