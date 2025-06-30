"use client";
function Header() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 w-full">
      <span className="font-extrabold text-xl">SeatonView</span>
      <nav className="flex items-center gap-10 font-semibold text-lg">
        <a href="#">Home</a>
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