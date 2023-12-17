import { useContractRead } from 'wagmi';
import { useEffect, useState } from 'react';

import oldHTContract from '@/contracts/haustoken/old.json';

interface IUseOldHTBalance {
  data: number;
}

const useOldHTBalance = (address: `0x${string}` | undefined) =>  {
  const [data, setData] = useState<number>(0);

  const { data: rawData } = useContractRead({
    address: oldHTContract.address as `0x${string}`,
    abi: oldHTContract.abi,
    watch: true,
    functionName: 'balanceOf',
    args: [address],
  });

  useEffect(() => {
    if (rawData) setData(Number(rawData as bigint / BigInt(1e18)))
  }, [rawData])

  return <IUseOldHTBalance>{
    data: data ?? 0,
  };
}

export default useOldHTBalance;
