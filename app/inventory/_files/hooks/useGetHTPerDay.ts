import { useContractRead } from "wagmi"
import { useState, useEffect } from "react"
import { ethers } from "ethers";
import stakingContract from "@/contracts/staking.json"

interface IUseGetHTPerDayHook {
    data: number | string
}

const useGetHTPerDay = (address: `0x${string}` | undefined, formatted: boolean) => {
    const [data, setData] = useState<number | string>(0);

    const { data: rawData } = useContractRead({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: "getUserRewardRate",
        args: [address],
        watch: true,
    });

    useEffect(() => {
        if (rawData) setData(parseFloat(ethers.formatUnits(rawData as bigint, 18)))
    }, [rawData])

    return <IUseGetHTPerDayHook>{
        data: data ? (formatted ? data.toLocaleString('en', { maximumFractionDigits: 2}) : data) : 0
    }
}

export default useGetHTPerDay;