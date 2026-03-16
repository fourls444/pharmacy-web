import Link from "next/link";
import styles from "./HomeSections.module.css";
import PublicOnlySection from "./PublicOnlySection";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface PublicServiceItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

const PUBLIC_SERVICES: PublicServiceItem[] = [
  {
    title: "ขอคำปรึกษาเรื่องยา",
    desc: "แนะนำการใช้ยาอย่าง\nถูกต้องโดยเภสัชกร",
    href: "/service",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/>
      </svg>
    ),
  },
  {
    title: "ร้านยาใกล้ฉัน",
    desc: "ค้นหาร้านยาและเวลาเปิด\nปิดใกล้ตำแหน่งของคุณ",
    href: "/service",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "ร้องเรียนเภสัชกร",
    desc: "แจ้งปัญหาการให้บริการ\nหรือพฤติกรรมไม่เหมาะสม",
    href: "/service",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
        <line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>
      </svg>
    ),
  },
  {
    title: "แจ้งเบาะแสร้านยา",
    desc: "รายงานร้านยาที่อาจไม่ปฏิบัติ\nตามมาตรฐาน",
    href: "/service",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

export default function PublicServiceSection() {
    return (
        <PublicOnlySection>
            <section className={styles.serviceSection}>
                <Container>
                    <SectionHeader title="บริการประชาชน" viewAllHref="/service" />
                    <div className={styles.publicGrid}>
                        {PUBLIC_SERVICES.map((svc, i) => (
                            <Link key={i} href={svc.href} className={styles.publicCard}>
                                <div className={styles.publicCardIcon}>{svc.icon}</div>
                                <h3 className={styles.publicCardTitle}>{svc.title}</h3>
                                <p className={styles.publicCardDesc}>{svc.desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </PublicOnlySection>
    );
}
