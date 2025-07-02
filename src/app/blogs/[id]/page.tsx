import { BlogMockData } from "@/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default function BlogPage({ params }: Props) {
  const decodedId = decodeURIComponent(params.id);
  const blog = BlogMockData.find((b) => b.id === decodedId);

  if (!blog) return notFound();

  const relatedBlogs = BlogMockData.filter((b) => b.id !== decodedId).slice(
    0,
    2
  );

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-16 text-white">
      {/* Breadcrumb */}
      <p className="text-base font-semibold mb-6">
        Blog / <span className="text-[#0098EA]">{blog.title}</span>
      </p>

      {/* Blog Title */}
      <h1 className="text-3xl text-center md:text-4xl font-bold mb-6">
        {blog.title}
      </h1>

      {/* Blog Image */}

      <div className="relative w-full h-64 md:h-96 mb-6 rounded-[15px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>

      {/* Blog Body Content */}
      <p className=" leading-relaxed whitespace-pre-line font-normal text-lg mb-12">
        {blog.description}
      </p>

      {/* Other Blog Topics */}
      <div className="mt-16">
        {/* <h2 className="text-xl font-bold mb-4">More from the blog</h2> */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4">
          {relatedBlogs.map((item) => (
            <div
              key={item.id}
              className="bg-[#13294B] max-w-md w-80 rounded-md flex items-center gap-4 p-2"
            >
              <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link
                href={`/blogs/${item.id}`}
                className="flex flex-col justify-between"
              >
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <span className="text-base text-[#0098EA] font-semibold mt-1 hover:underline">
                  Read more →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
