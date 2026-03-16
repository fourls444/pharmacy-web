import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./ProfileComponents.module.css";

interface PharmacistInfoCardProps {
    userName: string;
    userId: string;
}

export default function PharmacistInfoCard({ userName, userId }: PharmacistInfoCardProps) {
    return (
        <section>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>ข้อมูลเภสัชกร</h2>
                <Link href="/member/profile/edit" className={styles.manageLink}>
                    จัดการข้อมูล <ChevronRight size={18} />
                </Link>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.imageSection}>
                    <Image
                        src="/images/member/image.png"
                        alt="Pharmacist Profile"
                        width={200}
                        height={200}
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>ชื่อ-นามสกุล</span>
                        <span className={styles.infoValue}>{userName}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>เลขใบอนุญาตประกอบวิชาชีพ</span>
                        <span className={styles.infoValue}>{userId}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>ใบประกอบวิชาชีพหมดอายุ</span>
                        <span className={styles.infoValue}>04/70</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>สถานะวันหมดอายุ</span>
                        <span className={styles.infoValue}>ยังไม่ถึงกำหนดต่ออายุ</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>สถานที่ปฏิบัติงาน</span>
                        <span className={styles.infoValue}>สภาเภสัชกรรม กระทรวงสาธารณสุข</span>
                    </div>
                </div>

                <div className={styles.statusWrapper}>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusValue}>ปกติ</span>
                        <span className={styles.statusLabel}>สถานะใบประกอบ</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
