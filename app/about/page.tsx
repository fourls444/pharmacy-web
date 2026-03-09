import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>เกี่ยวกับองค์กร</h1>
            <p className="text-gray-600">เนื้อหาเกี่ยวกับองค์กรสภาเภสัชกรรม...</p>
        </div>
    );
}
