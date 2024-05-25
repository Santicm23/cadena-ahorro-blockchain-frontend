"use client";

import React from "react";
import { getWriteContract } from '../helpers/ethers';

export default function CreateChainComponent() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = (document.getElementById("amount") as HTMLInputElement)
      .value;
    const daysToStart = (
      document.getElementById("days-to-start") as HTMLInputElement
    ).value;
    const daysToPay = (
      document.getElementById("days-to-pay") as HTMLInputElement
    ).value;

    if (!amount || !daysToStart || !daysToPay) {
      alert("Por favor, llena todos los campos");
      return;
    }

    const contract = await getWriteContract();

    const tx = await contract.createChain(
      amount,
      daysToStart,
      daysToPay
    );
    console.log(tx);
  };

  const clear = () => {
    (document.getElementById("create") as any).reset();
  };

  return (
    <form id="create" className="max-w-sm w-2/3">
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
      <div className="mb-5">
        <label
          htmlFor="days-to-start"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Días para empezar
        </label>
        <input
          type="number"
          id="days-to-start"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="15"
          min={1}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="days-to-pay"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Días para pagar
        </label>
        <input
          type="number"
          id="days-to-pay"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="7"
          min={1}
          required
        />
      </div>
      <div className="w-full flex justify-around">
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-fuchsia-500 hover:bg-fuchsia-600 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Crear
        </button>
        <button
          type="button"
          onClick={clear}
          className="bg-fuchsia-300 text-fuchsia-600 hover:bg-fuchsia-400 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}
