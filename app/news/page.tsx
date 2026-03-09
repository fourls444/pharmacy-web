import { getNews } from "@/lib/api";
import NewsContainer from "@/components/news/NewsContainer";
import styles from "./news.module.css";

export default async function NewsPage() {
    const allNews = await getNews();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={`${styles.title} ThaiFont`}>ข่าวสาร</h1>
                <p className={`${styles.description} ThaiFont`}>
                    ติดตามข่าวประชาสัมพันธ์ ประกาศรับสมัครงาน และข่าวสารล่าสุดจากสภาเภสัชกรรม
                </p>
            </header>

            <NewsContainer allNews={allNews} />
        </div>
    );
}
