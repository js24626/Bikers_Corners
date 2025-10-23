import React from "react";
import AboutImg from "../assets/Aboutus.png";
import { FadeInLeft, FadeInRight } from "./ScrollAnimations";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-800 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 pb-20 sm:pb-32 md:pb-40 lg:pb-48 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        
        {/* Left: Image - Responsive with Animation */}
        <FadeInLeft duration={0.8}>
          <div className="relative flex justify-center -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 order-2 lg:order-1">
            <img
              src={AboutImg}
              alt="About Bikers Corner"
              className="rounded-xl sm:rounded-2xl shadow-2xl w-full sm:w-[95%] md:w-[105%] lg:w-[110%] xl:w-[120%] h-auto"
            />
          </div>
        </FadeInLeft>

        {/* Right: Text - Responsive with Animation */}
        <FadeInRight duration={0.8}>
          <div className="order-1 lg:order-2 lg:ml-8 xl:ml-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-indigo-900">
              About Us
            </h2>
            <p className="text-sm italic sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed">
              At <span className="font-base">Bikers Corner Pakistan</span>, we
              are passionate adventurers bringing the thrill of off-road
              motorbiking to the majestic landscapes of Gilgit-Baltistan. With
              years of expertise and a dedicated team of professionals, we craft
              unforgettable mountain journeys for thrill-seekers from around the
              globe.
            </p>
            <p className="text-sm italic sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
              Our mission is simple — to combine adventure, safety, and
              professionalism, delivering an unparalleled riding experience that
              celebrates Pakistan's natural beauty and spirit of exploration.
            </p>
          </div>
        </FadeInRight>
      </div>
    </section>
  );
};

export default AboutUs;