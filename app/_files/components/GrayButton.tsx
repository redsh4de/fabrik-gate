import styles from './styles/GrayButton.module.scss';

interface GreyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const GrayButton = ({children, onClick}: GreyButtonProps) => {
    return (
        <main className={styles.container} onClick={onClick}>
            {children}
        </main>
    )
}

export default GrayButton;