import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./MeetingPagination.module.css";

export default function MeetingPagination() {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrowBtn}>
        <ChevronLeft size={20} />
      </button>
      <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
      <button className={styles.pageBtn}>2</button>
      <button className={styles.pageBtn}>3</button>
      <span className={styles.dots}>...</span>
      <button className={styles.pageBtn}>10</button>
      <button className={styles.arrowBtn}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
