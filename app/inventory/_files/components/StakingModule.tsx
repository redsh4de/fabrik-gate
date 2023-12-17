'use client'
import ConnectButton from "@/app/_files/components/ConnectButton";
import styles from "./styles/Staking.module.scss";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

import useGetUnstakedModules from "../hooks/useGetUnstakedModules";
import useGetStakedModules from "../hooks/useGetStakedModules";

import useUnstakeModules from "../hooks/useUnstakeModules";
import useStakeModules from "../hooks/useStakeModules";
import useGetHTPerDay from "../hooks/useGetHTPerDay";

interface IStakingModuleProps {
    setStakedModuleCount: (modules: number) => void;
    setHTPerDay: (count: number) => void;
}

const StakingModule = ({ setStakedModuleCount, setHTPerDay }: IStakingModuleProps) => {
    const [selectedObjects, setSelectedObjects] = useState({
        isStaked: false,
        ids: [] as number[]
    });

    const { isConnected, address } = useAccount();

    const { data: staked } = useGetStakedModules(address);
    const { data: unstaked } = useGetUnstakedModules(address);

    const { data: htPerDay } = useGetHTPerDay(address);

    const { write: writeUnstakeModules } = useUnstakeModules(selectedObjects.isStaked ? selectedObjects.ids : [], () => {});
    const { write: writeStakeModules} = useStakeModules(!selectedObjects.isStaked ? selectedObjects.ids : [], () => {});
    
    const gridItemClick = (id: number, staked: boolean) => () => {
        setSelectedObjects(prevObjects => {
            const { isStaked, ids } = prevObjects;
    
            if (staked !== isStaked) {
                return { isStaked: staked, ids: [id] };
            }
    
            return {
                isStaked: staked,
                ids: ids.includes(id) ? ids.filter(item => item !== id) : [...ids, id],
            };
        });
    }

    const stakeButtonClick = () => {
        if (selectedObjects.isStaked) {
            writeUnstakeModules?.();
        } else {
            writeStakeModules?.();
        }
    }

    useEffect(() => {
        if (staked) setStakedModuleCount(staked.length);
    }, [staked])

    useEffect(() => {
        if (htPerDay) setHTPerDay(Number(htPerDay));
    }, [htPerDay])


    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <span>Staked Balance</span>
                {staked?.length > 0 && <span style={{color: "#B3BDBC"}}>{staked?.length} Modules</span>}
            </div>
            {isConnected ? (
                <>
                    <div className={styles.gridContainer}>
                        <div className={styles.grid}>
                        {
                            staked?.map((item, index) => {
                                return (
                                    <div
                                        className={styles.gridItem}
                                        key={`stkd${index}`}
                                        onClick={gridItemClick(item, true)}
                                        style={{background: selectedObjects.ids.includes(item) ? "#E4EDEC" : "#FFFFFF"}}
                                    >
                                        <span className={styles.moduleTitle}>Module {item}</span>
                                        <div className={styles.stakingStatus}>Staking</div>
                                    </div>
                                )
                            })
                        }
                        {
                            unstaked?.map((item, index) => {
                                return (
                                    <div
                                        className={`${styles.gridItem} ${styles.unstakedGridItem}`}
                                        key={`ustkd${index}`}
                                        onClick={gridItemClick(item, false)}
                                        style={{background: selectedObjects.ids.includes(item) ? "#E4EDEC" : "#FFFFFF"}}
                                    >
                                        <span className={styles.moduleTitle}>Module {item}</span>
                                        <div className={styles.stakingStatus}>Not Staked</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    
                    <div className={styles.footer}>
                        {selectedObjects.ids.length > 0 && <div className={styles.stakingButton} onClick={() => stakeButtonClick()}>
                            {selectedObjects.isStaked ? "Unstake" : "Stake"} selected ({selectedObjects.ids.length})
                        </div>}
                    </div>
                </>
            ) : (
                <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "3em 1.5em",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <ConnectButton />
                </div>
              </>
            )}   
        </main>
    )
}

export default StakingModule;