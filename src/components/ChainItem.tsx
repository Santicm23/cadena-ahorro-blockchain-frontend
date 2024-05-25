import React from "react";

interface Props {
  chain: Chain;
  owner?: boolean;
}

export default function ChainItem({ chain, owner }: Props) {
  return (
    <div className="max-w-sm p-6 bg-fuchsia-300 border border-gray-200 rounded-lg shadow flex flex-col gap-3 items-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-800">
        Chain {chain.chainId}
      </h5>
      <div className="grid grid-cols-2 text-center">
        <p className="mb-3 text-fuchsia-700">Users:</p>
        <p className="mb-3 text-fuchsia-700">{chain.validUsers}</p>
        <p className="mb-3 text-fuchsia-700">Initial date:</p>
        <p className="mb-3 text-fuchsia-700">{chain.initialDate}</p>
        <p className="mb-3 text-fuchsia-700">Amount to pay:</p>
        <p className="mb-3 text-fuchsia-700">{chain.amountToPay} WEIs</p>
        <p className="mb-3 text-fuchsia-700">Time to pay:</p>
        <p className="mb-3 text-fuchsia-700">{chain.timeToPay / 60} hrs</p>
      </div>
      <button className="inline-flex w-min gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-500 rounded-lg hover:bg-fuchsia-600">
        {owner ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-list"
            >
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3.01" y1="6" y2="6" />
              <line x1="3" x2="3.01" y1="12" y2="12" />
              <line x1="3" x2="3.01" y1="18" y2="18" />
            </svg>
            Ver
          </>
        ) : (
          <>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            Entrar
          </>
        )}
      </button>
    </div>
  );
}
