import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#0B1E3F]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, we couldn’t find that page.</p>
      <Link href="/" className="text-blue-400 underline">
        Go back home
      </Link>
    </div>
  );
}
