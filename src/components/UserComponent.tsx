import { getWriteContract } from "@/helpers/ethers";
import React from "react";

interface Props {
  address: string;
  chainId: string;
}

export default function UserComponent(
  { address, chainId }: Props,
) {
  async function ban() {
    const contract = await getWriteContract();
    contract
      .ban(chainId, address)
      .then((tx) => {
        console.log(tx);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message.split('"')[1]);
      });
  }
  return (
    <div className="max-w-sm p-6 bg-fuchsia-300 border border-gray-200 rounded-lg shadow flex flex-col gap-3 items-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-800">
        Chain {address.substring(0, 15)}
      </h5>
      <button
        onClick={ban}
        className="inline-flex w-min gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-500 rounded-lg hover:bg-fuchsia-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-off"
        >
          <path d="m2 2 20 20" />
          <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
          <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
        </svg>
        Ban
      </button>
    </div>
  );
}
