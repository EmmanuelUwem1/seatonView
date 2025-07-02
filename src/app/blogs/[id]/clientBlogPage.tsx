"use client";

import { useState, useEffect } from "react";
import { BlogMockData } from "@/api/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
};

export default function ClientBlogPage({ id }: Props) {
    useEffect(() => {
      const timeout = setTimeout(() => setRelatedLoaded(true), 400);
      return () => clearTimeout(timeout);
    }, []);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [relatedLoaded, setRelatedLoaded] = useState(false);

  const blog = BlogMockData.find((b) => b.id === id);
  if (!blog) return notFound();

  const relatedBlogs = BlogMockData.filter((b) => b.id !== id).slice(0, 2);

  // Simulate image load delay for related cards (optional)
  

  const isLoading = !blog.title || !blog.image || !blog.description;

  return (
    <SkeletonTheme baseColor="#1A263F" highlightColor="#2F3B5C">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-16 text-white">
        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-base font-semibold mb-6"
        >
          Blog /{" "}
          <span className="text-[#0098EA]">
            {isLoading ? <Skeleton width={150} /> : blog.title}
          </span>
        </motion.p>

        {/* Blog Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl text-center md:text-4xl font-bold mb-6"
        >
          {isLoading ? <Skeleton width="60%" height={36} /> : blog.title}
        </motion.h1>

        {/* Blog Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-64 md:h-96 mb-6 rounded-[15px] overflow-hidden"
        >
          {(!imgLoaded || isLoading) && (
            <Skeleton height="100%" width="100%" className="rounded-[15px]" />
          )}
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={`rounded-lg transition-opacity duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImgLoaded(true)}
            />
          )}
        </motion.div>

        {/* Blog Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="leading-relaxed whitespace-pre-line font-normal text-lg mb-12"
        >
          {isLoading ? <Skeleton count={8} height={20} /> : blog.description}
        </motion.p>

        {/* Related Blog Previews */}
        <div className="mt-16">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4">
            {relatedBlogs.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#13294B] max-w-md w-80 rounded-md flex items-center gap-4 p-2"
              >
                <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                  {!relatedLoaded ? (
                    <Skeleton width={80} height={80} className="rounded" />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
                <Link
                  href={`/blogs/${item.id}`}
                  className="flex flex-col justify-between"
                >
                  <h3 className="font-bold text-white text-lg">
                    {!relatedLoaded ? <Skeleton width={120} /> : item.title}
                  </h3>
                  <span className="text-base text-[#0098EA] font-semibold mt-1 hover:underline">
                    {!relatedLoaded ? <Skeleton width={80} /> : "Read more →"}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
