"use client";

import UserComponent from "@/components/UserComponent";
import { getReadOnlyContract } from "@/helpers/ethers";
import { useEffect, useState } from "react";

export default function ChainPage({ params }: { params: { chainId: string } }) {
  const [indebtedUsers, setIndebtedUsers] = useState([]);

  useEffect(() => {
    const contract = getReadOnlyContract();

    const asyncFunc = async () => {
      contract
        .getIndebtedUsers(params.chainId)
        .then((users) => {
          console.log(users);
          setIndebtedUsers(users);
        })
        .catch((err) => {
          console.error(err);
          alert(err.message.split('"')[1]);
        });
    };

    asyncFunc();
  }, [params.chainId]);

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      {indebtedUsers.length === 0 ? (
        <h1 className="text-4xl text-slate-200">No hay usuarios endeudados</h1>
      ) : (
        <ul className="grid grid-cols-3 gap-5">
          {indebtedUsers.map((user: any, index: any) => (
            <UserComponent key={index} address={user} chainId={params.chainId} />
          ))}
        </ul>
      )}
    </main>
  );
}
