import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


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
    <html lang="en" className="">
      <body className="antialiased">
        <Header />
        <main className="overflow-x-hidden min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
