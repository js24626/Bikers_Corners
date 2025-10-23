import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ServicesSection from "./ServicesSection";
import Accomadation from "./Accomadation"; 
import Testimonials from "./Testimonials";
import FeaturedBikeSection from "./FeaturedBikeSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import heroBg from "../assets/hero.png";  
import logo from "../assets/logo.png";   
import { FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
   <div
  className="relative min-h-[85vh] lg:min-h-[105vh] w-full bg-center bg-no-repeat bg-cover overflow-hidden"
  style={{ backgroundImage: `url(${heroBg})` }}
>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ===== NAVBAR ===== */}
        <nav className="absolute top-0 left-0 w-full z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
            {/* Logo - Responsive sizing */}
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Bikers Corner" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto" 
              />
            </div>

            {/* Desktop Links - Hidden on mobile/tablet */}
            <ul className="hidden lg:flex xl:space-x-8 lg:space-x-6 text-white font-medium text-sm xl:text-base">
              <li><a href="#home" className="hover:text-indigo-400 transition">HOME</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition">ABOUT</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">SERVICES</a></li>
              <li><a href="#packages" className="hover:text-indigo-400 transition">PACKAGES</a></li>
              <li><a href="#tours" className="hover:text-indigo-400 transition">TOURS</a></li>
              <li><a href="#bikes" className="hover:text-indigo-400 transition">BIKES</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">CONTACT</a></li>
            </ul>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex xl:space-x-5 lg:space-x-4 text-white xl:text-xl lg:text-lg">
              <a href="#" className="hover:text-indigo-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaYoutube />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white text-2xl sm:text-3xl focus:outline-none z-50"
            >
              <FaBars />
            </button>
          </div>
        </nav>

        {/* ===== MOBILE SIDEBAR ===== */}
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 lg:hidden ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-[#0a1f44] text-white z-50 transform transition-transform duration-500 lg:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
            <img src={logo} alt="Bikers Corner" className="h-12 sm:h-16 w-auto" />
            <button onClick={() => setMenuOpen(false)} className="text-xl sm:text-2xl">
              <FaTimes />
            </button>
          </div>

          <ul className="flex flex-col items-start space-y-5 sm:space-y-6 mt-8 px-6 text-base sm:text-lg font-medium">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">HOME</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">ABOUT</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">SERVICES</a></li>
            <li><a href="#packages" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">PACKAGES</a></li>
            <li><a href="#tours" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">TOURS</a></li>
            <li><a href="#bikes" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">BIKES</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">CONTACT</a></li>
          </ul>

          <div className="flex justify-center space-x-6 text-xl sm:text-2xl mt-auto pb-8 pt-16 sm:pt-20">
            <a href="#" className="hover:text-indigo-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-400 transition"><FaYoutube /></a>
          </div>
        </div>

        {/* ===== HERO CONTENT - RESPONSIVE ===== */}
        <div className="relative z-10 flex flex-col justify-center h-full text-left px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-60 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
            Your Gateway to Epic
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight mb-3 sm:mb-4">
            MOUNTAIN<br />ADVENTURES
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md lg:max-w-lg leading-relaxed">
            Bikers Corner Pakistan stands as the premier off-road mountain motorbiking experts
            in the Gilgit-Baltistan region, renowned for its unparalleled experience.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-md font-semibold transition text-sm sm:text-base">
              CONTACT US
            </button>
            <button className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:underline transition text-sm sm:text-base">
              <span>LEARN MORE</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== FEATURES SECTION - RESPONSIVE ===== */}
      <section className="bg-[#2F3079] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          
          {/* CARD 1 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl transform transition duration-300 hover:-translate-y-2 hover:bg-[#2F3079] hover:text-white cursor-pointer group border-2 border-transparent hover:border-white">
  <div className="flex justify-center mb-4 sm:mb-6 text-indigo-900 group-hover:text-white text-3xl sm:text-4xl lg:text-5xl transition">
    <i className="fas fa-user-cog"></i>
  </div>
  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3">
    Pro Team
  </h3>
  <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm lg:text-base transition">
    Experienced Guides with Years of Expertise
  </p>
</div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl transform transition duration-300 hover:-translate-y-2 hover:bg-[#2F3079] hover:text-white cursor-pointer group border-2 border-transparent hover:border-white">
            <div className="flex justify-center mb-4 sm:mb-6 text-indigo-900 group-hover:text-white text-3xl sm:text-4xl lg:text-5xl transition">
              <i className="fas fa-award"></i>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3">Best Awards</h3>
            <p className="text-gray-700 group-hover:text-white text-xs sm:text-sm lg:text-base transition">
              Recognized for Excellence in Adventure Tourism
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#2F3079] text-white border-2 border-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl transform transition duration-300 hover:-translate-y-2 hover:bg-white hover:text-black cursor-pointer sm:col-span-2 lg:col-span-1 group">
            <div className="flex justify-center mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl transition">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3">Best Design</h3>
            <p className="text-xs sm:text-sm lg:text-base">
              Tailored Adventures with Premium Features.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OTHER SECTIONS ===== */}
      <AboutUs />
      <ServicesSection /> 
      <Accomadation />  
      <Testimonials />
      <FeaturedBikeSection />  
      <ExperienceSection />    
      <Footer /> 
    </div>
  );
};

export default Home;