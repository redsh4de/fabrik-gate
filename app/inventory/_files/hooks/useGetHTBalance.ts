import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { ethers } from "ethers";

import htContract from "@/contracts/haustoken/new.json";

interface IUseGetHTBalanceHook {
    data: number | string
}

const useGetHTBalance = (address: `0x${string}` | undefined, formatted: boolean): IUseGetHTBalanceHook => {
    const [data, setData] = useState<number | string>(0)

    const { data: rawData } = useContractRead({
        address: htContract.address as `0x${string}`,
        abi: htContract.abi,
        functionName: "balanceOf",
        args: [address],
        watch: true,
    });

    useEffect(() => {
        if (rawData) setData(parseFloat(ethers.formatUnits(rawData as bigint, 18)))
    }, [rawData])

    return <IUseGetHTBalanceHook>{
        data: data ? (formatted ? data.toLocaleString('en', { maximumFractionDigits: 2}) : data) : 0
    }
}

export default useGetHTBalance;