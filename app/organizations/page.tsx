import styles from "./organizations.module.css";

export default function OrganizationsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>หน่วยงาน</h1>
            <p className="text-gray-600">แผนผังและข้อมูลหน่วยงานในสภาเภสัชกรรม...</p>
        </div>
    );
}
