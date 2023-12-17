import ConnectButton from "@/app/_files/components/ConnectButton";
import styles from "./styles/Inventory.module.scss";
import { useAccount } from "wagmi";
import GrayButton from "@/app/_files/components/GrayButton";
import useGetHTBalance from "../hooks/useGetHTBalance";
import useGetHTPerDay from "../hooks/useGetHTPerDay";
import useGetStakedModules from "../hooks/useGetStakedModules";
import useGetPendingTokens from "../hooks/useGetPendingTokens";

import useClaimPendingTokens from "../hooks/useClaimPendingTokens";
import Link from "next/link";

const InventoryModule = () => {
  const { isConnected, address } = useAccount();

  const { data: htBalance } = useGetHTBalance(address, true);
  const { data: htPerDay} = useGetHTPerDay(address);
  const { count: stakedModules } = useGetStakedModules(address);
  const { data: pendingTokens } = useGetPendingTokens(address, true);

  const { write: writeClaimPendingTokens } = useClaimPendingTokens(() => {})

  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.title}>Your Wallet</div>
      {isConnected ? (
        <>
          <div className={styles.sectionOne}>
            <div className={styles.element}>
              <h3>Balance</h3>
              <div style={{ display: "flex", gap: "0.5em" }}>
                <div className={styles.balanceIndicator}>
                  <span>HT {htBalance}</span>
                </div>
                <Link href="/marketplace"><GrayButton>View Marketplace</GrayButton></Link>
              </div>
            </div>
            <div className={styles.element}>
              <h3>Inventory</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75em",
                }}
              >
                <div className={styles.inventoryInfo}>
                  <div className={styles.titleContainer}>
                    <div className={styles.image}>
                      <img src="svg/upChart.svg" />
                    </div>
                    <span>Staked Balance</span>
                  </div>
                  <span>{stakedModules} Modules</span>
                </div>
                <div className={styles.inventoryInfo}>
                  <div className={styles.titleContainer}>
                    <div className={styles.image}>
                      <img src="svg/triangle.svg" />
                    </div>
                    <span>Daily Rate</span>
                  </div>
                  <span>{htPerDay} HT / day</span>
                </div>
                <div className={styles.inventoryInfo}>
                  <div className={styles.titleContainer}>
                    <div className={styles.image}>
                      <img src="svg/dualArrows.svg" alt="Pending Rewards"/>
                    </div>
                    <span>Pending Tokens</span>
                  </div>
                  <div style={{display: 'flex', gap: '1em', alignItems: 'center'}}>
                    <span>{pendingTokens} HT</span>
                    <GrayButton onClick={() => writeClaimPendingTokens?.()}>Claim</GrayButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "3em 1.5em",
            }}
          >
            <ConnectButton />
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryModule;
