"use client";
import { useState } from "react";
import NFTCard from "./NFT-card";
import { MockData } from "@/api/data";
import CollectionCard from "./collection-card";
import { CollectionMockData } from "@/api/data";

function Trending() {
  const [activeTab, setActiveTab] = useState<"NFTs" | "Collection">("NFTs");

  return (
    <section className="flex gap-8 flex-col justify-start items-start w-full px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-4xl">Trending</h2>
        <div className="flex justify-center items-center gap-4 font-semibold text-lg bg-[#010A1E] rounded-[13px] p-1">
          <button
            onClick={() => setActiveTab("NFTs")}
            className={`px-6 py-2 rounded-[13px] cursor-pointer transition-class ${
              activeTab === "NFTs"
                ? "bg-[#FFFFFF] text-[#0098EA]"
                : "bg-transparent text-gray-300 hover:text-[#0098EA]"
            }`}
          >
            NFTs
          </button>
          <button
            onClick={() => setActiveTab("Collection")}
            className={`px-6 py-2 rounded-[13px] cursor-pointer transition-class ${
              activeTab === "Collection"
                ? "bg-[#FFFFFF] text-[#0098EA]"
                : "bg-transparent text-gray-300 hover:text-[#0098EA]"
            }`}
          >
            Collection
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        {activeTab === "NFTs" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mt-6">
            {MockData.map((nft) => (
              <NFTCard
                key={nft.id}
                name={nft.name}
                image={nft.image}
                price={nft.price}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CollectionMockData.map((item) => (
              <CollectionCard
                key={item.id}
                name={item.name}
                image={item.image}
                floor={item.floor}
                total={item.total}
                change={item.change}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Trending;
