import { usePrepareContractWrite, useContractWrite } from "wagmi"

import stakingContract from "@/contracts/staking.json"

interface IUseStakeModulesHook {
    data: any | null;
    isLoading: boolean;
    error: any | null;
    isError: boolean;
    isSuccess: boolean;
    write: (() => void) | undefined;
}

const useUnstakeModules = (ids: number[], onSuccess: (() => void)): IUseStakeModulesHook => {
    const { config } = usePrepareContractWrite({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: 'stakeMultiple',
        args: [ids]
    })

    const { data, isLoading, write, error, isError, isSuccess } = useContractWrite({...config, onSuccess() {
        onSuccess?.()
    }})

    return<IUseStakeModulesHook>{
        data,
        isLoading,
        error,
        isError,
        isSuccess,
        write
    }
}

export default useUnstakeModules;