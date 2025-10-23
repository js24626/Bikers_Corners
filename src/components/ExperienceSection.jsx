import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed bg-no-repeat text-black 
                 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 
                 px-4 sm:px-6 md:px-8 
                 flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/exp.png')",
      }}
    >
      {/* ✅ White overlay for readability */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* ✅ Content - RESPONSIVE */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                       font-extrabold leading-snug sm:leading-tight 
                       mb-4 sm:mb-5 md:mb-6">
          We believe in creating unforgettable experiences that go beyond the destination
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                      text-gray-900 mb-3 sm:mb-4 md:mb-6 
                      leading-relaxed">
          At Bikers Corner, we take you beyond the ordinary. Whether it's conquering rugged
          terrains, experiencing the beauty of Gilgit-Baltistan, or connecting with a community
          of riders, every journey with us is crafted to be extraordinary.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                      text-gray-900 mb-6 sm:mb-8 md:mb-10 
                      leading-relaxed">
          Let's go further. Let's ride beyond the destination.
        </p>

        <button className="bg-[#2F3079] hover:bg-indigo-800 text-white 
                           px-6 sm:px-8 md:px-10 
                           py-2.5 sm:py-3 md:py-4 
                           text-sm sm:text-base md:text-lg 
                           uppercase font-semibold tracking-wide transition-all 
                           flex items-center justify-center mx-auto rounded-lg 
                           w-full sm:w-auto max-w-xs">
          Contact Us <FaArrowRight className="ml-3 text-sm sm:text-base" />
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;