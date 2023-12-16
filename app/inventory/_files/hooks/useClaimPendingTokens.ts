import { usePrepareContractWrite, useContractWrite } from "wagmi"

import stakingContract from "@/contracts/staking.json"

interface IUseClaimPendingTokens {
    data: any | null;
    isLoading: boolean;
    error: any | null;
    isError: boolean;
    isSuccess: boolean;
    write: (() => void) | undefined;
}

const useClaimPendingTokens = (onSuccess: (() => void)): IUseClaimPendingTokens => {
    const { config } = usePrepareContractWrite({
        address: stakingContract.address as `0x${string}`,
        abi: stakingContract.abi,
        functionName: 'claimRewards'
    })

    const { data, isLoading, write, error, isError, isSuccess } = useContractWrite({...config, onSuccess() {
        onSuccess?.()
    }})

    return<IUseClaimPendingTokens>{
        data,
        isLoading,
        error,
        isError,
        isSuccess,
        write
    }
}

export default useClaimPendingTokens;