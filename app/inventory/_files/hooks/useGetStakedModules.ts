import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"

import stakingContract from "@/contracts/staking.json"

interface IUseGetStakedModulesHook {
    data: number[]
    count: number
}

const useGetStakedModules = (address: `0x${string}` | undefined) => {
    const [data, setData] = useState<number[]>([])

    const { data: rawData } = useContractRead({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: "getUserStakedTokens",
        args: ["0x402FD4F56EB547c217a0Eb35958B174fF231d7bF"],
        watch: true,
    });

    useEffect(() => {
        if (rawData) setData(rawData as number[])
    }, [rawData])

    return <IUseGetStakedModulesHook>{
        data: data ?? [],
        count: data?.length ?? 0
    }
}

export default useGetStakedModules;