import { Address } from "viem";

export const formatWalletAddress = (
  address: Address,
  startLength: number = 4,
  endLength: number = 4
): string => {
  if (!address) return "";
  if (
    address.startsWith("0x") &&
    address.length >= startLength + endLength + 2
  ) {
    const start = address.substring(0, startLength + 2);
    const end = address.substring(address.length - endLength);
    return `${start}...${end}`;
  }
  
  return address;
};
