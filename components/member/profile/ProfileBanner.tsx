import styles from "./ProfileComponents.module.css";

export default function ProfileBanner() {
    return (
        <header className={styles.banner}>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
            </div>
        </header>
    );
}
