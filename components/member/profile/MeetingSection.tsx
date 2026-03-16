import { ChevronRight } from "lucide-react";
import styles from "./ProfileComponents.module.css";

export default function MeetingSection() {
    return (
        <div className={styles.sectionSpacer}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.sectionTitle}>การประชุมของฉัน</h2>
                <div className={styles.navButtons}>
                    <button className={styles.navBtn} aria-label="Previous"><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                    <button className={styles.navBtn} aria-label="Next"><ChevronRight size={18} /></button>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.meetingCard}>
                    <div>
                        <h3 className={styles.meetingTitle}>หลักสูตรการฝึกอบรมระยะสั้น ความเป็นผู้ประกอบการภายในในหน่วยงานสำหรับเภสัชกร</h3>
                        <p className={styles.meetingSubtitle}>Short Course Training Program in Intrapreneurship for Pharmacist รุ่นที่ 3 (ปี 2567)</p>
                    </div>
                    <div className={styles.meetingDate}>
                        <span>วันที่จัดประชุม :</span>
                        <span>02 พ.ค. 2569 - 13 ก.ย. 2569</span>
                    </div>
                </div>
                <div className={styles.meetingCard}>
                    <div>
                        <h3 className={styles.meetingTitle}>หลักสูตรวุฒิบัตรสาขาการบริหารเภสัชกิจ (Fellow of Pharmacy Administration)</h3>
                        <p className={styles.meetingSubtitle}>สำหรับผู้สมัครเข้าเรียน เพื่อรับวุฒิบัตร</p>
                    </div>
                    <div className={styles.meetingDate}>
                        <span>วันที่จัดประชุม :</span>
                        <span>15 ต.ค. 2569</span>
                    </div>
                </div>
            </div>
            <div className={styles.paginationDots}>
                <div className={styles.activeDot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    );
}
