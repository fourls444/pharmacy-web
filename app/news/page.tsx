import { getNews } from "@/lib/api";
import NewsContainer from "@/components/news/NewsContainer";
import Image from "next/image";
import styles from "./news.module.css";

export default async function NewsPage() {
    const allNews = await getNews();

    return (
        <div className={styles.pageWrapper}>
            {/* Banner Section */}
            <header className={styles.banner}>

                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <NewsContainer allNews={allNews} />
            </div>
        </div>
    );
}
