"use client"; // Add this if using App Router

import { createContext, useContext, useEffect, useState } from "react";
import { getTonNftCollections } from "@/lib/api";
import type { TonNftCollection } from "@/lib/api";

//  Context with default as empty array
const NftContext = createContext<TonNftCollection[]>([]);

//  Provider Component
export const NftProvider = ({ children }: { children: React.ReactNode }) => {
  const [collections, setCollections] = useState<TonNftCollection[]>([]);

  useEffect(() => {
    // Fetch once when app loads
    const fetchData = async () => {
      const result = await getTonNftCollections();
      setCollections(result);
    };
    fetchData();
  }, []);

  return (
    <NftContext.Provider value={collections}>{children}</NftContext.Provider>
  );
};

//  Custom Hook for Access
export const useNftCollections = () => useContext(NftContext);
