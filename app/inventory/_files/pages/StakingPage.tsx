import Button from '../../../_files/components/SiteButton';
import StakingModule from '../components/StakingModule';

import styles from './styles/pages.module.scss';

interface IStakingPageProps {
    switchPage: () => void;
}

const StakingPage = ({ switchPage }: IStakingPageProps) => {
    return (
        <>
            <div className={styles.leftSide} style={{justifyContent: 'space-between'}}>
                <div className={styles.stakingStats}>
                    <span>5 Staked Modules.</span>
                    <br/>
                    <span style={{color: "#B3BDBC"}}>10400 HT per Day.</span>
                </div>
                <div style={{display: 'flex', gap: '1.5em', flexDirection: 'column'}}>
                    <Button bg="#E4EDEC" fg='#000000'><b>Staking</b></Button>
                    <h1>Earn Rewards.<br/>Stake Your Modules.</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div style={{display: 'flex', gap: '0.5em'}}>
                        <Button bg="#FFFFFF" fg='#8E8E8E' border="1px solid #E0E1DA">View Marketplace</Button> 
                        <div onClick={() => switchPage()}><Button bg="#000000" fg='#FFFFFF'>View Inventory</Button></div>
                    </div>
                </div>   
            </div>
            <div className={styles.rightSide}>
                <StakingModule/>
            </div>
        </>
    )
}

export default StakingPage;