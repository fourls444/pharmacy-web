import Link from "next/link";
import styles from "./HomeSections.module.css";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface PharmacistServiceItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

const PHARMACIST_SERVICES: PharmacistServiceItem[] = [
  {
    title: "ประกาศ\nนียบัตร",
    desc: "คำขอประกาศนียบัตร\nวิชาชีพเภสัชกรรม",
    href: "/service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/>
        <path d="M7 12h10"/><path d="M7 16h6"/>
      </svg>
    ),
  },
  {
    title: "ต่อใบ\nอนุญาต",
    desc: "คำขอต่ออายุใบอนุญาตเป็น\nผู้ประกอบวิชาชีพเภสัชกรรม",
    href: "/service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>
      </svg>
    ),
  },
  {
    title: "คำขอ\nสมาชิก",
    desc: "คำขอสมัครสมาชิก\nสภาเภสัชกรรม",
    href: "/service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <circle cx="20" cy="11" r="3"/><path d="M20 8v6"/><path d="M17 11h6"/>
      </svg>
    ),
  },
  {
    title: "คำขอ\nขึ้นทะเบียน",
    desc: "คำขอขึ้นทะเบียนและรับใบ\nอนุญาตเป็นผู้ประกอบวิชาชีพ",
    href: "/service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/>
        <line x1="9" x2="15" y1="15" y2="15"/>
      </svg>
    ),
  },
];

export default function PharmacistServiceSection() {
    return (
        <section className={styles.serviceSection}>
            <Container>
                <SectionHeader title="บริการเภสัชกร" viewAllHref="/service" />
                <div className={styles.pharmaGrid}>
                    {PHARMACIST_SERVICES.map((svc, i) => (
                        <Link key={i} href={svc.href} className={styles.pharmaCard}>
                            <div className={styles.pharmaCardIcon}>{svc.icon}</div>
                            <h3 className={styles.pharmaCardTitle}>{svc.title}</h3>
                            <p className={styles.pharmaCardDesc}>{svc.desc}</p>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
