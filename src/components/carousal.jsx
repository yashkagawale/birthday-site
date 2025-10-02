"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingHeartsBackground from "./FloatingHeartsBackground"; // fluttering hearts

const images = [
  { src: "/img1.jpg", caption: "October, the month our journey began💕" },
  {
    src: "/img2.jpg",
    caption: "Sunsets at Juhu Beach, our favorite shared moments 🌅❤️",
  },
  {
    src: "/img3.jpg",
    caption: "Our sixth-month photo—still warms my heart ❤️",
  },
  { src: "/img4.jpg", caption: "Pure happiness in one frame ✨" },
  { src: "/img5.jpg", caption: "Moments we’ll cherish forever 🌹" },
  { src: "/img6.jpg", caption: "Laughing, loving, living together 🫶" },
  {
    placeholder: true,
    caption: "Our first anniversary photo—A memory we’ll hold close forever 💖",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay only for mobile view
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4500); // 4.5s autoplay
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingHeartsBackground /> {/* fluttering hearts background */}
      <div className="w-full max-w-4xl">
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center justify-center bg-white shadow-lg overflow-hidden"
            >
              {img.placeholder ? (
                <motion.div
                  className="w-full h-64 flex flex-col items-center justify-center bg-pink-50 border-2 border-pink-200 p-4"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255,182,193,0.5)",
                      "0 0 20px rgba(255,182,193,0.8)",
                      "0 0 10px rgba(255,182,193,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-center text-pink-600 font-medium italic tracking-wide">
                    {img.caption}
                  </p>
                </motion.div>
              ) : (
                <>
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                  <p className="p-3 text-center text-pink-600">{img.caption}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative w-full flex justify-center">
          {" "}
          {/* added flex justify-center */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20, rotate: -2 + Math.random() * 4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg overflow-hidden flex flex-col items-center w-72 mx-auto" // added mx-auto
          >
            {images[current].placeholder ? (
              <motion.div
                className="w-full h-72 flex flex-col items-center justify-center bg-pink-50 rounded-lg border-2 border-pink-200 p-2"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(255,182,193,0.5)",
                    "0 0 20px rgba(255,182,193,0.8)",
                    "0 0 10px rgba(255,182,193,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-center text-pink-600 font-medium italic tracking-wide">
                  {images[current].caption}
                </p>
              </motion.div>
            ) : (
              <>
                <div className="w-full bg-black flex justify-center">
                  <img
                    src={images[current].src}
                    alt={images[current].caption}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className="w-full bg-white px-2 py-2">
                  <p className="text-center text-pink-600 font-medium italic tracking-wide">
                    {images[current].caption}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
