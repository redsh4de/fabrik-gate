'use client'
import styles from './page.module.scss';
import Header from '../_files/components/Header';
import InventoryPage from './_files/pages/InventoryPage';
import StakingPage from './_files/pages/StakingPage';
import { useState } from 'react';


const Inventory = () => {
    const [isInventoryPage, setIsInventoryPage] = useState(true);

    const switchPage = () => {
        setIsInventoryPage(!isInventoryPage);
    }

    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.pageContent}>
                {isInventoryPage ? <InventoryPage switchPage={switchPage}/> : <StakingPage switchPage={switchPage}/>}
            </div>
        </main>
    )
};

export default Inventory;