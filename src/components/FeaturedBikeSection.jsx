import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight } from "./ScrollAnimations";

export default function FeaturedBikeSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-end text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/feature.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container - RESPONSIVE WITH ANIMATIONS */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 gap-6 sm:gap-8 md:gap-10 text-center md:text-left">
        
        {/* Left text content */}
        <FadeInLeft duration={0.8}>
          <div className="max-w-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-2">
              Suzuki
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4">
              DR 650 S
            </h2>
            <p className="text-gray-200 leading-relaxed mb-5 sm:mb-6 text-xs sm:text-sm md:text-base">
              Always an outstanding performance value, every DR650S is quality and
              features a dependable, 644cc, oil-cooled, four-stroke, single engine
              carried in a strong steel, semi-double cradle frame.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button className="bg-[#2F3079] hover:bg-indigo-800 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-md font-semibold text-xs sm:text-sm md:text-base transition w-full sm:w-auto">
                LEARN MORE
              </button>
              <button className="flex items-center justify-center space-x-2 text-white hover:underline transition text-xs sm:text-sm md:text-base w-full sm:w-auto">
                <span>SHOW ALL BIKES</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </FadeInLeft>

        {/* Right images (logos) - RESPONSIVE WITH STAGGER ANIMATION */}
        <FadeInRight duration={0.8}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            <motion.img
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/images/wheel.png"
              alt="Wheel"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src="/images/suspen.png"
              alt="Suspension"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src="/images/bike.png"
              alt="Bike"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
        </FadeInRight>
      </div>
    </section>
  );
}