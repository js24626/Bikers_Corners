import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Salman Karim",
    role: "Customer",
    text: "Unforgettable experience navigating the Deosai Plains. Highly recommend for all thrill-seekers!",
    img: "/images/avatar (4).png",
  },
  {
    name: "Rimsha khan",
    role: "Customer",
    text: "From accommodation to bike quality, everything was top-notch. A must-try for motorbike enthusiasts.",
    img: "/images/avatar (1).png",
  },
  {
    name: "Arooj malik",
    role: "Customer",
    text: "The ultimate adventure! The guides were professional, the routes were breathtaking.",
    img: "/images/avatar (2).png",
  },
  {
    name: "Hafsa naeem",
    role: "Customer",
    text: "An extraordinary ride! The team made every moment thrilling and comfortable.",
    img: "/images/avatar (5).png",
  },
  {
    name: "Zara Malik",
    role: "Customer",
    text: "Loved every second of the tour! Perfect blend of adventure, scenery, and great company.",
    img: "/images/avatar.png",
  },
  {
    name: "Hamza Noor",
    role: "Customer",
    text: "A lifetime experience! Can't wait to join the next tour with Bikers Corner.",
    img: "/images/avatar (3).png",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-center py-12 sm:py-16 md:py-20 font-sans overflow-hidden px-4">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-700 mb-2 uppercase">
        Testimonials
      </h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
        WHAT OUR CLIENTS SAY
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base px-4">
        Our clients' experiences are at the heart of what we do. At Bikers
        Corner, we take pride in delivering unforgettable adventures and
        exceptional services that exceed expectations.
      </p>

      {/* Slider container - RESPONSIVE */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12"
          style={{
            transform: `translateX(-${index * (100 / 6)}%)`,
            width: `${(testimonials.length / 3) * 100}%`,
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#000000] to-[#52238D] text-white rounded-2xl sm:rounded-3xl 
                         p-6 sm:p-8 
                         w-[280px] sm:w-[320px] md:w-[340px] 
                         flex flex-col justify-between items-center shadow-xl flex-shrink-0"
            >
              <img 
                src={item.img}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover mb-3 sm:mb-4 rounded-full"
              />
              <FaQuoteRight className="text-white text-2xl sm:text-3xl opacity-70 mb-2 sm:mb-3" />
              <div className="flex text-yellow-400 mb-2 sm:mb-3 text-sm sm:text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                {item.text}
              </p>
              <div>
                <p className="font-bold text-base sm:text-lg">{item.name}</p>
                <p className="text-xs sm:text-sm opacity-80">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}