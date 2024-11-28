import React, { useState, useEffect } from "react";

export default function NotFoundPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update position based on mouse movement
  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const bound = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bound.left - bound.width / 2) * 0.1;
    const y = (e.clientY - bound.top - bound.height / 2) * 0.1;
    setPosition({ x, y });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center">
        {/* Animated 404 Text */}
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setPosition({ x: 0, y: 0 });
          }}
        >
          <h1
            className="text-9xl font-bold text-white mb-8 transition-transform duration-200"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              textShadow: "4px 4px 0px rgba(0,0,0,0.1)",
            }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-md mx-auto">
          Looks like you've ventured into unknown territory. Don't worry,
          happens to the best of us!
        </p>

        {/* Interactive Elements */}
        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold mx-2
                     hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105
                     active:scale-95 shadow-lg"
          >
            Go Back
          </button>

          <a
            href="/"
            className="block text-white underline hover:text-purple-200 transition-colors duration-200"
          >
            Return to Homepage
          </a>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white bg-opacity-10 rounded-full animate-float"
              style={{
                width: Math.random() * 100 + "px",
                height: Math.random() * 100 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 5 + "s",
                animationDuration: Math.random() * 10 + 10 + "s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
