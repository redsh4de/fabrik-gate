import ConnectButton from "@/app/_files/components/ConnectButton";
import styles from "./styles/Staking.module.scss";
import { useAccount } from "wagmi";
import GrayButton from "@/app/_files/components/GrayButton";
import BlackBubble from "@/app/_files/components/SiteButton";

const StakingModule = () => {
    const { isConnected } = useAccount();
    const staked = [1159, 1160, 1161, 1162, 1163];
    const unstaked = [1, 2];

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <span>Staked Balance</span>
                <span style={{color: "#B3BDBC"}}>5 Modules</span>
            </div>
            <div className={styles.grid}>
                {
                    staked.map((item, index) => {
                        return (
                            <div className={styles.gridItem} key={`stkd${index}`}>
                                <span className={styles.moduleTitle}>Module {item}</span>
                                <div className={styles.stakingStatus}>Staking</div>
                            </div>
                        )
                    })
                }
                {
                    unstaked.map((item, index) => {
                        return (
                            <div className={`${styles.gridItem} ${styles.unstakedGridItem}`} key={`ustkd${index}`}>
                                <span className={styles.moduleTitle}>Module {item}</span>
                                <div className={styles.stakingStatus}>Not Staked</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.footer}>

            </div>
        </main>
    )
}

export default StakingModule;