'use client'
import styles from './page.module.scss';
import Header from '../_files/components/Header';
import InventoryPage from './_files/pages/InventoryPage';
import StakingPage from './_files/pages/StakingPage';
import { useState, useEffect } from 'react';


const Inventory = () => {
    const [isStakingPage, setIsStakingPage] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const switchPage = () => {
        setIsStakingPage(!isStakingPage);
    }

    useEffect(() => {
        setIsReady(true);
    }, [])

    return (
        isReady && <main className={styles.main}>
            <Header/>
            <div className={styles.pageContent}>
                {isStakingPage ? <StakingPage switchPage={switchPage}/> : <InventoryPage switchPage={switchPage}/>}
            </div>
        </main>
    )
};

export default Inventory;