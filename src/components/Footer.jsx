import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#e7e8eb] pt-12 sm:pt-16 md:pt-20 pb-6 border-t-4 border-[#0a1f44]">
      <div className="w-11/12 max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Left Column - Logo & Social */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="w-28 sm:w-32 md:w-36 mb-4 mx-auto sm:mx-0">
            <img src="/images/logo.png" alt="Bikers Corner Logo" className="w-full" />
          </div>

          <p className="text-gray-900 leading-relaxed text-sm md:text-base mb-4">
            Bikers Corner Pakistan stands as the premier off-road mountain motorbiking experts in the Gilgit-Baltistan region, renowned for its unparalleled experience.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 mt-4 sm:mt-6">
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1f44] flex items-center justify-center text-white hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1f44] flex items-center justify-center text-white hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1f44] flex items-center justify-center text-white hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-900 text-sm md:text-base">
            <li><a href="#" className="hover:text-indigo-700 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Services</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Tours & Packages</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-900 text-sm md:text-base">
            <li><a href="#" className="hover:text-indigo-700 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Disclaimer</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">Support</a></li>
            <li><a href="#" className="hover:text-indigo-700 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f44] mb-3">Stay Connected</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-900 text-sm md:text-base">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#0a1f44]" /> Islamabad <span className="text-xs sm:text-sm">PK</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#0a1f44]" /> Dubai <span className="text-xs sm:text-sm">AE</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#0a1f44]" /> Skardu <span className="text-xs sm:text-sm">PK</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope className="text-[#0a1f44]" /> info@bikerscorners.com
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaClock className="text-[#0a1f44]" /> Opening : 24/7 (All Time)
            </li>
          </ul>

          {/* Email Input - RESPONSIVE */}
          <div className="flex items-center justify-center sm:justify-start mt-4 sm:mt-5">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 outline-none px-3 sm:px-4 py-2 w-full sm:w-[200px] md:w-[230px] text-sm"
            />
            <button className="bg-[#0a1f44] px-4 sm:px-5 py-2.5 sm:py-3 text-white hover:bg-indigo-800 transition">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - RESPONSIVE */}
      <div className="border-t mt-8 sm:mt-10 pt-4 text-center text-gray-900 text-xs sm:text-sm flex flex-col md:flex-row justify-between items-center w-11/12 max-w-[1080px] mx-auto gap-2">
        <p>Designed by <span className="font-medium">Bikers Corner</span></p>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;