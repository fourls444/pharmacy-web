import styles from "./meetings.module.css";

export default function MeetingsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>งานประชุม</h1>
            <p className="text-gray-600">ข้อมูลการประชุมวิชาการและกิจกรรมต่างๆ...</p>
        </div>
    );
}
