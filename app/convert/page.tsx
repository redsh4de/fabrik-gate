import styles from './page.module.scss';
import Header from '../_files/components/Header';
import Button from '../_files/components/SiteButton';

import Converter from './_files/components/Converter';

import useOldHTBalance from './_files/hooks/useOldHtBalance';

const Convert = () => {
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.pageContent}>
                <div className={styles.leftSide}>
                    <Button bg="#E4EDEC" fg='#000000'><b>Convert</b></Button>
                    <h1>Convert your tokens.<br/>From old to new.</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                    <div style={{display: 'flex', gap: '0.5em'}}>
                    <Button bg="#FFFFFF" fg='#8E8E8E' border="1px solid #E0E1DA">View Marketplace</Button> 
                        <Button bg="#000000" fg='#FFFFFF'>Stake Modules</Button>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <Converter/>
                </div>
            </div>
        </main>
    )
};

export default Convert;