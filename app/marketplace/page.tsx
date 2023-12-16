import Header from "../_files/components/Header";
import styles from "./page.module.scss";

const Marketplace = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.pageContent}>
                <h1>Coming soon...</h1>
            </div>
        </main>
    )
}

export default Marketplace;