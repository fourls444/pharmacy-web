import styles from "./MeetingBanner.module.css";

export default function MeetingBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerOverlay}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>งานประชุม</h1>
          <p className={styles.bannerSubtitle}>
            ติดตามทุกข่าวสารสำคัญของสภาเภสัชกรรม
          </p>
        </div>
      </div>
    </section>
  );
}
