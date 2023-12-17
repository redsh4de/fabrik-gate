import { useContractRead } from 'wagmi';
import { useEffect, useState } from 'react';

import oldHTContract from '@/contracts/haustoken/old.json';
import HTConverterContract from '@/contracts/HTConverter.json';

interface IUseOldHTAllowanceProps {
  data: number;
  isMax: boolean;
  loading: boolean;
}

const INT_MAX = BigInt(2) ** BigInt(256) - BigInt(1);

const useOldHTAllowance = (address: `0x${string}` | undefined) =>  {
  const [data, setData] = useState<number>(0);

  const { data: rawData } = useContractRead({
    address: oldHTContract.address as `0x${string}`,
    abi: oldHTContract.abi,
    watch: true,
    functionName: 'allowance',
    args: [address, HTConverterContract.address],
  });

  useEffect(() => {
    if (rawData) setData(Number(rawData as bigint))
  }, [rawData])

  return <IUseOldHTAllowanceProps>{
    isMax: rawData === INT_MAX,
    data: data ?? 0
  };
}

export default useOldHTAllowance;
