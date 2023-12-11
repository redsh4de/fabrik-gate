import { useAccount } from 'wagmi';
import { useContractRead } from 'wagmi';

import oldHTContract from '@/contracts/haustoken/old.json';

interface IUseOldHTBalance {
  data: number;
  loading: boolean;
}

const useOldHTBalance = () =>  {
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: oldHTContract.address as `0x${string}`,
    abi: oldHTContract.abi,
    watch: true,
    functionName: 'balanceOf',
    args: [address],
  });

  if (data === undefined) {
    return <IUseOldHTBalance>{
      loading: isLoading,
      data: 0,
    };
  }

  return <IUseOldHTBalance>{
    loading: isLoading,
    // @ts-ignore
    data: Number(data / BigInt(1e18)),
  };
}

export default useOldHTBalance;
