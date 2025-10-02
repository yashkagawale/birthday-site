"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Gift, MoveRight, PartyPopper } from "lucide-react";

export default function BirthdayCelebration({ onNext }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isLoadingNext, setIsLoadingNext] = useState(false);

  const handleNextClick = () => {
    setIsLoadingNext(true);
    setTimeout(() => {
      onNext(); // trigger carousel after 2s
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-2"
      >
        <h1 className="text-3xl sm:text-2xl font-bold text-center text-pink-600 mb-2">
          Celebrating Us, Today and Always
        </h1>
        <div className="flex justify-center gap-3">
          <Heart className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-center text-pink-600 mt-2">
          To My Cutiepie
        </h3>
      </motion.div>

      {/* Anniversary Card */}
      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${
            isCardOpen ? "rotate-0" : "rotate-2"
          }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          <div
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${
              isCardOpen ? "scale-95" : "scale-100"
            }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-lg font-medium mb-4">
                Tap to {isCardOpen ? "close" : "open"} card
              </p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                className="absolute inset-0 bg-white max-[350px]:-top-6 max-[350px]:min-h-[275px] rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
                initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
                animate={{
                  rotate: isCardOpen ? 0 : 2,
                  rotateX: isCardOpen ? 0 : -90,
                  opacity: isCardOpen ? 1 : 0,
                  zIndex: isCardOpen ? 10 : -1,
                }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-purple-700 mb-2">
                    Just wanted to remind you—you're my favorite person. My days
                    are better, smiles are wider, and life is sweeter because of
                    you.
                  </p>
                  <p className="text-pink-600 font-medium">
                    Happy first anniversary, my love! Wishing us a day filled
                    with love, magic, and all the little moments that make our
                    hearts smile.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Message Section */}
      <motion.div
        className="w-full max-w-md mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
            I can’t believe it’s already been 12 months since we started this
            journey together. Today we celebrate a year full of beautiful
            memories, laughter, little adventures, and even the ups and downs
            that made us stronger. Thank you for always understanding me, for
            being by my side through it all, and for filling my life with love
            and joy.
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-pink-600 font-medium">
              Let’s always stay like this... together, forever 🫶
            </p>
          </div>
        </div>
      </motion.div>

      {/* Romantic Button */}
      <motion.div
        key="start-button"
        className="flex flex-col items-center justify-center mt-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        {isLoadingNext ? (
          <motion.div
            className="text-pink-600 font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading next surprise...
          </motion.div>
        ) : (
          <motion.button
            onClick={handleNextClick}
            className="bg-gradient-to-r z-10 from-pink-500 to-purple-500 shadow-lg hover:shadow-xl transition-all rounded-full font-medium text-white py-4 px-8 cursor-pointer border-2 border-white flex items-center gap-3"
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <PartyPopper className="w-6 h-6" />
            <span className="text-xl">Another Surprise</span>
            <MoveRight className="w-5 stroke-3 h-6" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
