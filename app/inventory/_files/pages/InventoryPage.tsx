import Button from '../../../_files/components/SiteButton';
import InventoryModule from '../components/InventoryModule';
import Link from 'next/link';
import styles from './styles/pages.module.scss';

interface IInventoryPageProps {
    switchPage: () => void;
}

const InventoryPage = ({ switchPage }: IInventoryPageProps) => {
    return (
        <>
            <div className={styles.leftSide}>
                <Button bg="#E4EDEC" fg='#000000'><b>Inventory</b></Button>
                <h1>Discover your Gate.<br/>View your Inventory.</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <div style={{display: 'flex', gap: '0.5em'}}>
                    <Link href="/marketplace"><Button bg="#FFFFFF" fg='#8E8E8E' border="1px solid #E0E1DA">View Marketplace</Button></Link>
                    <div onClick={() => switchPage()}><Button bg="#000000" fg='#FFFFFF'>Stake Modules</Button></div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <InventoryModule/>
            </div>
        </>
    )
}

export default InventoryPage;