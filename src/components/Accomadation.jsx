"use client";
import React from "react";
import {
  FaHotel,
  FaUtensils,
  FaTools,
  FaGlobeAsia,
  FaPlane,
  FaHeadset,
} from "react-icons/fa";

// 🔹 Reusable Card component
function Card({ variant = "small", bgGradient = false, title, desc, icon }) {
  const baseHeight = "lg:h-96 h-72"; // controls height
  const rounded = "rounded-2xl";
  const border = bgGradient ? "" : "border border-black";
  const overflow = "overflow-hidden";
  const shadow =
    "shadow-sm group hover:shadow-lg transition-shadow duration-300";

  if (bgGradient) {
    // 🔹 Big Gradient Cards  linear-gradient(180deg, #52238D 0%, #4929F2 100%);

    return (
      <article
        className={`${baseHeight} ${rounded} ${overflow} ${shadow} bg-gradient-to-r from-[#52238D] to-[#4929F2] text-white p-8 flex flex-col justify-between`}
      >
        <div>
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-sm leading-relaxed mb-6 opacity-90">{desc}</p>
        </div>
        <a
          href="#"
          className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          READ MORE →
        </a>
      </article>
    );
  }

  // 🔹 White Cards (hover gradient bottom → top)
  return (
    <article
      className={`${baseHeight} ${rounded} ${border} ${overflow} ${shadow} relative group bg-white flex flex-col justify-between`}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#52238D] to-[#4929F2] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-gray-800 group-hover:text-white transition-colors duration-300 flex flex-col justify-between">
        <div>
          <div className="text-3xl mb-3">{icon}</div>
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm mb-5 leading-relaxed">{desc}</p>
        </div>

        <div>
          <a
            href="#"
            className="font-semibold text-[#4b2bff] group-hover:text-white flex items-center gap-2 transition-all"
          >
            READ MORE →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Accomadation() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout: 3 columns, large cards in col-1, smaller in col-2 & 3 */}
        <div className="grid gap-8 lg:grid-cols-[2.2fr,0.7fr,0.7fr] lg:grid-rows-2">
          {/* Card 1 (Large gradient) */}
          <div className="lg:col-start-1 lg:row-start-1 lg:row-end-2">
            <Card
              variant="large"
              bgGradient={true}
              icon={<FaHotel />}
              title="Accommodations"
              desc="Bikers Corner manages all accommodation needs, providing access to over 300+ partner hotels across Pakistan for easy and comfortable hotel bookings."
            />
          </div>

          {/* Card 2 (Small) */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-end-2">
            <Card
              variant="small"
              bgGradient={false}
              icon={<FaUtensils />}
              title="Meals"
              desc="We offer meals in all our tour packages and provide access to multiple handpicked restaurants during the journey."
            />
          </div>

          {/* Card 3 (Small) */}
          <div className="lg:col-start-3 lg:row-start-1 lg:row-end-2">
            <Card
              variant="small"
              bgGradient={false}
              icon={<FaTools />}
              title="Support Vehicles and Mechanics"
              desc="Our support vehicles are always with you throughout the tour, accompanied by skilled mechanics to ensure comfort and safety."
            />
          </div>

          {/* Card 4 (Large White) */}
          <div className="lg:col-start-1 lg:row-start-2 lg:row-end-3">
            <Card
              variant="large"
              bgGradient={false}
              icon={<FaGlobeAsia />}
              title="Cross-Cultural Exchange"
              desc="Bikers Corners brings riders from diverse backgrounds together through immersive biking tours, creating opportunities for meaningful cultural exchange."
            />
          </div>

          {/* Card 5 (Small) */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-end-3">
            <Card
              variant="small"
              bgGradient={false}
              icon={<FaPlane />}
              title="Air Ticketing"
              desc="We facilitate air ticket bookings to ensure a seamless travel experience, from planning your journey to hitting the road."
            />
          </div>

          {/* Card 6 (Small) */}
          <div className="lg:col-start-3 lg:row-start-2 lg:row-end-3">
            <Card
              variant="small"
              bgGradient={false}
              icon={<FaHeadset />}
              title="24/7 Helpline Support"
              desc="We offer 24/7 customer support along with our local guide so your tour runs smoothly and safely."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
