"use client";

import { getReadOnlyContract } from "@/helpers/ethers";
import { getChains } from "@/helpers/methods";
import React, { useEffect, useState } from "react";
import ChainItem from "./ChainItem";

export default function ChainListComponent() {
  const [chains, setChains]: [any, any] = useState([]);

  useEffect(() => {
    const contract = getReadOnlyContract();
    const asyncFunc = async () => setChains(await getChains(contract));
    asyncFunc();
  }, []);

  return (
    <ul className="grid grid-cols-3 gap-5 overflow-scroll">
      {chains.map((item: any, index: any) => {
        const chain = {
          chainId: index,
          owner: item.owner,
          validUsers: item.validUsers.toString(),
          amountToPay: item.amountToPay.toString(),
          initialDate: item.initialDate.toString(),
          timeToPay: item.timeToPay.toString(),
          balance: item.balance.toString(),
        };
        return (
          <ChainItem key={index} chain={chain} />
        );
      })}
    </ul>
  );
}
