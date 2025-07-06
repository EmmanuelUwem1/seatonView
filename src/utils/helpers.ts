import { Address } from "ton-core";
export default function isValidImageUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function formatToBounceable(rawAddress: string): string {
  try {
    const parsed = Address.parse(rawAddress); // Parse raw format
    return parsed.toString({
      bounceable: true,
      testOnly: false,
    }); // Format as user-friendly EQ... address
  } catch (error) {
    console.error("Invalid TON address format:", error);
    return ""; // Or throw error depending on your use case
  }
}
export function isValidTONWallet(addr: string): boolean {
  return (addr.startsWith("EQ") || addr.startsWith("UQ")) && addr.length >= 48;
}
