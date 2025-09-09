import React, { useState, useEffect, useRef } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { FaCaretDown } from "react-icons/fa";

function Header4() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Choose Categories");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full inline-flex p-4 justify-between items-center shadow-sm shadow-slate-300 bg-white">
      {/* Logo */}
      <div>
        <img
          src="https://elektrix.wpengine.com/wp-content/themes/elektrix/assets/images/logo.svg"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Search + Dropdown */}
      <div className="flex" ref={dropdownRef}>
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-black text-white rounded-full py-4 px-6 text-lg flex items-center gap-3"
          >
            {selectedCategory}
            <FaCaretDown />
          </button>

          {isOpen && (
            <div
              className="absolute left-0 mt-2 w-full rounded-2xl shadow-lg bg-white 
                         ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-2 px-3">
                <button
                  onClick={() => { setSelectedCategory("Camera"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Camera
                </button>
                <button
                  onClick={() => { setSelectedCategory("Appliances"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Appliances
                </button>
                <button
                  onClick={() => { setSelectedCategory("Gadgets"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Gadgets
                </button>
                <button
                  onClick={() => { setSelectedCategory("Gaming Accessories"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Gaming Accessories
                </button>
                <button
                  onClick={() => { setSelectedCategory("Home Audio"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Home Audio
                </button>
                <button
                  onClick={() => { setSelectedCategory("Smart Watch"); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Smart Watch
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="bg-gray-100 rounded-e-full border-gray-200 border-2 w-96 flex justify-between -ml-[22px]">
          <input
            type="text"
            placeholder="Search for keywords, Products"
            className="bg-gray-100 focus:outline-none text-gray-600 w-full pl-6"
          />
          <button>
            <IoSearchCircleSharp className="text-5xl text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button className="bg-white border-gray-200 border-2 hover:bg-black text-black hover:text-white rounded-full p-3">
          <GoHeart className="text-3xl" />
        </button>
        <button className="border-gray-200 border-2 flex text-xl font-bold text-black hover:text-blue-400 rounded-full w-40 p-2">
          <HiOutlineShoppingCart className="text-4xl mx-4" /> ₹ 0.00
        </button>
        <button className="bg-white border-gray-200 border-2 hover:bg-black text-black hover:text-white rounded-full p-3">
          <VscAccount className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Header4;
