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
    <div className="max-w-3xl mx-auto px-4 py-16 text-white">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-2">
        Blog / <span className="text-white font-medium">{blog.title}</span>
      </p>

      {/* Blog Image */}
      <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Blog Body Content */}
      <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-12">
        {blog.description}
      </p>

      {/* Other Blog Topics */}
      <div className="mt-12">
        {/* <h2 className="text-xl font-bold mb-4">More from the blog</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedBlogs.map((item) => (
            <div
              key={item.id}
              className="bg-[#13294B] rounded-md flex items-center gap-4 p-4"
            >
              <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="font-medium text-white text-base truncate max-w-[220px]">
                  {item.title}
                </h3>
                <Link
                  href={`/blogs/${item.id}`}
                  className="text-sm text-[#0098EA] font-semibold mt-1 hover:underline"
                >
                  See more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
