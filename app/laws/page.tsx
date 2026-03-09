import styles from "./laws.module.css";

export default function LawsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>กฎหมาย</h1>
            <p className="text-gray-600">ข้อบังคับและกฎหมายที่เกี่ยวข้องกับวิชาชีพเภสัชกรรม...</p>
        </div>
    );
}
