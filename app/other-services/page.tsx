import styles from "./other-services.module.css";

export default function OtherServicesPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>บริการอื่นๆ</h1>
            <p className="text-gray-600">บริการเพิ่มเติมสำหรับสมาชิกและบุคคลทั่วไป...</p>
        </div>
    );
}
