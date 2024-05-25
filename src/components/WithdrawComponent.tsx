"use client"

import { getWriteContract } from '@/helpers/ethers';
import React from 'react'

export default function WithdrawComponent() {
  async function withdraw() {
    const chainId = (document.getElementById("chain-id") as HTMLInputElement)
      .value;

    const contract = await getWriteContract();

    contract
      .withdraw(chainId)
      .then((tx) => {
        console.log(tx);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message.split('"')[1]);
      });
  }

  return (
    <div className='flex justify-center items-center'>
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
        <button
          type="button"
          onClick={withdraw}
          className="text-white self-center bg-fuchsia-500 hover:bg-fuchsia-600 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Retirar
        </button>
      </form>
    </div>
  )
}
