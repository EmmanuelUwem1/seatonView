"use client";

import { useState, useEffect } from "react";
import NFTCard from "./cards/NFT";
import CollectionCard from "./cards/collection";
import { getTonNftCollections } from "@/lib/api";
import { MockData } from "@/lib/data";
import { TonNftCollection } from "@/lib/api";
import isValidImageUrl from "@/utils/helpers";

function Trending() {
  const [activeTab, setActiveTab] = useState<"NFTs" | "Collection">("NFTs");
  const [collections, setCollections] = useState<TonNftCollection[]>([]);

  useEffect(() => {
    if (activeTab === "Collection") {
      (async () => {
        const result = await getTonNftCollections();
        if (result.length  > 0) {
          setCollections(result);
        }
      })();
    }
  }, [activeTab]);

  return (
    <section className="flex gap-8 flex-col justify-start items-start w-full px-4 pb-16 sm:px-8 md:px-16 lg:px-20">
      {/* Header */}
      <div className="flex flex-col justify-between sm:items-center w-full sm:flex-row sm:flex-nowrap gap-8">
        <h2 className="font-semibold max-sm:self-start relative text-3xl md:text-5xl text-white before:content-[''] before:absolute before:-bottom-2 before:left-0 before:h-[4px] before:w-[50%] before:bg-[#0098EA]">
          Trending
        </h2>
        <div className="flex max-sm:self-end justify-center items-center gap-4 font-semibold text-lg bg-[#010A1E] rounded-[13px] p-1">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
            {collections.map((item) => (
              <CollectionCard
                key={item.address}
                name={item.metadata.name || "Unknown Collection"}
                image={
                  isValidImageUrl(item.metadata.image)
                    ? item.metadata.image
                    : "/Card 1.png"
                }
                floor={item.metadata.description}
                // total={item.items_count || 0}
                // change={item.price_change_24h || 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Trending;
