import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./ProfileComponents.module.css";

export default function CreditSection() {
    return (
        <div className={styles.sectionSpacer}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>หน่วยกิตของฉัน</h2>
                <Link href="/member/education" className={styles.secondaryLink}>
                    งานการศึกษา <ChevronRight size={18} />
                </Link>
            </div>
            <div className={styles.creditsGrid}>
                <div className={styles.creditCard}>
                    <div className={styles.creditValue}>5/10</div>
                    <div className={styles.creditLabel}>หน่วยกิตประจำปี 2569</div>
                    <div className={styles.progressContainer}>
                        <div className={styles.progressOuter}>
                            <div className={styles.progressInner} style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.creditCard}>
                    <div className={styles.creditValue}>25/100</div>
                    <div className={styles.creditLabel}>รอบที่ 2 ปี 2568 - 2573</div>
                    <div className={styles.progressContainer}>
                        <div className={styles.progressOuter}>
                            <div className={styles.progressInner} style={{ width: '25%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
