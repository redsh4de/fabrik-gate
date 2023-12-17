import hausPhaseContract from "@/contracts/hausphases.json";

import { Alchemy, Network } from "alchemy-sdk";
import { useState, useEffect } from "react";
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const alchemyConfig = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);

interface IUseGetUnstakedModulesHook {
    data: number[]
    refetch: () => void
}

const useGetUnstakedModules = (address: `0x${string}` | undefined) => {
    const [data, setData] = useState<number[]>([])

    const fetchData = async () => {
        if (!address) return;

        const nfts = await alchemy.nft.getNftsForOwner(address, {
            contractAddresses: [hausPhaseContract.address]
        }) as any
        const tokenIDs = nfts.ownedNfts.map((nft: any) => nft.tokenId)

        setData(tokenIDs)
    }

    useEffect(() => {
        fetchData();
    }, [address])


    return <IUseGetUnstakedModulesHook> {
        data: data ?? [] as number[],
        refetch: fetchData
    }
}

export default useGetUnstakedModules;