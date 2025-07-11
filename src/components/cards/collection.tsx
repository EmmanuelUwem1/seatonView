"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

type CollectionCardProps = {
  name?: string;
  image?: string;
  floor?: string;
  total?: string;
  change?: string;
};

function CollectionCard({ name, image, floor }: CollectionCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const validImage = image && image.startsWith("http");

  return (
    <SkeletonTheme baseColor="#1A263F" highlightColor="#2F3B5C">
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#182a49] rounded-[9px] p-3.5 flex items-center justify-between w-full gap-4 text-white cursor-pointer overflow-x-hidden shadow-md"
      >
        {/* Image Left */}
        <div className="relative min-w-14 w-[56px] h-20 rounded-md overflow-hidden flex items-center justify-center">
          {!imageLoaded && (
            <Skeleton height={200} width={200} className="rounded-md" />
          )}
          <Image
            src={validImage ? image : "/Card 1.png"}
            alt={name || "collection"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized
            className={`rounded-md transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>

        {/* Info Right */}
        <div className="flex flex-col justify-between w-full">
          <span className="flex justify-start items-center gap-2">
            <h3 className="font-bold text-lg max-sm:max-w-[12rem] truncate">
              {name ? name : <Skeleton width={100} />}
            </h3>
            <span className="relative flex justify-center items-center h-6 w-6">
              <Image
                src="/tick-circle.png"
                alt="blue tick"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </span>
          </span>
          <div className="flex justify-between text-base text-[#9CA3AF] font-semibold">
            {floor ? (
              <span className="truncate overflow-hidden whitespace-nowrap max-sm:max-w-[12rem] sm:[14rem]">
                {floor}
              </span>
            ) : (
              <Skeleton width={80} />
            )}
          </div>
        </div>
      </motion.div>
    </SkeletonTheme>
  );
}

export default CollectionCard;
