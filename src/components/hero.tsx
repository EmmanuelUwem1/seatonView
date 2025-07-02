"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <section className="flex flex-col w-full md:flex-row gap-6 items-center justify-between px-4 md:px-16 max-md:py-16 md:py-8 text-white overflow-hidden">
        {/* Left Side Reveal */}
        <motion.div
          className="md:w-1/2 space-y-6 relative lg:-top-[3rem]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore NFTs on <span className="text-[#0098EA]">Ton</span> like
            never before.
          </motion.h1>

          <motion.p
            className="text-xl font-normal opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Enter a wallet or collection address and instantly view a beautiful,
            fast-rendered gallery of live NFTs.
          </motion.p>

          <motion.input
            type="text"
            placeholder="Enter wallet or collection address"
            onFocus={() => setModalOpen(true)}
            readOnly
            className="mt-4 w-full sm:w-[70%] md:w-3/4 px-4 py-3 rounded-[13px] bg-[#0B1E3FAA] text-white placeholder-gray-400 focus:outline-none ring ring-[#0098EA] cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
        </motion.div>

        {/* Right Side Image Reveal */}
        <motion.div
          className="md:w-1/2 sm:w-[80%] w-full mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <span className="relative max-sm:-left-16 flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src="/Pirate-1 1.png"
              alt="NFT showcase"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="w-full h-auto object-contain"
              priority
            />
            <motion.span
              className="flex flex-col justify-center items-center gap bg-[#FFFFFF] px-4 pb-4 pt-10 rounded-[10px] absolute max-sm:-right-16 right-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="absolute -top-[2rem] rounded-full border-2 border-white flex items-center justify-center w-16 h-16 overflow-hidden">
                <Image
                  alt="creator"
                  src={"/monalisa.png"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </span>
              <div className="flex justify-center items-center gap-2">
                <span className="relative h-6 w-6 flex items-center justify-center">
                  <Image
                    src={"/Vector-ton.png"}
                    alt="ton"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </span>
                <span className="text-[#000000] font-semibold text-2xl">
                  3000 Ton
                </span>
              </div>
              <div className="flex flex-col justify-center gap text-center text-base font-semibold">
                <span className="text-[#B9B9B9]">created by</span>
                <span className="text-[#000000]">EQBG-g…UDFS</span>
              </div>
            </motion.span>
          </span>
        </motion.div>
      </section>

      {/* ✨ Fullscreen Search Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="wallet-overlay"
            className="fixed inset-0 z-50 bg-[#0B1E3F]/80 backdrop-blur-md px-4 pt-10 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.input
              ref={inputRef}
              type="text"
              placeholder="TON wallet or collection address"
              autoFocus
              onBlur={() => setModalOpen(false)}
              className="w-full max-w-2xl mx-auto px-6 py-5 text-xl rounded-xl bg-[#13294B]/90 border border-[#1A263F] text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0098EA]"
              initial={{ width: 0, opacity: 0, y: -10 }}
              animate={{ width: "100%", opacity: 1, y: 0 }}
              exit={{ width: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="mt-10 px-4 w-full max-w-5xl mx-auto">
              <p className="text-gray-400 text-center text-sm">
                NFT results will appear here...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
