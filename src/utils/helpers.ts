export default function isValidImageUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
export function isValidTONWallet(addr: string) {
return addr.startsWith("EQ") && addr.length >= 48;
  
}

