import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Summer Sale is Live
          </h1>
          <p className="text-xl mb-8">Up to 50% off on premium electronics</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
