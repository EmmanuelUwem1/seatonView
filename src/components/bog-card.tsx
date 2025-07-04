"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  id: string;
  image?: string;
  title?: string;
};

function BlogCard({ id, image, title }: BlogCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const isLoading = !image || !title;

  return (
    <SkeletonTheme baseColor="#1A263F" highlightColor="#2F3B5C">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#0B1E3FAA] rounded-[25px] overflow-hidden text-white p-3 max-w-md w-full"
      >
        {/* Image */}
        <div className="relative rounded-[18px] w-full h-52 flex items-center justify-center overflow-hidden">
          {isLoading || !imgLoaded ? (
            <Skeleton height="100%" width={1000} className="rounded-[18px]" />
          ) : null}

          {image && (
            <Image
              src={image}
              alt={title ?? "Blog"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={`w-full h-full object-cover rounded-[18px] transition-opacity duration-300 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImgLoaded(true)}
            />
          )}
        </div>

        {/* Title + Button */}
        <motion.div
          className="flex flex-col gap-2 justify-between items-start mt-4 pb-5 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h3 className="text-xl font-bold truncate">
            {isLoading ? <Skeleton width={160} height={24} /> : title}
          </h3>

          <Link
            href={`/blogs/${id}`}
            className="text-lg bg-[#0098EA] px-3 py-1.5 flex w-full items-center justify-center rounded-md font-semibold hover:bg-[#007bcc] transition-all"
          >
            Read more
          </Link>
        </motion.div>
      </motion.div>
    </SkeletonTheme>
  );
}

export default BlogCard;
