"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import styles from "./MemberBanner.module.css";

export default function MemberBanner() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <section className={`${styles.memberSection} ThaiFont`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>สถานะของฉัน</h2>
          <Link href="/member/profile" className={styles.manageLink}>
            จัดการข้อมูล <ChevronRight size={16} />
          </Link>
        </div>

        <div className={styles.statusGrid}>
          {[
            {
              main: "10/10",
              sub: "หน่วยกิตประจำปี 2569",
              meta: "รอบที่ 2 ปี 2568 - 2573",
              footer: "25/100",
            },
            {
              main: "ปกติ",
              sub: "ใบประกอบวิชาชีพหมดอายุ 04/70",
            },
            {
              main: "สำเร็จ",
              sub: "อัปเดตข้อมูลประจำปี 2569",
            },
          ].map((status, i) => (
            <div key={i} className={styles.statusCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.mainValue}>{status.main}</h3>
                <p className={styles.subLabel}>{status.sub}</p>
                {status.meta && <p className={styles.metaText}>{status.meta}</p>}
              </div>
              <div className={styles.checkCircle}>
                <Check size={24} color="white" strokeWidth={3} />
              </div>
              {status.footer && <span className={styles.footerValue}>{status.footer}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
