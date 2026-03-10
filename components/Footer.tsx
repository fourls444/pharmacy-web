import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTiktok, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Left Column: Contact info */}
                <div className={styles.contactSection}>
                    <h1 className={styles.mainTitle}>ติดต่อสภาเภสัชกรรม</h1>
                    <div className={styles.contactInfo}>
                        <p className={styles.address}>
                            สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                        </p>

                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>โทรศัพท์ : </span>
                            <span>0 2591 9992 (คู่สายอัตโนมัติ)</span>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>โทรสาร : </span>
                            <span>0 2591 9996</span>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>Email : </span>
                            <span>pharthai@pharmacycouncil.org</span>
                        </div>

                        <div className={styles.socialChannels}>
                            <p className={styles.sectionTitle}>ช่องทางการติดต่อสภาเภสัชกรรม</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIconCircle}><FaGlobe /></div>
                                <div className={styles.socialIconCircle}><FaFacebookF /></div>
                                <div className={styles.socialIconCircle}><SiLine /></div>
                                <div className={styles.socialIconCircle}><MdEmail /></div>
                                <div className={styles.socialIconCircle}><FaTiktok /></div>
                                <div className={styles.socialIconCircle}><FaYoutube /></div>
                                <div className={styles.socialIconCircle}><FaMapMarkerAlt /></div>
                                <div className={styles.socialIconCircle}><FaPhoneAlt /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Wrapper */}
                <div className={styles.rightContent}>
                    {/* Statistics Section - Top Right */}
                    <div className={styles.statsContainer}>
                        <span>สถิติการเข้าชม </span>
                        <span className={styles.statValue}>76,065,271</span>
                        <span className={styles.statDivider}>|</span>
                        <span>ออนไลน์ </span>
                        <span className={styles.statValue}>1,402</span>
                    </div>

                    {/* Extensions Block */}
                    <div className={styles.extensionSection}>
                        <h3 className={styles.sectionTitle}>หมายเลขภายในหน่วยงานต่าง ๆ</h3>
                        <div className={styles.extensionGrid}>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 1</span>
                                <span>ฝ่ายทะเบียนฯ</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 5</span>
                                <span>ศูนย์สอบความรู้</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 2</span>
                                <span>ฝ่ายการศึกษาฯ</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 6</span>
                                <span>สำนักงานรับรองร้านยา</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 3</span>
                                <span>ฝ่ายกฎหมาย</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 7</span>
                                <span>ราชวิทยาลัยเภสัชกรรมฯ</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 4</span>
                                <span>ศูนย์การศึกษาต่อเนื่องฯ</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 0</span>
                                <span>ประชาสัมพันธ์</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Block */}
                    <div className={styles.servicesSection}>
                        <h3 className={styles.sectionTitle}>บริการอื่น ๆ</h3>
                        <div className={styles.serviceLinks}>
                            <Link href="#" className={styles.serviceLinkItem}>คำถามที่พบบ่อย</Link>
                            <Link href="#" className={styles.serviceLinkItem}>งานการศึกษา</Link>
                            <Link href="#" className={styles.serviceLinkItem}>มุมดาวน์โหลด</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.privacyText}>
                    ท่านสามารถศึกษารายละเอียดการดำเนินการตาม พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล{" "}
                    <Link href="#" className={styles.privacyLink}>
                        ได้ที่นี่
                    </Link>
                </div>
                <div className={styles.copyright}>© 2012-{currentYear}</div>
            </div>
        </footer>
    );
}

