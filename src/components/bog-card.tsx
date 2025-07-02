"use client";

import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  id: string;
    image: string;
  title: string;
};

function BlogCard({ id, title }: BlogCardProps) {
  return (
    <div className="bg-[#0B1E3FAA] rounded-[25px] overflow-hidden text-white p-3 max-w-md">
      {/* Image */}
      <div className="relative rounded-[18px] w-full h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={"/Card 1.png"}
          alt={title}
                  layout="fill"
                  objectPosition="center"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title + Button */}
      <div className="flex gap-2 justify-between items-center mt-4 pb-5 flex-wrap lg:flex-nowrap">
        <h3 className="text-xl font-bold truncate">{title}</h3>
        <Link
          href={`/blogs/${id}`}
          className="text-lg bg-[#0098EA] px-3 py-1.5 flex w-36 items-center justify-center rounded-md font-semibold hover:bg-[#007bcc] transition-class"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
