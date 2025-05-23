import React, { useState } from "react";
import { FiMenu, FiHome, FiCreditCard, FiPhone, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header with Logo and Menu Icon */}
      <header className="flex justify-between items-center p-4 bg-white text-black fixed top-0 w-full z-10">
        <div className="logo">
          <Link to="/">
            <img
              src="/ic/instawalla-logo.svg"
              alt="InstaWala Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div
          className="menu-icon cursor-pointer p-2 rounded-full hover:bg-blue-200 transition-colors duration-200"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out z-10 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-2xl pt-6 transition-transform duration-300 ease-in-out z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src="/ic/instawalla-logo.svg"
          alt="InstaWala Logo"
          className="mx-6 mb-4 h-12 w-auto"
        />
        <ul className="list-none p-0 m-0">
          <li className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link
              to="/"
              className="flex items-center gap-3 text-gray-800 text-lg font-medium no-underline"
            >
              <FiHome className="w-6 h-6 text-blue-500" />
              Home
            </Link>
          </li>
          <li className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link
              to="/wallet"
              className="flex items-center gap-3 text-gray-800 text-lg font-medium no-underline"
            >
              <FiCreditCard className="w-6 h-6 text-blue-500" />
              Wallet: ₹ 0.00
            </Link>
          </li>
          <li className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link
              to="https://wa.me/918130407570?text=Hello%20@instaguru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 text-lg font-medium no-underline"
            >
              <FiPhone className="w-6 h-6 text-blue-500" />
              Contact Us
            </Link>
          </li>
          <li className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <Link
              to="/about"
              className="flex items-center gap-3 text-gray-800 text-lg font-medium no-underline"
            >
              <FiInfo className="w-6 h-6 text-blue-500" />
              About
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
