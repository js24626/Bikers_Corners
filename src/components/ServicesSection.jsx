import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import stat from "../assets/stat.png";

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="services"
      className="relative bg-cover bg-center bg-fixed bg-no-repeat text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${stat})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ Floating Stats Box - RESPONSIVE */}
      <div
        ref={ref}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
                   bg-gradient-to-r from-indigo-900 to-blue-700 
                   text-white rounded-2xl sm:rounded-3xl shadow-2xl 
                   p-6 sm:p-8 md:p-10 lg:p-14 
                   grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 z-20"
      >
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-motorcycle text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3"></i>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {inView && <CountUp start={0} end={1200} duration={2} />} +
          </h3>
          <p className="text-xs sm:text-sm lg:text-lg">Projects Completed</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-users text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3"></i>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {inView && <CountUp start={0} end={200} duration={2} />} +
          </h3>
          <p className="text-xs sm:text-sm lg:text-lg">Loyal Customers</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-award text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3"></i>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {inView && <CountUp start={0} end={99} duration={2} />} %
          </h3>
          <p className="text-xs sm:text-sm lg:text-lg">Best Services</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center text-center">
          <i className="fas fa-smile text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3"></i>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {inView && <CountUp start={0} end={500} duration={2} />} +
          </h3>
          <p className="text-xs sm:text-sm lg:text-lg">Happy Customers</p>
        </div>
      </div>

      {/* ✅ Services Text - RESPONSIVE */}
      <div className="relative z-10 max-w-4xl text-left mt-32 sm:mt-36 md:mt-40 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Our Services
        </h2>
     <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-indigo-400 leading-tight whitespace-normal lg:whitespace-nowrap"
>
  OFF ROAD MOUNTAIN MOTORBIKING
</h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
          Our services extend far beyond the motorcycle riding only.
          We take care of all the logistical headaches — from expertly
          planned itineraries to comfortable accommodations — ensuring
          a smooth and unforgettable adventure experience.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;