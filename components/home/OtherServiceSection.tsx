import Link from "next/link";
import styles from "./HomeSections.module.css";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface ServiceItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

const OTHER_SERVICES: ServiceItem[] = [
  {
    title: "การศึกษา",
    desc: "แหล่งข้อมูลเพื่อการเรียนรู้และพัฒนาวิชาชีพ\nตั้งแต่การอบรมต่อเนื่องไปจนถึงองค์ความรู้\nที่เป็นประโยชน์ต่อเภสัชกร",
    href: "/member/education",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: "การสมัครงาน",
    desc: "ค้นหาและติดตามประกาศรับสมัครงานสำหรับเภสัชกร\nและตำแหน่งที่เกี่ยวข้อง พร้อมรายละเอียดคุณสมบัติ\nหน้าที่และช่องทางการสมัคร",
    href: "/member/jobs",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1-2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      </svg>
    ),
  },
  {
    title: "เครื่องมือเภสัชกร",
    desc: "เครื่องมือและทรัพยากรสำหรับเภสัชกรเพื่อสนับสนุน\nการปฏิบัติงานในสถานการณ์จริงสร้างการบริการที่มี\nคุณภาพ น่าประทับใจ",
    href: "/member/tools",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 8-9-4-9 4 9 4 9-4z"/><path d="M3 12l9 4 9-4"/><path d="m3 16 9 4 9-4"/>
      </svg>
    ),
  },
  {
    title: "สินค้าสภาเภสัชกรรม",
    desc: "ศูนย์รวมสินค้าของสภาฯ ทั้งเอกสารทางวิชาการ\nของที่ระลึก และสื่อสิ่งพิมพ์พร้อมช่องทางชำระเงิน\nและการจัดส่ง",
    href: "/member/shop",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
      </svg>
    ),
  },
];

export default function OtherServiceSection() {
    return (
        <section className={styles.serviceSection}>
            <Container>
                <SectionHeader title="บริการอื่น ๆ" />
                <div className={styles.otherServiceGrid}>
                    {OTHER_SERVICES.map((svc, i) => (
                        <Link key={i} href={svc.href} className={styles.otherServiceCard}>
                            <div className={styles.otherServiceIconWrapper}>
                                <div className={styles.otherServiceCircle}>
                                    {svc.icon}
                                </div>
                            </div>
                            <div className={styles.otherServiceContent}>
                                <h3 className={styles.otherServiceTitle}>{svc.title}</h3>
                                <p className={styles.otherServiceDesc}>{svc.desc}</p>
                            </div>
                            <div className={styles.otherServiceArrow}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
