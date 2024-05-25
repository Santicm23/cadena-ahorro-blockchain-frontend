"use client";

import { getWriteContract } from "@/helpers/ethers";
import React from "react";

export default function PayComponent() {
  async function pay() {
    const chainId = (document.getElementById("chain-id") as HTMLInputElement)
      .value;

    const amount = (document.getElementById("amount") as HTMLInputElement)
      .value;

    const contract = await getWriteContract();

    contract
      .pay(chainId, {
        value: parseInt(amount),
      })
      .then((tx) => {
        console.log(tx);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message.split('"')[1]);
      });
  }

  return (
    <div className="flex items-center justify-center">
      <form id="pay-or-withdraw" className="max-w-sm w-2/3 flex flex-col">
        <div className="mb-5">
          <label
            htmlFor="chain-id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Id de la cadena
          </label>
          <input
            type="number"
            id="chain-id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            min={0}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monto a pagar (en WEI)
          </label>
          <input
            type="number"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100"
            min={1}
            required
          />
        </div>
        <button
          type="button"
          onClick={pay}
          className="text-white self-center bg-fuchsia-500 hover:bg-fuchsia-600 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Pagar
        </button>
      </form>
    </div>
  );
}
