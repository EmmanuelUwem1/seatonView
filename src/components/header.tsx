"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore NFTs", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Wallet Viewer", href: "#" },
    { label: "About", href: "#" },
    { label: "Docs", href: "#" },
  ];

  // Framer Motion Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <header className="relative z-50 bg-transparent px-4 sm:px-6 md:px-8 lg:px-16 w-full h-20 md:h-24 flex justify-between items-center text-white">
      {/* Logo */}
      <Link href="/" className="font-extrabold text-2xl">
        SeatonView
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 font-semibold text-xl">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          color="#fff"
          size={20}
        />
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-[#0B1E3F] p-6 md:hidden shadow-xl rounded-b-md"
          >
            <ul className="flex flex-col gap-4 font-semibold text-lg">
              {navLinks.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-[#0098EA] transition"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
