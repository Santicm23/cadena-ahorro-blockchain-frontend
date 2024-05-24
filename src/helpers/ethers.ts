import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants/contract_info";
import { ethers } from "ethers";


export function getReadOnlyContract(): ethers.Contract {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

    return contract;
}

export async function getWriteContract(): Promise<ethers.Contract> {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    return contract;
}
