"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

type NFTCardProps = {
  name?: string;
  image?: string;
  price?: string;
};

function NFTCard({ name, image, price }: NFTCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isLoading = !name || !image || !price;

  return (
    <SkeletonTheme baseColor="#1A263F" highlightColor="#2F3B5C">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#0B1E3FAA] px-3 pt-3 h-fit pb-5 rounded-[18px] relative max-w-56 flex flex-col items-center text-white space-y-3 shadow-md"
      >
        {/* Image */}
        <div className="w-full flex items-center justify-center h-34 relative rounded-[12px] overflow-hidden">
          {!imageLoaded && (
            <Skeleton height={150} width={220} className="rounded-[12px]" />
          )}
          {image && (
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={image}
              alt={name || "NFT"}
              className={`rounded-[12px] transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-col flex justify-start items-start text-start w-full">
          <h3 className="font-smedium text-xl truncate">
            {isLoading ? <Skeleton width={100} /> : name}
          </h3>
          <span className="flex w-full justify-start items-center gap-2 mt-1">
            <span className="relative flex justify-center items-center h-4 w-4">
              <Image
                src="/ton_symbol copy 1.png"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt="ton"
              />
            </span>
            <p className="text-sm font-extrabold">
              {isLoading ? <Skeleton width={40} /> : price}
            </p>
          </span>
        </div>
      </motion.div>
    </SkeletonTheme>
  );
}

export default NFTCard;
