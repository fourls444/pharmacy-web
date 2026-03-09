import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ยินดีต้อนรับสู่สภาเภสัชกรรม</h1>
      <p className={styles.description}>ระบบบริหารจัดการและบริการข้อมูลสำหรับเภสัชกรแห่งประเทศไทย</p>
    </div>
  );
}
