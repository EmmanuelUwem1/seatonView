import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Darker_Grotesque } from "next/font/google";
import { NftProvider } from "../context/nftContext";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add other weights if needed like "500", "700"
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
    <html lang="en" className="">
      <body className={`${darkerGrotesque.className} antialiased`}>
        <Header />

        <main className="overflow-x-hidden min-h-screen overflow-y-visible">
          <NftProvider>{children}</NftProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
