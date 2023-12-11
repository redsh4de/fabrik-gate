'use client'
import ConnectButton from './ConnectButton';
import styles from './styles/Header.module.scss';
import NextImage from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const truncateAddress = (address: `0x${string}` | undefined) => {
    return address ? address.slice(0,6) + "..." + address.slice(-4) : address;
}

const MenuItems = () => {
    const pathName = usePathname();
    const menuItems = [
        { path: '/inventory', label: 'Inventory' },
        { path: '/marketplace', label: 'Marketplace' },
        { path: 'https://fabrik.ms/about', label: 'About', target: '_blank' },
    ];

    return (
        <>
            {menuItems.map(item => (
                <Link key={item.path} href={item.path} target={item.target ?? ''} className={`${styles.navItem} ${pathName === item.path ? styles.navItemActive : ''}`}>{item.label}</Link>
            ))}
        </>
    )
}

const MenuButtons = () => {
    return (
        <>
            <Link href="/convert" className={styles.button}>Convert Tokens</Link>
            <ConnectButton/>
        </>
    )
}

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsMenuOpen(prevState => !prevState), []);

    const handleResize = useCallback(() => {
        const isMobileSize = window.innerWidth < 1360;
        setIsMobile(isMobileSize);
        if (!isMobileSize) setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);
    
    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <div style={{display: 'flex', gap: '1.875em', height: '100%'}}>
                    <Link style={{display: "flex"}} href="/">
                        <img src="svg/logo.svg"/>
                    </Link>
                    <div className={styles.desktopMenuItems}>
                        <MenuItems/>
                    </div>
                </div>

                <div className={styles.buttonContainer} style={{gap: "0.5em"}}>
                    <MenuButtons/>
                </div>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <img src="svg/hamburger.svg"/>
                </div>
            </div>
            {(isMobile && isMenuOpen) && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuItems}>
                        <MenuItems/>
                    </div>
                    <div className={styles.buttonContainer} style={{gap: "0.5em", display: 'flex', padding: '0'}}>
                        <MenuButtons/>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Header;