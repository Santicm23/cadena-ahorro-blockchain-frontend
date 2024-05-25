"use client";

import { getReadOnlyContract } from "@/helpers/ethers";
import { getChains } from "@/helpers/methods";
import React, { useEffect, useState } from "react";
import ChainItem from "./ChainItem";

export default function MyChainListComponent() {
  const [chains, setChains]: [any, any] = useState([]);

  useEffect(() => {
    const contract = getReadOnlyContract();
    const asyncFunc = async () => {
      const newChains = await getChains(contract);
      setChains(
        newChains.filter(
          (chain: any) =>
            chain.owner.toLowerCase() ===
            (window as any).ethereum.selectedAddress
        )
      );
    };
    asyncFunc();
  }, []);

  if (chains.length === 0) {
    return (
      <h1 className="self-center justify-self-center text-4xl text-slate-200">
        No ha creado cadenas
      </h1>
    );
  }
  return (
    <ul className="grid grid-cols-3 gap-5">
      {chains.map((item: any, index: any) => {
        const chain = {
          chainId: item.chainId.toString(),
          owner: item.owner,
          validUsers: item.validUsers.toString(),
          amountToPay: item.amountToPay.toString(),
          initialDate: item.initialDate.toString(),
          timeToPay: item.timeToPay.toString(),
          balance: item.balance.toString(),
        };
        return (
          <ChainItem key={index} chain={chain} owner />
        );
      })}
    </ul>
  );
}
