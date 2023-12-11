import {
    usePrepareContractWrite,
    useContractWrite
} from "wagmi"

import oldHTContract from '@/contracts/haustoken/old.json'
import HTConverterContract from "@/contracts/HTConverter.json";

interface IUseConverterApproveMaxHook {
    data: any | null;
    write: (() => void) | undefined;
}

const UINT256_MAX = BigInt(2) ** BigInt(256) - BigInt(1)

const useConverterApproveMax = (onSuccess?: (() => void)) => {
    const { config } = usePrepareContractWrite({
        address: oldHTContract.address as `0x${string}`,
        abi: oldHTContract.abi,
        functionName: 'approve',
        args: [HTConverterContract.address, UINT256_MAX]
    })

    const { data, write } = useContractWrite({
        ...config,
        onSuccess() {
            onSuccess?.()
        }
    })

    return <IUseConverterApproveMaxHook> {
        data,
        write
    }
}

export default useConverterApproveMax;