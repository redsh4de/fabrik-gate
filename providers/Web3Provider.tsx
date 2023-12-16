"use client"
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { hardhat, sepolia } from "wagmi/chains";

const chains = [mainnet];
 
const config = createConfig(
  getDefaultConfig({
    appName: "Fabrik Gate",
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID ?? "",
    chains,
  }),
);

const Web3Provider = ({ children } : {children: React.ReactNode}) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="soft">
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;