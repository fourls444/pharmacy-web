import { getWebSettings } from "@/lib/api";
import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default async function ContactPage() {
    const settings = await getWebSettings();

    // In case the embed is just a URL, we wrap it. If it's a full tag, we use it as is.
    const renderMap = () => {
        if (!settings.googleMapsEmbed) return null;
        if (settings.googleMapsEmbed.startsWith("<iframe")) {
            return (
                <div
                    className={styles.mapWrapper}
                    dangerouslySetInnerHTML={{ __html: settings.googleMapsEmbed }}
                />
            );
        }
        return (
            <div className={styles.mapWrapper}>
                <iframe
                    src={settings.googleMapsEmbed}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        );
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>

                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <h1 className="ThaiFont">ติดต่อ</h1>
                        <p className="ThaiFont">ติดต่อสอบถาม</p>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                {/* Info Section */}
                <div className={styles.infoSection}>
                    <div className={styles.buildingImageWrapper}>
                        {/* Placeholder grey background */}
                    </div>
                    <div className={styles.textDetails}>
                        <h2 className={`${styles.siteName} ThaiFont`}>{settings.siteNameTh || "สำนักงานเลขาธิการสภาเภสัชกรรม"}</h2>
                        <p className={`${styles.address} ThaiFont`}>
                            {settings.address || "สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000"}
                        </p>

                        <div className={`${styles.contactDetails} ThaiFont`}>
                            {settings.phone && (
                                <p><strong>โทรศัพท์ :</strong> {settings.phone}</p>
                            )}
                            {settings.fax && (
                                <p><strong>โทรสาร :</strong> {settings.fax}</p>
                            )}
                            {settings.email && (
                                <p><strong>Email :</strong> {settings.email}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Contact Cards */}
                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.cardIconBox}>
                            <FaPhoneAlt className={styles.icon} />
                        </div>
                        <div className={styles.cardInfo}>
                            <h3>เบอร์โทรศัพท์</h3>
                            <p>{settings.phone || "0 2591 9992"}</p>
                        </div>
                        <FiArrowUpRight className={styles.cardArrow} size={20} />
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIconBox}>
                            <FaEnvelope className={styles.icon} />
                        </div>
                        <div className={styles.cardInfo}>
                            <h3>อีเมล</h3>
                            <p>{settings.email || "pharthai@pharmacycouncil.org"}</p>
                        </div>
                        <FiArrowUpRight className={styles.cardArrow} size={20} />
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIconBox}>
                            <SiLine className={styles.icon} />
                        </div>
                        <div className={styles.cardInfo}>
                            <h3>LINE : สภาเภสัชกรรม</h3>
                            <p>{settings.lineId || "@pharmacycouncil"}</p>
                        </div>
                        <FiArrowUpRight className={styles.cardArrow} size={20} />
                    </div>
                </div>

                {/* Map Section */}
                <div className={styles.mapSection}>
                    {renderMap()}
                </div>
            </div>
        </div>
    );
}
