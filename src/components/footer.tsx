"use client";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "X",
      url: "https://x.com/yourprofile",
      icon: "/Vector.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "/githab.png",
    },
    {
      name: "Discord",
      url: "https://discord.gg/yourinvite",
      icon: "/discord.png",
    },
  ];

  return (
    <footer className="flex px-4 sm:px-8 md:px-16 lg:px-20 flex-col justify-start items-center gap-6 py-4 w-full">
      <div className="flex h-[1px] bg-[#1A263F] w-full"></div>
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center w-full max-w-6xl text-white text-base font-semibold">
        <span>Copyright {currentYear} SeatonView</span>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>

        <span className="text-[#0098EA]">Powered by Ton</span>
      </div>
    </footer>
  );
}

export default Footer;
