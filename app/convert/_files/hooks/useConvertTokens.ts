import {
    usePrepareContractWrite,
    useContractWrite
} from "wagmi"

import HTConverterContract from "@/contracts/HTConverter.json";

interface IUseConverterApproveMaxHook {
    data: any | null;
    write: (() => void) | undefined;
}

const UINT256_MAX = BigInt(2) ** BigInt(256) - BigInt(1)

const useConverterApproveMax = (onSuccess?: (() => void)) => {
    const { config } = usePrepareContractWrite({
        address: HTConverterContract.address as `0x${string}`,
        abi: HTConverterContract.abi,
        functionName: 'convert',
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