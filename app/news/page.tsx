import styles from "./news.module.css";

export default function NewsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ข่าวสาร</h1>
            <p className="text-gray-600">ประกาศและข่าวสารล่าสุดจากสภาเภสัชกรรม...</p>
        </div>
    );
}
