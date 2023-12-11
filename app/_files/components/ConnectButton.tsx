import styles from './styles/ConnectButton.module.scss';

import { ConnectKitButton } from "connectkit";

const truncateAddress = (address: `0x${string}` | undefined) => {
    return address ? address.slice(0,6) + "..." + address.slice(-4) : address;
}

const ConnectButton = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName, chain, }) => {
                return (
                    <div onClick={show} className={styles.buttonDark}>
                        {isConnected ? (ensName ? ensName : truncateAddress(address)) : "Connect Wallet"}
                    </div>
                );
            }}
        </ConnectKitButton.Custom>
    )
}

export default ConnectButton;