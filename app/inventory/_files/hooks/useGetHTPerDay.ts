import { useContractRead } from "wagmi"
import { useState, useEffect } from "react"
import stakingContract from "@/contracts/staking.json"

interface IUseGetHTPerDayHook {
    data: number
}

const useGetHTPerDay = (address: `0x${string}` | undefined): IUseGetHTPerDayHook => {
    const [data, setData] = useState<number | string>(0);

    const { data: rawData } = useContractRead({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: "getUserRewardRate",
        args: [address],
        watch: true,
    });

    useEffect(() => {
        if (rawData) {
            setData(Number(rawData as bigint / BigInt(1e18)))
        }
    }, [rawData])

    return <IUseGetHTPerDayHook>{
        data: data ?? 0
    }
}

export default useGetHTPerDay;