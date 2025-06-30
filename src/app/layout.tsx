import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

// Import and configure the Darker Grotesque font
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SeatonView | Discover, Collect & Trade NFTs on TON",
  description:
    "Explore SeatonView—your gateway to rare and unique NFTs on The Open Network (TON). Mint, buy, and sell digital assets with speed, security, and style.",
  keywords:
    "NFT marketplace, TON NFTs, SeatonView, buy NFTs TON, sell NFTs TON, TON blockchain art, digital collectibles, Web3, mint NFTs TON, crypto art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={darkerGrotesque.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
