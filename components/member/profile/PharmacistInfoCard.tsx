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
                <Link href="/profile" className={styles.manageLink}>
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
                    {[
                        { label: "ชื่อ-นามสกุล", value: userName },
                        { label: "เลขใบอนุญาตประกอบวิชาชีพ", value: userId },
                        { label: "ใบประกอบวิชาชีพหมดอายุ", value: "04/70" },
                        { label: "สถานะวันหมดอายุ", value: "ยังไม่ถึงกำหนดต่ออายุ" },
                        { label: "สถานที่ปฏิบัติงาน", value: "สภาเภสัชกรรม กระทรวงสาธารณสุข" },
                    ].map((item, index) => (
                        <div key={index} className={styles.infoRow}>
                            <span className={styles.infoLabel}>{item.label}</span>
                            <span className={styles.infoValue}>{item.value}</span>
                        </div>
                    ))}
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
