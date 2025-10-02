"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingHeartsBackground() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate random hearts
    const generated = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: 20 + Math.floor(Math.random() * 15),
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      rotation: Math.random() * 360, // initial rotation
      rotateDirection: Math.random() > 0.5 ? 1 : -1, // clockwise or counter
      color: [
        "text-pink-400",
        "text-red-400",
        "text-rose-500",
        "text-pink-600",
        "text-purple-400",
        "text-purple-300",
      ][Math.floor(Math.random() * 4)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, rotate: heart.rotation }}
          animate={{
            y: "110vh",
            rotate: heart.rotateDirection * 360 + heart.rotation,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{ left: heart.left }}
        >
          <Heart
            className={`${heart.color} opacity-70`}
            style={{ width: heart.size, height: heart.size }}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
