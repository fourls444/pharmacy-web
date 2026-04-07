import styles from "./ServiceBanner.module.css";

export default function ServiceBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerOverlay}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>งานบริการ</h1>
          <p className={styles.bannerSubtitle}>
            สภาเภสัชกรรมให้บริการเพื่อประชาชนและเภสัชกร
          </p>
        </div>
      </div>
    </section>
  );
}
