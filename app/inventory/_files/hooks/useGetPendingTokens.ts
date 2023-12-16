import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { ethers } from "ethers";

import stakingContract from "@/contracts/staking.json"

interface IUseGetPendingTokens {
    data: number | string
}

const useGetPendingTokens = (address: `0x${string}` | undefined, formatted: boolean): IUseGetPendingTokens => {
    const [data, setData] = useState<number>(0)

    const { data: rawData } = useContractRead({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: "calculatePendingRewards",
        args: [address],
        watch: true,
    });

    useEffect(() => {
        if (rawData) setData(parseFloat(ethers.formatUnits(rawData as bigint, 18)))
    }, [rawData])

    return <IUseGetPendingTokens>{
        data: data ? (formatted ? data.toLocaleString('en', { maximumFractionDigits: 2}) : data) : 0
    }
}

export default useGetPendingTokens;