"use server";

import axios from "axios";

const TON_NFT_COLLECTIONS_URL = "https://tonapi.io/api-v2#operations-NFT-getNftCollection;"
// "https://tonapi.io/v2/nfts/collections?limit=15&offset=10";

/**
 * Fetches a paginated list of NFT collections from TonAPI.
 * You can modify `limit` and `offset` if needed.
 */

export interface TonNftCollection {
  address: string;
  next_item_index: number;
  owner: {
    address: string;
    is_scam: boolean;
    is_wallet: boolean;
  };
  raw_collection_content: string;
  metadata: {
    name: string;
    image: string;
    cover_image: string;
    description: string;
    marketplace: string;
    external_url: string;
    social_links: string[];
  };
  previews: {
    resolution: string;
    url: string;
  }[];
  approved_by: string[];
}
  
export async function getTonNftCollections(): Promise<TonNftCollection[]> {
  try {
      const response = await axios.get(TON_NFT_COLLECTIONS_URL);
      console.log("The fetched data are : ", response.data?.nft_collections || []);
    return response.data?.nft_collections || [];
  } catch (error) {
    console.error("Error fetching TON NFT collections:", error);
    return [];
  }
}
