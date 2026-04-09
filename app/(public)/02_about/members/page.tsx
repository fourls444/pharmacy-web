import styles from "../subpage.module.css";

export default function MembersPage() {
    return (
        <>
            <h2 className={`${styles.contentTitle} ThaiFont`}>ข้อมูลสมาชิก</h2>
            <div className={styles.emptyPage}>
                <p>เนื้อหาส่วนนี้กำลังอยู่ระหว่างการจัดทำ</p>
            </div>
        </>
    );
}
