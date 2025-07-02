"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

type ActionCardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  emailTo: string;
  subject: string;
  body: string;
};

function ActionCard({
  image,
  title,
  subtitle,
  emailTo,
  subject,
  body,
}: ActionCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isLoading = !image || !title || !subtitle;

  const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <SkeletonTheme baseColor="#1A263F" highlightColor="#2F3B5C">
      <motion.a
        href={mailtoLink}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hover:shadow-xl transition-shadow text-white flex w-full max-w-2xl flex-col"
      >
        {/* NFT Image */}
        <div className="relative w-full h-96 overflow-hidden rounded-[12px]">
          {(isLoading || !imageLoaded) && (
            <Skeleton className="rounded-[12px]" height="100%" width={1000} />
          )}
          {image && (
            <Image
              src={image}
              alt={title ?? "Action image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={`w-full h-full object-cover rounded-[12px] transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          )}
        </div>

        {/* Text Content */}
        <motion.div
          className="space-y-2 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="md:text-5xl text-3xl font-extrabold">
            {isLoading ? <Skeleton width="60%" height={34} /> : title}
          </h3>
          <p className="md:text-xl text-lg font-normal opacity-90">
            {isLoading ? <Skeleton width="90%" height={24} /> : subtitle}
          </p>
        </motion.div>
      </motion.a>
    </SkeletonTheme>
  );
}

export default ActionCard;
