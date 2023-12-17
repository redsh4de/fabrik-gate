import Link from 'next/link';
import Button from '../../../_files/components/SiteButton';
import StakingModule from '../components/StakingModule';
import useGetHTPerDay from '../hooks/useGetHTPerDay';

import styles from './styles/pages.module.scss';
import { useState } from 'react';

import { useAccount } from 'wagmi';


interface IStakingPageProps {
    switchPage: () => void;
}

const StakingPage = ({ switchPage }: IStakingPageProps) => {
    const [stakedModules, setStakedModules] = useState<number>(0);
    const [htPerDay, setHTPerDay] = useState<number>(0);

    const { isConnected } = useAccount();

    return (
        <>
            <div className={styles.leftSide} style={{justifyContent: 'space-between'}}>
                <div className={styles.stakingStats}>
                    {isConnected && <>
                        <span>{stakedModules} Staked Modules.</span>
                        <br/>
                        <span style={{color: "#B3BDBC"}}>{htPerDay} HT per Day.</span>
                    </>}
                </div>
                <div style={{display: 'flex', gap: '1.5em', flexDirection: 'column'}}>
                    <Button bg="#E4EDEC" fg='#000000'><b>Staking</b></Button>
                    <h1>Earn Rewards.<br/>Stake Your Modules.</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div style={{display: 'flex', gap: '0.5em'}}>
                        <Link href="/marketplace"><Button bg="#FFFFFF" fg='#8E8E8E' border="1px solid #E0E1DA">View Marketplace</Button></Link>
                        <div onClick={() => switchPage()}><Button bg="#000000" fg='#FFFFFF'>View Inventory</Button></div>
                    </div>
                </div>   
            </div>
            <div className={styles.rightSide}>
                <StakingModule setHTPerDay={setHTPerDay} setStakedModuleCount={setStakedModules}/>
            </div>
        </>
    )
}

export default StakingPage;