"use client";

import styles from "./ProfileComponents.module.css";

export default function ProfileBanner() {
    return (
        <header className={styles.banner}>
            <div className={styles.bannerOverlay}></div>
            {/* <div className={styles.bannerContent}>
                <h1 className={`${styles.bannerTitle} ThaiFont`}>ข้อมูลเภสัชกร</h1>
                <p className={`${styles.bannerSubtitle} ThaiFont`}>
                    ตรวจสอบข้อมูลและสถานะการประกอบวิชาชีพเภสัชกรรมของคุณ
                </p>
            </div> */}
        </header>
    );
}
