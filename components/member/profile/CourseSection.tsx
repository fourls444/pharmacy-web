import Image from "next/image";
import { ChevronRight } from "lucide-react";
import styles from "./ProfileComponents.module.css";

export default function CourseSection() {
    return (
        <div className={styles.sectionSpacer}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.sectionTitle}>คอร์สเรียนของฉัน</h2>
                <div className={styles.navButtons}>
                    <button className={styles.navBtn} aria-label="Previous"><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
                    <button className={styles.navBtn} aria-label="Next"><ChevronRight size={18} /></button>
                </div>
            </div>
            <div className={styles.coursesGrid}>
                <div className={styles.courseCard}>
                    <div className={styles.courseThumbWrapper}>
                        <Image src="/images/home/image1.png" alt="Course" fill className={styles.courseThumb} />
                        <div className={styles.expiryBadge}>ใกล้หมดอายุ</div>
                    </div>
                    <div className={styles.courseInfo}>
                        <h3 className={styles.courseTitle}>CPAT210 การวิเคราะห์และพยากรณ์ความต้องการ และการวางแผนกำลังคนเภสัชกร</h3>
                        <div className={styles.courseMeta}>
                            <span className={styles.metaItem}>3 หน่วยกิต</span>
                            <span className={styles.metaSubRed}>หมดอายุ 20/04/2569</span>
                        </div>
                    </div>
                </div>
                <div className={styles.courseCard}>
                    <div className={styles.courseThumbWrapper}>
                        <Image src="/images/home/image4.png" alt="Course" fill className={styles.courseThumb} />
                    </div>
                    <div className={styles.courseInfo}>
                        <h3 className={styles.courseTitle}>Pharmacy Transformation: ปรับโมเดลร้านยาและระบบคลังสินค้าสู่ยุคดิจิทัล</h3>
                        <div className={styles.courseMeta}>
                            <span className={styles.metaItem}>1.5 หน่วยกิต</span>
                            <span className={styles.metaSub}>หมดอายุ 01/08/2569</span>
                        </div>
                    </div>
                </div>
                <div className={styles.courseCard}>
                    <div className={styles.courseThumbWrapper}>
                        <Image src="/images/home/image5.png" alt="Course" fill className={styles.courseThumb} />
                    </div>
                    <div className={styles.courseInfo}>
                        <h3 className={styles.courseTitle}>Clinical Practice Update: เจาะลึกแนวทางการจ่ายยาและอุบัติใหม่ประจำปี 2026</h3>
                        <div className={styles.courseMeta}>
                            <span className={styles.metaItem}>3 หน่วยกิต</span>
                            <span className={styles.metaSub}>หมดอายุ 22/11/2569</span>
                        </div>
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
