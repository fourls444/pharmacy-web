'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { News } from '@/lib/api';
import styles from './FeaturedNews.module.css';

interface FeaturedNewsProps {
    news: News[];
}

const categoryLabels: Record<string, string> = {
    news: 'ข่าวประชาสัมพันธ์',
    recruitment: 'ข่าวรับสมัครงานสภา',
    procurement: 'ข่าวประกาศจัดซื้อจัดจ้าง',
};

export default function FeaturedNews({ news }: FeaturedNewsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextNews = () => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
    };

    const prevNews = () => {
        setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
    };

    const current = news[currentIndex];

    if (!current) return null;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>เรื่องเด่น</h2>
                {news.length > 1 && (
                    <div className={styles.navigation}>
                        <button onClick={prevNews} className={styles.navBtn} aria-label="ข่าวสารก่อนหน้า" title="ข่าวสารก่อนหน้า">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextNews} className={styles.navBtn} aria-label="ข่าวสารถัดไป" title="ข่าวสารถัดไป">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.card}>
                <div className={styles.imageSection}>
                    {current.thumbnailUrl ? (
                        <Image
                            src={current.thumbnailUrl}
                            alt={current.title}
                            fill
                            className={styles.image}
                        />
                    ) : (
                        <div className={styles.placeholder}>
                            <ImageIcon size={64} strokeWidth={1} color="#9ca3af" />
                        </div>
                    )}
                </div>
                <div className={styles.contentSection}>
                    <span className={styles.badge}>
                        {categoryLabels[current.category] || current.category}
                    </span>
                    <h3 className={styles.title}>{current.title}</h3>
                    <p className={styles.content}>
                        {current.content.substring(0, 250).replace(/<[^>]*>/g, '')}...
                    </p>
                    <Link href={`/news/${current.id}`} className={styles.readMore}>
                        อ่านเพิ่มเติม
                    </Link>
                </div>
            </div>

            {news.length > 1 && (
                <div className={styles.dots}>
                    {news.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`ไปที่ข่าวที่ ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
