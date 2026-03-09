'use client';

import { useState } from 'react';
import { News, NewsCategory } from '@/lib/api';
import NewsCard from './NewsCard';
import FeaturedNews from './FeaturedNews';
import styles from './NewsContainer.module.css';

interface NewsContainerProps {
    allNews: News[];
}

const categories: { label: string; value: NewsCategory | 'all' }[] = [
    { label: 'ข่าวทั้งหมด', value: 'all' },
    { label: 'ข่าวประชาสัมพันธ์', value: 'news' },
    { label: 'ข่าวรับสมัครงานสภา', value: 'recruitment' },
    { label: 'ข่าวประกาศจัดซื้อจัดจ้าง', value: 'procurement' },
];

export default function NewsContainer({ allNews }: NewsContainerProps) {
    const [activeTab, setActiveTab] = useState<NewsCategory | 'all'>('all');

    // Filter only published news
    const publishedNews = allNews.filter(n => n.status === 'published');

    const filteredNews = activeTab === 'all'
        ? publishedNews
        : publishedNews.filter(n => n.category === activeTab);

    // Filter highlights for the featured section
    const highlights = publishedNews.filter(n => n.isHighlight);

    // Sort news by publishedAt or createdAt (newest first)
    const sortedNews = [...filteredNews].sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.createdAt).getTime();
        const dateB = new Date(b.publishedAt || b.createdAt).getTime();
        return dateB - dateA;
    });

    return (
        <div className={styles.wrapper}>
            {/* Featured Section */}
            {highlights.length > 0 && (
                <div className={styles.featuredSection}>
                    <FeaturedNews news={highlights} />
                </div>
            )}

            {/* Main News Section */}
            <div className={styles.mainSection}>
                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                className={`${styles.tab} ${activeTab === cat.value ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(cat.value)}
                            >
                                {cat.label}
                                {activeTab === cat.value && <div className={styles.activeLine} />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {sortedNews.length > 0 ? (
                        sortedNews.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            ยังไม่มีข่าวสารในหมวดหมู่นี้
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
