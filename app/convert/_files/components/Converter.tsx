import Link from 'next/link';
import styles from './styles/Converter.module.scss';
import GrayButton from '@/app/_files/components/GrayButton';
import ConnectButton from '@/app/_files/components/ConnectButton';

import useOldHTBalance from '../hooks/useOldHtBalance';
import useOldHTAllowance from '../hooks/useOldHTAllowance';
import useConverterApproveMax from '../hooks/useConverterApproveMax';

import { useAccount } from 'wagmi';

const Converter = () => {
    const { isConnected, address } = useAccount();
    const { data: oldHTBalance } = useOldHTBalance(address);
    const { isMax: isMaxAllowance } = useOldHTAllowance(address);

    const { write: approveMax } = useConverterApproveMax();


    return (
        <main className={styles.container}>
            <div className={styles.mainTitle}>
                <span>Convert Tokens</span>
            </div>
            <div className={styles.menu}>
                {isConnected ? (
                    <>
                        <div>
                            <div className={styles.title}>Old Tokens</div>
                            <div style={{
                                display: 'flex',
                                gap: '0.5em',
                            }}>
                                <div className={styles.balanceIndicator}>
                                    <span>{oldHTBalance} HT</span>
                                </div>
                                {
                                    isMaxAllowance ? (
                                        <GrayButton onClick={() => {}}>Convert Tokens</GrayButton>
                                    ) : (
                                        <GrayButton onClick={() => approveMax?.()}>Approve Converter</GrayButton>
                                    )
                                }
                            </div>
                        </div>
                        <p>
                            <span style={{
                                fontWeight: 500,
                                fontSize: '20px',
                            }}>
                                Please claim your remaining oldHT balance from
                            </span>
                            <br/>
                            <Link href="https://haus.youngworld.xyz" target="_blank" style={{
                                color: '#797F88',
                                fontWeight: 600,
                            }}>haus.youngworld.xyz</Link>
                        </p>
                    </>
                ) : (
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <ConnectButton/>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Converter;