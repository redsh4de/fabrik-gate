import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"

import stakingContract from "@/contracts/staking.json"

interface IUseUnstakeModulesHook {
    data: any | null;
    isLoading: boolean;
    error: any | null;
    isError: boolean;
    isSuccess: boolean;
    write: (() => void) | undefined;
}

const useUnstakeModules = (ids: number[], onSuccess: (() => void)): IUseUnstakeModulesHook => {
    const { config } = usePrepareContractWrite({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: 'withdrawMultiple',
        args: [ids]
    })

    const { data, isLoading, write, error, isError, isSuccess } = useContractWrite({...config, onSuccess() {
        onSuccess?.()
    }})

    return<IUseUnstakeModulesHook>{
        data,
        isLoading,
        error,
        isError,
        isSuccess,
        write
    }
}

export default useUnstakeModules;