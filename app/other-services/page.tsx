'use client';
import { useState } from 'react';
import Image from "next/image";
import DocumentSearch from "@/components/other-services/DocumentSearch";
import styles from "./other-services.module.css";

const categories = [
    "งานการศึกษา",
    "งานทะเบียนและใบอนุญาต",
    "หนังสือรับรองผู้มีหน้าที่ปฏิบัติการในร้านยา",
    "แบบฟอร์มอื่น"
];

const mockDocuments = [
    "ขั้นตอนการขอรับรองสถาบัน (39.11 k)",
    "ขั้นตอนการขอความเห็นชอบหลักสูตร (41.76 k)",
    "กศภ.3 แบบขอความเห็นชอบหลักสูตรเภสัชศาสตร์ (49.50 k)",
    "คำขอรับรองปริญญา (61.50 k)",
    "ขั้นตอนการขอรับรองสถาบัน (39.11 k)",
    "ขั้นตอนการขอความเห็นชอบหลักสูตร (41.76 k)",
    "กศภ.3 แบบขอความเห็นชอบหลักสูตรเภสัชศาสตร์ (49.50 k)",
    "คำขอรับรองปริญญา (61.50 k)",
    "คู่มือฝึกปฏิบัติงาน (501.24 k)",
    "แบบบันทึกข้อมูลอาจารย์21042563.doc (55.00 k)",
    "Form_Data_PHstu21042563.xls (70.50 k)",
    "กศภ.4_แบบประเมินเพื่อเห็นชอบเภสัชศาสตร์บัณฑิต_ปรับปรุง6ตค66-Ms.Word (63.34 k)",
    "กศภ.4_แบบประเมินเพื่อเห็นชอบเภสัชศาสตร์บัณฑิต_ปรับปรุง6ตค66-PDF (879.12 k)",
    "กศภ.1_คำขอรับรองสถาบัน.doc ฉบับปรับปรุง ปี 2567 (310.50 k)",
    "กศภ.1_คำขอรับรองสถาบัน.pdf ฉบับปรับปรุง ปี 2567 (105.26 k)",
    "กศภ.2 แบบประเมินเพื่อรับรองสถาบันผลิตบัณฑิตทางเภสัชศาสตร์ Ms.Word ฉบับปรับปรุง (89.74 k)",
];

export default function OtherServicesPage() {
    const [activeCategory, setActiveCategory] = useState("งานการศึกษา");

    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <div className={styles.banner}>
                <Image 
                    src="/images/other-services/header page.png" 
                    alt="Other Services Banner" 
                    width={1920}
                    height={350}
                    quality={100}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                />
            </div>

            {/* Search Section */}
            <section className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <DocumentSearch />
                </div>
            </section>

            {/* Main Content Layout */}
            <div className={styles.container}>
                <div className={styles.contentLayout}>
                    
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2 className={`${styles.sidebarTitle} ThaiFont`}>ดาวน์โหลด</h2>
                        <ul className={styles.categoryList}>
                            {categories.map((cat, idx) => (
                                <li key={idx}>
                                    <button 
                                        className={`${styles.categoryBtn} ${activeCategory === cat ? styles.activeCategory : ''} ThaiFont`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content Info */}
                    <main className={styles.mainContent}>
                        <h1 className={`${styles.contentTitle} ThaiFont`}>{activeCategory}</h1>
                        
                        <div className={styles.docListContainer}>
                            <h3 className={`${styles.docListHeader} ThaiFont`}>รายการ</h3>
                            <ul className={styles.docList}>
                                {mockDocuments.map((doc, idx) => (
                                    <li key={idx} className={`${styles.docItem} ThaiFont`}>
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pagination (Mock) */}
                        <div className={styles.pagination}>
                            <button className={styles.pageBtn}>&lt;</button>
                            <button className={`${styles.pageBtn} ${styles.activePageBtn}`}>1</button>
                            <button className={styles.pageBtn}>&gt;</button>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}
