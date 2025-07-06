"use server";

import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const TON_NFT_COLLECTIONS_URL =
  "https://tonapi.io/v2/nfts/collections?limit=15&offset=10";
export interface TonNftItem {
  address: string;
  index: number;
  owner: {
    address: string;
    is_scam: boolean;
    is_wallet: boolean;
  };
  verified: boolean;
  metadata: {
    name: string;
    image: string;
    description: string;
    attributes: {
      trait_type: string;
      value: string;
    }[];
  };
  previews: {
    resolution: string;
    url: string;
  }[];
  approved_by: string[];
  trust: string;
}



export async function getNftsByWallet(
  walletAddress: string
): Promise<TonNftItem[]> {
  try {
    const url = `${BACKEND_URL}/api/nfts/wallet/${walletAddress}`;
    const response = await axios.get(url);
    console.log("inputed address is : ", walletAddress);
    return response.data?.nft_items || [];
  } catch (error) {
    console.error("Error fetching NFTs by wallet:", error);
    return [];
  }
}



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
      // console.log("The fetched data are : ", response.data?.nft_collections || []);
    return response.data?.nft_collections || [];
  } catch (error) {
    console.error("Error fetching TON NFT collections:", error);
    return [];
  }
}
