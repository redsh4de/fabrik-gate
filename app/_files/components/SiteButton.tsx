import styles from './styles/SiteButton.module.scss';

interface BlackBubbleProps {
    children: React.ReactNode;
    bg: string;
    fg: string;
    border?: string;
}

const BlackBubble = ({ children, bg, fg, border }: BlackBubbleProps) => {
    return (
        <main className={styles.main} style={{ backgroundColor: bg, color: fg, border}}>
            {children}
        </main>
    )
}

export default BlackBubble;