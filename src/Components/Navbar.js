import React, { useState } from "react";
import "../index.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-70 p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="flex items-center">
        <img src="./Assets/Logo.PNG" alt="Company Logo" className="w-8 h-8" />
        <span className="text-white ml-2 font-semibold">
          Abhiyanta Corporate
        </span>
      </div>
      <div className="md:hidden">
        <button
          id="menu-toggle"
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-4 6h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-16 right-4  p-4 rounded shadow">
            <ul>
              <li className="mb-2">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/product">Product</a>
              </li>
              <li className="mb-2">
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
