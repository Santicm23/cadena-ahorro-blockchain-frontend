import { ethers } from "ethers";

export const getChains = async (contract: ethers.Contract): Promise<any[]> => {
  const numChains = await contract.numChains();
  const chainDataPromises = [];
  for (let i = 0; i < numChains; i++) {
    chainDataPromises.push(contract.chains(i));
  }

  return Promise.all(chainDataPromises);
};