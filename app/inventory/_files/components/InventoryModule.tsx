import ConnectButton from "@/app/_files/components/ConnectButton";
import styles from "./styles/Inventory.module.scss";
import { useAccount } from "wagmi";
import GrayButton from "@/app/_files/components/GrayButton";

const InventoryModule = () => {
  const { isConnected } = useAccount();

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
                  <span>HT 3,000,000</span>
                </div>
                <GrayButton>View Marketplace</GrayButton>
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
                  <span>26 Modules</span>
                </div>
                <div className={styles.inventoryInfo}>
                  <div className={styles.titleContainer}>
                    <div className={styles.image}>
                      <img src="svg/triangle.svg" />
                    </div>
                    <span>Daily Rate</span>
                  </div>
                  <span>10400 HT / day</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <h3>Staking Stage</h3>
            <div style={{ display: "flex", gap: "1em", paddingBottom: "1em" }}>
              <div className={styles.balanceIndicator}>
                <span>40000 / 50000</span>
              </div>
              <GrayButton>Claim Reward</GrayButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75em",
              }}
            >
              <div className={styles.stakingInfo}>
                <div className={styles.titleContainer}>
                  <div className={styles.image}>
                    <img src="svg/circle.svg" />
                  </div>
                  <span>Reward System</span>
                </div>
                <span>View Here</span>
              </div>
              <div className={styles.stakingInfo}>
                <div className={styles.titleContainer}>
                  <div className={styles.image}>
                    <img src="svg/dualArrows.svg" />
                  </div>
                  <span>Claim Pending Tokens</span>
                </div>
                <span>Claim</span>
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
