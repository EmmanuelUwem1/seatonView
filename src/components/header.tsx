"use client";
import Link from "next/link";
function Header() {
  return (
    <header className="flex bg-transparent justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 w-full h-20 md:h-24">
      <span className="font-extrabold text-2xl">SeatonView</span>
      <nav className="items-center gap-10 font-semibold text-xl hidden md:flex">
        <Link href="#">Home</Link>
        <a href="#">Explore NFTs</a>
        <a href="#">Collections</a>
        <a href="#">Wallet Viewer</a>
        <a href="#">About</a>
        <a href="#">Docs</a>
      </nav>
    </header>
  );
}

export default Header