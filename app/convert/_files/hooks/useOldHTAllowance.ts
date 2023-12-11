import { useAccount } from 'wagmi';
import { useContractRead } from 'wagmi';

import oldHTContract from '@/contracts/haustoken/old.json';
import HTConverterContract from '@/contracts/HTConverter.json';

interface IUseOldHTAllowanceProps {
  data: number;
  isMax: boolean;
  loading: boolean;
}

const INT_MAX = BigInt(2) ** BigInt(256) - BigInt(1);

const useOldHTAllowance = () =>  {
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: oldHTContract.address as `0x${string}`,
    abi: oldHTContract.abi,
    watch: true,
    functionName: 'allowance',
    args: [address, HTConverterContract.address],
  });

  if (data === undefined) {
    return <IUseOldHTAllowanceProps>{
      loading: isLoading,
      isMax: false,
      data: 0,
    };
  }

  return <IUseOldHTAllowanceProps>{
    loading: isLoading,
    isMax: data === INT_MAX,
    // @ts-ignore
    data: Number(data / BigInt(1e18)),
  };
}

export default useOldHTAllowance;
